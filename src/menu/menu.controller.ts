import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuItem } from './menu.interface';
@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  async create(@Body() menuItem: MenuItem) {
    return this.menuService.create(menuItem);
  }

  @Get()
  async findAll() {
    return this.menuService.findAll();
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() menuItem: MenuItem) {
    return this.menuService.update(id, menuItem);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.menuService.delete(id);
  }
}
