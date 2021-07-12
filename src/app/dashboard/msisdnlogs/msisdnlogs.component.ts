import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-msisdnlogs',
  templateUrl: './msisdnlogs.component.html',
  styleUrls: ['./msisdnlogs.component.css']
})
export class MSISDNLogsComponent implements OnInit {

  constructor(private pageTitle:Title) {
    this.pageTitle.setTitle('GameNow | MSISDN Logs');
   }
  
  ngOnInit(): void {
  }

}
