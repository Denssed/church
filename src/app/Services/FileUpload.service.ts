import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  URL_Test = 'http://localhost:5000';
  URL = 'https://node-api-8ovt.onrender.com';

  constructor(private http: HttpClient) {}

  uploadFile(data: any): Observable<any> {
    return this.http.post<any>(`${this.URL}/fileUpload/upload`, data);
  }
}
