import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'



  let headers: HttpHeaders = new HttpHeaders();

@Injectable({
  providedIn: 'root'
})

export class BlacklistService {

  constructor(private http: HttpClient , private cookieService:CookieService) { 
    headers = headers.set('password', this.cookieService.get('accountSession'));
    headers = headers.set('username', this.cookieService.get('userSession'));
  }

  getData(page: any, startDate: any, endDate: any) { 
    let url = "http://192.168.127.107:8080/blacklistcdate/?page=" + page + "&fromDate=" + startDate + "&toDate=" + endDate;
    return this.http.get(url);
  }

  getStatus() {
    let url = "http://192.168.127.107:8080/blacklisted";
    console.log("GET STATUS Called");
    return this.http.put(url, null , {headers});
  }

  UnsubscribeRecord(data: any) { 
    let body = JSON.stringify(data);
    console.log(body);
    console.log("UnsubscribeRecord Called");
    let url = "http://192.168.127.107:8080/blackList";
    return this.http.put(url, body, { responseType: 'text', headers });
  }
}
