import { ShippingMethod } from './../../../enums/shipping-method';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/models/order.model';

@Component({
  selector: 'app-step4-finalize',
  templateUrl: './step4-finalize.component.html',
  styleUrls: ['./step4-finalize.component.css']
})
export class Step4FinalizeComponent implements OnInit {
  
  baseUrl ='http://localhost:64127/api/';
  @Input() order: Order = {
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
  
  @Input() shipmentMethod: ShippingMethod = ShippingMethod.AirPlane;

  constructor(private route: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  submitOrder(): void {
    console.log(this.order);
    let newOrderProducts: any = [];
    this.order.orderProducts.forEach(element => {
      newOrderProducts.push({
        ProductId: element.productId,
        Quantity: element.quantity
      });
    });

    const newOrder = {
      DelivaryDate: this.order.deliveryDate,
      ShippingId: this.order.shippingId,
      CreditCardNumber: this.order.creditCardNumber,
      CreditCardExpirationDate: this.order.creditCardExpirationDate,
      UserId: localStorage.getItem("userId"),
      OrderProducts: newOrderProducts
  }
  
    this.http.post(`${this.baseUrl}orders`,newOrder)
              .subscribe(res => {
                console.log(res);
              }, err => {
                console.log(err);
              });
    this.route.navigate(["orders"]);
  }

}
