import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {

  constructor(private pageTitle:Title) {
    this.pageTitle.setTitle('GameNow | Unsubscribe');
   }

  ngOnInit(): void {
  }

}
