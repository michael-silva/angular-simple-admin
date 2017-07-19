import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthModel } from '../shared/auth.model';

import { Authenticator } from '../../shared/authenticator.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {
    model: AuthModel;
    errorMessage: string;

    constructor(private authenticator: Authenticator, private router: Router) {
        this.model = new AuthModel();
    }

    doLogin() {
        this.authenticator.authenticate(this.model.login, this.model.password)
            .then(() => {
                this.router.navigate([this.authenticator.redirectUrl]);
            }).catch(error => {
                this.errorMessage = error.message;
            });
    }
}
