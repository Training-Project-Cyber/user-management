import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

export class UserRepository extends Repository<UserEntity> {
  // Thêm các phương thức tùy chỉnh cho UserRepository tại đây nếu cần thiết
}
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { BaseRepositoryAbstract } from 'src/common/base/base.abstract.repository';
// import { UserEntity } from 'src/entities/user.entity';
// import { Repository } from 'typeorm';

// @Injectable()
// export class UserRepository
//   extends BaseRepositoryAbstract<UserEntity>
//   implements IUserRepositoryInterface
// {
//   constructor(
//     @InjectRepository(UserEntity)
//     private readonly userModel: Repository<UserEntity>,
//   ) {
//     super(userModel);
//   }

//   //   async updatePasswordById(
//   //     newPassword: string,
//   //     newSalt: string,
//   //     userId: number
//   //   ): Promise<void> {
//   //     await this.userModel
//   //       .createQueryBuilder()
//   //       .update(UserEntity)
//   //       .set({
//   //         password: newPassword,
//   //         salt: newSalt,
//   //       })
//   //       .where('id = :id', { id: userId })
//   //       .execute();
//   //   }
// }

// user.repository.ts
