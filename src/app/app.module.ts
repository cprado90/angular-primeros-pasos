import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CounterModule } from './Counter/counter.module';
import { HeoesModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';

import { AppComponent } from './app.component';





@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    CounterModule,
    HeoesModule,
    DbzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
