import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { UserRoutingModule } from './user/user-routing.module';
import { UserModule } from './user/user.module';
import { AppComponent } from './app.component';
import { RouterModule, ROUTES } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    UserRoutingModule,
    UserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
