import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Inject }  from '@angular/core';
import { DOCUMENT } from '@angular/common'; 
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:any;
  user="";
  pass="";
  emailFormatError='';
  constructor(private authservice:AuthService, private router: Router , private cookieService:CookieService, @Inject(DOCUMENT) document,private pageTitle:Title) {
    this.pageTitle.setTitle('GameNow | Login');
   }
  
  ngOnInit(): void {
  }
  onClickLogin(username:any,password:any){ 
    let regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (regex_email.exec(username) == null){
      this.error = "";
      return;
    }
    
    if(username == '' && password == ''){
      this.error = "Please Enter Username and Password";
      document.getElementById("username").focus();
      setTimeout(() => {
        this.error = "";
      }, 3000);
      return;
    };
    if(username != '' && password == ''){
      this.error = "Please Enter Password";
      document.getElementById("password").focus();
      setTimeout(() => {
        this.error = "";
      }, 3000);
      return;
    };

    if(username == '' && password != ''){
      this.error = "Please Enter Username";
      document.getElementById("username").focus();
      setTimeout(() => {
        this.error = "";
      }, 3000);
      return;
    };

    this.authservice.Login(username,password).subscribe(
        data => {
          console.log(data['Token'].account);
          this.cookieService.set('SessionId',data['Token'].account);
          this.cookieService.set('userSession',data['Token'].encryptedUsername);
          this.cookieService.set('accountSession',data['Token'].encryptedPassword);
          this.router.navigate(['']);
        },
        error => {
          this.error = "Invalid Email or Password";
          setTimeout(() => {
            this.error = "";
          }, 3000);

        }
      
    );
    
  }

  onInputChange(){
    let regex_email = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(regex_email.exec(this.user) != null){
        this.emailFormatError = 'Valid Format';
    }
    if (regex_email.exec(this.user) == null){
      this.emailFormatError = 'Invalid Format'
    }
    
    if(this.user == ''){
      this.emailFormatError = '';
    }
  }
  

  

}
