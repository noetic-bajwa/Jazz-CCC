import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import {CookieService} from 'ngx-cookie-service';
import { Router } from '@angular/router';

declare var $:any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
   
  constructor(private permission:AuthService ,private cookieService:CookieService , private router:Router) { 
      
  }
  isNoetic=this.permission.isNoetic();
  username= atob(this.cookieService.get('userSession'));

  
  ngOnInit(): void {
   // Mobile View Toggle FUnction
    $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
   });

   //Desktop View Toggle Function
   $("#wrapper").toggleClass("toggled-2");
   $("#menu-toggle-2").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled-2");
      // $('#menu ul').hide();
   });

   //For Changing Icon on Toggle ( Mobile View )
   $(".fas1").click(function () {
      $(".fas1").toggleClass("fa-bars fa-times");
  });
  $(".fas2").toggleClass("fa-angle-double-right");
  //For Changing Icon on Toggle ( Desktop View )
  $(".fas2").click(function () {
   $(".fas2").toggleClass("fa-angle-double-right");
});   
   
   function initMenu() {
      $('#menu ul').hide();
      $('#menu ul').children('.current').parent().show();
      //$('#menu ul:first').show();
      $('#menu li a').click(
         function() {
            var checkElement = $(this).next();
            if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
               return false;
            }
            if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
               $('#menu ul:visible').slideUp('normal');
               checkElement.slideDown('normal');
               return false;
            }
         }
      );
   }
   $(document).ready(function() {
      initMenu();
   });
  }

  onClickLogout(){
   this.cookieService.set('SessionId','');
   this.cookieService.set('userSession','');
   this.cookieService.set('accountSession','');
   this.router.navigate(['/login']);

  }

}
