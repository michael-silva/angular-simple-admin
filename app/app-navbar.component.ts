import { Component, OnInit } from '@angular/core';

import { Authenticator } from './shared/authenticator.service';
import { User } from './users/shared/user.model';

@Component({
    selector: 'app-navbar',
    templateUrl: 'app/app-navbar.component.html'
})
export class AppNavbarComponent implements OnInit {
    user: User;
    constructor(private authenticator: Authenticator) { }

    ngOnInit() {
        this.user = this.authenticator.getAuthenticatedUser();
    }
}
