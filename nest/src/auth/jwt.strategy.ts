import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable() // 이 클래스가 NestJS의 DI 시스템에 의해 관리된다는 표시
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      // 요청 헤더의 Authorization: Bearer <token>에서 JWT를 추출
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      // 토큰을 해독할 때 쓸 시크릿 키 (환경변수로 관리 추천)
      secretOrKey: process.env.JWT_SECRET || 'your-secret-key',
    });
  }

  // 토큰이 유효하면 호출되는 메서드 (payload는 JWT sign 시 전달한 객체)
  async validate(payload: any) {
    // 여기서 payload로 DB 조회 등 추가 인증 가능 (보통은 payload 정보만 반환)
    return { userId: payload.sub, username: payload.username };
  }
}