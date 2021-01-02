import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './martial-design/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/user-gate/login/login.component';
import { RegisterComponent } from './components/user-gate/register/register.component';
import { Step1ProductsComponent } from './components/wizard/step1-products/step1-products.component';
import { Step2ShipmentComponent } from './components/wizard/step2-shipment/step2-shipment.component';
import { Step3PaymentComponent } from './components/wizard/step3-payment/step3-payment.component';
import { Step4FinalizeComponent } from './components/wizard/step4-finalize/step4-finalize.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { DisplayOrdersComponent } from './components/display-orders/display-orders.component';
import { UserOrderComponent } from './components/user-order/user-order.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WizardComponent,
    Step1ProductsComponent,
    Step2ShipmentComponent,
    Step3PaymentComponent,
    Step4FinalizeComponent,
    DisplayOrdersComponent,
    UserOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatStepperModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    MatDatepickerModule,  
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
