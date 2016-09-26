import { Component } from '@angular/core';

@Component({
    selector: 'users',
    templateUrl: 'app/users/user-list/user-list.component.html'
})
export class UserListComponent {
    keys: string[];
    table = {
        columns: [{ name: 'Id' }, { name: 'Name' }, { name: 'Age' },{ name: 'Date' }],
        data: [
            { Id: 1, Name: 'Admin', Age: 24, Date: '21/04/1996' },
            { Id: 1, Name: 'Finance', Age: 26, Date: '21/04/1996' },
            { Id: 1, Name: 'Marketing', Age: 21, Date: '21/04/1996' },
            { Id: 1, Name: 'User', Age: 34, Date: '21/04/1996' },
            { Id: 1, Name: 'Admin', Age: 40, Date: '21/04/1996' },
            { Id: 1, Name: 'Finance', Age: 28, Date: '21/04/1996' },
            { Id: 1, Name: 'Simple', Age: 32, Date: '21/04/1996' },
            { Id: 1, Name: 'Simple', Age: 36, Date: '21/04/1996' },
            { Id: 1, Name: 'User', Age: 42, Date: '21/04/1996' },
            { Id: 1, Name: 'Admin', Age: 32, Date: '21/04/1996' },
            { Id: 1, Name: 'Admin', Age: 26, Date: '21/04/1996' },
            { Id: 1, Name: 'Finance', Age: 28, Date: '21/04/1996' },
            { Id: 1, Name: 'Marketing', Age: 30, Date: '21/04/1996' },
            { Id: 1, Name: 'Finance', Age: 24, Date: '21/04/1996' },
            { Id: 1, Name: 'Simple', Age: 21, Date: '21/04/1996' },
            { Id: 1, Name: 'User', Age: 20, Date: '21/04/1996' },
            { Id: 1, Name: 'Admin', Age: 23, Date: '21/04/1996' },
            { Id: 1, Name: 'Simple', Age: 29, Date: '21/04/1996' },
            { Id: 1, Name: 'Admin', Age: 24, Date: '21/04/1996' }]
    };

    constructor() {
        this.keys = Object.keys(this.table.data[0]);
    }
}
