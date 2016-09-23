import { Injectable }       from '@angular/core';
import {
    CanActivate, CanLoad, Router, Route,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    CanActivateChild,
    NavigationExtras
}                           from '@angular/router';
import { Authenticator }      from './authenticator.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
    private authRoute: string = "/auth";

    constructor(private authenticator: Authenticator, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.authenticator.isAuthenticated()) return true;

        this.redirectAuth(state.url);

        return false;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }

    canLoad(route: Route): boolean {
        let url = `/${route.path}`;
        let isAuth = this.authenticator.isAuthenticated();

        if(!isAuth  && url !== this.authRoute) {
            this.redirectAuth(url);
            return false;
        }
        else if(isAuth && url === this.authRoute) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }

    redirectAuth(url: string) {
        this.authenticator.redirectUrl = url;
        this.router.navigate([this.authRoute]);
    }
}
