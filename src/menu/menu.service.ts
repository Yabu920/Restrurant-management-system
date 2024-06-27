import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MenuItem } from './menu.interface';
@Injectable()
export class MenuService {
  constructor(@InjectModel('Menu') private readonly menuModel: Model<MenuItem>) {}

  async create(menuItem: MenuItem): Promise<MenuItem> {
    const newItem = new this.menuModel(menuItem);
    return newItem.save();
  }

  async findAll(): Promise<MenuItem[]> {
    return this.menuModel.find().exec();
  }

  async update(id: string, menuItem: MenuItem): Promise<MenuItem> {
    return this.menuModel.findByIdAndUpdate(id, menuItem, { new: true }).exec();
  }

  async delete(id: string): Promise<any> {
    return this.menuModel.findByIdAndDelete(id).exec();

  }
}
