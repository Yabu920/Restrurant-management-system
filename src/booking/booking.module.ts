import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { BookingSchema } from './booking.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Booking', schema: BookingSchema }])],
  providers: [BookingService],
  controllers: [BookingController],
})
export class BookingModule {}
