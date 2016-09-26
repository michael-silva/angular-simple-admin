import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

class TableSearch {
    term: string;
    pattern: string;
}

class TableColumn {
    title: string;
    data: string;
    orderable: boolean;
    searchable: boolean;
}

class TableModel {
    search: TableSearch;
    page: number = 0;
    length: number = 10;
    total: number;
    columns: TableColumn[];
    data: Array<any>;

    constructor() {

    }
}

class TableBuilder {

}

@Component({
    selector: 'user-list',
    templateUrl: 'app/users/user-list/user-list.component.html'
})
export class UserListComponent implements OnInit {
    table: TableModel;

    constructor(private http: Http) { }

    ngOnInit() {
        this.http.get('api/users/?page=0')
            .map(response => response.json().data[0] as TableModel)
            .toPromise()
            .then(data => this.table = data)
            .catch(e => console.log(e));
    }
}
