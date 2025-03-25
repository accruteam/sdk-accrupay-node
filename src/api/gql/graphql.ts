/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** The `BigInt` scalar type represents non-fractional signed whole numeric values. */
  BigInt: { input: bigint; output: bigint; }
  /** Cursor for pagination */
  ConnectionCursor: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: Date; output: Date; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AdminMerchantCreateSchema = {
  addressCity?: InputMaybe<Scalars['String']['input']>;
  addressCountry?: InputMaybe<COUNTRY_ISO_2>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressPostalCode?: InputMaybe<Scalars['String']['input']>;
  addressState?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  entityType?: InputMaybe<ENTITY_TYPE>;
  legalIdentifier?: InputMaybe<Scalars['String']['input']>;
  legalIdentifierType?: InputMaybe<LEGAL_IDENTIFIER_TYPE>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type AdminMerchantTransactionProviderCreateSchema = {
  credentials: Scalars['JSON']['input'];
  merchantId: Scalars['String']['input'];
  provider: TRANSACTION_PROVIDER;
  status: MERCHANT_TRANSACTION_PROVIDER_STATUS;
};

export type AdminMerchantTransactionProviderUpdateSchema = {
  credentials?: InputMaybe<Scalars['JSON']['input']>;
  status?: InputMaybe<MERCHANT_TRANSACTION_PROVIDER_STATUS>;
};

export type AdminMerchantUpdateSchema = {
  addressCity?: InputMaybe<Scalars['String']['input']>;
  addressCountry?: InputMaybe<COUNTRY_ISO_2>;
  addressLine1?: InputMaybe<Scalars['String']['input']>;
  addressLine2?: InputMaybe<Scalars['String']['input']>;
  addressPostalCode?: InputMaybe<Scalars['String']['input']>;
  addressState?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  entityType?: InputMaybe<ENTITY_TYPE>;
  legalIdentifier?: InputMaybe<Scalars['String']['input']>;
  legalIdentifierType?: InputMaybe<LEGAL_IDENTIFIER_TYPE>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type AdminMerchantUserCreateSchema = {
  isEnabled: Scalars['Boolean']['input'];
  role: MERCHANT_USER_ROLE;
  userId: Scalars['String']['input'];
};

export type AdminMerchantUserUpdateSchema = {
  isEnabled: Scalars['Boolean']['input'];
  role: MERCHANT_USER_ROLE;
};

export type BillingDataSchema = {
  billingAddressCity?: InputMaybe<Scalars['String']['input']>;
  /** Country using the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format (e.g. US, UK, etc.). */
  billingAddressCountry: COUNTRY_ISO_2;
  billingAddressLine1?: InputMaybe<Scalars['String']['input']>;
  billingAddressLine2?: InputMaybe<Scalars['String']['input']>;
  billingAddressPostalCode?: InputMaybe<Scalars['String']['input']>;
  /** State using the [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format for main country subdivisions, provinces, states (e.g. [for US] → NY, IN, CA, etc.). The [iso-3166-2](https://www.npmjs.com/package/iso-3166-2) package is suggested. */
  billingAddressState?: InputMaybe<Scalars['String']['input']>;
  billingEmail: Scalars['String']['input'];
  billingFirstName: Scalars['String']['input'];
  billingLastName: Scalars['String']['input'];
  billingPhone?: InputMaybe<Scalars['String']['input']>;
};

export enum COUNTRY_ISO_2 {
  AD = 'AD',
  AE = 'AE',
  AF = 'AF',
  AG = 'AG',
  AI = 'AI',
  AL = 'AL',
  AM = 'AM',
  AO = 'AO',
  AQ = 'AQ',
  AR = 'AR',
  AS = 'AS',
  AT = 'AT',
  AU = 'AU',
  AW = 'AW',
  AX = 'AX',
  AZ = 'AZ',
  BA = 'BA',
  BB = 'BB',
  BD = 'BD',
  BE = 'BE',
  BF = 'BF',
  BG = 'BG',
  BH = 'BH',
  BI = 'BI',
  BJ = 'BJ',
  BL = 'BL',
  BM = 'BM',
  BN = 'BN',
  BO = 'BO',
  BQ = 'BQ',
  BR = 'BR',
  BS = 'BS',
  BT = 'BT',
  BV = 'BV',
  BW = 'BW',
  BY = 'BY',
  BZ = 'BZ',
  CA = 'CA',
  CC = 'CC',
  CD = 'CD',
  CF = 'CF',
  CG = 'CG',
  CH = 'CH',
  CI = 'CI',
  CK = 'CK',
  CL = 'CL',
  CM = 'CM',
  CN = 'CN',
  CO = 'CO',
  CR = 'CR',
  CU = 'CU',
  CV = 'CV',
  CW = 'CW',
  CX = 'CX',
  CY = 'CY',
  CZ = 'CZ',
  DE = 'DE',
  DJ = 'DJ',
  DK = 'DK',
  DM = 'DM',
  DO = 'DO',
  DZ = 'DZ',
  EC = 'EC',
  EE = 'EE',
  EG = 'EG',
  EH = 'EH',
  ER = 'ER',
  ES = 'ES',
  ET = 'ET',
  FI = 'FI',
  FJ = 'FJ',
  FK = 'FK',
  FM = 'FM',
  FO = 'FO',
  FR = 'FR',
  GA = 'GA',
  GB = 'GB',
  GD = 'GD',
  GE = 'GE',
  GF = 'GF',
  GG = 'GG',
  GH = 'GH',
  GI = 'GI',
  GL = 'GL',
  GM = 'GM',
  GN = 'GN',
  GP = 'GP',
  GQ = 'GQ',
  GR = 'GR',
  GS = 'GS',
  GT = 'GT',
  GU = 'GU',
  GW = 'GW',
  GY = 'GY',
  HK = 'HK',
  HM = 'HM',
  HN = 'HN',
  HR = 'HR',
  HT = 'HT',
  HU = 'HU',
  ID = 'ID',
  IE = 'IE',
  IL = 'IL',
  IM = 'IM',
  IN = 'IN',
  IO = 'IO',
  IQ = 'IQ',
  IR = 'IR',
  IS = 'IS',
  IT = 'IT',
  JE = 'JE',
  JM = 'JM',
  JO = 'JO',
  JP = 'JP',
  KE = 'KE',
  KG = 'KG',
  KH = 'KH',
  KI = 'KI',
  KM = 'KM',
  KN = 'KN',
  KP = 'KP',
  KR = 'KR',
  KW = 'KW',
  KY = 'KY',
  KZ = 'KZ',
  LA = 'LA',
  LB = 'LB',
  LC = 'LC',
  LI = 'LI',
  LK = 'LK',
  LR = 'LR',
  LS = 'LS',
  LT = 'LT',
  LU = 'LU',
  LV = 'LV',
  LY = 'LY',
  MA = 'MA',
  MC = 'MC',
  MD = 'MD',
  ME = 'ME',
  MF = 'MF',
  MG = 'MG',
  MH = 'MH',
  MK = 'MK',
  ML = 'ML',
  MM = 'MM',
  MN = 'MN',
  MO = 'MO',
  MP = 'MP',
  MQ = 'MQ',
  MR = 'MR',
  MS = 'MS',
  MT = 'MT',
  MU = 'MU',
  MV = 'MV',
  MW = 'MW',
  MX = 'MX',
  MY = 'MY',
  MZ = 'MZ',
  NA = 'NA',
  NC = 'NC',
  NE = 'NE',
  NF = 'NF',
  NG = 'NG',
  NI = 'NI',
  NL = 'NL',
  NO = 'NO',
  NP = 'NP',
  NR = 'NR',
  NU = 'NU',
  NZ = 'NZ',
  OM = 'OM',
  PA = 'PA',
  PE = 'PE',
  PF = 'PF',
  PG = 'PG',
  PH = 'PH',
  PK = 'PK',
  PL = 'PL',
  PM = 'PM',
  PN = 'PN',
  PR = 'PR',
  PS = 'PS',
  PT = 'PT',
  PW = 'PW',
  PY = 'PY',
  QA = 'QA',
  RE = 'RE',
  RO = 'RO',
  RS = 'RS',
  RU = 'RU',
  RW = 'RW',
  SA = 'SA',
  SB = 'SB',
  SC = 'SC',
  SD = 'SD',
  SE = 'SE',
  SG = 'SG',
  SH = 'SH',
  SI = 'SI',
  SJ = 'SJ',
  SK = 'SK',
  SL = 'SL',
  SM = 'SM',
  SN = 'SN',
  SO = 'SO',
  SR = 'SR',
  SS = 'SS',
  ST = 'ST',
  SV = 'SV',
  SX = 'SX',
  SY = 'SY',
  SZ = 'SZ',
  TC = 'TC',
  TD = 'TD',
  TF = 'TF',
  TG = 'TG',
  TH = 'TH',
  TJ = 'TJ',
  TK = 'TK',
  TL = 'TL',
  TM = 'TM',
  TN = 'TN',
  TO = 'TO',
  TR = 'TR',
  TT = 'TT',
  TV = 'TV',
  TW = 'TW',
  TZ = 'TZ',
  UA = 'UA',
  UG = 'UG',
  UM = 'UM',
  US = 'US',
  UY = 'UY',
  UZ = 'UZ',
  VA = 'VA',
  VC = 'VC',
  VE = 'VE',
  VG = 'VG',
  VI = 'VI',
  VN = 'VN',
  VU = 'VU',
  WF = 'WF',
  WS = 'WS',
  YE = 'YE',
  YT = 'YT',
  ZA = 'ZA',
  ZM = 'ZM',
  ZW = 'ZW'
}

export enum CURRENCY {
  EUR = 'EUR',
  USD = 'USD'
}

export enum ENTITY_TYPE {
  COMPANY = 'COMPANY',
  INDIVIDUAL = 'INDIVIDUAL'
}

export type ErrorLog = {
  __typename?: 'ErrorLog';
  code?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  debug?: Maybe<Scalars['JSON']['output']>;
  environment?: Maybe<Scalars['String']['output']>;
  handler?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  merchantId?: Maybe<Scalars['String']['output']>;
  message: Scalars['String']['output'];
  method?: Maybe<Scalars['String']['output']>;
  operation?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Scalars['String']['output']>;
  payload?: Maybe<Scalars['JSON']['output']>;
  requestAgentInfo?: Maybe<Scalars['JSON']['output']>;
  requestContext?: Maybe<Scalars['JSON']['output']>;
  requestData?: Maybe<Scalars['JSON']['output']>;
  resolvedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  resolvedByEmail?: Maybe<Scalars['String']['output']>;
  responseContext?: Maybe<Scalars['JSON']['output']>;
  responseData?: Maybe<Scalars['JSON']['output']>;
  source?: Maybe<Scalars['String']['output']>;
  stack?: Maybe<Scalars['String']['output']>;
  statusCode?: Maybe<Scalars['Int']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
  userEmail?: Maybe<Scalars['String']['output']>;
  userId?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};

export type ErrorLogPaginationConnection = {
  __typename?: 'ErrorLogPaginationConnection';
  edges: Array<ErrorLogPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type ErrorLogPaginationEdge = {
  __typename?: 'ErrorLogPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: ErrorLog;
};

export enum LEGAL_IDENTIFIER_TYPE {
  EIN = 'EIN',
  ITIN = 'ITIN',
  SSN = 'SSN'
}

export enum MERCHANT_STATUS {
  ACTIVE = 'ACTIVE',
  DISABLED = 'DISABLED',
  PENDING = 'PENDING'
}

export enum MERCHANT_TRANSACTION_PROVIDER_STATUS {
  DISABLED = 'DISABLED',
  ENABLED = 'ENABLED'
}

export enum MERCHANT_USER_ROLE {
  ADMIN = 'ADMIN',
  DEVELOPER = 'DEVELOPER',
  OWNER = 'OWNER',
  VIEWER = 'VIEWER'
}

export type Merchant = {
  __typename?: 'Merchant';
  addressCity?: Maybe<Scalars['String']['output']>;
  addressCountry?: Maybe<COUNTRY_ISO_2>;
  addressLine1?: Maybe<Scalars['String']['output']>;
  addressLine2?: Maybe<Scalars['String']['output']>;
  addressPostalCode?: Maybe<Scalars['String']['output']>;
  addressState?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerificationId?: Maybe<Scalars['String']['output']>;
  entityType: ENTITY_TYPE;
  id: Scalars['ID']['output'];
  legalIdentifier?: Maybe<Scalars['String']['output']>;
  legalIdentifierType?: Maybe<LEGAL_IDENTIFIER_TYPE>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  phoneVerificationId?: Maybe<Scalars['String']['output']>;
  publicId?: Maybe<Scalars['String']['output']>;
  publicIdUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  status: MERCHANT_STATUS;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantApiClientTransactionPaymentStartSchema = {
  amount: Scalars['BigInt']['input'];
  billing: BillingDataSchema;
  currency: CURRENCY;
  merchantInternalCustomerCode: Scalars['String']['input'];
  merchantInternalTransactionCode: Scalars['String']['input'];
  storePaymentMethod: Scalars['Boolean']['input'];
};

export type MerchantApiKey = {
  __typename?: 'MerchantApiKey';
  archivedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  merchantId: Scalars['String']['output'];
  secret: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantApiKeyPaginationConnection = {
  __typename?: 'MerchantApiKeyPaginationConnection';
  edges: Array<MerchantApiKeyPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantApiKeyPaginationEdge = {
  __typename?: 'MerchantApiKeyPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantApiKey;
};

export type MerchantClientTransactionGenericPreSessionData = {
  __typename?: 'MerchantClientTransactionGenericPreSessionData';
  provider: TRANSACTION_PROVIDER;
  publicKey?: Maybe<Scalars['String']['output']>;
};

export type MerchantClientTransactionNuveiPreSessionData = {
  __typename?: 'MerchantClientTransactionNuveiPreSessionData';
  environment: Scalars['String']['output'];
  merchantId: Scalars['String']['output'];
  merchantSiteId: Scalars['String']['output'];
  provider: TRANSACTION_PROVIDER;
};

export type MerchantClientTransactionPreSessionData = MerchantClientTransactionGenericPreSessionData | MerchantClientTransactionNuveiPreSessionData;

export type MerchantCustomerPaymentMethod = {
  __typename?: 'MerchantCustomerPaymentMethod';
  billingAddressCity?: Maybe<Scalars['String']['output']>;
  billingAddressCountry?: Maybe<COUNTRY_ISO_2>;
  billingAddressLine1?: Maybe<Scalars['String']['output']>;
  billingAddressLine2?: Maybe<Scalars['String']['output']>;
  billingAddressPostalCode?: Maybe<Scalars['String']['output']>;
  billingAddressState?: Maybe<Scalars['String']['output']>;
  billingEmail?: Maybe<Scalars['String']['output']>;
  billingFirstName?: Maybe<Scalars['String']['output']>;
  billingLastName?: Maybe<Scalars['String']['output']>;
  billingPhone?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  isEnabled: Scalars['Boolean']['output'];
  merchantInternalCustomerCode: Scalars['String']['output'];
  methodType: PAYMENT_METHOD;
  paymentMethodInfo?: Maybe<MerchantCustomerPaymentMethodInfo>;
  providerCode: Scalars['String']['output'];
  providerError?: Maybe<Scalars['String']['output']>;
  providerLastVerifiedAt: Scalars['DateTimeISO']['output'];
  providerStatus: PAYMENT_METHOD_STATUS;
  transactionProviderId: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantCustomerPaymentMethodCreditCardInfo = {
  __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo';
  cardBrand?: Maybe<Scalars['String']['output']>;
  cardNumberMasked?: Maybe<Scalars['String']['output']>;
  methodType: PAYMENT_METHOD;
};

export type MerchantCustomerPaymentMethodGenericInfo = {
  __typename?: 'MerchantCustomerPaymentMethodGenericInfo';
  methodType: PAYMENT_METHOD;
};

export type MerchantCustomerPaymentMethodInfo = MerchantCustomerPaymentMethodCreditCardInfo | MerchantCustomerPaymentMethodGenericInfo;

export type MerchantCustomerPaymentMethodPaginationConnection = {
  __typename?: 'MerchantCustomerPaymentMethodPaginationConnection';
  edges: Array<MerchantCustomerPaymentMethodPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantCustomerPaymentMethodPaginationEdge = {
  __typename?: 'MerchantCustomerPaymentMethodPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantCustomerPaymentMethod;
};

export type MerchantPaginationConnection = {
  __typename?: 'MerchantPaginationConnection';
  edges: Array<MerchantPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantPaginationEdge = {
  __typename?: 'MerchantPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: Merchant;
};

export type MerchantPaymentPlan = {
  __typename?: 'MerchantPaymentPlan';
  amount: Scalars['BigInt']['output'];
  canceledAt?: Maybe<Scalars['DateTimeISO']['output']>;
  createdAt: Scalars['DateTimeISO']['output'];
  currency: CURRENCY;
  currentPeriodEnd: Scalars['DateTimeISO']['output'];
  currentPeriodStart: Scalars['DateTimeISO']['output'];
  endsAfterDays: Scalars['Int']['output'];
  endsAfterMonths: Scalars['Int']['output'];
  endsAfterYears: Scalars['Int']['output'];
  endsAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  initialAmount: Scalars['BigInt']['output'];
  merchantInternalCustomerCode: Scalars['String']['output'];
  merchantInternalPaymentPlanCode: Scalars['String']['output'];
  merchantInternalPaymentPlanDescription?: Maybe<Scalars['String']['output']>;
  payload: Scalars['JSON']['output'];
  paymentMethod: MerchantCustomerPaymentMethod;
  paymentMethodId: Scalars['String']['output'];
  periodCount: Scalars['Int']['output'];
  providerCode: Scalars['String']['output'];
  providerError?: Maybe<Scalars['String']['output']>;
  providerLastVerifiedAt: Scalars['DateTimeISO']['output'];
  providerStatus: PAYMENT_PLAN_STATUS;
  renewalIntervalDays: Scalars['Int']['output'];
  renewalIntervalMonths: Scalars['Int']['output'];
  renewalIntervalYears: Scalars['Int']['output'];
  startedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  status: PAYMENT_PLAN_STATUS;
  template?: Maybe<MerchantPaymentPlanTemplate>;
  templateId?: Maybe<Scalars['String']['output']>;
  timeAnchor: Scalars['DateTimeISO']['output'];
  transactionProvider: MerchantTransactionProvider;
  transactionProviderId: Scalars['String']['output'];
  transactions: Array<MerchantTransaction>;
  trialEndsAt: Scalars['DateTimeISO']['output'];
  trialPeriodDays: Scalars['Int']['output'];
  trialPeriodMonths: Scalars['Int']['output'];
  trialPeriodYears: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantPaymentPlanCreateSchema = {
  amount: Scalars['BigInt']['input'];
  currency: CURRENCY;
  endsAfterDays: Scalars['Int']['input'];
  endsAfterMonths: Scalars['Int']['input'];
  endsAfterYears: Scalars['Int']['input'];
  initialAmount: Scalars['BigInt']['input'];
  merchantInternalCustomerCode: Scalars['String']['input'];
  merchantInternalPaymentPlanCode: Scalars['String']['input'];
  merchantInternalPaymentPlanDescription?: InputMaybe<Scalars['String']['input']>;
  paymentMethodId: Scalars['String']['input'];
  renewalIntervalDays: Scalars['Int']['input'];
  renewalIntervalMonths: Scalars['Int']['input'];
  renewalIntervalYears: Scalars['Int']['input'];
  templateId: Scalars['String']['input'];
  trialPeriodDays: Scalars['Int']['input'];
  trialPeriodMonths: Scalars['Int']['input'];
  trialPeriodYears: Scalars['Int']['input'];
};

export type MerchantPaymentPlanPaginationConnection = {
  __typename?: 'MerchantPaymentPlanPaginationConnection';
  edges: Array<MerchantPaymentPlanPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantPaymentPlanPaginationEdge = {
  __typename?: 'MerchantPaymentPlanPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantPaymentPlan;
};

export type MerchantPaymentPlanTemplate = {
  __typename?: 'MerchantPaymentPlanTemplate';
  amount: Scalars['BigInt']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  currency: CURRENCY;
  description?: Maybe<Scalars['String']['output']>;
  endsAfterDays: Scalars['Int']['output'];
  endsAfterMonths: Scalars['Int']['output'];
  endsAfterYears: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  initialAmount: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  payload: Scalars['JSON']['output'];
  providerCode: Scalars['String']['output'];
  providerError?: Maybe<Scalars['String']['output']>;
  providerLastVerifiedAt: Scalars['DateTimeISO']['output'];
  providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS;
  renewalIntervalDays: Scalars['Int']['output'];
  renewalIntervalMonths: Scalars['Int']['output'];
  renewalIntervalYears: Scalars['Int']['output'];
  transactionProviderId: Scalars['String']['output'];
  trialPeriodDays: Scalars['Int']['output'];
  trialPeriodMonths: Scalars['Int']['output'];
  trialPeriodYears: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantPaymentPlanTemplateCreateSchema = {
  amount: Scalars['BigInt']['input'];
  currency: CURRENCY;
  description?: InputMaybe<Scalars['String']['input']>;
  endsAfterDays: Scalars['Int']['input'];
  endsAfterMonths: Scalars['Int']['input'];
  endsAfterYears: Scalars['Int']['input'];
  initialAmount: Scalars['BigInt']['input'];
  name: Scalars['String']['input'];
  providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS;
  renewalIntervalDays: Scalars['Int']['input'];
  renewalIntervalMonths: Scalars['Int']['input'];
  renewalIntervalYears: Scalars['Int']['input'];
  trialPeriodDays: Scalars['Int']['input'];
  trialPeriodMonths: Scalars['Int']['input'];
  trialPeriodYears: Scalars['Int']['input'];
};

export type MerchantPaymentPlanTemplatePaginationConnection = {
  __typename?: 'MerchantPaymentPlanTemplatePaginationConnection';
  edges: Array<MerchantPaymentPlanTemplatePaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantPaymentPlanTemplatePaginationEdge = {
  __typename?: 'MerchantPaymentPlanTemplatePaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantPaymentPlanTemplate;
};

export type MerchantPaymentPlanTemplateUpdateSchema = {
  amount?: InputMaybe<Scalars['BigInt']['input']>;
  currency?: InputMaybe<CURRENCY>;
  description?: InputMaybe<Scalars['String']['input']>;
  endsAfterDays?: InputMaybe<Scalars['Int']['input']>;
  endsAfterMonths?: InputMaybe<Scalars['Int']['input']>;
  endsAfterYears?: InputMaybe<Scalars['Int']['input']>;
  initialAmount?: InputMaybe<Scalars['BigInt']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  providerStatus?: InputMaybe<PAYMENT_PLAN_TEMPLATE_STATUS>;
  renewalIntervalDays?: InputMaybe<Scalars['Int']['input']>;
  renewalIntervalMonths?: InputMaybe<Scalars['Int']['input']>;
  renewalIntervalYears?: InputMaybe<Scalars['Int']['input']>;
  trialPeriodDays?: InputMaybe<Scalars['Int']['input']>;
  trialPeriodMonths?: InputMaybe<Scalars['Int']['input']>;
  trialPeriodYears?: InputMaybe<Scalars['Int']['input']>;
};

export type MerchantTransaction = {
  __typename?: 'MerchantTransaction';
  action: TRANSACTION_ACTION;
  amount: Scalars['BigInt']['output'];
  billingAddressCity?: Maybe<Scalars['String']['output']>;
  billingAddressCountry?: Maybe<COUNTRY_ISO_2>;
  billingAddressLine1?: Maybe<Scalars['String']['output']>;
  billingAddressLine2?: Maybe<Scalars['String']['output']>;
  billingAddressPostalCode?: Maybe<Scalars['String']['output']>;
  billingAddressState?: Maybe<Scalars['String']['output']>;
  billingEmail?: Maybe<Scalars['String']['output']>;
  billingFirstName?: Maybe<Scalars['String']['output']>;
  billingLastName?: Maybe<Scalars['String']['output']>;
  billingPhone?: Maybe<Scalars['String']['output']>;
  canceledAt?: Maybe<Scalars['DateTimeISO']['output']>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  currency: CURRENCY;
  disputedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  failedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  merchantInternalCustomerCode?: Maybe<Scalars['String']['output']>;
  merchantInternalTransactionCode?: Maybe<Scalars['String']['output']>;
  payload: Scalars['JSON']['output'];
  paymentMethod?: Maybe<MerchantCustomerPaymentMethod>;
  paymentMethodCode?: Maybe<Scalars['String']['output']>;
  paymentMethodId?: Maybe<Scalars['String']['output']>;
  paymentMethodType?: Maybe<PAYMENT_METHOD>;
  paymentPlan?: Maybe<MerchantPaymentPlan>;
  paymentPlanId?: Maybe<Scalars['String']['output']>;
  providerCode: Scalars['String']['output'];
  providerError?: Maybe<Scalars['String']['output']>;
  providerLastVerifiedAt: Scalars['DateTimeISO']['output'];
  providerRelatedCode?: Maybe<Scalars['String']['output']>;
  providerStatus: TRANSACTION_STATUS;
  relatedTransactionId?: Maybe<Scalars['String']['output']>;
  revertedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  startedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  status: TRANSACTION_STATUS;
  storePaymentMethod?: Maybe<Scalars['Boolean']['output']>;
  succeededAt?: Maybe<Scalars['DateTimeISO']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  tokenExpiresAt?: Maybe<Scalars['DateTimeISO']['output']>;
  transactionDate: Scalars['DateTimeISO']['output'];
  transactionProvider: MerchantTransactionProvider;
  transactionProviderId: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantTransactionPaginationConnection = {
  __typename?: 'MerchantTransactionPaginationConnection';
  edges: Array<MerchantTransactionPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantTransactionPaginationEdge = {
  __typename?: 'MerchantTransactionPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantTransaction;
};

export type MerchantTransactionProvider = {
  __typename?: 'MerchantTransactionProvider';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  merchantId: Scalars['String']['output'];
  provider: TRANSACTION_PROVIDER;
  providerCode: Scalars['String']['output'];
  status: MERCHANT_TRANSACTION_PROVIDER_STATUS;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantTransactionProviderPaginationConnection = {
  __typename?: 'MerchantTransactionProviderPaginationConnection';
  edges: Array<MerchantTransactionProviderPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantTransactionProviderPaginationEdge = {
  __typename?: 'MerchantTransactionProviderPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantTransactionProvider;
};

export type MerchantUser = {
  __typename?: 'MerchantUser';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  isEnabled: Scalars['Boolean']['output'];
  merchant: Merchant;
  merchantId: Scalars['String']['output'];
  role: MERCHANT_USER_ROLE;
  updatedAt: Scalars['DateTimeISO']['output'];
  user: User;
  userId: Scalars['String']['output'];
};

export type MerchantUserPaginationConnection = {
  __typename?: 'MerchantUserPaginationConnection';
  edges: Array<MerchantUserPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MerchantUserPaginationEdge = {
  __typename?: 'MerchantUserPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: MerchantUser;
};

export type Mutation = {
  __typename?: 'Mutation';
  adminErrorLogMarkAllAsResolved: Scalars['DateTimeISO']['output'];
  adminErrorLogMarkAsResolved: ErrorLog;
  adminMerchantApiKeyCreate: MerchantApiKey;
  adminMerchantApiKeyDelete: Scalars['DateTimeISO']['output'];
  adminMerchantCreate: Merchant;
  adminMerchantResetPublicId: Merchant;
  adminMerchantTransactionProviderCreate: MerchantTransactionProvider;
  adminMerchantTransactionProviderUpdate: MerchantTransactionProvider;
  adminMerchantUpdate: Merchant;
  adminMerchantUpdateStatus: Merchant;
  adminMerchantUserCreate: MerchantUser;
  adminMerchantUserUpdate: MerchantUser;
  merchantApiClientTransactionPaymentSessionStart: MerchantTransaction;
  merchantApiClientTransactionPaymentSessionVerify: MerchantTransaction;
  merchantApiCustomerPaymentMethodSyncAll: Array<MerchantCustomerPaymentMethod>;
  merchantApiCustomerPaymentMethodSyncOne: MerchantCustomerPaymentMethod;
  merchantApiPaymentPlanCancel: MerchantPaymentPlan;
  merchantApiPaymentPlanCreate: MerchantPaymentPlan;
  merchantApiPaymentPlanSyncAll: Array<MerchantPaymentPlan>;
  merchantApiPaymentPlanSyncOne: MerchantPaymentPlan;
  merchantApiPaymentPlanTemplateCreate: MerchantPaymentPlanTemplate;
  merchantApiPaymentPlanTemplateSyncAll: Array<MerchantPaymentPlanTemplate>;
  merchantApiPaymentPlanTemplateSyncOne: MerchantPaymentPlanTemplate;
  merchantApiPaymentPlanTemplateUpdate: MerchantPaymentPlanTemplate;
  merchantApiTransactionRefund: MerchantTransaction;
  merchantApiTransactionSyncOne: MerchantTransaction;
  merchantApiTransactionVoid: MerchantTransaction;
  userEmailVerifyOrChangeFinish: User;
  userEmailVerifyOrChangeStart: Scalars['DateTimeISO']['output'];
  userHandleLoginAttempt: Scalars['DateTimeISO']['output'];
  userPasswordChangeFinish: Scalars['String']['output'];
  userPasswordChangeStart: Scalars['DateTimeISO']['output'];
  userPasswordResetFinish: Scalars['String']['output'];
  userPasswordResetStart: Scalars['String']['output'];
  userSessionsClose: Scalars['DateTimeISO']['output'];
  /** This method is used to finish the user sign up process. The string returned is the authentication provider custom token, use it to log in. */
  userSignUpWithEmailFinish: Scalars['String']['output'];
  userSignUpWithEmailStart: Scalars['DateTimeISO']['output'];
  userSignUpWithEmailVerify: Scalars['DateTimeISO']['output'];
  userUpdateData: User;
};


export type MutationadminErrorLogMarkAsResolvedArgs = {
  errorLogId: Scalars['String']['input'];
};


export type MutationadminMerchantApiKeyCreateArgs = {
  merchantId: Scalars['String']['input'];
};


export type MutationadminMerchantApiKeyDeleteArgs = {
  merchantApiKeyId: Scalars['String']['input'];
};


export type MutationadminMerchantCreateArgs = {
  data: AdminMerchantCreateSchema;
};


export type MutationadminMerchantResetPublicIdArgs = {
  merchantId: Scalars['String']['input'];
};


export type MutationadminMerchantTransactionProviderCreateArgs = {
  data: AdminMerchantTransactionProviderCreateSchema;
};


export type MutationadminMerchantTransactionProviderUpdateArgs = {
  data: AdminMerchantTransactionProviderUpdateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationadminMerchantUpdateArgs = {
  data: AdminMerchantUpdateSchema;
  merchantId: Scalars['String']['input'];
};


export type MutationadminMerchantUpdateStatusArgs = {
  merchantId: Scalars['String']['input'];
  status: MERCHANT_STATUS;
};


export type MutationadminMerchantUserCreateArgs = {
  data: AdminMerchantUserCreateSchema;
  merchantId: Scalars['String']['input'];
};


export type MutationadminMerchantUserUpdateArgs = {
  data: AdminMerchantUserUpdateSchema;
  merchantUserId: Scalars['String']['input'];
};


export type MutationmerchantApiClientTransactionPaymentSessionStartArgs = {
  data: MerchantApiClientTransactionPaymentStartSchema;
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
};


export type MutationmerchantApiClientTransactionPaymentSessionVerifyArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationmerchantApiCustomerPaymentMethodSyncAllArgs = {
  merchantInternalCustomerCode: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiCustomerPaymentMethodSyncOneArgs = {
  merchantInternalCustomerCode: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanCancelArgs = {
  merchantPaymentPlanId: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanCreateArgs = {
  data: MerchantPaymentPlanCreateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanSyncAllArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanSyncOneArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanTemplateCreateArgs = {
  data: MerchantPaymentPlanTemplateCreateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanTemplateSyncAllArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanTemplateSyncOneArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode: Scalars['String']['input'];
};


export type MutationmerchantApiPaymentPlanTemplateUpdateArgs = {
  data: MerchantPaymentPlanTemplateUpdateSchema;
  merchantPaymentPlanTemplateId: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantApiTransactionRefundArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationmerchantApiTransactionSyncOneArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationmerchantApiTransactionVoidArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationuserEmailVerifyOrChangeFinishArgs = {
  data: UserEmailVerifyOrChangeFinishSchema;
};


export type MutationuserEmailVerifyOrChangeStartArgs = {
  data: UserEmailVerifyOrChangeStartSchema;
};


export type MutationuserHandleLoginAttemptArgs = {
  email: Scalars['String']['input'];
};


export type MutationuserPasswordChangeFinishArgs = {
  data: UserPasswordChangeFinishSchema;
};


export type MutationuserPasswordChangeStartArgs = {
  data: UserPasswordChangeStartSchema;
};


export type MutationuserPasswordResetFinishArgs = {
  data: UserPasswordResetFinishSchema;
};


export type MutationuserPasswordResetStartArgs = {
  data: UserPasswordResetStartSchema;
};


export type MutationuserSignUpWithEmailFinishArgs = {
  data: UserSignUpWithEmailFinishSchema;
};


export type MutationuserSignUpWithEmailStartArgs = {
  data: UserSignUpWithEmailStartSchema;
};


export type MutationuserSignUpWithEmailVerifyArgs = {
  data: UserSignUpWithEmailVerifySchema;
};


export type MutationuserUpdateDataArgs = {
  data: UserUpdateDataSchema;
};

export enum PAYMENT_METHOD {
  CARD = 'CARD'
}

export enum PAYMENT_METHOD_STATUS {
  DISABLED = 'DISABLED',
  ENABLED = 'ENABLED'
}

export enum PAYMENT_PLAN_STATUS {
  ACTIVE = 'ACTIVE',
  CANCELED = 'CANCELED',
  ENDED = 'ENDED',
  ERROR = 'ERROR',
  INACTIVE = 'INACTIVE',
  INITIALIZING = 'INITIALIZING'
}

export enum PAYMENT_PLAN_TEMPLATE_STATUS {
  DISABLED = 'DISABLED',
  ENABLED = 'ENABLED'
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  adminErrorLogs: ErrorLogPaginationConnection;
  adminMerchant: Merchant;
  adminMerchantApiKey: MerchantApiKey;
  adminMerchantApiKeys: MerchantApiKeyPaginationConnection;
  adminMerchantTransactionProvider: MerchantTransactionProvider;
  adminMerchantTransactionProviderCredential: Scalars['JSON']['output'];
  adminMerchantTransactionProviders: MerchantTransactionProviderPaginationConnection;
  adminMerchantUser: MerchantUser;
  adminMerchantUsers: MerchantUserPaginationConnection;
  adminMerchants: MerchantPaginationConnection;
  adminUsers: UserPaginationConnection;
  clientPublicTransactionGetPreSessionData: MerchantClientTransactionPreSessionData;
  healthCheck: Scalars['DateTimeISO']['output'];
  healthLivenessCheck: Scalars['DateTimeISO']['output'];
  healthReadinessCheck: Scalars['DateTimeISO']['output'];
  merchantApi: Merchant;
  merchantApiClientGetPreSessionData: MerchantClientTransactionPreSessionData;
  merchantApiCustomerPaymentMethod: MerchantCustomerPaymentMethod;
  merchantApiCustomerPaymentMethods: MerchantCustomerPaymentMethodPaginationConnection;
  merchantApiPaymentPlan: MerchantPaymentPlan;
  merchantApiPaymentPlanTemplate: MerchantPaymentPlanTemplate;
  merchantApiPaymentPlanTemplates: MerchantPaymentPlanTemplatePaginationConnection;
  merchantApiPaymentPlans: MerchantPaymentPlanPaginationConnection;
  merchantApiTransaction: MerchantTransaction;
  merchantApiTransactionProvider: MerchantTransactionProvider;
  merchantApiTransactionProviders: MerchantTransactionProviderPaginationConnection;
  merchantApiTransactions: MerchantTransactionPaginationConnection;
  user: User;
  userMerchant: Merchant;
  userMerchants: MerchantPaginationConnection;
};


export type QueryadminErrorLogsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  message?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  resolved?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryadminMerchantArgs = {
  merchantId: Scalars['String']['input'];
};


export type QueryadminMerchantApiKeyArgs = {
  merchantApiKeyId: Scalars['String']['input'];
};


export type QueryadminMerchantApiKeysArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId: Scalars['String']['input'];
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryadminMerchantTransactionProviderArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type QueryadminMerchantTransactionProviderCredentialArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type QueryadminMerchantTransactionProvidersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<TRANSACTION_PROVIDER>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  status?: InputMaybe<MERCHANT_TRANSACTION_PROVIDER_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryadminMerchantUserArgs = {
  merchantUserId: Scalars['String']['input'];
};


export type QueryadminMerchantUsersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isEnabled?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantId?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<MERCHANT_USER_ROLE>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userEmail?: InputMaybe<Scalars['String']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
  userName?: InputMaybe<Scalars['String']['input']>;
};


export type QueryadminMerchantsArgs = {
  addressCity?: InputMaybe<Scalars['String']['input']>;
  addressCountry?: InputMaybe<COUNTRY_ISO_2>;
  addressPostalCode?: InputMaybe<Scalars['String']['input']>;
  addressState?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<ENTITY_TYPE>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  legalIdentifier?: InputMaybe<Scalars['String']['input']>;
  legalIdentifierType?: InputMaybe<LEGAL_IDENTIFIER_TYPE>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  publicId?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  status?: InputMaybe<MERCHANT_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
  userId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryadminUsersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerified?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phoneVerified?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryclientPublicTransactionGetPreSessionDataArgs = {
  merchantPublicId: Scalars['String']['input'];
  transactionCode: Scalars['String']['input'];
};


export type QuerymerchantApiClientGetPreSessionDataArgs = {
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
};


export type QuerymerchantApiCustomerPaymentMethodArgs = {
  merchantCustomerPaymentMethodId: Scalars['String']['input'];
};


export type QuerymerchantApiCustomerPaymentMethodsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantInternalCustomerCode?: InputMaybe<Scalars['String']['input']>;
  methodType?: InputMaybe<PAYMENT_METHOD>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerymerchantApiPaymentPlanArgs = {
  merchantPaymentPlanId: Scalars['String']['input'];
};


export type QuerymerchantApiPaymentPlanTemplateArgs = {
  merchantPaymentPlanTemplateId: Scalars['String']['input'];
};


export type QuerymerchantApiPaymentPlanTemplatesArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  currency?: InputMaybe<CURRENCY>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  providerStatus?: InputMaybe<PAYMENT_PLAN_TEMPLATE_STATUS>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerymerchantApiPaymentPlansArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<CURRENCY>;
  ended?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantInternalCustomerCode?: InputMaybe<Scalars['String']['input']>;
  merchantInternalPaymentPlanCode?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<PAYMENT_METHOD>;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  providerStatus?: InputMaybe<PAYMENT_PLAN_STATUS>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  templateId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerymerchantApiTransactionArgs = {
  code?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type QuerymerchantApiTransactionProviderArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type QuerymerchantApiTransactionProvidersArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  provider?: InputMaybe<TRANSACTION_PROVIDER>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  status?: InputMaybe<MERCHANT_TRANSACTION_PROVIDER_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
};


export type QuerymerchantApiTransactionsArgs = {
  action?: InputMaybe<TRANSACTION_ACTION>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CURRENCY>;
  disputed?: InputMaybe<Scalars['Boolean']['input']>;
  failed?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantInternalCustomerCode?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  paymentMethodType?: InputMaybe<PAYMENT_METHOD>;
  paymentPlanId?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  providerRelatedCode?: InputMaybe<Scalars['String']['input']>;
  relatedTransactionId?: InputMaybe<Scalars['String']['input']>;
  reverted?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  status?: InputMaybe<TRANSACTION_STATUS>;
  succeeded?: InputMaybe<Scalars['Boolean']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserMerchantArgs = {
  merchantId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryuserMerchantsArgs = {
  addressCity?: InputMaybe<Scalars['String']['input']>;
  addressCountry?: InputMaybe<COUNTRY_ISO_2>;
  addressPostalCode?: InputMaybe<Scalars['String']['input']>;
  addressState?: InputMaybe<Scalars['String']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  entityType?: InputMaybe<ENTITY_TYPE>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  legalIdentifier?: InputMaybe<Scalars['String']['input']>;
  legalIdentifierType?: InputMaybe<LEGAL_IDENTIFIER_TYPE>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  publicId?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  status?: InputMaybe<MERCHANT_STATUS>;
  take?: InputMaybe<Scalars['Int']['input']>;
};

export enum SORT_ORDER {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type SortingFieldSchema = {
  field: Scalars['String']['input'];
  order: SORT_ORDER;
};

export enum TRANSACTION_ACTION {
  AUTHORIZATION = 'AUTHORIZATION',
  CHARGEBACK = 'CHARGEBACK',
  CREDIT = 'CREDIT',
  MODIFICATION = 'MODIFICATION',
  PAYMENT = 'PAYMENT',
  PAYOUT = 'PAYOUT',
  REFUND = 'REFUND',
  SETTLE = 'SETTLE',
  UNKNOWN = 'UNKNOWN',
  VOID = 'VOID'
}

export enum TRANSACTION_PROVIDER {
  NUVEI = 'NUVEI'
}

export enum TRANSACTION_STATUS {
  DECLINED = 'DECLINED',
  ERROR = 'ERROR',
  EXPIRED = 'EXPIRED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  STARTED = 'STARTED',
  SUCCEEDED = 'SUCCEEDED',
  UNKNOWN = 'UNKNOWN'
}

export type User = {
  __typename?: 'User';
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  emailVerificationId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  isAdmin: Scalars['Boolean']['output'];
  merchants: Array<MerchantUser>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  phoneVerificationId?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type UserEmailVerifyOrChangeFinishSchema = {
  email: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type UserEmailVerifyOrChangeStartSchema = {
  email: Scalars['String']['input'];
};

export type UserPaginationConnection = {
  __typename?: 'UserPaginationConnection';
  edges: Array<UserPaginationEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type UserPaginationEdge = {
  __typename?: 'UserPaginationEdge';
  cursor: Scalars['ConnectionCursor']['output'];
  node: User;
};

export type UserPasswordChangeFinishSchema = {
  updatedPassword: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type UserPasswordChangeStartSchema = {
  currentPassword?: InputMaybe<Scalars['String']['input']>;
};

export type UserPasswordResetFinishSchema = {
  email: Scalars['String']['input'];
  updatedPassword: Scalars['String']['input'];
  userId: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type UserPasswordResetStartSchema = {
  email: Scalars['String']['input'];
};

export type UserSignUpWithEmailFinishSchema = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type UserSignUpWithEmailStartSchema = {
  email: Scalars['String']['input'];
};

export type UserSignUpWithEmailVerifySchema = {
  email: Scalars['String']['input'];
  verificationCode: Scalars['String']['input'];
};

export type UserUpdateDataSchema = {
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type MerchantFragmentFragment = { __typename?: 'Merchant', id: string, name: string, email: string, phone?: string | null, status: MERCHANT_STATUS, publicId?: string | null, publicIdUpdatedAt?: Date | null, createdAt: Date, updatedAt: Date };

export type MerchantApiQueryVariables = Exact<{ [key: string]: never; }>;


export type MerchantApiQuery = { __typename?: 'Query', merchantApi: { __typename?: 'Merchant', id: string, name: string, email: string, phone?: string | null, status: MERCHANT_STATUS, publicId?: string | null, publicIdUpdatedAt?: Date | null, createdAt: Date, updatedAt: Date } };

export type MerchantCustomerPaymentMethodFragmentFragment = { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressState?: string | null, billingAddressCity?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressPostalCode?: string | null, merchantInternalCustomerCode: string, createdAt: Date, updatedAt: Date, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null };

export type MerchantApiCustomerPaymentMethodsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  methodType?: InputMaybe<PAYMENT_METHOD>;
  merchantInternalCustomerCode?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type MerchantApiCustomerPaymentMethodsQuery = { __typename?: 'Query', merchantApiCustomerPaymentMethods: { __typename?: 'MerchantCustomerPaymentMethodPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'MerchantCustomerPaymentMethodPaginationEdge', cursor: any, node: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressState?: string | null, billingAddressCity?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressPostalCode?: string | null, merchantInternalCustomerCode: string, createdAt: Date, updatedAt: Date, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type MerchantApiCustomerPaymentMethodQueryVariables = Exact<{
  merchantCustomerPaymentMethodId: Scalars['String']['input'];
}>;


export type MerchantApiCustomerPaymentMethodQuery = { __typename?: 'Query', merchantApiCustomerPaymentMethod: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressState?: string | null, billingAddressCity?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressPostalCode?: string | null, merchantInternalCustomerCode: string, createdAt: Date, updatedAt: Date, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null } };

export type MerchantPaymentPlanTemplateFragmentFragment = { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: Date, updatedAt: Date, transactionProviderId: string };

export type MerchantApiPaymentPlanTemplatesQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CURRENCY>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  providerStatus?: InputMaybe<PAYMENT_PLAN_TEMPLATE_STATUS>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type MerchantApiPaymentPlanTemplatesQuery = { __typename?: 'Query', merchantApiPaymentPlanTemplates: { __typename?: 'MerchantPaymentPlanTemplatePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'MerchantPaymentPlanTemplatePaginationEdge', cursor: any, node: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: Date, updatedAt: Date, transactionProviderId: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type MerchantApiPaymentPlanTemplateQueryVariables = Exact<{
  merchantPaymentPlanTemplateId: Scalars['String']['input'];
}>;


export type MerchantApiPaymentPlanTemplateQuery = { __typename?: 'Query', merchantApiPaymentPlanTemplate: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: Date, updatedAt: Date, transactionProviderId: string } };

export type MerchantApiPaymentPlanTemplateCreateMutationVariables = Exact<{
  data: MerchantPaymentPlanTemplateCreateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
}>;


export type MerchantApiPaymentPlanTemplateCreateMutation = { __typename?: 'Mutation', merchantApiPaymentPlanTemplateCreate: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: Date, updatedAt: Date, transactionProviderId: string } };

export type MerchantApiPaymentPlanTemplateUpdateMutationVariables = Exact<{
  data: MerchantPaymentPlanTemplateUpdateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
  merchantPaymentPlanTemplateId: Scalars['String']['input'];
}>;


export type MerchantApiPaymentPlanTemplateUpdateMutation = { __typename?: 'Mutation', merchantApiPaymentPlanTemplateUpdate: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: Date, updatedAt: Date, transactionProviderId: string } };

export type MerchantPaymentPlanFragmentFragment = { __typename?: 'MerchantPaymentPlan', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_PLAN_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, timeAnchor: Date, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, trialEndsAt: Date, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, periodCount: number, endsAfterMonths: number, endsAfterDays: number, endsAfterYears: number, endsAt: Date, startedAt?: Date | null, canceledAt?: Date | null, currentPeriodStart: Date, currentPeriodEnd: Date, merchantInternalCustomerCode: string, merchantInternalPaymentPlanCode: string, merchantInternalPaymentPlanDescription?: string | null, createdAt: Date, updatedAt: Date, status: PAYMENT_PLAN_STATUS, transactionProviderId: string, templateId?: string | null, paymentMethodId: string, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: Date, updatedAt: Date, merchantId: string }, template?: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: Date, updatedAt: Date, transactionProviderId: string } | null, paymentMethod: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressState?: string | null, billingAddressCity?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressPostalCode?: string | null, merchantInternalCustomerCode: string, createdAt: Date, updatedAt: Date, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null }, transactions: Array<{ __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: Date | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: Date, startedAt?: Date | null, succeededAt?: Date | null, failedAt?: Date | null, canceledAt?: Date | null, revertedAt?: Date | null, disputedAt?: Date | null, storePaymentMethod?: boolean | null, merchantInternalCustomerCode?: string | null, merchantInternalTransactionCode?: string | null, createdAt: Date, updatedAt: Date, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, paymentPlanId?: string | null }> };

export type MerchantApiPaymentPlansQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CURRENCY>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  providerStatus?: InputMaybe<PAYMENT_PLAN_STATUS>;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<PAYMENT_METHOD>;
  templateId?: InputMaybe<Scalars['String']['input']>;
  merchantInternalCustomerCode?: InputMaybe<Scalars['String']['input']>;
  merchantInternalPaymentPlanCode?: InputMaybe<Scalars['String']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  ended?: InputMaybe<Scalars['Boolean']['input']>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type MerchantApiPaymentPlansQuery = { __typename?: 'Query', merchantApiPaymentPlans: { __typename?: 'MerchantPaymentPlanPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'MerchantPaymentPlanPaginationEdge', cursor: any, node: { __typename?: 'MerchantPaymentPlan', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_PLAN_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, timeAnchor: Date, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, trialEndsAt: Date, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, periodCount: number, endsAfterMonths: number, endsAfterDays: number, endsAfterYears: number, endsAt: Date, startedAt?: Date | null, canceledAt?: Date | null, currentPeriodStart: Date, currentPeriodEnd: Date, merchantInternalCustomerCode: string, merchantInternalPaymentPlanCode: string, merchantInternalPaymentPlanDescription?: string | null, createdAt: Date, updatedAt: Date, status: PAYMENT_PLAN_STATUS, transactionProviderId: string, templateId?: string | null, paymentMethodId: string, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: Date, updatedAt: Date, merchantId: string }, template?: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: Date, updatedAt: Date, transactionProviderId: string } | null, paymentMethod: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressState?: string | null, billingAddressCity?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressPostalCode?: string | null, merchantInternalCustomerCode: string, createdAt: Date, updatedAt: Date, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null }, transactions: Array<{ __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: Date | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: Date, startedAt?: Date | null, succeededAt?: Date | null, failedAt?: Date | null, canceledAt?: Date | null, revertedAt?: Date | null, disputedAt?: Date | null, storePaymentMethod?: boolean | null, merchantInternalCustomerCode?: string | null, merchantInternalTransactionCode?: string | null, createdAt: Date, updatedAt: Date, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, paymentPlanId?: string | null }> } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type MerchantApiPaymentPlanQueryVariables = Exact<{
  merchantPaymentPlanId: Scalars['String']['input'];
}>;


export type MerchantApiPaymentPlanQuery = { __typename?: 'Query', merchantApiPaymentPlan: { __typename?: 'MerchantPaymentPlan', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_PLAN_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, timeAnchor: Date, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, trialEndsAt: Date, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, periodCount: number, endsAfterMonths: number, endsAfterDays: number, endsAfterYears: number, endsAt: Date, startedAt?: Date | null, canceledAt?: Date | null, currentPeriodStart: Date, currentPeriodEnd: Date, merchantInternalCustomerCode: string, merchantInternalPaymentPlanCode: string, merchantInternalPaymentPlanDescription?: string | null, createdAt: Date, updatedAt: Date, status: PAYMENT_PLAN_STATUS, transactionProviderId: string, templateId?: string | null, paymentMethodId: string, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: Date, updatedAt: Date, merchantId: string }, template?: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: Date, updatedAt: Date, transactionProviderId: string } | null, paymentMethod: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressState?: string | null, billingAddressCity?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressPostalCode?: string | null, merchantInternalCustomerCode: string, createdAt: Date, updatedAt: Date, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null }, transactions: Array<{ __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: Date | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: Date, startedAt?: Date | null, succeededAt?: Date | null, failedAt?: Date | null, canceledAt?: Date | null, revertedAt?: Date | null, disputedAt?: Date | null, storePaymentMethod?: boolean | null, merchantInternalCustomerCode?: string | null, merchantInternalTransactionCode?: string | null, createdAt: Date, updatedAt: Date, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, paymentPlanId?: string | null }> } };

export type MerchantApiPaymentPlanCreateMutationVariables = Exact<{
  data: MerchantPaymentPlanCreateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
}>;


export type MerchantApiPaymentPlanCreateMutation = { __typename?: 'Mutation', merchantApiPaymentPlanCreate: { __typename?: 'MerchantPaymentPlan', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_PLAN_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, timeAnchor: Date, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, trialEndsAt: Date, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, periodCount: number, endsAfterMonths: number, endsAfterDays: number, endsAfterYears: number, endsAt: Date, startedAt?: Date | null, canceledAt?: Date | null, currentPeriodStart: Date, currentPeriodEnd: Date, merchantInternalCustomerCode: string, merchantInternalPaymentPlanCode: string, merchantInternalPaymentPlanDescription?: string | null, createdAt: Date, updatedAt: Date, status: PAYMENT_PLAN_STATUS, transactionProviderId: string, templateId?: string | null, paymentMethodId: string, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: Date, updatedAt: Date, merchantId: string }, template?: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: Date, updatedAt: Date, transactionProviderId: string } | null, paymentMethod: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressState?: string | null, billingAddressCity?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressPostalCode?: string | null, merchantInternalCustomerCode: string, createdAt: Date, updatedAt: Date, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null }, transactions: Array<{ __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: Date | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: Date, startedAt?: Date | null, succeededAt?: Date | null, failedAt?: Date | null, canceledAt?: Date | null, revertedAt?: Date | null, disputedAt?: Date | null, storePaymentMethod?: boolean | null, merchantInternalCustomerCode?: string | null, merchantInternalTransactionCode?: string | null, createdAt: Date, updatedAt: Date, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, paymentPlanId?: string | null }> } };

export type MerchantApiPaymentPlanCancelMutationVariables = Exact<{
  merchantPaymentPlanId: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
}>;


export type MerchantApiPaymentPlanCancelMutation = { __typename?: 'Mutation', merchantApiPaymentPlanCancel: { __typename?: 'MerchantPaymentPlan', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_PLAN_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, timeAnchor: Date, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, trialEndsAt: Date, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, periodCount: number, endsAfterMonths: number, endsAfterDays: number, endsAfterYears: number, endsAt: Date, startedAt?: Date | null, canceledAt?: Date | null, currentPeriodStart: Date, currentPeriodEnd: Date, merchantInternalCustomerCode: string, merchantInternalPaymentPlanCode: string, merchantInternalPaymentPlanDescription?: string | null, createdAt: Date, updatedAt: Date, status: PAYMENT_PLAN_STATUS, transactionProviderId: string, templateId?: string | null, paymentMethodId: string, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: Date, updatedAt: Date, merchantId: string }, template?: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: Date, updatedAt: Date, transactionProviderId: string } | null, paymentMethod: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressState?: string | null, billingAddressCity?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressPostalCode?: string | null, merchantInternalCustomerCode: string, createdAt: Date, updatedAt: Date, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null }, transactions: Array<{ __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: Date | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: Date, startedAt?: Date | null, succeededAt?: Date | null, failedAt?: Date | null, canceledAt?: Date | null, revertedAt?: Date | null, disputedAt?: Date | null, storePaymentMethod?: boolean | null, merchantInternalCustomerCode?: string | null, merchantInternalTransactionCode?: string | null, createdAt: Date, updatedAt: Date, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, paymentPlanId?: string | null }> } };

export type MerchantTransactionProviderFragmentFragment = { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: Date, updatedAt: Date, merchantId: string };

export type MerchantApiTransactionProvidersQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  status?: InputMaybe<MERCHANT_TRANSACTION_PROVIDER_STATUS>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type MerchantApiTransactionProvidersQuery = { __typename?: 'Query', merchantApiTransactionProviders: { __typename?: 'MerchantTransactionProviderPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'MerchantTransactionProviderPaginationEdge', cursor: any, node: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: Date, updatedAt: Date, merchantId: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type MerchantApiTransactionProviderQueryVariables = Exact<{
  merchantTransactionProviderId: Scalars['String']['input'];
}>;


export type MerchantApiTransactionProviderQuery = { __typename?: 'Query', merchantApiTransactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: Date, updatedAt: Date, merchantId: string } };

export type MerchantTransactionBaseFragmentFragment = { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: Date | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: Date, startedAt?: Date | null, succeededAt?: Date | null, failedAt?: Date | null, canceledAt?: Date | null, revertedAt?: Date | null, disputedAt?: Date | null, storePaymentMethod?: boolean | null, merchantInternalCustomerCode?: string | null, merchantInternalTransactionCode?: string | null, createdAt: Date, updatedAt: Date, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, paymentPlanId?: string | null };

export type MerchantTransactionFragmentFragment = { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: Date | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: Date, startedAt?: Date | null, succeededAt?: Date | null, failedAt?: Date | null, canceledAt?: Date | null, revertedAt?: Date | null, disputedAt?: Date | null, storePaymentMethod?: boolean | null, merchantInternalCustomerCode?: string | null, merchantInternalTransactionCode?: string | null, createdAt: Date, updatedAt: Date, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, paymentPlanId?: string | null, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: Date, updatedAt: Date, merchantId: string }, paymentMethod?: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressState?: string | null, billingAddressCity?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressPostalCode?: string | null, merchantInternalCustomerCode: string, createdAt: Date, updatedAt: Date, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null } | null };

export type MerchantApiTransactionsQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<TRANSACTION_STATUS>;
  currency?: InputMaybe<CURRENCY>;
  paymentMethodType?: InputMaybe<PAYMENT_METHOD>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  merchantInternalCustomerCode?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  failed?: InputMaybe<Scalars['Boolean']['input']>;
  started?: InputMaybe<Scalars['Boolean']['input']>;
  disputed?: InputMaybe<Scalars['Boolean']['input']>;
  reverted?: InputMaybe<Scalars['Boolean']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  succeeded?: InputMaybe<Scalars['Boolean']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  take?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema> | SortingFieldSchema>;
}>;


export type MerchantApiTransactionsQuery = { __typename?: 'Query', merchantApiTransactions: { __typename?: 'MerchantTransactionPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'MerchantTransactionPaginationEdge', cursor: any, node: { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: Date | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: Date, startedAt?: Date | null, succeededAt?: Date | null, failedAt?: Date | null, canceledAt?: Date | null, revertedAt?: Date | null, disputedAt?: Date | null, storePaymentMethod?: boolean | null, merchantInternalCustomerCode?: string | null, merchantInternalTransactionCode?: string | null, createdAt: Date, updatedAt: Date, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, paymentPlanId?: string | null, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: Date, updatedAt: Date, merchantId: string }, paymentMethod?: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressState?: string | null, billingAddressCity?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressPostalCode?: string | null, merchantInternalCustomerCode: string, createdAt: Date, updatedAt: Date, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type MerchantApiTransactionQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
}>;


export type MerchantApiTransactionQuery = { __typename?: 'Query', merchantApiTransaction: { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: Date | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: Date, startedAt?: Date | null, succeededAt?: Date | null, failedAt?: Date | null, canceledAt?: Date | null, revertedAt?: Date | null, disputedAt?: Date | null, storePaymentMethod?: boolean | null, merchantInternalCustomerCode?: string | null, merchantInternalTransactionCode?: string | null, createdAt: Date, updatedAt: Date, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, paymentPlanId?: string | null, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: Date, updatedAt: Date, merchantId: string }, paymentMethod?: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressState?: string | null, billingAddressCity?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressPostalCode?: string | null, merchantInternalCustomerCode: string, createdAt: Date, updatedAt: Date, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null } | null } };

export type MerchantApiClientTransactionNuveiPreSessionDataQueryVariables = Exact<{
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
}>;


export type MerchantApiClientTransactionNuveiPreSessionDataQuery = { __typename?: 'Query', merchantApiClientGetPreSessionData: { __typename?: 'MerchantClientTransactionGenericPreSessionData', provider: TRANSACTION_PROVIDER, publicKey?: string | null } | { __typename?: 'MerchantClientTransactionNuveiPreSessionData', provider: TRANSACTION_PROVIDER, merchantId: string, merchantSiteId: string, environment: string } };

export type MerchantApiClientTransactionPaymentSessionStartMutationVariables = Exact<{
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  data: MerchantApiClientTransactionPaymentStartSchema;
}>;


export type MerchantApiClientTransactionPaymentSessionStartMutation = { __typename?: 'Mutation', merchantApiClientTransactionPaymentSessionStart: { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: Date | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: Date, startedAt?: Date | null, succeededAt?: Date | null, failedAt?: Date | null, canceledAt?: Date | null, revertedAt?: Date | null, disputedAt?: Date | null, storePaymentMethod?: boolean | null, merchantInternalCustomerCode?: string | null, merchantInternalTransactionCode?: string | null, createdAt: Date, updatedAt: Date, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, paymentPlanId?: string | null, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: Date, updatedAt: Date, merchantId: string }, paymentMethod?: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressState?: string | null, billingAddressCity?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressPostalCode?: string | null, merchantInternalCustomerCode: string, createdAt: Date, updatedAt: Date, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null } | null } };

export type MerchantApiClientTransactionPaymentSessionVerifyMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
}>;


export type MerchantApiClientTransactionPaymentSessionVerifyMutation = { __typename?: 'Mutation', merchantApiClientTransactionPaymentSessionVerify: { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: Date | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: Date, startedAt?: Date | null, succeededAt?: Date | null, failedAt?: Date | null, canceledAt?: Date | null, revertedAt?: Date | null, disputedAt?: Date | null, storePaymentMethod?: boolean | null, merchantInternalCustomerCode?: string | null, merchantInternalTransactionCode?: string | null, createdAt: Date, updatedAt: Date, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, paymentPlanId?: string | null, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: Date, updatedAt: Date, merchantId: string }, paymentMethod?: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressState?: string | null, billingAddressCity?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressPostalCode?: string | null, merchantInternalCustomerCode: string, createdAt: Date, updatedAt: Date, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null } | null } };

export type MerchantApiTransactionVoidMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
}>;


export type MerchantApiTransactionVoidMutation = { __typename?: 'Mutation', merchantApiTransactionVoid: { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: Date | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: Date, startedAt?: Date | null, succeededAt?: Date | null, failedAt?: Date | null, canceledAt?: Date | null, revertedAt?: Date | null, disputedAt?: Date | null, storePaymentMethod?: boolean | null, merchantInternalCustomerCode?: string | null, merchantInternalTransactionCode?: string | null, createdAt: Date, updatedAt: Date, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, paymentPlanId?: string | null, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: Date, updatedAt: Date, merchantId: string }, paymentMethod?: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressState?: string | null, billingAddressCity?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressPostalCode?: string | null, merchantInternalCustomerCode: string, createdAt: Date, updatedAt: Date, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null } | null } };

export type MerchantApiTransactionRefundMutationVariables = Exact<{
  id?: InputMaybe<Scalars['String']['input']>;
  code?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
  merchantInternalTransactionCode?: InputMaybe<Scalars['String']['input']>;
}>;


export type MerchantApiTransactionRefundMutation = { __typename?: 'Mutation', merchantApiTransactionRefund: { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: Date | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: Date, startedAt?: Date | null, succeededAt?: Date | null, failedAt?: Date | null, canceledAt?: Date | null, revertedAt?: Date | null, disputedAt?: Date | null, storePaymentMethod?: boolean | null, merchantInternalCustomerCode?: string | null, merchantInternalTransactionCode?: string | null, createdAt: Date, updatedAt: Date, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, paymentPlanId?: string | null, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: Date, updatedAt: Date, merchantId: string }, paymentMethod?: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: Date, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, billingFirstName?: string | null, billingLastName?: string | null, billingEmail?: string | null, billingPhone?: string | null, billingAddressCountry?: COUNTRY_ISO_2 | null, billingAddressState?: string | null, billingAddressCity?: string | null, billingAddressLine1?: string | null, billingAddressLine2?: string | null, billingAddressPostalCode?: string | null, merchantInternalCustomerCode: string, createdAt: Date, updatedAt: Date, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null } | null } };

export const MerchantFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<MerchantFragmentFragment, unknown>;
export const MerchantTransactionProviderFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}}]} as unknown as DocumentNode<MerchantTransactionProviderFragmentFragment, unknown>;
export const MerchantPaymentPlanTemplateFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}}]} as unknown as DocumentNode<MerchantPaymentPlanTemplateFragmentFragment, unknown>;
export const MerchantCustomerPaymentMethodFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}}]} as unknown as DocumentNode<MerchantCustomerPaymentMethodFragmentFragment, unknown>;
export const MerchantTransactionBaseFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}}]}}]} as unknown as DocumentNode<MerchantTransactionBaseFragmentFragment, unknown>;
export const MerchantPaymentPlanFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"timeAnchor"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"trialEndsAt"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"periodCount"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodStart"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodEnd"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalPaymentPlanCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalPaymentPlanDescription"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"templateId"}},{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}}]}}]} as unknown as DocumentNode<MerchantPaymentPlanFragmentFragment, unknown>;
export const MerchantTransactionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}}]}}]} as unknown as DocumentNode<MerchantTransactionFragmentFragment, unknown>;
export const MerchantApiDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantApi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApi"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<MerchantApiQuery, MerchantApiQueryVariables>;
export const MerchantApiCustomerPaymentMethodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantApiCustomerPaymentMethods"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TRANSACTION_PROVIDER"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProviderId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"methodType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PAYMENT_METHOD"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isDefault"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hasProviderError"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiCustomerPaymentMethods"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionProvider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProviderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"providerCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"methodType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"methodType"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantInternalCustomerCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalCustomerCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"isDefault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isDefault"}}},{"kind":"Argument","name":{"kind":"Name","value":"hasProviderError"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hasProviderError"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}}]} as unknown as DocumentNode<MerchantApiCustomerPaymentMethodsQuery, MerchantApiCustomerPaymentMethodsQueryVariables>;
export const MerchantApiCustomerPaymentMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantApiCustomerPaymentMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantCustomerPaymentMethodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiCustomerPaymentMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantCustomerPaymentMethodId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantCustomerPaymentMethodId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}}]} as unknown as DocumentNode<MerchantApiCustomerPaymentMethodQuery, MerchantApiCustomerPaymentMethodQueryVariables>;
export const MerchantApiPaymentPlanTemplatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantApiPaymentPlanTemplates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TRANSACTION_PROVIDER"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProviderId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currency"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CURRENCY"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerStatus"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PAYMENT_PLAN_TEMPLATE_STATUS"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiPaymentPlanTemplates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionProvider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProviderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currency"}}},{"kind":"Argument","name":{"kind":"Name","value":"providerCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"providerStatus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerStatus"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}}]} as unknown as DocumentNode<MerchantApiPaymentPlanTemplatesQuery, MerchantApiPaymentPlanTemplatesQueryVariables>;
export const MerchantApiPaymentPlanTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantApiPaymentPlanTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanTemplateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiPaymentPlanTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantPaymentPlanTemplateId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanTemplateId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}}]} as unknown as DocumentNode<MerchantApiPaymentPlanTemplateQuery, MerchantApiPaymentPlanTemplateQueryVariables>;
export const MerchantApiPaymentPlanTemplateCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MerchantApiPaymentPlanTemplateCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateCreateSchema"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiPaymentPlanTemplateCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}}]} as unknown as DocumentNode<MerchantApiPaymentPlanTemplateCreateMutation, MerchantApiPaymentPlanTemplateCreateMutationVariables>;
export const MerchantApiPaymentPlanTemplateUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MerchantApiPaymentPlanTemplateUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateUpdateSchema"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanTemplateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiPaymentPlanTemplateUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantPaymentPlanTemplateId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanTemplateId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}}]} as unknown as DocumentNode<MerchantApiPaymentPlanTemplateUpdateMutation, MerchantApiPaymentPlanTemplateUpdateMutationVariables>;
export const MerchantApiPaymentPlansDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantApiPaymentPlans"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TRANSACTION_PROVIDER"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProviderId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currency"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CURRENCY"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerStatus"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PAYMENT_PLAN_STATUS"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethod"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PAYMENT_METHOD"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"templateId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalPaymentPlanCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hasProviderError"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ended"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"started"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"canceled"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiPaymentPlans"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionProvider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProviderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"providerCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"providerStatus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerStatus"}}},{"kind":"Argument","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currency"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentMethodId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentMethod"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethod"}}},{"kind":"Argument","name":{"kind":"Name","value":"templateId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"templateId"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantInternalCustomerCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalCustomerCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantInternalPaymentPlanCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalPaymentPlanCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"hasProviderError"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hasProviderError"}}},{"kind":"Argument","name":{"kind":"Name","value":"ended"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ended"}}},{"kind":"Argument","name":{"kind":"Name","value":"started"},"value":{"kind":"Variable","name":{"kind":"Name","value":"started"}}},{"kind":"Argument","name":{"kind":"Name","value":"canceled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"canceled"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"timeAnchor"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"trialEndsAt"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"periodCount"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodStart"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodEnd"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalPaymentPlanCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalPaymentPlanDescription"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"templateId"}},{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"}}]}}]}}]} as unknown as DocumentNode<MerchantApiPaymentPlansQuery, MerchantApiPaymentPlansQueryVariables>;
export const MerchantApiPaymentPlanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantApiPaymentPlan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiPaymentPlan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantPaymentPlanId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"timeAnchor"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"trialEndsAt"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"periodCount"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodStart"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodEnd"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalPaymentPlanCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalPaymentPlanDescription"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"templateId"}},{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"}}]}}]}}]} as unknown as DocumentNode<MerchantApiPaymentPlanQuery, MerchantApiPaymentPlanQueryVariables>;
export const MerchantApiPaymentPlanCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MerchantApiPaymentPlanCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanCreateSchema"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiPaymentPlanCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"timeAnchor"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"trialEndsAt"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"periodCount"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodStart"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodEnd"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalPaymentPlanCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalPaymentPlanDescription"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"templateId"}},{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"}}]}}]}}]} as unknown as DocumentNode<MerchantApiPaymentPlanCreateMutation, MerchantApiPaymentPlanCreateMutationVariables>;
export const MerchantApiPaymentPlanCancelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MerchantApiPaymentPlanCancel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiPaymentPlanCancel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantPaymentPlanId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanId"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"timeAnchor"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"trialEndsAt"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"periodCount"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodStart"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodEnd"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalPaymentPlanCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalPaymentPlanDescription"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"templateId"}},{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"}}]}}]}}]} as unknown as DocumentNode<MerchantApiPaymentPlanCancelMutation, MerchantApiPaymentPlanCancelMutationVariables>;
export const MerchantApiTransactionProvidersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantApiTransactionProviders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TRANSACTION_PROVIDER"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MERCHANT_TRANSACTION_PROVIDER_STATUS"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiTransactionProviders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"provider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}}]} as unknown as DocumentNode<MerchantApiTransactionProvidersQuery, MerchantApiTransactionProvidersQueryVariables>;
export const MerchantApiTransactionProviderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantApiTransactionProvider"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiTransactionProvider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}}]} as unknown as DocumentNode<MerchantApiTransactionProviderQuery, MerchantApiTransactionProviderQueryVariables>;
export const MerchantApiTransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantApiTransactions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProviderId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TRANSACTION_STATUS"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currency"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CURRENCY"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PAYMENT_METHOD"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TRANSACTION_PROVIDER"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hasProviderError"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"failed"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"started"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"disputed"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reverted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"canceled"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"succeeded"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiTransactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentMethodId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProviderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currency"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentMethodType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodType"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionProvider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"providerCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"hasProviderError"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hasProviderError"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantInternalCustomerCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalCustomerCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantInternalTransactionCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalTransactionCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"failed"},"value":{"kind":"Variable","name":{"kind":"Name","value":"failed"}}},{"kind":"Argument","name":{"kind":"Name","value":"started"},"value":{"kind":"Variable","name":{"kind":"Name","value":"started"}}},{"kind":"Argument","name":{"kind":"Name","value":"disputed"},"value":{"kind":"Variable","name":{"kind":"Name","value":"disputed"}}},{"kind":"Argument","name":{"kind":"Name","value":"reverted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reverted"}}},{"kind":"Argument","name":{"kind":"Name","value":"canceled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"canceled"}}},{"kind":"Argument","name":{"kind":"Name","value":"succeeded"},"value":{"kind":"Variable","name":{"kind":"Name","value":"succeeded"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"}}]}}]} as unknown as DocumentNode<MerchantApiTransactionsQuery, MerchantApiTransactionsQueryVariables>;
export const MerchantApiTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantApiTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantInternalTransactionCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalTransactionCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"}}]}}]} as unknown as DocumentNode<MerchantApiTransactionQuery, MerchantApiTransactionQueryVariables>;
export const MerchantApiClientTransactionNuveiPreSessionDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantApiClientTransactionNuveiPreSessionData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TRANSACTION_PROVIDER"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiClientGetPreSessionData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transactionProvider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantClientTransactionNuveiPreSessionData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchantSiteId"}},{"kind":"Field","name":{"kind":"Name","value":"environment"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantClientTransactionGenericPreSessionData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}}]}}]}}]} as unknown as DocumentNode<MerchantApiClientTransactionNuveiPreSessionDataQuery, MerchantApiClientTransactionNuveiPreSessionDataQueryVariables>;
export const MerchantApiClientTransactionPaymentSessionStartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MerchantApiClientTransactionPaymentSessionStart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TRANSACTION_PROVIDER"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantApiClientTransactionPaymentStartSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiClientTransactionPaymentSessionStart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transactionProvider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"}}]}}]} as unknown as DocumentNode<MerchantApiClientTransactionPaymentSessionStartMutation, MerchantApiClientTransactionPaymentSessionStartMutationVariables>;
export const MerchantApiClientTransactionPaymentSessionVerifyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MerchantApiClientTransactionPaymentSessionVerify"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiClientTransactionPaymentSessionVerify"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantInternalTransactionCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalTransactionCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"}}]}}]} as unknown as DocumentNode<MerchantApiClientTransactionPaymentSessionVerifyMutation, MerchantApiClientTransactionPaymentSessionVerifyMutationVariables>;
export const MerchantApiTransactionVoidDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MerchantApiTransactionVoid"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiTransactionVoid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantInternalTransactionCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalTransactionCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"}}]}}]} as unknown as DocumentNode<MerchantApiTransactionVoidMutation, MerchantApiTransactionVoidMutationVariables>;
export const MerchantApiTransactionRefundDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MerchantApiTransactionRefund"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"code"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantApiTransactionRefund"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"code"},"value":{"kind":"Variable","name":{"kind":"Name","value":"code"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantInternalTransactionCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantInternalTransactionCode"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"billingFirstName"}},{"kind":"Field","name":{"kind":"Name","value":"billingLastName"}},{"kind":"Field","name":{"kind":"Name","value":"billingEmail"}},{"kind":"Field","name":{"kind":"Name","value":"billingPhone"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCountry"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressState"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressCity"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine1"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressLine2"}},{"kind":"Field","name":{"kind":"Name","value":"billingAddressPostalCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantInternalTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionBaseFragment"}}]}}]} as unknown as DocumentNode<MerchantApiTransactionRefundMutation, MerchantApiTransactionRefundMutationVariables>;