import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FileUploadService {
  URL = 'http://localhost:5000';

  constructor(private http: HttpClient) {}

  uploadFile(data: any): Observable<any> {
    return this.http.post<any>(`${this.URL}/fileUpload/upload`, data);
  }
}
