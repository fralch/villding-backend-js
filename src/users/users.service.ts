import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  getUsers() {
    return ['user1', 'user2', 'user3'];
  }

  postUser(name: string) {
    return `user ${name} created`;
  }
}
