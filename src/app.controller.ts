import { Body, Controller, Post } from '@nestjs/common';
import { UserDto, UserService } from './database/user';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Post('/v1/user')
  async saveUser(@Body() userDto: UserDto) {
    return this.userService.createUser(userDto);
  }
}
