import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class UsersInMemoryDataService implements InMemoryDbService {
  createDb() {
    let rand = (s:number, e:number) => Math.floor(Math.random() * (e - s)) + s;
    let fields = [{ title: 'Id', data: 'id' },
                  { title: 'Name', data: 'name' },
                  { title: 'Age', data: 'age' },
                  { title: 'Date', data: 'date' }];
    let names = ['Admin', 'Simple', 'User', 'Finance', 'Marketing', 'Logistic'];
    let data: Array<any> = [];
    for(let i = 0; i < 100; i++) {
      data.push({ 
        id: i+1,
        name: names[rand(1, names.length)], 
        age: rand(20, 50), 
        date: `${rand(1, 30)}/${rand(1, 12)}/${rand(1996, 2016)}` });
    }

    let users: Array<any> = [];
    let lengths = [50, 25, 15];
    for(let i = 10; i < data.length; i+=lengths.pop()) {
      for(let j = 0; j < data.length/i; j++) {
        users.push({
          page: j,
          length: i,
          total: data.length,
          columns: fields,
          data: data.slice(j*i, j*i+i)
        });
      }
    }

    return { users, user: data };
  }
}
