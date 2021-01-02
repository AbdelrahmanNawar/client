import { Component, OnInit } from '@angular/core';
import { dumper2 } from 'src/app/models/dumper2';

@Component({
  selector: 'app-display-orders',
  templateUrl: './display-orders.component.html',
  styleUrls: ['./display-orders.component.css']
})
export class DisplayOrdersComponent implements OnInit {

  myList: Array<dumper2> = [{
    ID : "6565148",
    price : 250,
    status : "pending"
  },
  {
    ID : "65168435",
    price : 7000,
    status : "pending"
  },
  {
    ID : "651641",
    price : 3600,
    status : "shipping"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
