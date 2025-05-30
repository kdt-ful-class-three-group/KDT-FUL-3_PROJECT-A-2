import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('email')
  async requestEmail(@Body('email') email: string) {
    return this.authService.sendVerificationEmail(email);
  }
}