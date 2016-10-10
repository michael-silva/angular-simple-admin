import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class UsersInMemoryDataService implements InMemoryDbService {
  createDb() {
    let rand = (s:number, e:number) => Math.floor(Math.random() * (e - s)) + s;
    let fields = [{ title: 'Id', data: 'id', orderable: true },
                  { title: 'Name', data: 'name', orderable: true },
                  { title: 'Type', data: 'type', orderable: true },
                  { title: 'Created Date', data: 'createdDate', orderable: true }];
    let names = ['Jack', 'Bruce', 'John', 'Sue', 'Sabrine', 'Michael'];
    let lastnames = ['Smith', 'Silva', 'Wayne', 'Armstrong', 'Hendrickson', 'Donald'];
    let types = ['Admin', 'Simple', 'Finance', 'Marketing', 'Logistic'];
    let users: Array<any> = [];
    for(let i = 0; i < 100; i++) {
      users.push({ 
        id: i+1,
        name: names[rand(1, names.length)] + ' ' + lastnames[rand(1, lastnames.length)], 
        type: types[rand(1, types.length)],
        age: rand(20, 50),
        lastChange: { 
          date: `${rand(1, 30)}/${rand(1, 12)}/${rand(1996, 2016)}`,
          userId: rand(1, 100)
        }, 
        createdDate: `${rand(1, 30)}/${rand(1, 12)}/${rand(1996, 2016)}` });
    }

    let table: Array<any> = [];
    let lengths = [50, 25, 15];
    for(let i = 10; i < users.length; i+=lengths.pop()) {
      for(let j = 0; j < users.length/i; j++) {
        table.push({
          selectable: true,
          page: j,
          length: i,
          total: users.length,
          columns: fields,
          data: users.slice(j*i, j*i+i)
        });
      }
    }

    return { 'users': table, 'user': users };
  }
}
