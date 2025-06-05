import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { SigninDto } from './dto/signin.dto';
import { pool } from 'src/DB/DB';
import * as bcrypt from "bcryptjs";
import { BankService } from 'src/bank/bank.service';

@Injectable()
export class UsersService {
  constructor(private readonly bankService: BankService) { }

  getHello(): string {
    return 'Hello from UsersService!';
  }

  // 아이디디 중복 체크
  async checkId(id: string): Promise<{ exists: boolean }> {
    const sql = "SELECT * FROM member WHERE user_id = $1";
    try {
      const result = await pool.query(sql, [id]);
      return { exists: result.rows.length > 0 };
    } catch (error) {
      throw error;
    }
  }

  // 닉네임 중복 체크
  async checkNick(nickname: string): Promise<{ exists: boolean }> {
    const sql = "SELECT * FROM member WHERE nickname = $1";
    try {
      const result = await pool.query(sql, [nickname]);
      return { exists: result.rows.length > 0 };
    } catch (error) {
      throw error;
    }
  }

  // 회원가입
  async setUsers(userData: CreateUserDto): Promise<boolean> {
    const sql = 'INSERT INTO member (user_id, password, email, nickname) VALUES ($1, $2, $3, $4)';
    const hash = await bcrypt.genSalt(10);
    userData.password = await bcrypt.hash(userData.password, hash);

    try {
      await pool.query(sql, [userData.userid, userData.password, userData.email, userData.nickname]);
      const member = await this.checkLastMember();
      this.bankService.createBankAccount(member);
      return true;
    } catch (error) {
      console.error('회원가입 에러:', error);
      return false;
    }
  }

  // 로그인
  async checkUser(data: SigninDto): Promise<boolean> {
    const sql = "SELECT * FROM member WHERE user_id = $1";
    const result = await pool.query(sql, [data.userid]);

    if (result.rows.length === 0) return false;
    const user = result.rows[0];
    const isMatch = await bcrypt.compare(data.password, user.password);
    if (isMatch) return user
    else return false
  }

  // 마지막으로 추가된 계정 확인
  async checkLastMember() {
    const sql = "SELECT max(id) as pk FROM member"
    const result = await pool.query(sql);
    if (result.rows.length === 0) return false
    return result.rows[0];
  }

  // 이메일을 기준으로 아이디 찾기
  async searchIdFromEmail(email: string) {
    const sql = "SELECT user_id FROM member WHERE email = $1";
    const result = await pool.query(sql, [email]);
    if (result.rows.length === 0) return false
    return result.rows[0]
  }

  // 이메일과 아이디가 일치할 경우 true 반환
  async searchPwFromIdAndEmail(data: { email: string, userId: string }) {
    const sql = "SELECT EXISTS( SELECT 1 FROM member WHERE email = $1 AND user_id = $2) AS exist";
    const result = await pool.query(sql, [data.email, data.userId]);
    return result.rows[0].exist;
  }
}
