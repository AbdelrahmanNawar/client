import { dumper5 } from './../../../models/dumper5';
import { dumper3 } from './../../../models/dumper3';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { dumper4 } from 'src/app/models/dumper4';

@Component({
  selector: 'app-step1-products',
  templateUrl: './step1-products.component.html',
  styleUrls: ['./step1-products.component.css']
})
export class Step1ProductsComponent implements OnInit {
  
  @Output() newItemEvent = new EventEmitter<dumper4>();
  @Input() order: dumper5 = {
    CardNumber: "",
    expDate: new Date(2020,2),
    expectedDate: new Date(2020,2),
    productList: [],
    shipmentMethod: "",
    totalCost: 0
  };
  
  productControl = new FormControl('', Validators.required);
  productsList: dumper3[] = [
    {name: 'AKM', price: 150},
    {name: 'P90', price: 225},
    {name: 'AWM', price: 510},
    {name: 'Pistol', price: 90},
  ];

  quantity: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void{
    if(this.quantity !==0 && this.productControl.value){
      this.newItemEvent.emit({
        name: this.productControl.value?.name,
        price: this.productControl.value?.price,
        quantity: this.quantity
      })
    } else {
      console.log("fe moshkel");
      console.log("productControl", this.productControl);
      console.log("quantity", this.quantity);  
    }
  }
}
