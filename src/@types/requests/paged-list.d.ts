export type PagedList<T> = {
  items: T[];
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
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
