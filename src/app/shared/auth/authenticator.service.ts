import { Injectable }      from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

import { User } from './user.model';
import { TokenModel } from './token.model';
import { NewPasswordModel } from './newpass.model';

import { ConfigService } from '../config.service';

@Injectable()
export class Authenticator {
    private authUrl:string = 'auth';
    private userObservable: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    public redirectUrl: string = '';

    constructor(private http: HttpClient, private config: ConfigService) {
        let storage = localStorage.getItem('user');
        if(storage) {
            let user = JSON.parse(storage) as User;
            this.userObservable.next(user);
        }
    }

    get userAuthenticated(): User {
        return this.userObservable.getValue();
    }

    getAuthenticatedUser(): Observable<User> {
        return this.userObservable.asObservable();
    }

    isAuthenticated(): Observable<boolean> {
        return this.userObservable.asObservable().map(user => !!user);
    }

    authenticate(login: string, pass: string): Observable<TokenModel> {
        const body = JSON.stringify({ login: login, password: pass });
        return this.http.post<TokenModel>(`${this.config.baseUrl}/api/authenticate`, body);
    }

    requestRecoverPass(email: string): Promise<string> {
        //not implemented
        return Promise.resolve("A recover password link was sent to your email.");
    }

    changePassword(model: NewPasswordModel): Promise<string> {
        //not implemented
        return Promise.resolve("Your new password has been saved with success");
    }

    checkRecoverPassCode(code: string): Promise<string> {
        return new Promise((resolve, reject) => {
            if(code.length <= 2) return reject({ code: 1, message: "Recover code invalid or expired!" });
            return resolve('User Name');
        });
    }

    logOut(): Promise<void> {
        this.userObservable.next(null);
        localStorage.setItem('user', null);
        return Promise.resolve();
    }
}
