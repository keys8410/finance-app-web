export type PagedList<T> = {
  indexFrom: number;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
  items: T[];
  hasPreviousPage: boolean;
  hasNextPage: boolean;
};

export const blankList: PagedList<any> = {
  indexFrom: 0,
  pageIndex: 0,
  pageSize: 0,
  totalCount: 0,
  totalPages: 0,
  items: [],
  hasNextPage: false,
  hasPreviousPage: false,
};
