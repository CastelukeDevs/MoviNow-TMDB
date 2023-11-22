export type IUser = {
  id?: string | null;
  firstName: string;
  lastName: string;
  age: number;
  photo: string | null;
};

export type IDefaultFetchState = {
  isLoading: boolean;
  error: IErrorMessage | null;
  isSuccess: boolean | null;
};

export type IErrorMessage = {
  isError: boolean;
  message: string | null;
};
