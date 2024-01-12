import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileUploadService } from 'src/app/Services/FileUpload.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  @Input() item: any | undefined;
  @Output() submitValue = new EventEmitter<{}>();
  value: string = '';
  file: File | null = null;
  formData = new FormData();

  pattern: RegExp = new RegExp('');

  constructor(private fileUpload: FileUploadService) {}

  ngOnInit(): void {
    if (this.item.value != '') this.value = this.item.value;
    if (this.item?.type === 'email')
      this.pattern = new RegExp(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      );
    if (this.item?.type === 'password')
      this.pattern = new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
    // console.log(this.pattern)
    console.log(this.item);
  }

  setValue(value: any) {
    let tempValue = value;
    const validate = this.pattern.test(value);
    // console.log(validate)

    this.submitValue.emit({ type: this.item?.type, value, validate });
    console.log({ name: this.item?.name, tempValue });
  }

  onFilechange(event: any) {
    const file = event.target.files[0] as File;
    console.log(event.target.files[0] as File);
    this.formData.append('file', file);
    this.formData.append('type', file.type);
  }

  onUpload(): void {
    if (this.formData) {
      // console.log(this.formData);
      console.log(this.formData.get('file'));
      console.log(this.formData.get('type'));
      // Store form name as "file" with file data
      this.fileUpload.uploadFile(this.formData).subscribe((res) => {
        console.log(res);
      });
    }
  }
}
