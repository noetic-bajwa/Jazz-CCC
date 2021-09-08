import { Component, OnInit } from '@angular/core';
import { MSISDNLogsService } from '../Services/msisdnlogs.service';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { PageChangedEvent } from 'ngx-bootstrap/pagination';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-msisdnlogs',
  templateUrl: './msisdnlogs.component.html',
  styleUrls: ['./msisdnlogs.component.css']
})
export class MSISDNLogsComponent implements OnInit {

  msg:string = "Searched Records Will be Displayed Below";
  data:any={};
  StartingDate:any;
  EndingDate:any;
  maxDate: Date;
  currentPage:number;
  msisdn='';
  singleMsisdnError='';


  currentStatus:any;
  smsLogs:any;
  chargedLogs:any;
  blacklistLogs:any;
  UnsubLogs:any;
  subLogs:any;

  constructor(private dataService:MSISDNLogsService, private datePipe: DatePipe,private router: Router,private pageTitle:Title,@Inject(DOCUMENT) document) { 
    this.pageTitle.setTitle('GameNow | MSISDN LOGS');
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
    // if(fromDate != '' && toDate != ''){
    //   this.dataService.getData(event.page-1,this.datePipe.transform(fromDate,'yyyyMMdd'),this.datePipe.transform(toDate,'yyyyMMdd')).subscribe(data=>{
    //     this.data=data;
          
    //      },
    //      err=>{
          
    //      }) 

    // }
    
  }


