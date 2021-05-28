export interface BrandEnvironments {
  allowedOrigin: string;
  apiHost: string;
}

export enum BrandName {
  JORA = 'jora',
  JOBSDB = 'jobsdb',
  JOBSTREETVN = 'jobstreetVn'
}

export interface BrandConfig {
  name: BrandName;
  origin: string;
  domainRegex: RegExp;
  domain: string;
  validCountryCodes: string[];
}

export type BrandConfigs = Record<BrandName, BrandConfig>;