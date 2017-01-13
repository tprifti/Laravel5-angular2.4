import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { LaravelComponent } from './test/laravel.component'; 

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,LaravelComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }