import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { StateModule } from './state/state.module';

import { AppComponent } from './app.component';

@NgModule({
  imports:      [
    BrowserModule,
    StateModule
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
