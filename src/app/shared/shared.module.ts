import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Import HttpClientModule from @angular/common/http
import { HttpClientModule } from '@angular/common/http';

import { Authenticator } from './auth/authenticator.service';
import { DialogService } from './dialog.service';
import { ConfigService } from './config.service';
import { DclWrapper } from './component-outlet.directive';
import { AuthGuard } from './auth/auth-guard.service';
import { AuthResultModel } from './auth/auth-result.model';
import { AuthHttpInterceptor } from './auth/auth-http.interceptor'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                Authenticator,
                DialogService,
                ConfigService,
                AuthGuard,
                DclWrapper
            ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: SharedModule) {
        if (parentModule) {
            throw new Error('SharedModule is already loaded. Import it in the AppModule only');
        }
    }
}
