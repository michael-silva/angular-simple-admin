import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
// Import HttpClientModule from @angular/common/http
import {HttpClientModule} from '@angular/common/http';

import { Authenticator }      from './auth/authenticator.service';
import { DialogService }      from './dialog.service';
import { ConfigService } from './config.service';
import { DclWrapper }      from './component-outlet.directive';
import { AuthGuard }      from './auth/auth-guard.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    providers: [
        Authenticator,
        DialogService,
        ConfigService,
        AuthGuard,
        DclWrapper
    ]
})
export class SharedModule { }
