import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { AppNavbarComponent } from './app-navbar.component';
import { HomeComponent } from './home/home.component';
import { HelpComponent } from './help/help.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';

import { SharedModule } from './shared/shared.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        SharedModule.forRoot(),
        AppRoutingModule,
    ],
    declarations: [
        AppComponent,
        AppNavbarComponent,
        HomeComponent,
        HelpComponent,
        NotFoundComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
