import { BookingService } from './booking.service';
import { Booking } from './booking.interface';
export declare class BookingController {
    private readonly bookingService;
    constructor(bookingService: BookingService);
    create(booking: Booking): Promise<Booking>;
    findAll(): Promise<Booking[]>;
}
