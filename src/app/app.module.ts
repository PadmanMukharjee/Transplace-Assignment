import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { AuxilaryRouteComponent } from './auxilaryroute/auxilaryroute.component';


@NgModule({
  declarations: [
    AppComponent,
    AuxilaryRouteComponent
  ],
  imports: [
    BrowserModule,    
    RouterModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
