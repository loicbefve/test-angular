import {User} from '../models/User.model';
import {Subject} from 'rxjs';

export class UserService {
  userSubject = new Subject<User[]>();
  private users: User[] = [
    {
      firstName: 'James',
      lastName: 'Smith',
      email: 'james.smith@gmail.com',
      drinkPreference: 'Coca',
      hobbies: [
        'coder',
        'la degustation de café'
      ]
    }
  ];

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
