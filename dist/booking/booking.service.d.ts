import { Model } from 'mongoose';
import { Booking } from './booking.interface';
export declare class BookingService {
    private readonly bookingModel;
    constructor(bookingModel: Model<Booking>);
    create(booking: Booking): Promise<Booking>;
    findAll(): Promise<Booking[]>;
    deleteExpired(): Promise<void>;
}
