import { Controller, Get } from '@nestjs/common';
import { InterestService } from './interest.service';

@Controller('interest')
export class InterestController {
  constructor(private readonly interestService: InterestService) {}

  @Get()
  getHello(): string {
    return this.interestService.getHello();
  }
}
