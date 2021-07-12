import { Component, OnInit } from '@angular/core';
import { OperatorStatsDataService } from '../Services/operator-stats-data.service';
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-operator-stats',
  templateUrl: './operator-stats.component.html',
  styleUrls: ['./operator-stats.component.css']
})
export class OperatorStatsComponent implements OnInit {
  msg:string = "Searched Record Will be Displayed Below";
  data:any={};
  StartingDate:any;
  EndingDate:any;
  maxDate: Date;
  currentPage:number;
  constructor(private dataService:OperatorStatsDataService, private datePipe: DatePipe,private router: Router,private pageTitle:Title) { 
    this.pageTitle.setTitle('GameNow | Operator Stats');
    this.maxDate = new Date();

  }

  ngOnInit(): void {
  }

  isEmpty(){
    return (Object.keys(this.data).length === 0);
  }

  pageChanged(event: PageChangedEvent,fromDate:any,toDate:any): void {
    this.dataService.getData(event.page-1,this.datePipe.transform(fromDate,'yyyyMMdd'),this.datePipe.transform(toDate,'yyyyMMdd')).subscribe(data=>{
    this.data=data;
      
     },
     err=>{
      
     }) 


  }
  onClickCheckRecord(fromDate:any,toDate:any){
    if(fromDate == '' ){ 
       this.msg = "Please Select the Date Range";
      setTimeout(() => {
        this.msg = "Searched Record Will be Displayed Below";
      }, 3000);
      return;
    };
    this.dataService.getData(0,this.datePipe.transform(fromDate,'yyyyMMdd'),this.datePipe.transform(toDate,'yyyyMMdd')).subscribe(data=>{
    this.data=data;
      
     },
     err=>{
      
     }) 
    
  }
}
