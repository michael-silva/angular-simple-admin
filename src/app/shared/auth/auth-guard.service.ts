import { Injectable } from '@angular/core';
import {
    CanActivate, CanLoad, Router, Route,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras
} from '@angular/router';
import { Authenticator } from './authenticator.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    private _authRoute: string = "/auth";
    private _redirectRoute: string = "";
    private _authenticated: boolean;

    constructor(private authenticator: Authenticator, private router: Router) {
        this._authenticated = this.authenticator.authenticated;
        this.authenticator.isAuthenticated()
            .subscribe(authenticated => {
                this._authenticated = authenticated;
            })
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this._authenticated) return true;

        this.redirectAuth(state.url);

        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {
        let url = `/${route.path}`;
        let isAuth = this._authenticated;

        if (!isAuth && url !== this._authRoute) {
            this.redirectAuth(url);
            return false;
        }
        else if (isAuth && url === this._authRoute) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }

    redirectAuth(url: string) {
        this._redirectRoute = url;
        this.router.navigate([this._authRoute]);
    }
}
