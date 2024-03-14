import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';

@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: parseInt(process.env.POSTGRES_DATABASE_PORT, 10) || 5434,
      username: process.env.POSTGRES_DATABASE_USERNAME || 'postgres',
      password: process.env.POSTGRES_DATABASE_PASSWORD || '12345678a@A',
      database: process.env.POSTGRES_DATABASE_NAME || 'training-database',
      entities: [UserEntity],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
