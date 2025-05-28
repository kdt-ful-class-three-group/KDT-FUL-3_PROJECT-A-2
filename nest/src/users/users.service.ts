import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { pool } from 'src/DB/DB';

@Injectable()
export class UsersService {
  getHello(): string {
    return 'Hello from UsersService!';
  }

  async checkId(id: string): Promise<{ exists: boolean }> {
    const sql = "SELECT * FROM member WHERE user_id = $1";
    try {
      const result = await pool.query(sql, [id]);
      return { exists: result.rows.length > 0 };
    } catch (error) {
      throw error;
    }
  }

  setUsers(userData: CreateUserDto): void {
    console.log('회원가입 데이터:', userData);
    const sql = 'INSERT INTO member (user_id, password, phone_number, nickname) VALUES ($1, $2, $3, $4)';
    pool.query(sql, [userData.userid, userData.password, userData.phone, userData.nickname])
      .then(() => {
        console.log('회원가입 성공');
      })
      .catch((error) => {
        console.error('회원가입 에러:', error);
      });
  }
}
