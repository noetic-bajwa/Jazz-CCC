import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponent implements OnInit {

  constructor(private pageTitle:Title) { 
    this.pageTitle.setTitle('GameNow | Blacklist');
  }

  ngOnInit(): void {
  }

}
