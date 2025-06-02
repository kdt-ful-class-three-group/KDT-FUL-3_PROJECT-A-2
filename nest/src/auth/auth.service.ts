import { Injectable, Req } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { randomInt } from 'crypto'; // 랜덤 문자열 생성
import { Request } from 'express';
import { SigninDto } from 'src/users/dto/signin.dto';
import { JwtService } from '@nestjs/jwt';

// 세션에 code 속성을 추가
declare module 'express-session' {
  interface SessionData {
    code?: string;
  }
}

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  async sendVerificationEmail(email: string, @Req() req: Request) {
    const code = randomInt(100000, 999999).toString();

    req.session.code = code;

    await this.transporter.sendMail({
      to: email,
      subject: '이메일 인증 요청',
      html: `<p>이메일 코드 : ${code}`,
    });

    return {
      ok: true,
      message: '인증 이메일을 전송했습니다. 이메일을 확인해주세요.'
    };
  }

  async sendVerificationEmailCode(code: string, @Req() req: Request) {
    if (req.session.code === code) {
      return { ok: true, message: "인증번호가 일치합니다." }
    } else {
      return { ok: false, message: "인증번호가 일치하지 않습니다." };
    }
  }
  
  provideJWT(user: SigninDto) {
    const payload = {userid: user.userid}
    return {access_token: this.jwtService.sign(payload)}
  }
}