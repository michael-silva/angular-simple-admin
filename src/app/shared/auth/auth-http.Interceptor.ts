import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Authenticator } from './authenticator.service';

@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
    constructor(private authenticator: Authenticator) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!this.authenticator.authenticated)
            return next.handle(req);
        else {
            const token = this.authenticator.session.token;
            // Clone the request to add the new header.
            const authReq = req.clone({ headers: req.headers.set('Authorization', token) });
            // Pass on the cloned request instead of the original request.
            return next.handle(authReq);
        }
    }
}
