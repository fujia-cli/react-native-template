export interface RequestResponse<T = any> extends Omit<Partial<ErrorResponse>, 'data' | 'success'> {
  success: boolean;
  data?: T;
}

export interface ErrorResponse {
  errorCode: string;
  data: null;
  errMsg: string;
  timestamp: number;
  success: false;
  reference: string;
  requestId: string;
}
