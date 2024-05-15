import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresentationService {
  URL_Test = 'http://localhost:5000';
  URL = 'https://node-api-8ovt.onrender.com';

  constructor(private http:HttpClient) { }


getPresentations(): Observable<any> {
  return this.http.get<any>(`${this.URL}/presentation`)
}

postPresentations(data: any): Observable<any> {
  return this.http.post<any>(`${this.URL}/presentation/new`, data)
}

getPresentation(id: string): Observable<any> {
  return this.http.get<any>(`${this.URL}/presentation/${id}`)
}

updatePresentation(id: string, data: any): Observable<any> {
  return this.http.patch<any>(`${this.URL}/presentation/${id}`, data)
}

deletePresentation(id: string): Observable<any> {
  return this.http.delete<any>(`${this.URL}/presentation/${id}`)
}

}
