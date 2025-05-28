import { Controller, Get, Post, Body, Res, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getHello(): string {
    return this.usersService.getHello();
  }

  @Get(":id")
  async checkId(@Param('id') id: string, @Res() res) {
    const isExists = await this.usersService.checkId(id);
    return res.json(isExists)
  }

  @Post("register")
  register(@Body() body: CreateUserDto, @Res() res) {
    try {
      this.usersService.setUsers(body);
      res.status(200).json({ ok: true });
    } catch (e) {
      res.status(400).json({ ok: false, message: '회원가입 실패' });
    }
  }
}
