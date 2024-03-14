// import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
// import { DeepPartial, FindOneOptions } from 'typeorm';
// import { AllResponse, ListResponse } from '../constants';

// export interface IWriteInterface<T> {
//   create(item: DeepPartial<T>): Promise<T>;

//   save(item: DeepPartial<T>): Promise<T>;

//   saveMany(items: DeepPartial<T>[]): Promise<T[]>;

//   update(id: number, item: DeepPartial<T>): Promise<T | null>;

//   remove(id: number): Promise<boolean>;

//   removeMany(items: DeepPartial<T>[]): Promise<T[]>;
// }

// export interface IReadInterface<T> {
//   getAll(options?: FindManyOptions<T>): Promise<AllResponse<T>>;

//   getMany(options?: FindManyOptions<T>): Promise<T[]>;

//   getList(
//     page: number,
//     itemsPerPage: number,
//     options?: FindManyOptions<T>,
//   ): Promise<ListResponse<T>>;

//   getOne(id: number): Promise<T | null>;

//   getOneByCondition(filter: FindOneOptions<T>): Promise<T | null>;
// }

// export interface IBaseServiceInterface<T>
//   extends IWriteInterface<T>,
//     IReadInterface<T> {}
