import { Component, OnInit } from '@angular/core';
import { dumper } from 'src/app/models/dumper';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {


  myList: Array<dumper> = [{
    name : "abdou",
    phone : 112,
    quantity : 170,
    last : "no"
  },
  {
    name : "boda",
    phone : 1112,
    quantity : 7110,
    last : "no"
  },
  {
    name : "obad",
    phone : 1211,
    quantity : 711110,
    last : "yes"
  }];

  Pending:string = "Pending";
  ID: number = 855431846;
  
  constructor() { }

  ngOnInit(): void {
  }

}
