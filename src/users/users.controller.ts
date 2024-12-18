import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly userService:UsersService){}

    @Get()
    getUsers():any {
        // console.log("Users :: ",this.userService.allUsers());
        return this.userService.allUsers();
    }
}
