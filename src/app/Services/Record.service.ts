import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  URL_Test = 'http://localhost:5000';
  URL = 'https://node-api-8ovt.onrender.com';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {3
    return this.http.get<any>(`${this.URL}/user`);
  }

  postUsers(data: any): Observable<any> {
    return this.http.post<any>(`${this.URL}/user/new`, data);
  }

  getUser(id: string): Observable<any> {
    return this.http.get<any>(`${this.URL}/user/${id}`);
  }

  updateUser(id: string, data: any): Observable<any> {
    return this.http.patch<any>(`${this.URL}/user/${id}`, data);
  }

  deleteUser(id: string): Observable<any> {
    return this.http.delete<any>(`${this.URL}/user/${id}`);
  }
}
