import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SaleAdListComponent } from './sale-ad-list/sale-ad-list.component';
import { ErrorComponent } from './error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { SaleAdDetailComponent } from './sale-ad-detail/sale-ad-detail.component';
import { SaleAdShowComponent } from './sale-ad-show/sale-ad-show.component';
import { SaleAdEditComponent } from './sale-ad-edit/sale-ad-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SaleAdListComponent,
    ErrorComponent,
    SaleAdDetailComponent,
    SaleAdShowComponent,
    SaleAdEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
