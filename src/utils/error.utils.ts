export type CustomError = {
  message: string;
  code: string;
};

export const getErrorCode = (error: unknown | CustomError): string => {
  if ((error as CustomError).code) return (error as CustomError).code;
  return String(error);
};

export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) return error.message;
  return String(error);
};

export const reportError = (error: unknown): void => {
  console.error(getErrorMessage(error));
};
