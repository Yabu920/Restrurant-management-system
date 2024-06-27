import { Controller, Post, Get, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order } from './order.interface';
@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async create(@Body() order: Order) {
    return this.orderService.create(order);
  }

  @Get()
  async findAll() {
    return this.orderService.findAll();
  }
}
