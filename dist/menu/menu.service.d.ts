import { Model } from 'mongoose';
import { MenuItem } from './menu.interface';
export declare class MenuService {
    private readonly menuModel;
    constructor(menuModel: Model<MenuItem>);
    create(menuItem: MenuItem): Promise<MenuItem>;
    findAll(): Promise<MenuItem[]>;
    update(id: string, menuItem: MenuItem): Promise<MenuItem>;
    delete(id: string): Promise<any>;
}
