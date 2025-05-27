import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  getHello(): string {
    return 'Hello from UsersService!';
  }

  setUsers(userData: CreateUserDto): string {
    console.log('회원가입 데이터:', userData);
    return 'success';
  }
}
