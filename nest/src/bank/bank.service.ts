import { Injectable } from '@nestjs/common';

@Injectable()
export class BankService {
  getHello(): string {
    return 'Hello from BankService!';
  }

  createBankAccount() {
    console.log("테스트 -> in BankService inserBankTable Function");
  }
}