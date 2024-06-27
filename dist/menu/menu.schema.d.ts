import { Schema } from 'mongoose';
export declare const MenuSchema: Schema<any, import("mongoose").Model<any, any, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, {
    name?: string;
    description?: string;
    price?: number;
    available?: boolean;
}, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<{
    name?: string;
    description?: string;
    price?: number;
    available?: boolean;
}>> & import("mongoose").FlatRecord<{
    name?: string;
    description?: string;
    price?: number;
    available?: boolean;
}> & {
    _id: import("mongoose").Types.ObjectId;
}>;
