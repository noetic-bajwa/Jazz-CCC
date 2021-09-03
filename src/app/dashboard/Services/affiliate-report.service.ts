import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  withCredentials: true,
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    
    })
};

@Injectable({
  providedIn: 'root'
})
export class AffiliateReportService {

  constructor(private http: HttpClient) { }
  
  getData(startDate:any,endDate:any,vendorid:any,page:any){
    let url="http://192.168.127.107:8080/AffiliateReport?fromDate="+startDate+"&toDate="+endDate+"&vendor_id="+vendorid+"&page="+page;
    return this.http.get(url);
    }


}
