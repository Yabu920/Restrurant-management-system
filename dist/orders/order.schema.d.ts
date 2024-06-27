import * as mongoose from 'mongoose';
export declare const OrderSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    items: string[];
    totalPrice: number;
    customerName: string;
    createdDate: Date;
}, mongoose.Document<unknown, {}, mongoose.FlatRecord<{
    items: string[];
    totalPrice: number;
    customerName: string;
    createdDate: Date;
}>> & mongoose.FlatRecord<{
    items: string[];
    totalPrice: number;
    customerName: string;
    createdDate: Date;
}> & {
    _id: mongoose.Types.ObjectId;
}>;
