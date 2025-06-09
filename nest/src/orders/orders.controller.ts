// src/words/words.controller.ts
import { Controller, Get, Post, Body, UseGuards } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { AuthGuard } from '@nestjs/passport';
import { CreateOrderDto } from './dto/create-order.dto';

@Controller('orders')
@UseGuards(AuthGuard('jwt'))
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Get()
  async findAll() {
    return this.ordersService.findAll();
  }

  @Post()
  async create(@Body() data: CreateOrderDto) {
    return this.ordersService.create(data);
  }

  @Get('hello')
  getHello(): string {
    return this.ordersService.getHello();
  }
}
