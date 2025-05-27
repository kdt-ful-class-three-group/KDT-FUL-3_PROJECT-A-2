import { Controller, Get, Post, Body, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getHello(): string {
    return this.usersService.getHello();
  }

  @Post()
  register(@Body() body: CreateUserDto, @Res() res): void {
    const result = this.usersService.setUsers(body);
    console.log(result);
    // res.redirect('http://localhost:3000/login');
  }
}
