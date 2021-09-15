import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

let headers: HttpHeaders = new HttpHeaders();

@Injectable({
  providedIn: 'root'
})
export class DailyEngagementReportService {

  constructor(private http: HttpClient , private cookieService:CookieService) {
    headers = headers.set('password', this.cookieService.get('accountSession'));
    headers = headers.set('username', this.cookieService.get('userSession'));
   }

  recordID = new BehaviorSubject(null); ;
  
  getData(page:any,startDate:any,endDate:any){
    let url="http://192.168.127.107:8080/api/reports/?page="+page+"&fromDate="+startDate+"&toDate="+endDate;
    return this.http.post(url,{},{headers});
    }

    
    
}
