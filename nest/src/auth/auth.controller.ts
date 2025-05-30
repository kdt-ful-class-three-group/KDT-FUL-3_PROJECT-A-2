import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('email')
  async requestEmail(@Body('email') email: string, @Req() req: Request) {
    return this.authService.sendVerificationEmail(email, req);
  }
}