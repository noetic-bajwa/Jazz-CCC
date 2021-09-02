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
export class UnsubscribeService {

  constructor(private http: HttpClient) { }
  
  getData(page:any,startDate:any,endDate:any){

    let url="http://192.168.127.107:8080/cdate/?page="+page+"&fromDate="+startDate+"&toDate="+endDate;
    return this.http.get(url);
    }

  getStatus(){
    let url="http://192.168.127.107:8080/getresults";
    console.log("GET STATUS Called");
    return this.http.put(url,{'ads':'dasdas'});
  }

  UnsubscribeRecord(data:any){
      let body=JSON.stringify(data);
      console.log(body);
      console.log("UnsubscribeRecord Called");
      let url="http://192.168.127.107:8080/user/unsubscribe";
      return this.http.put(url,body,{responseType: 'text'});
  }
  
  getUniqueUnsubRecords(fromDate:any,toDate:any){
      let url="http://192.168.127.107:8080/getSumUnsubscribed?fromDate="+fromDate+"&toDate="+toDate;
      return this.http.put(url,'');
  }

}
