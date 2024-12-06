import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

  getUsers() {
    return ['usuarioVillding-1', ' usuarioVillding-2', ' usuarioVillding-3'];
  }

  postUser(name: string) {
    return `Hola usuario ${name} de villding!`;
  }
}
