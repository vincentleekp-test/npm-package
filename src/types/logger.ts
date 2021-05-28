export type LambdaError = Error & {
  tableName?: string;
  tableOperation?: string;
  originalUrl?: string;
  username?: string;
  body?: string;
  guid?: string;
};

export interface CustomLog {
  guid: string;
}

export interface ImpersonatorLog {
  impersonatorAction: string;
  impersonatorId: string;
  sessionId: string;
  employerId: string;
}