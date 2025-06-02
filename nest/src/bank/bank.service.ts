import { Injectable } from '@nestjs/common';
import { CreateBankDto } from './dto/create-bank.dto';

@Injectable()
export class BankService {
  getHello(): string {
    return 'Hello from BankService!';
  }

  createBankAccount(member: { pk: string }) {
    console.log("테스트 -> in BankService inserBankTable Function", member.pk);
  }
}