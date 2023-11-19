import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaptismService {
  URL = 'http://localhost:5000';

  constructor(private http:HttpClient) { }


getBaptisms(): Observable<any> {
  return this.http.get<any>(`${this.URL}/baptism`)
}

postBaptisms(data: any): Observable<any> {
  return this.http.post<any>(`${this.URL}/baptism/new`, data)
}

getBaptism(id: string): Observable<any> {
  return this.http.get<any>(`${this.URL}/baptism/${id}`)
}

updateBaptism(id: string, data: any): Observable<any> {
  return this.http.put<any>(`${this.URL}/baptism/${id}`, data)
}

deleteBaptism(id: string): Observable<any> {
  return this.http.delete<any>(`${this.URL}/baptism/${id}`)
}

}
