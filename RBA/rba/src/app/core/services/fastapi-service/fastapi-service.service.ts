import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FastapiServiceService {

  private apiUrl = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) { }

  getItems(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/items`);
  }
}
