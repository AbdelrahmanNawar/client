import { UserOrderComponent } from './components/user-order/user-order.component';
import { DisplayOrdersComponent } from './components/display-orders/display-orders.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/user-gate/login/login.component';
import { RegisterComponent } from './components/user-gate/register/register.component';
import { WizardComponent } from './components/wizard/wizard.component';
import { AuthGuard } from './guards/auth-guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'wizard', component: WizardComponent, canActivate: [AuthGuard]},
  { path: 'orders', component: DisplayOrdersComponent, canActivate: [AuthGuard]},
  { path: 'userorder', component: UserOrderComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
