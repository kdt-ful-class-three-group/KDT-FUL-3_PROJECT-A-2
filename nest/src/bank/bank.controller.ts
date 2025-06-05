import { Controller, Get, UseGuards } from '@nestjs/common';
import { BankService } from './bank.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('bank')
@UseGuards(AuthGuard('jwt'))
export class BankController {
  constructor(private readonly bankService: BankService) {}

  @Get()
  async findAll() {
    return this.bankService.findAll();
  }

  @Get('hello')
  getHello(): string {
    return this.bankService.getHello();
  }
}
