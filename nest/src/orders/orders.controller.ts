// src/words/words.controller.ts
import { Controller, Get, Post, Body, UseGuards, Param, Delete } from '@nestjs/common';
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

  @Post('stock')
  async getStockOrders(@Body() data: {member_id: string, stock_code: string}) {
    console.log(data);
    return this.ordersService.getStockOrders(data);
  }

  @Delete('cancel')
  async cancelStockOrder(@Body() data: {id: string}) {
    return this.ordersService.cancelStockOrder(data);
  }


  @Get('hello')
  getHello(): string {
    return this.ordersService.getHello();
  }
}
