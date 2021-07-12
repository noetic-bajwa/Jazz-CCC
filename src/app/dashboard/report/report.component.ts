import { Component, OnInit } from '@angular/core';
import { ReportDataService } from '../Services/report-data.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { Title } from '@angular/platform-browser';

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
  currentPage:number = 0;

  constructor(private dataService:ReportDataService,private pageTitle:Title) { 
    
    this.pageTitle.setTitle('GameNow | Reports');
    this.maxDate = new Date();

  }

  ngOnInit(): void {
    // console.log("starting Date :"+this.StartingDate);
    // console.log("ending Date :"+this.EndingDate);
    // console.log(this.currentPage);
  }

  isEmpty(){
    return (Object.keys(this.data).length === 0);
  }

  pageChanged(event: PageChangedEvent): void {

    // console.log(event.page);


  }
  onClick(fromDate:any,toDate:any){
    
    // this.StartingDate = fromDate;
    // this.EndingDate = toDate;
    // console.log("From Date "+fromDate);
    // console.log("To Date "+toDate);
    // console.log("Current Page "+ this.currentPage);
    if(this.currentPage != 0){
      // console.log(this.currentPage-1);
    }

    this.dataService.getData(this.currentPage,fromDate,toDate).subscribe(data=>{
    this.data=data;
    // console.log(this.data);
    // console.log(Object.keys(this.data))
      
      
     },
     err=>{
      
     }) 
    
  }
}
