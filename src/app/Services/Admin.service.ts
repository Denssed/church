import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  URL = 'http://localhost:5000';

  constructor(private http:HttpClient) { }


getStaffs(): Observable<any> {
  console.log("Se ejecuto")
  return this.http.get<any>(`${this.URL}/staff`)
}

postStaffs(data: any): Observable<any> {
  return this.http.post<any>(`${this.URL}/staff/new`, data)
}

getStaff(id: string): Observable<any> {
  return this.http.get<any>(`${this.URL}/staff/${id}`)
}

updateStaff(id: string, data: any): Observable<any> {
  return this.http.patch<any>(`${this.URL}/staff/${id}`, data)
}

deleteStaff(id: string): Observable<any> {
  return this.http.delete<any>(`${this.URL}/staff/${id}`)
}

}
