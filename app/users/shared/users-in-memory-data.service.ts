import { InMemoryDbService } from 'angular2-in-memory-web-api';

export class UsersInMemoryDataService implements InMemoryDbService {
  createDb() {
    let users = [
      {id: 11, name: 'Admin User', password: '123456', login: 'admin', token: 'secret-token' },
      {id: 12, name: 'Simple User', password: '123456', login: 'simple', token: 'secret-token' },
      {id: 13, name: 'User', password: '123456', login: 'user', token: 'secret-token' },
    ];
    return { users };
  }
}
