import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { UserRepository } from './user.repository';
import { DataSource, InsertResult } from 'typeorm';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  constructor(
    private readonly _userRepository: UserRepository,
    private readonly _dataSource: DataSource,
  ) {}

  async createUser(userDto: UserDto) {
    let user: InsertResult;
    const queryRunner = this._dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      Logger.debug(JSON.stringify(userDto));

      user = await this._userRepository.insert(userDto);

      Logger.debug(JSON.stringify(user));
      await queryRunner.commitTransaction();
    } catch (error) {
      await queryRunner.rollbackTransaction();

      Logger.error(error);
      throw new InternalServerErrorException();
    } finally {
      await queryRunner.release();
    }

    return user;
  }
}
