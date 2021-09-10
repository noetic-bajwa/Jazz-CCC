import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, CanActivate, } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authService:AuthService , private router:Router){}
  canActivate (): boolean{
    if(this.authService.loggedIn()){
      return true;
    }else{
      this.router.navigate(['login']);
      return false;
    }
  }  
  
}
