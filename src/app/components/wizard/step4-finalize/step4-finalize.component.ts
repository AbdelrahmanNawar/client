import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dumper5 } from 'src/app/models/dumper5';

@Component({
  selector: 'app-step4-finalize',
  templateUrl: './step4-finalize.component.html',
  styleUrls: ['./step4-finalize.component.css']
})
export class Step4FinalizeComponent implements OnInit {
  
  @Input() order: dumper5 = {
    CardNumber: "",
    expDate: new Date(2020,2),
    expectedDate: new Date(2020,2),
    productList: [],
    shipmentMethod: "",
    totalCost: 0
  };

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  submitOrder(): void {
    console.log(this.order);
    this.route.navigateByUrl("/orders");
  }

}
