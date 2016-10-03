import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
//import { InMemoryDataService }  from './shared/in-memory-data.service';

import { ROUTING }  from './app.routing';

import { AppComponent }  from './app.component';
import { AppNavbarComponent }  from './app-navbar.component';
import { HomeComponent }  from './home/home.component';
import { HelpComponent }  from './help/help.component';
import { NotFoundComponent }  from './errors/not-found/not-found.component';

import { Authenticator }  from './shared/authenticator.service';
import { DialogService }  from './shared/dialog.service';
import { ConfigService }  from './shared/config.service';
import { AuthGuard }  from './shared/auth-guard.service';

@NgModule({
  imports: [ 
    //InMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 500 }),
    BrowserModule, 
    HttpModule,
    ROUTING ],
  declarations: [
    AppComponent, 
    AppNavbarComponent,
    HomeComponent, 
    HelpComponent,
    NotFoundComponent ],
  providers: [
    ConfigService,
    DialogService, 
    Authenticator,
    AuthGuard
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
