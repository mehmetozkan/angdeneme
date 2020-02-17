import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {JavaComponentLibraryModule, StockpageComponent, UserpageComponent} from 'java-component-library/java-component-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JavaComponentLibraryModule,
    UserpageComponent,
    StockpageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
