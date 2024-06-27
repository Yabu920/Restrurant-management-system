import { Model } from 'mongoose';
import { Order } from './order.interface';
export declare class OrderService {
    private readonly orderModel;
    constructor(orderModel: Model<Order>);
    create(order: Order): Promise<Order>;
    findAll(): Promise<Order[]>;
}
