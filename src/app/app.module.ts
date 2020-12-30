import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user-gate/login/login.component';
import { RegisterComponent } from './user-gate/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './martial-design/angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WizardComponent } from './wizard/wizard.component';
import { Step1ProductsComponent } from './wizard/step1-products/step1-products.component';
import { Step2ShipmentComponent } from './wizard/step2-shipment/step2-shipment.component';
import { Step3PaymentComponent } from './wizard/step3-payment/step3-payment.component';
import { Step4FinalizeComponent } from './wizard/step4-finalize/step4-finalize.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    WizardComponent,
    Step1ProductsComponent,
    Step2ShipmentComponent,
    Step3PaymentComponent,
    Step4FinalizeComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
