// import {
//   DeepPartial,
//   FindOneOptions,
//   FindOptionsOrder,
//   QueryRunner,
//   Repository,
//   SelectQueryBuilder,
// } from 'typeorm';
// import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
// import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';
// import { AbstractBaseEntityEntity } from './base-abstract.entity';
// import { IBaseRepositoryInterface } from './base.interface.repository';
// import {
//   AllResponse,
//   ListResponse,
//   sortByDefault,
//   sortFieldDefault,
// } from '../constant/api.constant';

// export abstract class BaseRepositoryAbstract<T extends AbstractBaseEntityEntity>
//   implements IBaseRepositoryInterface<T>
// {
//   protected constructor(private readonly repository: Repository<T>) {}

//   async getList(
//     page: number,
//     itemsPerPage: number,
//     options?: FindManyOptions<T>,
//   ): Promise<ListResponse<T>> {
//     const skip = (page - 1) * itemsPerPage;

//     if (options && !options?.order) {
//       options.order = {
//         [sortFieldDefault]: sortByDefault,
//       } as unknown as FindOptionsOrder<T>;
//     }

//     const [result, total] = await this.repository.findAndCount({
//       skip,
//       take: itemsPerPage,
//       ...options,
//     });

//     const totalPages = Math.ceil(total / itemsPerPage);

//     return {
//       page: Number(page),
//       itemsPerPage: Number(itemsPerPage),
//       totalItems: total,
//       totalPages,
//       data: result || [],
//     };
//   }

//   async getAll(options?: FindManyOptions<T>): Promise<AllResponse<T>> {
//     const [items, totalCount] = await this.repository.findAndCount(options);

//     return { totalItems: totalCount, data: items };
//   }

//   async getMany(options?: FindManyOptions<T>): Promise<T[]> {
//     return await this.repository.find(options);
//   }

//   create(data: DeepPartial<T>): T {
//     return this.repository.create(data);
//   }

//   async save(data: DeepPartial<T>): Promise<T> {
//     const newModel = this.create(data);

//     return await this.repository.save(newModel);
//   }

//   async saveMany(data: DeepPartial<T>[]): Promise<T[]> {
//     return await this.repository.save(data);
//   }

//   async findOneById(id: number): Promise<T | null> {
//     return await this.repository.findOneBy({
//       id,
//       delFlg: false,
//     } as unknown as FindOptionsWhere<T>);
//   }

//   async findByCondition(filterCondition: FindOneOptions<T>): Promise<T | null> {
//     return await this.repository.findOne(filterCondition);
//   }

//   async update(id: number, data: DeepPartial<T>): Promise<T | null> {
//     const entity = await this.findOneById(id);
//     if (!entity) {
//       return null;
//     }
//     Object.assign(entity, data);

//     return await this.repository.save(entity);
//   }

//   async softDelete(id: number): Promise<boolean> {
//     const current = await this.findOneById(id);
//     if (!current) {
//       return false;
//     }
//     current.delFlg = true;
//     await this.save(current);

//     return true;
//   }

//   async remove(data: DeepPartial<T>): Promise<T> {
//     const newModel = this.create(data);

//     return await this.repository.remove(newModel);
//   }

//   async removeMany(data: DeepPartial<T>[]): Promise<T[]> {
//     const newModels = data.map((item) => this.create(item));

//     return await this.repository.remove(newModels);
//   }

//   createQueryBuilder(
//     alias?: string,
//     queryRunner?: QueryRunner,
//   ): SelectQueryBuilder<T> {
//     return this.repository.createQueryBuilder(alias, queryRunner);
//   }
// }
