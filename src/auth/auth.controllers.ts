import {
  Controller,
  Get,
  Request,
  Post,
  UseGuards,
  HttpStatus,
  HttpCode,
  Body,
  Header,
} from '@nestjs/common';
import { JwtAuthGuard } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/user.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }

  @Post('auth/registration')
  @HttpCode(HttpStatus.CREATED)
  @Header('origin', 'none')
  create(@Body() createUserDto: CreateUserDto) {
    return this.authService.registration(createUserDto);
  }
}
