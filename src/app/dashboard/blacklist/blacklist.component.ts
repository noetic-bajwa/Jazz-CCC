import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BlacklistService } from '../Services/blacklist.service';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {

  constructor(private pageTitle:Title,private dataService:BlacklistService) { 
    this.pageTitle.setTitle('GameNow | Blacklist');
  }

  ngOnInit(): void {
  }

}
