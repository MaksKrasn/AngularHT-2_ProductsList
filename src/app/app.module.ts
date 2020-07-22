import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductformComponent } from './components/productform/productform.component';
import{ FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
