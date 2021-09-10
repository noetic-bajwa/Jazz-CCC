import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LtvReportDataService } from '../Services/ltv-report-data.service';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-ltvreport',
  templateUrl: './ltvreport.component.html',
  styleUrls: ['./ltvreport.component.css']
})
export class LTVReportComponent implements OnInit {
  averageRevenue:any;
  constructor(private pageTitle:Title,private dataService:LtvReportDataService) {
    this.pageTitle.setTitle('GameNow | LTV Reports');
   }

  ngOnInit(): void {
    this.dataService.getAverageRevenue().subscribe(data=>{
      this.averageRevenue = data;
    },
    err=>{

    });
    
  }
  onClickDownload(){
    this.dataService.getCSVFile().subscribe(
      data => {console.log(data)
        FileSaver.saveAs(data, `LTVreport.csv`)
      },
      
      error => {}
    )
  }

}
