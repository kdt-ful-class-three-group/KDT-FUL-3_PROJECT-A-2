import { Controller, Get } from '@nestjs/common';
import { BankService } from './bank.service';

@Controller('bank')
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
