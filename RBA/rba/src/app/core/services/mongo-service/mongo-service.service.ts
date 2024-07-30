import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MongoServiceService {

  private apiUrl = 'https://ap-south-1.aws.data.mongodb-api.com/app/application-0-krhazex/endpoint'; // Replace with your MongoDB API URL

  constructor(private http: HttpClient) { }

  getAllDocuments(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getAllData`);
  }

  makeAdmin(name: string): Observable<any> {
    const body = { "name": name };
    const res = this.http.put<any>(`${this.apiUrl}/makeAdmin`, body);
    res.subscribe((data) => {
      console.log(data);
    });
    return res;
  }

  findUser(name: string): Observable<any> {
    const body = { "name": name };
    const res = this.http.post<any>(`${this.apiUrl}/getOneData`, body);
    res.subscribe((data) => {
      console.log(data);
    });
    return res;
  }
}
