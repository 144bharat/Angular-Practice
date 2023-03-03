import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Comp1Component } from './comp1/comp1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConditioningComponent } from './conditioning/conditioning.component';
import { ForloopComponent } from './forloop/forloop.component';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    ConditioningComponent,
    ForloopComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
