import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth.routing';
import { LoginComponent } from './login/login.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { RecoverPassComponent } from './recover-pass/recover-pass.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AuthRoutingModule
    ],
    declarations: [
        AuthComponent,
        LoginComponent,
        ForgotPassComponent,
        RecoverPassComponent
    ]
})
export class AuthModule { }
