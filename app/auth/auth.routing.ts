import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthComponent }      from './auth.component';
import { LoginComponent }      from './login/login.component';
import { ForgotPassComponent }      from './forgot-pass/forgot-pass.component';
import { RecoverPassComponent }      from './recover-pass/recover-pass.component';

const ROUTES: Routes = [{
        path: '',
        component: AuthComponent,
        children: [{
                path: '',
                component: LoginComponent
            }, 
            {
                path: 'forgot-pass',
                component: ForgotPassComponent
            }, 
            {
                path: 'recover-pass',
                component: RecoverPassComponent
            }]
}];

export const authRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);