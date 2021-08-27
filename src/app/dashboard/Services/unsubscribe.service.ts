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

    let url="https://gamenow.noeticworld.com/api/stats/?page="+page+"&fromDate="+startDate+"&toDate="+endDate;
    return this.http.get(url);
    }

    getSingleRecord(recordID:any){
      let url="https://gamenow.noeticworld.com/api/stats/"+recordID;
      return this.http.get(url);
      }
    

      UnsubscribeRecord(data:any){
        let body=JSON.stringify(data);
        let url="https://gamenow.noeticworld.com/api/stats/";
        return this.http.put(url,body,httpOptions);
      }
}
