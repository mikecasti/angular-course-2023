import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperadoresComponent } from './operadores/operadores.component';
import { Test1Component } from './test1/test1.component';
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    OperadoresComponent,
    Test1Component,
    PersonComponent
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
