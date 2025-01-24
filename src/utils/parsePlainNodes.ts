export type IStandardList = {
  edges: {
    cursor: any;
    node: any;
  }[];
  pageInfo: any;
  totalCount: number;
};

export type ListResponse<T extends IStandardList> = {
  items: Array<
    T['edges'][number]['node'] & { cursor: T['edges'][number]['cursor'] }
  >;
};

type IStandardChildrenList = {
  [key: string]: any;
  data: IStandardList;
};

export type PlainNodes<T extends IStandardChildrenList> = T &
  ListResponse<T['data']>;

export const parsePlainNodes = <T extends IStandardList>(
  response: T,
): ListResponse<T> & T => {
  return {
    ...response,
    items: response.edges.map(edge => ({
      ...edge.node,
      cursor: edge.cursor,
    })),
  };
};
