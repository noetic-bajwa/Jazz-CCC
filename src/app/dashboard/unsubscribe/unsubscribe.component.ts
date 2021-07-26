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

  invalidNumbers:any[];
  validNumbers:any[];

  myfile:any;
  constructor(private pageTitle:Title,private dataService:UnsubscribeService,private papa: Papa) {
    this.pageTitle.setTitle('GameNow | Unsubscribe');
    
   }

  ngOnInit(): void {
  }

  
  handleFileSelect(evt) {
    if(evt.target.files[0].name.includes("csv")){ 
    var files = evt.target.files; // FileList object
    var file = files[0];
    // console.log(file.name)
    // console.log(file.name.includes(".csv"))
    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = (event: any) => {
      var csv = event.target.result; 
      // console.log(csv);// Content of CSV file

      
      this.papa.parse(csv,{
        complete: (result) => {
            console.log(result.data);
            // var filtered = result.data[1].filter(Boolean);
            // console.log(filtered);
            let regex_phone = /^((\+92)|(92)|)-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;
            var merged = [].concat.apply([], result.data).filter(Boolean); //Removing Gaps
            console.log("Merged  "+merged);
            // let filtered = regex_phone.exec(merged);
            // console.log(filtered);
            var filteredValid = merged.filter(returnValid);
            var filteredInvalid = merged.filter(returnInvalid);

            this.validNumbers = filteredValid;
            console.log("Filtered Valid "+filteredValid);
            console.log("Filtered Invalid "+filteredInvalid);
            
            //  var inValidNumbers= [];
            function returnValid(value) {
              if(regex_phone.exec(value)){
                return value.replace("-","");
                 
              }
            }

            function returnInvalid(value) {
              if(!regex_phone.exec(value)){
                return value.replace("-","");
                 
              }
            }
            
            
            // console.log(regex_phone.exec(result.data));
        }
    });
    }
  }else{
    this.myfile = '';
    alert("Only CSV Format Accepted");
    return;
  }

  


  }
  onClickUpload(){
    alert(this.validNumbers)
  }

}
