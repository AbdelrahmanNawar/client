import { ShippingViewmodel } from './../../../ViewModel/shipping-viewmodel';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ShippingInfo } from 'src/app/models/shipping-info.model';
import { ShippingMethod } from 'src/app/enums/shipping-method';

@Component({
  selector: 'app-step2-shipment',
  templateUrl: './step2-shipment.component.html',
  styleUrls: ['./step2-shipment.component.css']
})
export class Step2ShipmentComponent implements OnInit {

  @Output() addShipmentEvent = new EventEmitter<{}>();
  shippingControl = new FormControl('', Validators.required);
  dateControl = new FormControl('', Validators.required);
  shippingList: Array<ShippingInfo> = [];
  shippingDisplay: Array<ShippingViewmodel> = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:64127/api/ShippingInfo")
    .subscribe((res: any) => {
      this.shippingList = res;
      for (let i = 0; i < this.shippingList.length; i++) {
        this.shippingDisplay.push({
          key: res[i].shippingMethod,
          value: ShippingMethod[res[i].shippingMethod]
        });
      }
    }, err => {
      console.log(err);
    })
  }

  addItem(): void{
    this.addShipmentEvent.emit({
      id: this.shippingControl.value?.key,
      shipmentMethod: this.shippingControl.value?.value,
      expDate: this.dateControl.value
    });
  }
}
