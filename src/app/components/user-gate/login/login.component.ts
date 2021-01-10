import { Router } from '@angular/router';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User;
  baseUrl ='http://localhost:64127/api/';
  constructor(private router: Router,
     private http: HttpClient) {
    this.user = {
      Email: "",
      Id: "",
      PasswordHash: "",
      UserName: ""
    }
   }

  ngOnInit(): void {
  }

  login(){
    this.http.post(`${this.baseUrl}User/login`, this.user)
    .subscribe(response => {
      const token = (<any>response).token;
      const userId = (<any>response).userId;
      localStorage.setItem("jwt", token);
      localStorage.setItem("userId", userId);
      this.router.navigate(["orders"]);
    }, error => {
      console.log(error);
    });
  }

}
