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
export class ReportDataService {

  constructor(private http: HttpClient) { }

  recordID = new BehaviorSubject(null); ;
  
  getData(page:any,startDate:any,endDate:any){
    let url="http://192.168.127.107:8080/api/reports/?page="+page+"&fromDate="+startDate+"&toDate="+endDate;
    return this.http.post(url,'');
    }

    
    
}
