import { MenuService } from './menu.service';
import { MenuItem } from './menu.interface';
export declare class MenuController {
    private readonly menuService;
    constructor(menuService: MenuService);
    create(menuItem: MenuItem): Promise<MenuItem>;
    findAll(): Promise<MenuItem[]>;
    update(id: string, menuItem: MenuItem): Promise<MenuItem>;
    delete(id: string): Promise<any>;
}
