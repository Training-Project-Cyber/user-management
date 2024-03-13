import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repository/users.repostitory';
import { CreateUserDto } from './user/dto/createUserDTO';
import { User } from './entities/user.entity';

@Injectable()
export class AppService {
  // constructor(private readonly usersRepository: UsersRepository) {}

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

  createUser(data: CreateUserDto): void {
    console.log('Có chạy nha: ', data);
  }

  // getUser(id: number): User {
  //   return this.usersRepository.findOne(id);
  // }
}
