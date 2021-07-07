import { Component, OnInit } from '@angular/core';
import { ReportDataService } from '../Services/report-data.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  data:any={};
  StartingDate:any;
  EndingDate:any;
  maxDate: Date;
  currentPage:any;
  constructor(private dataService:ReportDataService) { 
    
    this.maxDate = new Date();

  }

  ngOnInit(): void {
    console.log("starting Date :"+this.StartingDate);
    console.log("ending Date :"+this.EndingDate);
    
  }

  isEmpty(){
    return (Object.keys(this.data).length === 0);
  }

  onClick(fromDate:any,toDate:any){
    this.StartingDate = fromDate;
    this.EndingDate = toDate;
    console.log(this.StartingDate);
    console.log(this.EndingDate);
    this.dataService.getData(0,fromDate,toDate).subscribe(data=>{
    this.data=data;
    console.log(this.data);
    console.log(Object.keys(this.data))
      
      
     },
     err=>{
      
     }) 
    
  }
}
