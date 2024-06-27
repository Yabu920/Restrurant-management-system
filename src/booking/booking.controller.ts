import { Controller, Post, Get, Body } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from './booking.interface';
@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  async create(@Body() booking: Booking) {
    return this.bookingService.create(booking);
  }

  @Get()
  async findAll() {
    return this.bookingService.findAll();
  }
}
