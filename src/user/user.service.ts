import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/entities/user.entity';
import { UserRepository } from 'src/repository/users.repostitory';
import { CreateUserDto } from './dto/createUserDTO';

@Injectable()
export class UserService {
  constructor(private readonly usersRepository: UserRepository) {}

  createUser(data: CreateUserDto): void {
    console.log('Có chạy nha: ', data);
  }

  async getAllUser(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }
}
