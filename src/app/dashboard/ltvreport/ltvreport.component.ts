import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-ltvreport',
  templateUrl: './ltvreport.component.html',
  styleUrls: ['./ltvreport.component.css']
})
export class LTVReportComponent implements OnInit {

  constructor(private pageTitle:Title) {
    this.pageTitle.setTitle('GameNow | LTV Reports');
   }

  ngOnInit(): void {
  }

}
