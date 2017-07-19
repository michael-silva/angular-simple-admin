import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Authenticator } from './shared/authenticator.service';
import { DialogService } from './shared/dialog.service';
import { User } from './users/shared/user.model';

@Component({
    selector: 'app-navbar',
    templateUrl: './app-navbar.component.html'
})
export class AppNavbarComponent implements OnInit {
    user: User;
    constructor(
        private authenticator: Authenticator,
        private dialogService: DialogService,
        private router: Router) { }

    ngOnInit() {
        this.user = this.authenticator.userAuthenticated;

        this.authenticator.getAuthenticatedUser()
            .subscribe((user) => this.user = user);
    }

    logOut() {
        this.dialogService.confirm("Do you really would like to exit?")
            .then(() => this.authenticator.logOut().then(() => this.router.navigate(['/auth'])));
        return false;
    }
}
