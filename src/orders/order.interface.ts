// order.interface.ts

import { MenuItem } from '../menu/menu.interface';

export interface Order {
  id: string; // Assuming id is a string identifier
  customer: {
    name: string;
    email: string;
    address: string;
  };
  items: {
    menuItemId: string; // Assuming menuItemId refers to MenuItem's id
    quantity: number;
    menuItem: MenuItem; // Assuming MenuItem is imported from menu.interface
  }[];
  totalPrice: number;
  createdAt: Date;
}
