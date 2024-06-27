import { Schema } from 'mongoose';
export declare const BookingSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    createdAt: Date;
    user?: import("mongoose").Types.ObjectId;
    tableNumber?: number;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    createdAt: Date;
    user?: import("mongoose").Types.ObjectId;
    tableNumber?: number;
}>> & import("mongoose").FlatRecord<{
    createdAt: Date;
    user?: import("mongoose").Types.ObjectId;
    tableNumber?: number;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
