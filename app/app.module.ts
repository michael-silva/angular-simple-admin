import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { ROUTING }  from './app.routing';

import { AppComponent }  from './app.component';
import { AppNavbarComponent }  from './app-navbar.component';
import { HomeComponent }  from './home/home.component';
import { HelpComponent }  from './help/help.component';
import { NotFoundComponent }  from './errors/not-found/not-found.component';

import { Authenticator }  from './shared/authenticator.service';
import { DialogService }  from './shared/dialog.service';
import { AuthGuard }  from './shared/auth-guard.service';

@NgModule({
  imports: [ BrowserModule, ROUTING ],
  declarations: [ 
    AppComponent, 
    AppNavbarComponent,
    HomeComponent,
    HelpComponent,
    NotFoundComponent ],
  providers: [
    DialogService, 
    Authenticator,
    AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
