import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  URL_Test = 'http://localhost:5000';
  URL = 'https://node-api-8ovt.onrender.com';

  constructor(private http: HttpClient) {}

  authUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.URL}/login`, user);
  }

  setRole() {
    return JSON.parse(localStorage['role'])
  }
}
