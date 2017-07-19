import { Component, OnInit } from '@angular/core';

import { Authenticator } from './shared/authenticator.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    isAuthenticated: boolean;
    constructor(private authenticator: Authenticator) { }

    ngOnInit() {
        this.isAuthenticated = !!this.authenticator.userAuthenticated;
        this.authenticator.isAuthenticated().subscribe((isAuth) => this.isAuthenticated = isAuth);
    }
}
