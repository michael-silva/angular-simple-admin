import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';

import { FormsModule }    from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { DatatableComponent }  from '../shared/datatable/datatable.component';
import { ColumnComponent }  from '../shared/datatable/column.component';
import { TabsComponent }  from '../shared/tabs/tabs.component';
import { TabComponent }  from '../shared/tabs/tab.component';

import { Authenticator } from '../shared/authenticator.service';
import { usersRouting } from './users.routing';

import { UsersComponent } from './users.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserWizzardComponent } from './user-wizzard/user-wizzard.component';
import { UserTabFormComponent } from './user-tabform/user-tabform.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular2-in-memory-web-api';
import { UsersInMemoryDataService }  from './shared/users-in-memory-data.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(UsersInMemoryDataService, { delay: 500 }), 
        usersRouting],
    declarations: [
        TabsComponent,
        TabComponent,
        DatatableComponent,
        ColumnComponent,
        UsersComponent,
        UserListComponent,
        UserProfileComponent,
        UserTabFormComponent,
        UserWizzardComponent]
})
export class UsersModule { }
