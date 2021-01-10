import { OrderProductViewModel } from './../../ViewModel/order.product.viewmodel';
import { Order } from 'src/app/models/order.model';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ShippingMethod } from 'src/app/enums/shipping-method';

@Component({
  selector: 'app-wizard',
  templateUrl: './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  order: Order = {
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

  shipmentMethod: ShippingMethod = ShippingMethod.AirPlane;
  
  constructor(private _formBuilder: FormBuilder) {
    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    }); 

    this.thirdFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    }); 

    this.fourthFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    }); 
}

  ngOnInit(): void {
    
  }

  addItems(value: any): void{
    this.order.orderProducts.push(value);
  }

  addShipment(value: any): void{
    this.order.shippingId = value.ShippingId;
    this.order.deliveryDate = value.expDate;
    this.shipmentMethod = value.shipmentMethod;
  }

  addPayment(value: any): void{
    this.order.creditCardNumber = value.cardNum;
    this.order.creditCardExpirationDate = value.date;
  }
}
