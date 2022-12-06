import { Repository } from 'typeorm';
import { CustomRepository } from '../typeorm-custom.decorator';
import { UserEntity } from './user.entity';

@CustomRepository(UserEntity)
export class UserRepository extends Repository<UserEntity> {}
