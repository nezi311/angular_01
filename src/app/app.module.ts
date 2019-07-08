import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { HttpModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';



@NgModule({
  declarations: [
    AppComponent
    ,ServerComponent
    , ServersComponent
  ],
  imports: [
      BrowserModule
      ,FormsModule
      //,HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, ServerComponent]
})
export class AppModule { }
