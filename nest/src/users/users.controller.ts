import { Controller, Get, Post, Body, Res, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { SigninDto } from './dto/signin.dto';
import { AuthService } from 'src/auth/auth.service';

@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService
  ) { }

  @Get()
  getHello(): string {
    return this.usersService.getHello();
  }

  @Get("check-id/:id")
  async checkId(@Param('id') id: string, @Res() res) {
    const isExists = await this.usersService.checkId(id);
    return res.json(isExists)
  }

  @Get("check-nick/:nick")
  async checkNick(@Param('nick') nickname: string, @Res() res) {
    const isExists = await this.usersService.checkNick(nickname);
    return res.json(isExists)
  }

  @Post("signin")
  async Signin(@Body() data: SigninDto, @Res() res) {
    const isExist = await this.usersService.checkUser(data);
    if (isExist) {
      const token = this.authService.provideJWT(data);
      res.json({ ok: isExist, token });
    } else {
      res.json({ ok: isExist });
    }
  }

  @Post("register")
  async register(@Body() body: CreateUserDto, @Res() res) {
    const result = await this.usersService.setUsers(body);
    if (result) {
      res.status(200).json({ ok: true });
    } else {
      res.status(400).json({ ok: false, message: '회원가입 실패' });
    }
  }

  @Post("search-id")
  async searchIdFromEmail(@Body() data: { email: string }, @Res() res) {
    const result = await this.usersService.searchIdFromEmail(data.email);
    if (result === false) {
      res.status(401).json({ ok: false })
    } else {
      res.status(200).json({ ok: true, result });
    }
  }

  @Post("search-pw")
  async searchPwFromIdAndEmail(@Body() data: { email: string, userId: string }, @Res() res) {
    const result = await this.usersService.searchPwFromIdAndEmail(data);
    if (result) {
      res.status(200).json({ ok: result });
    } else {
      res.status(404).json({ ok: result, message: "가입된 이메일이 아니거나 아이디가 올바르지 않습니다." });
    }
  }
}
