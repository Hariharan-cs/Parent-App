import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  apiUrl = localStorage.getItem('apiurl');

  // localStorage.setItem('apiurl', 'https://auth-api.onedpo-poc.com');

  constructor(private http: HttpClient) {}

  validateToken(post: any): Observable<any> {
    console.log("TRIGG VAL");
    return this.http.put<any>(`${this.apiUrl}/validate-token`, post);
  }

  acquireToken(): Observable<any> {
    console.log("TRIGG AQU");
    return this.http.put<any>(`${this.apiUrl}/acquire-token`, {});
  }

  adconfiguration(): Observable<any> {
    console.log("TRIGG AD CONG");
    return this.http.put<any>(`${this.apiUrl}/adconfiguration`, {});
  }

}
