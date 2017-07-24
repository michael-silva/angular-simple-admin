import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { DatatableComponent }  from '../../shared/datatable/datatable.component';

@Component({
    selector: 'user-list',
    templateUrl: './user-list.component.html'
})
export class UserListComponent { 
    url: string = "http://localhost:3000/api/users/table"
}
