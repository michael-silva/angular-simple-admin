import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { User } from '../shared/user.model';

@Injectable()
export class UserService {
    constructor(private http: Http) { }

    getUser(id: number): Promise<User> {
        return this.http.get(`api/user?id=${id}`)
        .map(data => data.json().data[0] as User).toPromise();
    }
    
}