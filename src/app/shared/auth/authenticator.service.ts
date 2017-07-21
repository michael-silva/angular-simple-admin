import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ISubscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subscriber } from 'rxjs/Subscriber';

import { AuthResultModel } from './auth-result.model';
import { NewPasswordModel } from './newpass.model';

import { ConfigService } from '../config.service';

@Injectable()
export class Authenticator {
    public redirectUrl: string;
    private _authUrl: string;
    private _model: AuthResultModel;
    private _authenticated: ISubscription;
    private _authObservers: Subscriber<any>[];
    private _modelObservers: Subscriber<any>[];

    constructor(private http: HttpClient, private config: ConfigService) {
        this._model = JSON.parse(localStorage.getItem('user') || "null");
        this._authObservers = [];
        this._modelObservers = [];
    }

    get authenticated(): boolean {
        return !!this._model;
    }

    get session(): AuthResultModel {
        return this._model;
    }

    isAuthenticated(): Observable<boolean> {
        return new Observable(observer => {
            this._authObservers.push(observer);
        });
    }

    userAuthenticated(): Observable<AuthResultModel> {
        return new Observable(observer => {
            this._modelObservers.push(observer);
        });
    }

    setModel(model: AuthResultModel) {
        this._model = model;
        if(model) localStorage.setItem('user', JSON.stringify(model));
        else localStorage.removeItem('user');
        this._modelObservers.forEach(observer => observer.next(model));
    }

    clearSession() {
        this._authObservers.forEach(observer => observer.next(false));
        this.setModel(null);
        if(this._authenticated)
            this._authenticated.unsubscribe();
    }

    authenticate(login: string, pass: string): Promise<any> {
        return new Promise((resolve, reject) => {
            const body = { login: login, password: pass };
            this._authenticated = this.http.post<AuthResultModel>(`${this.config.baseUrl}/api/authenticate`, body)
                .subscribe(model => {
                    this.setModel(model);
                    this._authObservers.forEach(observer => observer.next(true));
                    resolve();
                },
                res => {
                    this. clearSession();
                    reject(res.error);
                });
        });
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
        //not implemented
        return new Promise((resolve, reject) => {
            if (code.length <= 2) return reject({ code: 1, message: "Recover code invalid or expired!" });
            return resolve('User Name');
        });
    }

    logOut(): Promise<void> {
        this.clearSession();
        return Promise.resolve();
    }
}
