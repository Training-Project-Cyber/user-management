export type ListResponse<T> = {
  page?: number;
  itemsPerPage?: number;
  totalItems: number;
  totalPages?: number;
  data: T[];
};
export type AllResponse<T> = {
  totalItems: number;
  data: T[];
};

export type SortBy = 'ASC' | 'DESC';

export const sortByDefault = 'DESC';
export const sortFieldDefault = 'updatedAt';
