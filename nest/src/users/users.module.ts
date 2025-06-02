import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { BankService } from 'src/bank/bank.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, BankService],
})
export class UsersModule {}
