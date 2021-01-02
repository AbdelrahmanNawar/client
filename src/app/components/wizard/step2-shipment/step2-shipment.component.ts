import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { dumper3 } from 'src/app/models/dumper3';

@Component({
  selector: 'app-step2-shipment',
  templateUrl: './step2-shipment.component.html',
  styleUrls: ['./step2-shipment.component.css']
})
export class Step2ShipmentComponent implements OnInit {
  
  shippingControl = new FormControl('', Validators.required);
  dateControl = new FormControl('', Validators.required);
  shippingList: dumper3[] = [
    {name: 'Air', price: 200},
    {name: 'Sea', price: 150},
    {name: 'Train', price: 100},
    {name: 'Truck', price: 50},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  addItem(): void{
    console.log(this.shippingControl.value);
    console.log(this.dateControl.value);
  }
}
