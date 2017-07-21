import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Authenticator } from './shared/auth/authenticator.service';
import { DialogService } from './shared/dialog.service';
import { AuthResultModel } from './shared/auth/auth-result.model';

@Component({
    selector: 'app-navbar',
    templateUrl: './app-navbar.component.html'
})
export class AppNavbarComponent implements OnInit {
    public authModel: AuthResultModel;

    constructor(
        private authenticator: Authenticator,
        private dialogService: DialogService,
        private router: Router) { }

    ngOnInit() {
        this.authModel = this.authenticator.session;
        this.authenticator.userAuthenticated().subscribe((model) => this.authModel = model);
    }

    logOut() {
        this.dialogService.confirm("Do you really would like to exit?")
            .then(() => this.authenticator.logOut().then(() => this.router.navigate(['/auth'])));
        return false;
    }
}
