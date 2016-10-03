import { Input, Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { TableModel, TablePage } from './datatable.model';
import { ColumnModel } from './column.model';

class Util {
    static Set(target: any, obj: any) {
        for(let key in obj) {
            target[key] = obj[key];
        }
    }
}

@Component({
    selector: 'datatable',
    templateUrl: 'app/shared/datatable/datatable.component.html'
})
export class DatatableComponent implements OnInit {
    pagging: TablePage[];
    columns: ColumnModel[];
    table: TableModel;
    
    @Input() url:string;
    @Input() lengths: number[];

    constructor(private http: Http) {
        this.table = new TableModel();
        this.columns = [];
        this.pagging = [];
        this.lengths = [10, 25, 50, 100];
    }

    ngOnInit() {
        this.draw();
    }

    addColumn(column: ColumnModel) {
        this.columns.push(column);
    }

    toggleColumn(col: ColumnModel) {
        col.visible = !col.visible;
    }

    pageTo(page: number) {
        this.table.page = page;
        this.draw();
    }
    draw() {
        if(!this.url) throw new Error('It\'s required a url to draw the table');

        this.http.get(`${this.url}/?page=${this.table.page}&length=${this.table.length}`)
            .map(response => response.json().data[0] as TableModel)
            .toPromise()
            .then(data => {
                this.table = data;
                for(let i = this.columns.length; i < this.table.columns.length; i++) {
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
