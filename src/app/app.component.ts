import { Router } from '@angular/router';
import { Component, DoCheck, Output } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'client';

  isLoggedIn: boolean = false;

  constructor (private router: Router, private jwtHelper: JwtHelperService) {
    
  }

  ngDoCheck(): void {
    this.isUserAuthenticated();
  }

  isUserAuthenticated(){
    const token = localStorage.getItem("jwt");
    if(token && !this.jwtHelper.isTokenExpired(token)) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }

  logOut(){
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
    this.isLoggedIn = false;
    this.router.navigate(["/login"]);
  }
}
