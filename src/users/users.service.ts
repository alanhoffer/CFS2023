import { Injectable } from '@nestjs/common';
import { User } from './user-entity';

@Injectable()
export class UsersService {
    private users: User[] = [{
        "id": 1,
        "email": "emailrandom@gmail.com",
        "nombre": "Jose",
        "apellido": "Luis",
        "edad": 23,
    }, 
    {
        "id": 2,
        "email": "emailrandom2@gmail.com",
        "nombre": "Pepe",
        "apellido": "Mario",
        "edad": 23,
    },];

    getUsers(): User[]{
        return this.users;
    }

    getUser(id:number): User{
        const foundUser = this.users.find(user => user.id == id);
        
        return foundUser;
    }

    createUser(user:User){
        this.users.push(user);
    }
}
