import { Body, Controller, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { User } from './user-entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService){

    }

    @Get()
    getUsers():User[]{
        return this.userService.getUsers();
    }

    @Get(":id")
    getUser(@Param("id", ParseIntPipe) id:number): User{
        return this.userService.getUser(id);
    }

    @Post()
    createUser(@Body() user:User): User[]{
        this.userService.createUser(user);
        return this.userService.getUsers();
    }


}
