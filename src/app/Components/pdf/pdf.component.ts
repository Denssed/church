import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Observable, map, startWith } from 'rxjs';
import { BaptismService } from 'src/app/Services/Baptism.service';
import { Baptism, button } from 'src/app/types';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrl: './pdf.component.scss',
})
export class PdfComponent implements OnInit {
  button: button = {
    text: 'Previsualizar PDF',
    type: 'primary',
  };

  data: Baptism[] = [];
  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;
  id: string = '';

  constructor(private baptism: BaptismService) {}

  ngOnInit() {
    this.getData();
    console.log('data', this.data);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  async getData() {
    await this.baptism.getBaptisms().subscribe((res) => {
      this.data = res.body;
      this.options = this.data.map(
        (baptism) => `${baptism.name} ${baptism.lastName}`
      );
      // console.log(this.data);
      // console.log("options",this.options);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const test = this.data.filter((option) =>
      `${option.name} ${option.lastName}`.toLowerCase().includes(filterValue)
    );
    if (test.length > 0) this.id = test[0].id;
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  async generatePdf() {
    console.log(this.id);
    await this.baptism.getBaptism(this.id).subscribe((res) => {
      const docDefinition = {
        content: [
          { text: 'Baptism', style: 'header' },
          { text: `${res.body.name}`, style: 'subheader' },
          { text: `${res.body.lastName}`, style: 'subheader' },
          { text: `${res.body.pof}`, style: 'subheader' },
          { text: `${res.body.age}`, style: 'subheader' },
        ],
      };

      pdfMake.createPdf(docDefinition).open();
      console.log('pdf generated');
      return;
    });
  }
}
