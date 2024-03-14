import {
  DeepPartial,
  FindOneOptions,
  QueryRunner,
  SelectQueryBuilder,
} from 'typeorm';
import { FindManyOptions } from 'typeorm/find-options/FindManyOptions';
import { AllResponse, ListResponse, SortBy } from '../constant/api.constant';

export interface IBaseRepositoryInterface<T> {
  getList(
    page: number,
    itemsPerPage: number,
    options?: FindManyOptions<T>,
    sortBy?: SortBy,
    sortField?: string,
  ): Promise<ListResponse<T>>;
  getMany(options?: FindManyOptions<T>): Promise<T[]>;
  getAll(options?: FindManyOptions<T>): Promise<AllResponse<T>>;
  create(data: DeepPartial<T>): T;
  save(data: DeepPartial<T>): Promise<T>;
  saveMany(data: DeepPartial<T>[]): Promise<T[]>;
  findOneById(id: number): Promise<T | null>;

  findByCondition(filterCondition: FindOneOptions<T>): Promise<T | null>;
  update(id: number, data: DeepPartial<T>): Promise<T | null>;
  softDelete(id: number): Promise<boolean>;
  remove(data: DeepPartial<T>): Promise<T>;
  removeMany(data: DeepPartial<T>[]): Promise<T[]>;
  createQueryBuilder(
    alias?: string,
    queryRunner?: QueryRunner,
  ): SelectQueryBuilder<T>;
}
