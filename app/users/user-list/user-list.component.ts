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

class ColumnModel extends TableColumn {
    visible: boolean = true;
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

class TablePage {
    page: number;
    label: string;
}

class Util {
    static Set(target: any, obj: any) {
        for(let key in obj) {
            target[key] = obj[key];
        }
    }
}

@Component({
    selector: 'user-list',
    templateUrl: 'app/users/user-list/user-list.component.html'
})
export class UserListComponent implements OnInit {
    table: TableModel;
    pagging: TablePage[];
    columns: ColumnModel[];

    constructor(private http: Http) {
        this.table = new TableModel();
        this.columns = [];
        this.pagging = [];
    }

    ngOnInit() {
        let page = this.table ? this.table.page | 0 : 0;
        this.pageTo(page);
    }

    toggleColumn(col: ColumnModel) {
        col.visible = !col.visible;
    }

    pageTo(page: number) {
        this.http.get(`api/users/?page=${page}&length=${this.table.length}`)
            .map(response => response.json().data[0] as TableModel)
            .toPromise()
            .then(data => {
                this.table = data;
                for(let i = 0; i < this.table.columns.length; i++) {
                    if(!this.columns[i]) this.columns[i] = new ColumnModel(); 
                    Util.Set(this.columns[i], this.table.columns[i]);
                }
                this.pagging = [];
                
                let last = data.total / data.length;
                let nearests = 2;
                
                let startRange = Math.max(this.table.page - nearests, 0);
                let lastRange = Math.min(this.table.page + 1 + nearests, last);

                if(startRange > 0) {
                    this.pagging.push({ page: 0, label: '1' });
                    this.pagging.push({ page: -1, label: '...' });
                }
                
                for(let i = startRange; i < lastRange; i++)
                    this.pagging.push({ page: i, label: `${i+1}` });
                
                if(last > lastRange) {
                    this.pagging.push({ page: -1, label: '...' });
                    this.pagging.push({ page: last -1, label: `${last}` });
                }

            })
            .catch(e => console.log(e));
    }
}
