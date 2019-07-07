import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// importowanie biblioteki formsmodule
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';


// trzeba tutaj tez dodać to co zaimportowalismy czyli forms module
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
      BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
