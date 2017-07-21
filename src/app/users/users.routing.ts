import { NgModule }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserWizzardComponent } from './user-wizzard/user-wizzard.component';
import { UserTabFormComponent } from './user-tabform/user-tabform.component';

const ROUTES: Routes = [{
        path: '',
        component: UsersComponent,
        children: [{
                path: '',
                component: UserListComponent
            },
            {
                path: 'profile',
                component: UserProfileComponent
            },
            {
                path: ':id',
                component: UserTabFormComponent
            },
            {
                path: 'new',
                component: UserWizzardComponent
            }]
}];


@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class UsersRoutingModule { }
