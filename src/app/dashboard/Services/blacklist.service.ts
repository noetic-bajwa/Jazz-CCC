import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  withCredentials: true,
  headers: new HttpHeaders({
    'Content-Type': 'application/json',

  })
};

@Injectable({
  providedIn: 'root'
})
export class BlacklistService {

  constructor(private http: HttpClient) { }

  getData(page: any, startDate: any, endDate: any) {
    let url = "http://192.168.127.107:8080/blacklistcdate/?page=" + page + "&fromDate=" + startDate + "&toDate=" + endDate;
    return this.http.get(url);
  }

  getStatus() {
    let url = "http://192.168.127.107:8080/blacklisted";
    console.log("GET STATUS Called");
    return this.http.put(url, null);
  }

  UnsubscribeRecord(data: any) {
    let body = JSON.stringify(data);
    console.log(body);
    console.log("UnsubscribeRecord Called");
    let url = "http://192.168.127.107:8080/blackList";
    return this.http.put(url, body, { responseType: 'text' });
  }
}
