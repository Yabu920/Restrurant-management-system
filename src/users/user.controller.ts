import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.interface';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() user: User) {
    return this.userService.create(user);
  }

  @Get()
  async getAllUsers() {
    return this.userService.findAll();
  }
}
