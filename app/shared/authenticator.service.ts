import { Injectable }      from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map'

import { User } from '../users/shared/user.model';
import { NewPasswordModel } from '../auth/shared/newpass.model';

@Injectable()
export class Authenticator {
    private userObservable: BehaviorSubject<User> = new BehaviorSubject<User>(null);
    public redirectUrl: string = '';

    constructor() {
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

    authenticate(login: string, pass: string): Promise<User> {
        return new Promise((resolve, reject) => {
            let mock = { login: 'admin', pass: '123456', token: 'asasasasa' };
            if (mock.login == login && mock.pass == pass) {
                let user = { name: 'User Name', token: 'asasasasa' } as User;
                this.userObservable.next(user);
                localStorage.setItem('user', JSON.stringify(user));
                return resolve(user);
            }
            else return reject({ code: 1, message: "User and/or Password are invalids"});
        });
    }

    requestRecoverPass(email: string): Promise<string> {
        return Promise.resolve("A recover password link was sent to your email.");
    }

    changePassword(model: NewPasswordModel): Promise<string> {
        let user = { name: 'User Name', token: 'asasasasa' } as User;
        this.userObservable.next(user);
        
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