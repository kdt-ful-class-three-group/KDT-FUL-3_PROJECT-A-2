import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { BankService } from './bank.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('bank')
// @UseGuards(AuthGuard('jwt'))
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get()
  async findAll() {
    return this.bankService.findAll();
  }

  @Post()
  async getPersonalBank(@Body() data: {member_id: string}) {
    return this.bankService.getPersonalBank(data);
  }

  @Get('hello')
  getHello(): string {
    return this.bankService.getHello();
  }
}
