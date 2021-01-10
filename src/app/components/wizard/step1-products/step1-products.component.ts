import { OrderProduct } from './../../../models/order-Product';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/models/order.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-step1-products',
  templateUrl: './step1-products.component.html',
  styleUrls: ['./step1-products.component.css']
})
export class Step1ProductsComponent implements OnInit {
  
  @Output() newItemEvent = new EventEmitter<OrderProduct>();

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
  
  productControl = new FormControl('', Validators.required);
  productsList: Array<Product> = [];

  quantity: number = 0;
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:64127/api/products")
    .subscribe((res: any) => {
      this.productsList = res;
    }, err => {
      console.log(err);
    })
  }

  addItem(): void{
    if(this.quantity !==0 && this.productControl.value){
      this.newItemEvent.emit({
        productId: this.productControl.value?.productId,
        orderId: this.order.orderId,
        quantity: this.quantity,
        product: this.productControl.value
      });
    } 
  }
}
