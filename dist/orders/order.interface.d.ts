import { MenuItem } from '../menu/menu.interface';
export interface Order {
    id: string;
    customer: {
        name: string;
        email: string;
        address: string;
    };
    items: {
        menuItemId: string;
        quantity: number;
        menuItem: MenuItem;
    }[];
    totalPrice: number;
    createdAt: Date;
}
