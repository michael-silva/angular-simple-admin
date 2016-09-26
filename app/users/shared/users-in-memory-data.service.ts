import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class UsersInMemoryDataService implements InMemoryDbService {
  createDb() {
    let fields = [{ title: 'Id', data: 'Id' },
                    { title: 'Name', data: 'Name' },
                    { title: 'Age', data: 'Age' },
                    { title: 'Date', data: 'Date' }];
    let users = [{
        page: 0,
        length: 10,
        total: 18,
        columns: fields,
        data: [{ Id: 1, Name: 'Admin', Age: 24, Date: '21/04/1996' },
          { Id: 2, Name: 'Finance', Age: 26, Date: '21/04/1996' },
          { Id: 3, Name: 'Marketing', Age: 21, Date: '21/04/1996' },
          { Id: 4, Name: 'User', Age: 34, Date: '21/04/1996' },
          { Id: 5, Name: 'Admin', Age: 40, Date: '21/04/1996' },
          { Id: 6, Name: 'Finance', Age: 28, Date: '21/04/1996' },
          { Id: 7, Name: 'Simple', Age: 32, Date: '21/04/1996' },
          { Id: 8, Name: 'Simple', Age: 36, Date: '21/04/1996' },
          { Id: 9, Name: 'User', Age: 42, Date: '21/04/1996' },
          { Id: 10, Name: 'Admin', Age: 32, Date: '21/04/1996' }]
      },
      {
        page: 1,
        length: 10,
        total: 18,
        columns: fields,
        data: [{ Id: 11, Name: 'Admin', Age: 26, Date: '21/04/1996' },
          { Id: 12, Name: 'Finance', Age: 28, Date: '21/04/1996' },
          { Id: 13, Name: 'Marketing', Age: 30, Date: '21/04/1996' },
          { Id: 14, Name: 'Finance', Age: 24, Date: '21/04/1996' },
          { Id: 15, Name: 'Simple', Age: 21, Date: '21/04/1996' },
          { Id: 16, Name: 'User', Age: 20, Date: '21/04/1996' },
          { Id: 16, Name: 'Admin', Age: 23, Date: '21/04/1996' },
          { Id: 17, Name: 'Simple', Age: 29, Date: '21/04/1996' },
          { Id: 18, Name: 'Admin', Age: 24, Date: '21/04/1996' }]
      }
    ];
    return { users };
  }
}
