import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { NewPasswordModel } from '../shared/newpass.model';
import { Authenticator } from '../../shared/authenticator.service';

@Component({
    templateUrl: './recover-pass.component.html'
})
export class RecoverPassComponent implements OnInit {
    model: NewPasswordModel;
    userName: string;
    invalidCodeMessage: string;
    errorMessage: string;


    constructor(
        private authenticator: Authenticator,
        private router: Router,
        private route: ActivatedRoute) {
        this.model = new NewPasswordModel();
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => this.model.code = params['code']);
        this.authenticator.checkRecoverPassCode(this.model.code)
            .then((name) => {
                this.userName = name;
            }).catch((error) => {
                this.invalidCodeMessage = error.message;
            });
    }

    saveNewPassword() {
        this.authenticator.changePassword(this.model)
            .then((user) => {
                this.router.navigate(['/home']);
            }).catch(error => {
                this.errorMessage = error.message;
            })
    }
}
