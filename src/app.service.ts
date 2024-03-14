import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log(
      'Hello World!: ',
      parseInt(process.env.POSTGRES_DATABASE_PORT, 10),
    );
    console.log(
      process.env.POSTGRES_DATABASE_USERNAME,
      process.env.POSTGRES_DATABASE_PASSWORD,
      process.env.POSTGRES_DATABASE_NAME,
    );
    return 'Hello World!';
  }
}
