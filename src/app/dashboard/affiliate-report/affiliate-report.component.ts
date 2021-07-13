import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AffiliateReportService } from '../Services/affiliate-report.service';

@Component({
  selector: 'app-affiliate-report',
  templateUrl: './affiliate-report.component.html',
  styleUrls: ['./affiliate-report.component.css']
})
export class AffiliateReportComponent implements OnInit {

  constructor(private pageTitle:Title,private dataService:AffiliateReportService) { 
    this.pageTitle.setTitle('GameNow | Affiliate Report');
  }

  ngOnInit(): void {
  }

}
