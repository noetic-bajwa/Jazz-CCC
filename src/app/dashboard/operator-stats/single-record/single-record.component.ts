import { Component, OnInit } from '@angular/core';
import { OperatorStatsDataService } from '../../Services/operator-stats-data.service';
import {Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-record',
  templateUrl: './single-record.component.html',
  styleUrls: ['./single-record.component.css']
})
export class SingleRecordComponent implements OnInit  {
  id:string;
  constructor(private dataService:OperatorStatsDataService,private router: Router,private toastr: ToastrService,private route: ActivatedRoute) {
    
   }

  data:any={};
  previousDayData:any={};
  totalBase_n:number;
  //unique_players * game_play_rate

  recordID:any;
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.dataService.getSingleRecord(this.id).subscribe(data=>{
      this.data=data;
      console.log(this.data);
      
      
     },
     err=>{
      
     })
    
  }

  onSubmit(form:NgForm){

    console.log(form.value);
    console.log(this.data.id);
    this.dataService.updateRecord(form.value,this.data.id).subscribe(data=>{
      this.toastr.success('Record Successfully Updated',);
      this.router.navigate(['operatorStats'])
      
     },
     err=>{
      
     })







  };
  
  onClickReset(){
    this.dataService.getSingleRecord(this.id).subscribe(data=>{
      this.data=data; 
      console.log(this.data);
      
      
     },
     err=>{
      
     })
  }

  

  calculateTotalGamePlayed(num1:any,num2:any){
    return (parseInt(num1) * parseFloat(num2))
  }

  }


