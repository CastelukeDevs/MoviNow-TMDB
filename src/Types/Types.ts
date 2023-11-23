export type IDefaultFetchState = {
  isLoading: boolean;
  error: IErrorMessage | null;
  isSuccess: boolean | null;
};

export type IErrorMessage = {
  isError: boolean;
  message: string | null;
};
