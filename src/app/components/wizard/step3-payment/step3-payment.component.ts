import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step3-payment',
  templateUrl: './step3-payment.component.html',
  styleUrls: ['./step3-payment.component.css']
})
export class Step3PaymentComponent implements OnInit {

  @Output() addPaymentEvent = new EventEmitter<{}>();
 isCardNumValid: boolean = false;
 isExpDateValid: boolean = false;
 cardNumber:string='';
 month:number=0;
 year:number=0;


  constructor() { }

  ngOnInit(): void {
  }

  verify(): void{
    if(this.cardNumber.length === 14){
      this.isCardNumValid = true;
    }
    if(this.month > 0 && this.month <= 12){
      if(this.year >= 2021 && this.year <= 2025){
       this.isExpDateValid = true; 
      }
    }
    console.log(this.cardNumber);
    console.log(this.cardNumber.length);
  }

  addItem(): void{
    if(this.isCardNumValid && this.isExpDateValid){
      this.addPaymentEvent.emit({
        cardNum: this.cardNumber,
        date: new Date(this.year, this.month)
      })
    }
  }

}
