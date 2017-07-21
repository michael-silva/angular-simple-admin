import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../shared/user.service';
import { User } from '../shared/user.model';

@Component({
    selector: 'users',
    templateUrl: './user-tabform.component.html'
})
export class UserTabFormComponent implements OnInit {
    user: User;

    constructor(
        private route: ActivatedRoute,
        private userService: UserService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
                this.userService
                    .getUser(+params['id'])
                    .then(user => this.user = user);
            });
    }
}
