import { Body, Controller, Get, Post, Put, Req, Res, UseGuards } from '@nestjs/common';
import { BankService } from './bank.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@Controller('bank')
// @UseGuards(AuthGuard('jwt'))
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get()
  async findAll() {
    return this.bankService.findAll();
  }

  @Post()
  async getPersonalBank(@Req() req: Request) {
    const member_id = req.session.member_id === undefined ? '0' : String(req.session.member_id);
    return this.bankService.getPersonalBank(member_id);
  }

  @Put()
  async updateBank(@Req() req: Request, @Body() updateData) {
    const member_id = req.session.member_id === undefined ? '0' : String(req.session.member_id);
    return this.bankService.updateBank(member_id, updateData);
  }

  @Get('hello')
  getHello(): string {
    return this.bankService.getHello();
  }
}