  onClickCheckRecord(fromDate:any,toDate:any){
    let regex_phone = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;
    regex_phone.exec(this.msisdn) != null

    //if all input fields are empty (Error)
    if(fromDate == '' && toDate == '' && this.msisdn == ''){
      this.data='';
      this.msg = "Please Enter MSISDN and Select Date Range";
      document.getElementById("msisdn").focus();
      setTimeout(() => {
        this.msg = "Searched Records Will be Displayed Below";
      }, 3000);
      return;
   };

   //if Msisdn is Empty and Date is Not (Error)
   if(fromDate != '' && toDate != '' && this.msisdn == ''){
    this.data='';
    this.msg = "Please Enter MSISDN";
    document.getElementById("msisdn").focus();
    setTimeout(() => {
      this.msg = "Searched Records Will be Displayed Below";
    }, 3000);
    return;
 };

   //if from Date and To Date are empty and Msisdn is Invalid (Error)
   if(fromDate == '' && toDate == '' && regex_phone.exec(this.msisdn) == null){
    this.data='';
    this.msg = "Please Enter Valid MSISDN and Select Date Range";
    document.getElementById("msisdn").focus();
    setTimeout(() => {
      this.msg = "Searched Records Will be Displayed Below";
    }, 3000);
    return;
    };

    //if from Date and To Date are empty and Msisdn is valid (Error)
   if(fromDate == '' && toDate == '' && regex_phone.exec(this.msisdn) != null){
    this.data='';
    this.msg = "Please Select Date Range";
    document.getElementById("fromDate").focus();
    setTimeout(() => {
      this.msg = "Searched Records Will be Displayed Below";
    }, 3000);
    return;
    };


    //if from Date is empty and toDate and msisdn is valid (Error)
   if(fromDate == '' && toDate != '' && regex_phone.exec(this.msisdn) != null){
    this.data='';
    this.msg = "Please Select From From Date";
    document.getElementById("fromDate").focus();
    setTimeout(() => {
      this.msg = "Searched Records Will be Displayed Below";
    }, 3000);
    return;
    };

    //if to Date is empty and from Date and msisdn is empty (Error)
   if(fromDate != '' && toDate == '' && regex_phone.exec(this.msisdn) != null){
    this.data='';
    this.msg = "Please Select To Range";
    document.getElementById("toDate").focus();
    setTimeout(() => {
      this.msg = "Searched Records Will be Displayed Below";
    }, 3000);
    return;
    };

    

   //if From Date is greater than To Date then it will display error for 3 sec and exit the function
    if(this.datePipe.transform(fromDate,'ddMMyyyy') > this.datePipe.transform(toDate,'ddMMyyyy') && this.msisdn == ''){ 
      this.data='';
      this.msg = "Enter  Msisdn and Correct Date Range";
     setTimeout(() => {
       this.msg = "Searched Records Will be Displayed Below";
     }, 3000);
     this.StartingDate = '';
     this.EndingDate = '';
     return;
   };

   //if From Date is greater than To Date then it will display error for 3 sec and exit the function
   if(this.datePipe.transform(fromDate,'ddMMyyyy') > this.datePipe.transform(toDate,'ddMMyyyy') && regex_phone.exec(this.msisdn) == null){ 
    this.data='';
    this.msg = "Enter Valid Msisdn and Correct Date Range";
   setTimeout(() => {
     this.msg = "Searched Records Will be Displayed Below";
   }, 3000);
   this.StartingDate = '';
   this.EndingDate = '';
   return;
 };

 //if From Date is greater than To Date then it will display error for 3 sec and exit the function
 if(this.datePipe.transform(fromDate,'ddMMyyyy') > this.datePipe.transform(toDate,'ddMMyyyy') && regex_phone.exec(this.msisdn) != null){ 
  this.data='';
  this.msg = "Enter Correct Date Range";
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

    //Current Status
    this.dataService.getCurrentStatus(this.msisdn,this.datePipe.transform(fromDate,'yyyyddMM'),this.datePipe.transform(toDate,'yyyyddMM')).subscribe(data=>{
    this.data=data;
    this.currentStatus=(Object.keys(data))
    },
     err=>{
      
     });
     
     //SMS Logs
     this.dataService.getSmsLogs(this.msisdn,this.datePipe.transform(fromDate,'yyyyddMM'),this.datePipe.transform(toDate,'yyyyddMM')).subscribe(data=>{
      this.smsLogs=data;
      },
       err=>{
        
       }); 

       //Blacklist Logs
       this.dataService.getBlacklistLogs(this.msisdn,this.datePipe.transform(fromDate,'yyyyddMM'),this.datePipe.transform(toDate,'yyyyddMM')).subscribe(data=>{
        this.blacklistLogs=data;
         },
         err=>{
          
         });

       //Charged Logs
       this.dataService.getChargedLogs(this.msisdn,this.datePipe.transform(fromDate,'yyyyddMM'),this.datePipe.transform(toDate,'yyyyddMM')).subscribe(data=>{
        this.chargedLogs=data;  
        },
         err=>{
          
        }); 

        
         
         //Unsub Logs
         this.dataService.getUnsubLogs(this.msisdn,this.datePipe.transform(fromDate,'yyyyddMM'),this.datePipe.transform(toDate,'yyyyddMM')).subscribe(data=>{
          this.UnsubLogs=data;
           },
           err=>{
            
           });
           
           //Sub Logs
           this.dataService.getSubLogs(this.msisdn,this.datePipe.transform(fromDate,'yyyyddMM'),this.datePipe.transform(toDate,'yyyyddMM')).subscribe(data=>{
            this.subLogs=data;
             },
             err=>{
             });

    
  }


  onInputChange(){
    let regex_phone = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;
    if(regex_phone.exec(this.msisdn) != null){
        this.singleMsisdnError = 'Valid Format';

    }
    if (regex_phone.exec(this.msisdn) == null){
      this.singleMsisdnError = 'Invalid Format'
    }
    
    if(this.msisdn == null){
      this.singleMsisdnError = '';
    }
  }

  onClick1Month(){
    this.EndingDate = new Date();
    this.StartingDate = new Date(new Date().setDate(new Date().getDate() - 30))
  
  }

  onClick1Week(){
      this.EndingDate = new Date();
      this.StartingDate = new Date(new Date().setDate(new Date().getDate() - 7))
  }
}
