import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'postgres',
    //   host: '172.21.0.3',
    //   port: parseInt(process.env.POSTGRES_DATABASE_PORT, 10) || 5434,
    //   username: process.env.POSTGRES_DATABASE_USERNAME || 'postgres',
    //   password: process.env.POSTGRES_DATABASE_PASSWORD || '12345678a@A',
    //   database: process.env.POSTGRES_DATABASE_NAME || 'training-database',
    //   entities: [],
    //   synchronize: true,
    // }),
    ClientsModule.register([
      {
        name: 'AUTH_MICROSERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'auth',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'auth-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
