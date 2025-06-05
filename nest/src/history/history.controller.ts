import { Controller, Get, UseGuards } from '@nestjs/common';
import { HistoryService } from './history.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('history')
@UseGuards(AuthGuard('jwt'))
export class HistoryController {
  constructor(private readonly historyService: HistoryService) {}

  @Get()
  getHello(): string {
    return this.historyService.getHello();
  }
}