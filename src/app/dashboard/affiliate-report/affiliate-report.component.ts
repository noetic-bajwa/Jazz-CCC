import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-affiliate-report',
  templateUrl: './affiliate-report.component.html',
  styleUrls: ['./affiliate-report.component.css']
})
export class AffiliateReportComponent implements OnInit {

  constructor(private pageTitle:Title) { 
    this.pageTitle.setTitle('GameNow | Affiliate Report');
  }

  ngOnInit(): void {
  }

}
