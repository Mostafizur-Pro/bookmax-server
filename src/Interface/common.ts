export type IGenericResponse<T> = {
  meta: {
    total: number;
  };
  data: T;
};
