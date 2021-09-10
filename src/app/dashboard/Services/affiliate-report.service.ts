import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'

let headers: HttpHeaders = new HttpHeaders();

@Injectable({
  providedIn: 'root'
})
export class AffiliateReportService {

  constructor(private http: HttpClient , private cookieService:CookieService) {
    headers = headers.set('password', this.cookieService.get('accountSession'));
    headers = headers.set('username', this.cookieService.get('userSession'));
   }
  
  getData(startDate:any,endDate:any,vendorid:any,page:any){
    let url="http://192.168.127.107:8080/AffiliateReport?fromDate="+startDate+"&toDate="+endDate+"&vendor_id="+vendorid+"&page="+page;
    return this.http.get(url,{headers});
    }


}
