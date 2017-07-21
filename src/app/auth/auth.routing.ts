import { NgModule }  from '@angular/core';
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
                path: 'recover-pass/:code',
                component: RecoverPassComponent
            }]
}];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class AuthRoutingModule { }
