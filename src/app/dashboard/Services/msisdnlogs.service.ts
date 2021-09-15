import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

let headers: HttpHeaders = new HttpHeaders();

@Injectable({
  providedIn: 'root'
})
export class MSISDNLogsService {

  constructor(private http: HttpClient , private cookieService:CookieService) {
    headers = headers.set('password', this.cookieService.get('accountSession'));
    headers = headers.set('username', this.cookieService.get('userSession'));
   }

  recordID = new BehaviorSubject(null); ;
  
  getCurrentStatus(msisdn:any,startDate:any,endDate:any){ 
    let url="http://192.168.127.107:8080/api/msisdnlog/?msisdn="+msisdn+"&fromDate="+startDate+"&toDate="+endDate;
    return this.http.get(url,{headers});
    }
  
    getSmsLogs(msisdn:any,startDate:any,endDate:any,page:any){ 
      let url="http://192.168.127.107:8080/api/smslogs1/?msisdn="+msisdn+"&fromDate="+startDate+"&toDate="+endDate+"&page="+page;
      return this.http.get(url,{headers});
    }

    getChargedLogs(msisdn:any,startDate:any,endDate:any,page:any){ 
      let url="http://192.168.127.107:8080/api/chargedlogs1/?msisdn="+msisdn+"&fromDate="+startDate+"&toDate="+endDate+"&page="+page;
      return this.http.get(url,{headers});
    }

    getBlacklistLogs(msisdn:any,startDate:any,endDate:any,page:any){ 
      let url="http://192.168.127.107:8080/api/blacklistlogs1/?msisdn="+msisdn+"&fromDate="+startDate+"&toDate="+endDate+"&page="+page;
      return this.http.get(url,{headers});
    }

    getUnsubLogs(msisdn:any,startDate:any,endDate:any,page:any){ 
      let url="http://192.168.127.107:8080/api/unsublogs1/?msisdn="+msisdn+"&fromDate="+startDate+"&toDate="+endDate+"&page="+page;
      return this.http.get(url,{headers});
    }

    getSubLogs(msisdn:any,startDate:any,endDate:any,page:any){ 
      let url="http://192.168.127.107:8080/api/sublogs1/?msisdn="+msisdn+"&fromDate="+startDate+"&toDate="+endDate+"&page="+page;
      return this.http.get(url,{headers});
    }

    
}
