import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    console.log(
      '🚀 ~ file: auth.service.ts ~ line 19 ~ AuthService ~ validateUser ~ user',
      user.passwordHash,
    );

    const passwordValid = await bcrypt.compare(password, user.passwordHash);
    if (!user) {
      throw new NotFoundException('could not find the user');
    }

    if (!passwordValid) {
      throw new UnauthorizedException('invalid password');
    }

    const { passwordHash, devices, ...result } = user;

    return result;
  }

  async login(user: any) {
    console.log(
      '🚀 ~ file: auth.service.ts ~ line 39 ~ AuthService ~ login ~ user',
      user,
    );
    const payload = {
      email: user.email,
      sub: user.id,
      role: user.role,
    };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
