import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UnsubscribeService } from '../Services/unsubscribe.service';
import { Papa } from 'ngx-papaparse';

@Component({
  selector: 'app-unsubscribe',
  templateUrl: './unsubscribe.component.html',
  styleUrls: ['./unsubscribe.component.css']
})
export class UnsubscribeComponent implements OnInit {

  myfile:any;
  constructor(private pageTitle:Title,private dataService:UnsubscribeService,private papa: Papa) {
    this.pageTitle.setTitle('GameNow | Unsubscribe');
    
   }

  ngOnInit(): void {
  }

  
  handleFileSelect(evt) {
    if(evt.target.files[0].name.includes(".csv")){ 
    var files = evt.target.files; // FileList object
    
    var file = files[0];
    // console.log(file.name)
    // console.log(file.name.includes(".csv"))
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event: any) => {
      var csv = event.target.result; 
      console.log(csv);// Content of CSV file
      this.papa.parse(csv,{
        complete: (result) => {
            console.log('Result: ', result.data);
        }
    });
    }
  }else{
    this.myfile = '';
    alert("Only CSV Format Accepted");
    return;
  }

  }

}
