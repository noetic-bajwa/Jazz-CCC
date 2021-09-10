import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  id = this.cookieService.get('id');

  constructor(private http: HttpClient,private cookieService:CookieService) { }
  

  Login(username:any,password:any){
    let url = "http://192.168.127.107:8080/user/login?username="+username+"&password="+password;
    return this.http.post(url,'');
    
  }

  logout(){
  this.cookieService.set('SessionId','');
  }
  
  loggedIn(){
    return(this.cookieService.get('SessionId'));   
    
  }

  isNoetic(){
    return(this.cookieService.get('SessionId') == '87B3Y229');     
  }

}
