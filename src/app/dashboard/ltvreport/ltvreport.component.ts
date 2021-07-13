import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { LtvReportDataService } from '../Services/ltv-report-data.service';

@Component({
  selector: 'app-ltvreport',
  templateUrl: './ltvreport.component.html',
  styleUrls: ['./ltvreport.component.css']
})
export class LTVReportComponent implements OnInit {

  constructor(private pageTitle:Title,private dataService:LtvReportDataService) {
    this.pageTitle.setTitle('GameNow | LTV Reports');
   }

  ngOnInit(): void {
  }

}
