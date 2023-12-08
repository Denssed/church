import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Observable, map, startWith } from 'rxjs';
import { PresentationService } from 'src/app/Services/Presentation.service';
import { Presentation, button } from 'src/app/types';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-pdf-presentation',
  templateUrl: './pdf-presentation.component.html',
  styleUrl: './pdf-presentation.component.scss'
})
export class PdfPresentationComponent {

  button: button = {
    text: 'Previsualizar PDF',
    type: 'primary',
  };

  data: Presentation[] = [];
  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions: Observable<string[]> | undefined;
  id: string = '';

  constructor(private presentation: PresentationService) {}

  ngOnInit() {
    this.getData();
    console.log('data', this.data);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
  }

  async getData() {
    await this.presentation.getPresentations().subscribe((res) => {
      this.data = res.body;
      this.options = this.data.map(
        (child) => child.nameChild
      );
      // console.log(this.data);
      // console.log("options",this.options);
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    const test = this.data.filter((option) =>
      option.nameChild.toLowerCase().includes(filterValue)
    );
    if (test.length > 0) this.id = test[0].id;
    return this.options.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }

  async generatePdf() {
    console.log(this.id);
    await this.presentation.getPresentation(this.id).subscribe((res) => {
      const docDefinition = {
        content: [
          { text: 'Baptism', style: 'header' },
          { text: `${res.body.nameFather}`, style: 'subheader' },
          { text: `${res.body.phoneFather}`, style: 'subheader' },
          { text: `${res.body.nameMother}`, style: 'subheader' },
          { text: `${res.body.phoneMother}`, style: 'subheader' },
          { text: `${res.body.nameChild}`, style: 'subheader' },
          { text: `${res.body.childPhoto}`, style: 'subheader' },
          { text: `${res.body.godParent}`, style: 'subheader' },
          { text: `${res.body.minister}`, style: 'subheader' }
        ],
      };

      pdfMake.createPdf(docDefinition).open();
      console.log('pdf generated');
      return;
    });
  }

}
