import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { User } from '../shared/user.model';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getUser(id: number): Promise<User> {
        return this.http.get<User>(`api/users/${id}`).toPromise();
    }

}
