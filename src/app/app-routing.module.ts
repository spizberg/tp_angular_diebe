import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { SaleAdEditComponent } from './sale-ad-edit/sale-ad-edit.component';
import { SaleAdListComponent } from './sale-ad-list/sale-ad-list.component';
import { SaleAdShowComponent } from './sale-ad-show/sale-ad-show.component';
import  { LoginGuard } from './login.guard'

const routes: Routes = [
  { path: "", component:LoginComponent},
  { path: "login", component:LoginComponent},
  { path: "list", component:SaleAdListComponent, canActivate : [LoginGuard]},
  { path: "show/:id", component:SaleAdShowComponent, canActivate : [LoginGuard]},
  { path: "edit/:id", component:SaleAdEditComponent, canActivate : [LoginGuard]},
  { path: "**", component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
