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
export class LtvReportDataService {

  constructor(private http: HttpClient) { }

  getAverageRevenue() {
    let url = "http://192.168.127.107:8080/getRevenue";
    return this.http.get(url);
  }

  getCSVFile() {
    let url = "http://192.168.127.107:8080/exportCSV";
    return this.http.get(url);
  }

  
}
