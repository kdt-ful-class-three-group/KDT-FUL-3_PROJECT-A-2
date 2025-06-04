// src/words/words.controller.ts
import { Controller, Get, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async findAll() {
    return this.ordersService.findAll();
  }

  @Post()
  async create(
    @Body()
    dto: {
      member_id: number;
      stock_code: string;
      stock_name: string;
      order_type: string;
      quantity: number;
      price: number;
      status: string;
    },
  ) {
    return this.ordersService.create(dto);
  }

  @Get('hello')
  getHello(): string {
    return this.ordersService.getHello();
  }
}
