import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';
import { randomInt } from 'crypto'; // 랜덤 문자열 생성

@Injectable()
export class AuthService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  async sendVerificationEmail(email: string) {
    const code = randomInt(100000, 999999).toString();

    await this.transporter.sendMail({
      to: email,
      subject: '이메일 인증 요청',
      html: `<p>이메일 코드 : ${code}`,
    });

    return {
      ok : true,
      message: '인증 이메일을 전송했습니다. 이메일을 확인해주세요.'
    };
  }
}