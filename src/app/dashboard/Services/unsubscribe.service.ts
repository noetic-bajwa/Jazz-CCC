import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  withCredentials: false,
  headers: new HttpHeaders({
    'Content-Type':  'application/json'  })
};

@Injectable({
  providedIn: 'root'
})
export class UnsubscribeService {

  constructor(private http: HttpClient) { }
  
  getData(page:any,startDate:any,endDate:any){

    let url="http://192.168.127.107:8080/cdate/?page="+page+"&fromDate="+startDate+"&toDate="+endDate;
    return this.http.get(url);
    }

  getStatus(){
    let url="http://192.168.127.107:8080/getresults";
    return this.http.get(url);
  }

  UnsubscribeRecord(data:any){
      let body=JSON.stringify(data);
      let url="http://192.168.127.107:8080/unsubscribe";
      return this.http.put(url,body,httpOptions);
  }
  
  getUniqueUnsubRecords(fromDate:any,toDate:any){
      let url="http://192.168.127.107:8080/getSumBlocked?fromDate="+fromDate+"&toDate="+toDate;
    return this.http.get(url);
  }

}
