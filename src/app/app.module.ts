import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AlertComponent} from './exe-alert/exe-alert.component';


@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, AlertComponent],
  bootstrap: [AppComponent],
  entryComponents: [AlertComponent]
})
export class AppModule { }
