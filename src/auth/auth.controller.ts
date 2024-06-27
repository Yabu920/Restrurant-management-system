import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard'; // Import LocalAuthGuard

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard) // Use LocalAuthGuard for login
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
