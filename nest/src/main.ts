// nest/src/main.ts
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import * as session from 'express-session';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 사용자 데이터 검증
  app.useGlobalPipes(new ValidationPipe());
  // cors 허용 (전체 허용)
  app.enableCors({
    origin: 'http://localhost:3000', // 프론트 주소
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // 쿠키 허용
  });

  app.use(
    session({
      secret: process.env.SESSION_SECRET || 'mySecretKey',
      resave: false,
      saveUninitialized: true,
      cookie: {
        maxAge: 1000 * 60 * 60,
      },
    }),
  );

  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
