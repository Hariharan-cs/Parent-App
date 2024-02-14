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
    console.log("TRIGG VAL",post);
    return this.http.get<any>(`${this.apiUrl}/api/cookie/set-cookies?accesstoken=${post['accessToken']}`,{ withCredentials: true });
}

  acquireToken(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/api/cookie/get-cookies`,{ withCredentials: true })
  }

  adconfiguration(): Observable<any> {
    console.log("TRIGG AD CONG");
    return this.http.put<any>(`${this.apiUrl}/adconfiguration`, {});
  }

}
