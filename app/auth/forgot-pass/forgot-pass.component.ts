import { Component } from '@angular/core';

import { Authenticator } from '../../shared/authenticator.service';

@Component({
    selector: 'forgot-pass',
    templateUrl: 'app/auth/forgot-pass/forgot-pass.component.html'
})
export class ForgotPassComponent { 
    email: string;
    errorMessage: string;
    successMessage: string;

    constructor(private authenticator: Authenticator) { }

    requestRecover() {
        this.authenticator.requestRecoverPass(this.email)
            .then((msg) => {
                this.successMessage = msg;
                this.email = ""; 
            }).catch(error => {
                this.errorMessage = error.message;
            })
    }
}
