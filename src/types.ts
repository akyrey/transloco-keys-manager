export type Config = {
  input?: string;
  translationsPath?: string;
  langs?: string[];
  defaultValue?: undefined | string;
  replace?: boolean;
  addMissingKeys?: boolean;
  prodMode?: boolean;
  scopes?: Scopes;
  files?: string[];
};

export type ExtractionResult = {
  scopeToKeys: object;
  fileCount: number;
};

export type ExtractorConfig = {
  file: string;
  scopes: Scopes;
  defaultValue: string;
  scopeToKeys: ScopeMap;
};

export type Scopes = {
  scopeToAlias: object;
  aliasToScope: object;
};

export type ScopeMap = {
  __global: object;
  [scopePath: string]: object;
};

export enum TEMPLATE_TYPE {
  STRUCTURAL,
  NG_TEMPLATE
}