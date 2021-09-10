import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';



let headers: HttpHeaders = new HttpHeaders({
  'Content-Type':  'application/json'
});

@Injectable({
  providedIn: 'root'
})
export class LtvReportDataService {
  

  constructor(private http: HttpClient,private cookieService:CookieService) {
    headers = headers.set('password', this.cookieService.get('accountSession'));
    headers = headers.set('username', this.cookieService.get('userSession'));
   }
    

  getAverageRevenue() {
    let url = "http://192.168.127.107:8080/revenue";
    return this.http.get(url,{headers});
  }

  getCSVFile() {
    let url = "http://192.168.127.107:8080/exportCSV";
    return this.http.get(url,{headers,responseType: 'blob' });
  }

  
}
