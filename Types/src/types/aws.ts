import { PromiseResult } from 'aws-sdk/lib/request';
import { AWSError } from 'aws-sdk/lib/error';

export type AWSPromise<T> = Promise<PromiseResult<T, AWSError>>;

export interface EventBridgeEvent<Detail, DetailType = string> {
  version: string;
  id: string;
  'detail-type': DetailType;
  source: string;
  account: string;
  time: string;
  region: string;
  resources: string[];
  detail: Detail;
}
