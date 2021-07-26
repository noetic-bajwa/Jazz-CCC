import { Component, OnInit } from '@angular/core';
import { OperatorStatsDataService } from '../Services/operator-stats-data.service';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
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
  msg:string = "Searched Records Will be Displayed Below";
  data:any={};
  StartingDate:any;
  EndingDate:any;
  maxDate: Date;
  currentPage:number;
  constructor(private dataService:OperatorStatsDataService, private datePipe: DatePipe,private router: Router,private pageTitle:Title,@Inject(DOCUMENT) document) { 
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
    if(fromDate == '' && toDate == ''){
    //   this.data='';
    //   this.msg = "Please Select Date Range";
    //   document.getElementById("fromDate").focus();
    //  setTimeout(() => {
    //    this.msg = "Searched Records Will be Displayed Below";
    //  }, 3000);
    //  return;
    this.dataService.getData(0,'','').subscribe(data=>{
    this.data=data;},
    err=>{
     
    });
    return;
   };
    if(fromDate == '' && toDate != ''){ 
      this.data='';
       this.msg = "Please Select 'From' Date";
       document.getElementById("fromDate").focus();
      setTimeout(() => {
        this.msg = "Searched Records Will be Displayed Below";
      }, 3000);
      return;
    };
    if(toDate == '' && fromDate != ''){ 
      this.data='';
      this.msg = "Please Select 'To' Date";
      document.getElementById("toDate").focus();
     setTimeout(() => {
       this.msg = "Searched Records Will be Displayed Below";
     }, 3000);
     return;
   };
    if(fromDate > toDate  ){ 
      this.data='';
      this.msg = "Date Range is not Correct";
     setTimeout(() => {
       this.msg = "Searched Records Will be Displayed Below";
     }, 3000);
     this.StartingDate = '';
     this.EndingDate = '';
     return;
   };

    this.dataService.getData(0,this.datePipe.transform(fromDate,'yyyyMMdd'),this.datePipe.transform(toDate,'yyyyMMdd')).subscribe(data=>{
    this.data=data;
    
      
     },
     err=>{
      
     }) 
    
  }

  onClickReset(){
    this.StartingDate = '';
    this.EndingDate = '';
  }
}
