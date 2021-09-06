import { Component, OnInit } from '@angular/core';
import { AffiliateReportService } from '../Services/affiliate-report.service';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-affiliate-report',
  templateUrl: './affiliate-report.component.html',
  styleUrls: ['./affiliate-report.component.css']
})
export class AffiliateReportComponent implements OnInit {
  msg:string = "Searched Records Will be Displayed Below";
  data:any={};
  StartingDate:any;
  EndingDate:any;
  maxDate: Date;
  selectedValue=0;
  currentPage:number;
  constructor(private dataService:AffiliateReportService, private datePipe: DatePipe,private router: Router,private pageTitle:Title,@Inject(DOCUMENT) document) { 
    this.pageTitle.setTitle('GameNow | Affiliate Reports');
    this.maxDate = new Date();

  }

  ngOnInit(): void {
    
  }

  isEmpty(){
    return (Object.keys(this.data).length === 0);
  }

  pageChanged(event: PageChangedEvent,fromDate:any,toDate:any): void {
    // if(fromDate == '' && toDate == ''){
    //   this.dataService.getData(event.page-1,'','').subscribe(data=>{
    //     this.data=data;
          
    //      },
    //      err=>{
          
    //      }) 

    // };

    if(fromDate != '' && toDate != ''){
      console.log("PAge Changed call hua hai")
      this.dataService.getData(this.datePipe.transform(fromDate,'yyyyMMdd'),this.datePipe.transform(toDate,'yyyyMMdd'),this.selectedValue,event.page-1).subscribe(data=>{
        this.data=data;
          
         },
         err=>{
          
         }) 

    }
    
  }


  onClickCheckRecord(fromDate:any,toDate:any){
    
    //if 'From Date' and 'To Date' and 'Affiliate Select' fields are empty, then it will display Error
          if(fromDate == '' && toDate == '' && this.selectedValue == 0){
            this.data='';
            this.msg = "Please Select Date Range and Select Affiliate";
            document.getElementById("fromDate").focus();
            setTimeout(() => {
              this.msg = "Searched Records Will be Displayed Below";
            }, 3000);
            return;
        };

   //if 'From Date' and 'To Date' are empty but 'Affiliate Select' is not Empty, then it will display error 
          if(fromDate == '' && toDate == '' && this.selectedValue != 0 ){ 
            this.data='';
            this.msg = "Please Select Date Range";
            document.getElementById("fromDate").focus();
            setTimeout(() => {
              this.msg = "Searched Records Will be Displayed Below";
            }, 3000);
            return;
          };

    //if 'From Date' and 'To Date' are not empty but 'Affiliate Select' is  Empty, then it will display error 
          if(fromDate != '' && toDate != '' && this.selectedValue == 0 ){ 
            this.data='';
            document.getElementById("affiliateSelect").focus();
            this.msg = "Please Select Affiliate";
            setTimeout(() => {
              this.msg = "Searched Records Will be Displayed Below";
            }, 3000);
            return;
          };

    //if 'From Date' is empty and 'To Date' and 'Affiliate Select'is not empty then it will display error
          if(toDate != '' && fromDate == '' && this.selectedValue != 0){ 
            this.data='';
            this.msg = "Please Select 'From' Date";
            document.getElementById("toDate").focus();
          setTimeout(() => {
            this.msg = "Searched Records Will be Displayed Below";
          }, 3000);
          return;
        };

   //if 'To Date' is empty and 'From Date' and 'Affiliate Select'is not empty then it will display error
          if(toDate == '' && fromDate != '' && this.selectedValue != 0){ 
            this.data='';
            this.msg = "Please Select 'To' Date";
            document.getElementById("toDate").focus();
          setTimeout(() => {
            this.msg = "Searched Records Will be Displayed Below";
          }, 3000);
          return;
        };

   //if From Date is greater than To Date then it will display error for 3 sec and exit the function
          if(fromDate > toDate  && this.selectedValue == 0){ 
            this.data='';
            this.msg = "Date Range is not Correct and Select Affilate";
          setTimeout(() => {
            this.msg = "Searched Records Will be Displayed Below";
          }, 3000);
          this.StartingDate = '';
          this.EndingDate = '';
          return;
        };

   //if From Date is greater than To Date then it will display error for 3 sec and exit the function
        if(fromDate > toDate  && this.selectedValue != 0){ 
          this.data='';
          this.msg = "Date Range is not Correct";
        setTimeout(() => {
          this.msg = "Searched Records Will be Displayed Below";
        }, 3000);
        this.StartingDate = '';
        this.EndingDate = '';
        return;
      };

 

   //If there is error then the function would exit in the Above condition (If/else) statments
   //Only the valid input field will bypass contional statments the reach this section of Function
   // 1st Argument is 0 which means 1st page
   
      this.dataService.getData(this.datePipe.transform(fromDate,'yyyyMMdd'),this.datePipe.transform(toDate,'yyyyMMdd'),this.selectedValue,0).subscribe(data=>{
      
        this.data=data;
      
      console.log(data['total pages'])
      
        
      },
      err=>{
        
      }) 
    
  }


  onChangeSelect(){
    if(this.data != '' || this.data != {}){
      this.data = '';
      this.currentPage=0;

    }
  }

  
}
