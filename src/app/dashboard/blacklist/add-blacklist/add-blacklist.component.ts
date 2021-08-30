import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UnsubscribeService } from '../../Services/unsubscribe.service';
import { Papa } from 'ngx-papaparse';
import { DOCUMENT } from '@angular/common'; 
import { Inject }  from '@angular/core';

@Component({
  selector: 'app-add-blacklist',
  templateUrl: './add-blacklist.component.html',
  styleUrls: ['./add-blacklist.component.css']
})
export class AddBlacklistComponent implements OnInit {

  
  invalidNumbers='';
  validNumbers=[];
  unsubscribeWarningMessage='';
  formatNotSupportedmsg=''
  msisdn='';
  singleMsisdnError='';
  csvDisable=false;
  singleDisable=false;

  myfile:any;
  constructor(private pageTitle:Title,private dataService:UnsubscribeService,private papa: Papa,@Inject(DOCUMENT) document) {
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
            // console.log(result.data);
            
            let regex_phone = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;
            var merged = [].concat.apply([], result.data).filter(Boolean);
            
            //Function to remove white/blank spaces and hyphen 
            var RemoveHyphen = function(x){
              return x.replace(/\s/g,'').replace("-","")  //Remove blank spaces and Hyphen(-)
            }

            var ScientificNumberToNumber = function(x){
              return Number(x).toString();
              
           }
           var HyphenRemovedArray = merged.map(RemoveHyphen);
           var ScientificNumberToNumberArray = HyphenRemovedArray.map(ScientificNumberToNumber);

          //  console.log("All Numbers "+ScientificNumberToNumberArray)

            
            var filteredValid = ScientificNumberToNumberArray.filter(returnValid);
            

            
              var filteredInvalid = ScientificNumberToNumberArray.filter(returnInvalid);
            
              // console.log(filteredInvalid);
              // console.log(filteredValid);

            this.invalidNumbers = filteredInvalid;
            this.validNumbers = filteredValid;
            

            //Checking condition if the file is Empty
            if(this.validNumbers.length === 0 && this.invalidNumbers == ''){
              this.formatNotSupportedmsg = "File Does not contain any record";
              this.unsubscribeWarningMessage = "Couldn't Proceed with this File";
            }

            //Checking condition if all numbers are Valid only
            if(this.validNumbers.length !== 0 && this.invalidNumbers == ''){
              this.formatNotSupportedmsg = "";
              this.unsubscribeWarningMessage = "";
            }

            //Checking condition if all numbers are Invalid only
            if(this.validNumbers.length === 0 && this.invalidNumbers != ''){
              this.formatNotSupportedmsg = "File contain no valid msisdn";
              this.unsubscribeWarningMessage = "Couldn't proceed";
            }

            //Checking condition if there Invalid and valid numbers both 
            if(this.validNumbers.length !== 0 && this.invalidNumbers != ''){
              this.formatNotSupportedmsg = "";
              this.unsubscribeWarningMessage = "Proceeding will only unsubscribe MSISDN's with valid format";
            }







            
            // if(this.invalidNumbers != '' ){
            //   this.unsubscribeWarningMessage = "Proceeding will only unsubscribe MSISDN's with valid format.";
              // setTimeout(() => {
              //   this.unsubscribeWarningMessage = "";
              // }, 3000); 
            // }


            
        
           
            //Funtion to Check Valid Number
            function returnValid(value) {
              if(regex_phone.exec(value)){
                return value;    
              }
            }

            //Function to check Invalid Number
            function returnInvalid(value) {
              if(!regex_phone.exec(value)){
                return value; 
              }
            }
            
        }
    });
    }
  }else{
    this.myfile = '';
    this.formatNotSupportedmsg = "Format not supported";
    setTimeout(() => {
      this.formatNotSupportedmsg = "";
    }, 9000);
    return;
  }

  

  }
  onClickUnSub(){

    let regex_phone = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;
    
    // File is empty and msisdn is invalid
    if(this.validNumbers.length === 0 && regex_phone.exec(this.msisdn) == null){
      this.unsubscribeWarningMessage = "Please write valid msisdn or attach file (.csv)";
      document.getElementById("msisdn").focus();
      setTimeout(() => {
                this.unsubscribeWarningMessage = "";
              }, 3000);
              
      
    }

    // File is not empty and msisdn is valid
    if(this.validNumbers.length !== 0 && regex_phone.exec(this.msisdn) != null){
        this.validNumbers.push(this.msisdn);
        let data = {msisdn:this.validNumbers};
        console.log(data);
        this.validNumbers = [];
        this.msisdn = '';
        this.myfile='';
        this.unsubscribeWarningMessage = '';
        this.formatNotSupportedmsg = ''; 
        
    }

    // File is not empty and msisdn is invalid
    if(this.validNumbers.length !== 0 && regex_phone.exec(this.msisdn) == null){
      let data = {msisdn:this.validNumbers}
      console.log(data);

      this.validNumbers = [];
      this.myfile='';
      this.unsubscribeWarningMessage = '';
      this.formatNotSupportedmsg = ''; 
    }

    // File is Empty and msisdn is  valid
    if(this.validNumbers.length === 0 && regex_phone.exec(this.msisdn) != null){
      this.validNumbers.push(this.msisdn);
      let data = {msisdn:this.validNumbers}
      console.log(data);
      this.msisdn='';
      this.myfile='';
      this.validNumbers=[];
      this.singleMsisdnError = '';
      this.unsubscribeWarningMessage = '';
      this.formatNotSupportedmsg = ''; 
       
    }



    // else{
    //   this.validNumbers.push(this.msisdn);
    //   console.log({msisdn:this.validNumbers})
    // }

    


  }

  onFileRemove(file){
    file.value='';
    this.myfile='';
    this.invalidNumbers='';
    this.validNumbers=[];
    this.unsubscribeWarningMessage = '';
    this.formatNotSupportedmsg = ''; 
  }

  onInputChange(){
    let regex_phone = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/;
    if(regex_phone.exec(this.msisdn) != null){
        this.singleMsisdnError = 'Valid Format';
    }
    if (regex_phone.exec(this.msisdn) == null){
      this.singleMsisdnError = 'Invalid Format'
    }
    
    if(this.msisdn == null){
      this.singleMsisdnError = '';
    }
  }
}
