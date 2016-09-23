import { Injectable }      from '@angular/core';

import { User } from '../users/shared/user.model';

@Injectable()
export class Authenticator {
    private userAuthenticated: User;
    public redirectUrl: string;

    getAuthenticatedUser(): User {
        return this.userAuthenticated;
    }

    isAuthenticated(): boolean {
        return !!this.userAuthenticated;
    }

    authenticate(login: string, pass: string): Promise<User> {
        return new Promise((resolve, reject) => {
            let mock = { login: 'rmcbrothers', pass: '123456', token: 'asasasasa' };
            if (mock.login == login && mock.pass == pass) {
                this.userAuthenticated = { name: 'RMC Brothers', token: 'asasasasa' } as User;
                return resolve(this.userAuthenticated);
            }
            else return reject({ code: 1, message: "User and/or Password are invalids"});
        });
    }
}