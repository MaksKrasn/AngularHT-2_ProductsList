import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { ProductComponent } from './components/product/product.component';
import { ProductformComponent } from './productform/productform.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
