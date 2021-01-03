import { dumper5 } from './../../models/dumper5';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { dumper4 } from 'src/app/models/dumper4';

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

  order: dumper5 = {
    CardNumber: "",
    expDate: new Date(2020,2),
    expectedDate: new Date(2020,2),
    productList: [],
    shipmentMethod: "",
    totalCost: 0
  };

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

  addItems(value: dumper4): void{
    this.order.productList.push(value);
    this.order.totalCost += (value.price * value.quantity);
  }

  addShipment(value: any): void{
    this.order.shipmentMethod = value.method;
    this.order.expectedDate = value.date;
    this.order.totalCost += value.cost;
    console.log(this.order);
  }

  addPayment(value: any): void{
    this.order.CardNumber = value.cardNum;
    this.order.expDate = value.date;
  }
}
