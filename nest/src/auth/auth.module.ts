import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      },
      defaults: {
        from: '"Your Project" <yourproject.auth@gmail.com>',
      },
    }),

    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'superSecretKey', // 비밀키 (환경변수 추천!)
      signOptions: { expiresIn: '10h' }, // 토큰 만료시간
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule { }
