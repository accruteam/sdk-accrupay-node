import { IStandardList, ListResponse } from './parsePlainNodes';

type WithoutTypename<T> = {
  [P in keyof T as Exclude<P, '__typename'>]: T[P];
};

export type Res<T, U = WithoutTypename<T>> =
  U extends Record<string, infer I>
    ? I extends IStandardList
      ? ListResponse<I>
      : I
    : never;

export type AccruPayResponseType<T extends (...args: any) => any> = Awaited<
  ReturnType<T>
>;
