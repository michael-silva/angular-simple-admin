import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class UsersInMemoryDataService implements InMemoryDbService {
  createDb() {
    let rand = (s:number, e:number) => Math.floor(Math.random() * (e - s)) + s;
    let fields = [{ title: 'Id', data: 'Id' },
                  { title: 'Name', data: 'Name' },
                  { title: 'Age', data: 'Age' },
                  { title: 'Date', data: 'Date' }];
    let names = ['Admin', 'Simple', 'User', 'Finance', 'Marketing', 'Logistic'];
    let data: Array<any> = [];
    for(let i = 0; i < 100; i++) {
      data.push({ 
        Id: i+1, 
        Name: names[rand(1, names.length)], 
        Age: rand(20, 50), 
        Date: `${rand(1, 30)}/${rand(1, 12)}/${rand(1996, 2016)}` });
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

    console.log(users);
    return { users };
  }
}
