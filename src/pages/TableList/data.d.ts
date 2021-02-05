export type TableListItem = {
  id: number;
  title: string;
  desc: string;
  isComplete: boolean;
};

export type TableListPagination = {
  total: number;
  pageSize: number;
  current: number;
};

export type TableListData = {
  list: TableListItem[];
  pagination: Partial<TableListPagination>;
};