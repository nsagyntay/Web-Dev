// src/app/app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-list/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppComponent,          // standalone компонент → импортируем, а не декларируем
    ProductItemComponent,  // standalone компонент → импортируем
    ProductListComponent   // standalone компонент → импортируем
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
