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

class PaggingModel {
    first: number;
    last: number;
    current: number;
    nearests: number;
    pages: number[];
}

@Component({
    selector: 'user-list',
    templateUrl: 'app/users/user-list/user-list.component.html'
})
export class UserListComponent implements OnInit {
    table: TableModel;
    pagging: PaggingModel;

    constructor(private http: Http) { 
        this.pagging = new PaggingModel();
    }

    ngOnInit() {
        this.http.get(`api/users/?page=${this.pagging.current | 0}`)
            .map(response => response.json().data[0] as TableModel)
            .toPromise()
            .then(data => {
                this.table = data;
                this.pagging.current = data.page;
                this.pagging.last = data.total / data.length;
                this.pagging.nearests = 3;
                this.pagging.pages = new Array(this.pagging.current - this.pagging.nearests * 2 + 1)
                    .map((x,i)=>this.pagging.current - this.pagging.nearests + i);
            })
            .catch(e => console.log(e));
    }
}
