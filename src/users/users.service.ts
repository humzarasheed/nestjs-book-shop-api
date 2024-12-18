import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private users = [ 
        {name:"Sharjeel",email:"sharjeel@gmail.com"},
        {name:"Sharjeel",email:"sharjeel@gmail.com"},
        {name:"Sharjeel",email:"sharjeel@gmail.com"},
        {name:"Sharjeel",email:"sharjeel@gmail.com"},
        {name:"Sharjeel",email:"sharjeel@gmail.com"},
        {name:"Sharjeel",email:"sharjeel@gmail.com"},
        {name:"Sharjeel",email:"sharjeel@gmail.com"},
        {name:"Sharjeel",email:"sharjeel@gmail.com"},
    ]

    public allUsers = () => {
        return this.users;
    }
}
