import { Router } from '@angular/router';
import { OrderStatus } from './../../enums/order-status';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DisplayOrderViewmodel } from 'src/app/ViewModel/display.orders.viewmodel';
import { SharedDataService } from 'src/app/services/shared-data-service';

@Component({
  selector: 'app-display-orders',
  templateUrl: './display-orders.component.html',
  styleUrls: ['./display-orders.component.css']
})
export class DisplayOrdersComponent implements OnInit {

  baseUrl ='http://localhost:64127/api/';
  myList: Array<DisplayOrderViewmodel> = [];

  constructor(private http: HttpClient,private router: Router, private sharedDataService: SharedDataService) { }

  ngOnInit(): void {
    this.http.get(`${this.baseUrl}orders`)
    .subscribe((res: any) => {
      this.myList = res;
      for (let i = 0; i < this.myList.length; i++) {
        this.myList[i].orderStatus = OrderStatus[res[i].orderStatus];
      }
    }, err => {
      console.log(err);
    });
  }

  goToOrder(message: any){
    this.sharedDataService.changeMessage(message.orderId);
    this.router.navigate(["userorder"]);
  }
}
