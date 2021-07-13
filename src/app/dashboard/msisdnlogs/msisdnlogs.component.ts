import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MSISDNLogsService } from '../Services/msisdnlogs.service';

@Component({
  selector: 'app-msisdnlogs',
  templateUrl: './msisdnlogs.component.html',
  styleUrls: ['./msisdnlogs.component.css']
})
export class MSISDNLogsComponent implements OnInit {

  constructor(private pageTitle:Title,private dataService:MSISDNLogsService) {
    this.pageTitle.setTitle('GameNow | MSISDN Logs');
   }
  
  ngOnInit(): void {
  }

}
