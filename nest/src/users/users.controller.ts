import { Controller, Get, Post, Body, Res, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SigninDto } from './dto/signin.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getHello(): string {
    return this.usersService.getHello();
  }
  @Post("signin")
  async Signin(@Body() data: SigninDto, @Res() res) {
    const isExist = await this.usersService.checkUser(data);
    res.json({ok : isExist});
  }

  @Post("register")
  register(@Body() body: CreateUserDto, @Res() res): void {
    this.usersService.setUsers(body);
    res.redirect('http://localhost:3000/login');
  }
}
