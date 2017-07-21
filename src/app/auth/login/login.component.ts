import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { AuthModel } from '../shared/auth.model';

import { Authenticator } from '../../shared/authenticator.service';

@Component({
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent {

    loginForm: FormGroup;
    formErrors: string[];

    constructor(
        private authenticator: Authenticator,
        private router: Router,
        private fb: FormBuilder) {

        this.formErrors = [];
        this.createForm();
    }

    createForm() {
        this.loginForm = this.fb.group({
            'login': [null, Validators.required],
            'password': [null, Validators.required]
        });
    }

    showError(controlName: string) {
        const control = this.loginForm.controls[controlName];
        return control.invalid && control.touched;
    }

    showSummary() {
        return this.formErrors.length > 0;
    }

    doLogin(model: AuthModel) {
        this.formErrors = [];
        this.authenticator.authenticate(model.login, model.password)
            .then((data) => {
                debugger
                this.router.navigate([this.authenticator.redirectUrl]);
            }).catch(error => {
                this.formErrors.push(error.message);
            });
    }
}
