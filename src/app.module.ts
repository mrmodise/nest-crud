import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmCustomModule } from './database/typeorm-custom.module';
import { UserRepository, UserService } from './database/user';
import { DatabaseOptions } from './database/database.options';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseOptions,
    }),
    TypeOrmCustomModule.forCustomRepository([UserRepository]),
  ],
  controllers: [AppController],
  providers: [AppService, UserService],
  exports: [UserService],
})
export class AppModule {}
