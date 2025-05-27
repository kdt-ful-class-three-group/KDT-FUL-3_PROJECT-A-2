import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // cors 허용 (전체 허용)
  app.enableCors({
    origin: 'http://localhost:3000', // 프론트 주소
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // 쿠키 허용
  });

  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
