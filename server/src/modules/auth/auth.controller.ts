import {
  Controller,
  Request,
  Post,
  UseGuards,
  Body,
  Res,
  Get,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from '../users/dto/create-user.dto';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { UserRole } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { AuthService } from './auth.service';
import { HasRoles } from './has-roles.decorator';
import { JwtAuthGuard } from './jwt-auth.guard';
import { JwtStrategy } from './jwt.strategy';
import { LocalAuthGuard } from './local-auth.guard';
import { RolesGuard } from './roles.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Post('signup')
  async signup(
    @Body() createUserDto: CreateUserDto,
    // @Res({ passthrough: true }) response: Response,
  ) {
    const createdUser = await this.usersService.createUser(createUserDto);

    // if(!createdUser) {

    //     return
    // }
    return await this.authService.login({
      id: createdUser.id,
      email: createdUser.email,
      role: UserRole.CLIENT,
    });
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req, @Body() _loginUserDto: LoginUserDto): any {
    return this.authService.login(req.user);
  }

  //   @UseGuards(JwtAuthGuard)
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
