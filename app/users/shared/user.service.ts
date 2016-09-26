import { Injectable }      from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { User } from '../shared/user.model';

@Injectable()
export class Authenticator {
    getUser(guid: string): Promise<User> {
        return Promise.resolve({ name: 'Some user', token: '1sa12sa', guid: guid} as User);
    }
    
}