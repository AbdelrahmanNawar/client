import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  Roles: any = ['Admin', 'Author', 'Reader'];
  user: User;
  constructor(private http: HttpClient, private router: Router) { 
    this.user = {
      Email: "",
      Id: "",
      PasswordHash: "",
      UserName: ""
    }
  }

  ngOnInit(): void {
  }

  register(){
    if(this.user.Email.length !== 0 
      && this.user.UserName.length !== 0 
      && this.user.PasswordHash.length > 4 )
      {
        console.log("hi", this.user);
        this.http.post("http://localhost:64127/api/User/register", this.user)
        .subscribe(response => {
          const token = (<any>response).token;
          const userId = (<any>response).userId;
          localStorage.setItem("jwt", token);
          localStorage.setItem("userId", userId);
          this.router.navigate(["wizard"]);
        }, error => {
          console.log(error);
        });
      }
  }
}
