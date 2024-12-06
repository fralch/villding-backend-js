import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { UsersService } from './users.service';



@Controller('users')
export class UsersController {

    constructor( private readonly usersService: UsersService) {}

    @Get()
    getAllUsers() {
        return this.usersService.getUsers();
    }

    @Post()
    postUser( @Body() data: any) {
        console.log(data.name);
        return this.usersService.postUser(data.name);
    }

}
