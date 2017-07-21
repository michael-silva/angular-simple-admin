import { Component, OnInit } from '@angular/core';

import { Authenticator } from './shared/auth/authenticator.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    authenticated: boolean;
    constructor(private authenticator: Authenticator) { }

    ngOnInit() {
        this.authenticated = this.authenticator.authenticated;
        this.authenticator.isAuthenticated()
            .subscribe((authenticated) => this.authenticated = authenticated);
    }
}
