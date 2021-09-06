import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

const httpOptions = {
  withCredentials: true,
  headers: new HttpHeaders({
    'Content-Type':  'application/json'  })
};

@Injectable({
  providedIn: 'root'
})
export class MSISDNLogsService {

  constructor(private http: HttpClient) { }

  recordID = new BehaviorSubject(null); ;
  
  getUserStatus(msisdn:any,startDate:any,endDate:any){
    let url="http://192.168.127.107:8080/api/msisdnlog/?msisdn="+msisdn+"&fromDate="+startDate+"&toDate="+endDate;
    return this.http.post(url,'');
    }
  
    getSmsLogs(msisdn:any,startDate:any,endDate:any){
      let url="http://192.168.127.107:8080/api/smslogs1/?msisdn="+msisdn+"&fromDate="+startDate+"&toDate="+endDate;
      return this.http.get(url);
    }

    getChargedLogs(msisdn:any,startDate:any,endDate:any){
      let url="http://192.168.127.107:8080/api/chargedlogs1/?msisdn="+msisdn+"&fromDate="+startDate+"&toDate="+endDate;
      return this.http.get(url);
    }

    getBlacklistLogs(msisdn:any,startDate:any,endDate:any){
      let url="http://192.168.127.107:8080/api/blacklistlogs1/?msisdn="+msisdn+"&fromDate="+startDate+"&toDate="+endDate;
      return this.http.get(url);
    }
  
    
}
