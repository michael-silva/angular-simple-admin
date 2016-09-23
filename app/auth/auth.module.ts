import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { Authenticator }      from '../shared/authenticator.service';
import { AuthComponent }      from './auth.component';
import { authRouting } from './auth.routing';
import { LoginComponent }      from './login/login.component';
import { ForgotPassComponent }      from './forgot-pass/forgot-pass.component';
import { RecoverPassComponent }      from './recover-pass/recover-pass.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
//import { InMemoryDataService }  from '../shared/in-memory-data.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        //InMemoryWebApiModule.forRoot(InMemoryDataService), 
        authRouting],
    declarations: [
        AuthComponent,
        LoginComponent,
        ForgotPassComponent,
        RecoverPassComponent]
})
export class AuthModule { }
