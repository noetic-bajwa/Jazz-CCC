import { Component, OnInit } from '@angular/core';
import { BlacklistService } from '../Services/blacklist.service';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {

  msg:string = "Searched Records Will be Displayed Below";
  data:any={};
  StartingDate:any;
  EndingDate:any;
  maxDate: Date;
  currentPage:number;
  constructor(private dataService:BlacklistService, private datePipe: DatePipe,private router: Router,private pageTitle:Title,@Inject(DOCUMENT) document) { 
    this.pageTitle.setTitle('GameNow | Blacklist');
    this.maxDate = new Date();

  }

  ngOnInit(): void {
    
  }

  isEmpty(){
    return (Object.keys(this.data).length === 0);
    
  }

  pageChanged(event: PageChangedEvent,fromDate:any,toDate:any): void {
    if(fromDate == '' && toDate == ''){
      this.dataService.getData(event.page-1,'','').subscribe(data=>{
        this.data=data;
          
         },
         err=>{
          
         }) 

    };
    if(fromDate != '' && toDate != ''){
      fromDate = fromDate.split("/").reverse().join("");
      toDate = toDate.split("/").reverse().join("");
      this.dataService.getData(event.page-1,fromDate,toDate).subscribe(data=>{
        this.data=data;
          
         },
         err=>{
          
         }) 

    }
    
  }


  onClickCheckRecord(fromDate:any,toDate:any){
    fromDate = fromDate.split("/").reverse().join("");
    toDate = toDate.split("/").reverse().join("");


    //if Both 'From Date' and 'To Date' fields are empty, then it will display all Data of Operator Stats
    if(fromDate == '' && toDate == ''){
      this.data='';
      this.msg = "Please Select Date Range";
      document.getElementById("fromDate").focus();
     setTimeout(() => {
       this.msg = "Searched Records Will Be Displayed Below";
     }, 3000);
     return;
   };

   //if 'From Date' is empty then it will display error for 3 sec and exit the function
    if(fromDate == '' && toDate != ''){ 
      this.data='';
       this.msg = "Please Select 'From' Date";
       document.getElementById("fromDate").focus();
      setTimeout(() => {
        this.msg = "Searched Records Will Be Displayed Below";
      }, 3000);
      return;
    };

    //if 'To Date' is empty then it will display error for 3 sec and exit the function
    if(toDate == '' && fromDate != ''){ 
      this.data='';
      this.msg = "Please Select 'To' Date";
      document.getElementById("toDate").focus();
     setTimeout(() => {
       this.msg = "Searched Records Will Be Displayed Below";
     }, 3000);
     return;
   };

   //if From Date is greater than To Date then it will display error for 3 sec and exit the function
    if(fromDate > toDate){ 
      this.data='';
      this.msg = "Date Range Is Not Correct";
     setTimeout(() => {
       this.msg = "Searched Records Will Be Displayed Below";
     }, 3000);
     this.StartingDate = '';
     this.EndingDate = '';
     return;
   };

   //If there is error then the function would exit in the Above condition (If/else) statments
   //Only the valid input field will bypass contional statments the reach this section of Function
   // 1st Argument is 0 which means 1st page


   console.log('Help');
  //  fromDate = fromDate.replace(/\//g,'');
  //  toDate = toDate.replace(/\//g,'')
  // fromDate = fromDate.split("/").reverse().join("")
  // console.log(fromDate);
   
    this.dataService.getData(0,fromDate,toDate).subscribe(data=>{
    this.data=data;
    console.log(data);
    console.log(data['total pages'])
    
      
     },
     err=>{
      
     }) 
    
  }


  onClickReset(){
    this.StartingDate = '';
    this.EndingDate = '';
  }

  onClick1Month(){
    this.EndingDate = new Date();
    this.StartingDate = new Date(new Date().setDate(new Date().getDate() - 30))
  
  }

  onClick1Week(){
      this.EndingDate = new Date();
      this.StartingDate = new Date(new Date().setDate(new Date().getDate() - 7))
  }

  onClick_From_DatePicker(){
    if(this.StartingDate == undefined){
      this.StartingDate = new Date();
    }
    else{
      return;
    }
  }

  onClick_To_DatePicker(){
    if(this.EndingDate == undefined){
      this.EndingDate = new Date();
    }
    else{
      return;
    }
  }

}
