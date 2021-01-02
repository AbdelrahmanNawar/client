import { UserOrderComponent } from './components/user-order/user-order.component';
import { DisplayOrdersComponent } from './components/display-orders/display-orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/user-gate/login/login.component';
import { RegisterComponent } from './components/user-gate/register/register.component';
import { WizardComponent } from './components/wizard/wizard.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wizard', component: WizardComponent },
  { path: 'orders', component: DisplayOrdersComponent },
  { path: 'userorder', component: UserOrderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
