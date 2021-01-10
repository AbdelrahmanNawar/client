import { OrderStatus } from './../../enums/order-status';
import { Order } from 'src/app/models/order.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedDataService } from 'src/app/services/shared-data-service';

@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {


  myOrder: Order = {
    creditCardExpirationDate: new Date(),
    creditCardNumber: "",
    deliveryDate: new Date(),
    orderDate: new Date(),
    orderId: 0,
    orderProducts: [],
    orderStatus: 0,
    shippingId: 0,
    totalCost: 0,
    userId: ""
  };

  orderStatus = "";
  selectedMessage: any;

  baseUrl ='http://localhost:64127/api/';
  
  constructor(private http: HttpClient, private sharedDataService: SharedDataService) { 
  }

  ngOnInit(): void {
    this.sharedDataService.currentMessage
    .subscribe((message: any) => (this.selectedMessage= message));
    this.http.get(`${this.baseUrl}orders/${this.selectedMessage}`)
    .subscribe((res: any) => {
      console.log(res);
      this.myOrder.creditCardExpirationDate = res[0].creditCardExpirationDate;
      this.myOrder.creditCardNumber = res[0].creditCardNumber;
      this.myOrder.deliveryDate = res[0].deliveryDate;
      this.myOrder.orderDate = res[0].orderDate;
      this.myOrder.orderId = res[0].orderId;
      this.myOrder.orderProducts = res[0].orderProducts;
      this.myOrder.orderStatus = res[0].orderStatus;
      this.myOrder.shippingId = res[0].shippingId;
      this.myOrder.totalCost = res[0].totalCost;
      this.myOrder.userId = res[0].userId;
      this.orderStatus = OrderStatus[this.myOrder.orderStatus].toString();
    },err=>{
      console.log(err);
    });
  }

}
