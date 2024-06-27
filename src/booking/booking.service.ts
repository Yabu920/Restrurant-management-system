import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Booking } from './booking.interface';
@Injectable()
export class BookingService {
  constructor(@InjectModel('Booking') private readonly bookingModel: Model<Booking>) {}

  async create(booking: Booking): Promise<Booking> {
    const newBooking = new this.bookingModel(booking);
    return newBooking.save();
  }

  async findAll(): Promise<Booking[]> {
    return this.bookingModel.find().exec();
  }

  async deleteExpired() {
    const thirtyMinutesAgo = new Date(Date.now() - 30 * 60 * 1000);
    await this.bookingModel.deleteMany({ createdAt: { $lt: thirtyMinutesAgo } }).exec();
  }
}
