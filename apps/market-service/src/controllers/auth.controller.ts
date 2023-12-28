import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LocalAuthGuard } from '../auth/guards/local-auth.guard';
import { AuthRequest } from '../auth/models/AuthRequest';
import { IsPublic } from '../auth/decorators/is-public.decorator';
import { LoginRequestBody } from '../auth/models/LoginRequestBody';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublic()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  @HttpCode(HttpStatus.OK)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async login(@Request() req: AuthRequest, @Body() _: LoginRequestBody) {
    return this.authService.login(req.user);
  }
}
