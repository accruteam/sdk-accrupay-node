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
  DateTimeISO: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** Represents NULL values */
  Void: { input: any; output: any; }
};

export type AdminMerchantCreateSchema = {
  email: Scalars['String']['input'];
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
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
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
  billingAddressCity: Scalars['String']['input'];
  /** Country using the [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format (e.g. US, UK, etc.). */
  billingAddressCountry: COUNTRY_ISO_2;
  billingAddressLine1: Scalars['String']['input'];
  billingAddressLine2?: InputMaybe<Scalars['String']['input']>;
  billingAddressPostalCode: Scalars['String']['input'];
  /** State using the [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2) format for main country subdivisions, provinces, states (e.g. [for US] → NY, IN, CA, etc.). The [iso-3166-2](https://www.npmjs.com/package/iso-3166-2) package is suggested. */
  billingAddressState: Scalars['String']['input'];
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
  USD = 'USD'
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
  createdAt: Scalars['DateTimeISO']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
  publicId?: Maybe<Scalars['String']['output']>;
  publicIdUpdatedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  status: MERCHANT_STATUS;
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantClientTransactionGenericPreSessionData = {
  __typename?: 'MerchantClientTransactionGenericPreSessionData';
  provider: TRANSACTION_PROVIDER;
  publicKey?: Maybe<Scalars['String']['output']>;
};

export type MerchantClientTransactionNuveiPreSessionData = {
  __typename?: 'MerchantClientTransactionNuveiPreSessionData';
  merchantId: Scalars['String']['output'];
  merchantSiteId: Scalars['String']['output'];
  provider: TRANSACTION_PROVIDER;
};

export type MerchantClientTransactionPaymentStartSchema = {
  amount: Scalars['BigInt']['input'];
  billing: BillingDataSchema;
  currency: CURRENCY;
  merchantCustomerCode: Scalars['String']['input'];
  merchantTransactionCode: Scalars['String']['input'];
  storePaymentMethod: Scalars['Boolean']['input'];
};

export type MerchantClientTransactionPreSessionData = MerchantClientTransactionGenericPreSessionData | MerchantClientTransactionNuveiPreSessionData;

export type MerchantCustomerPaymentMethod = {
  __typename?: 'MerchantCustomerPaymentMethod';
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  isDefault: Scalars['Boolean']['output'];
  isEnabled: Scalars['Boolean']['output'];
  merchantCustomerCode: Scalars['String']['output'];
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
  merchantCustomerCode: Scalars['String']['output'];
  merchantPaymentPlanCode: Scalars['String']['output'];
  merchantPaymentPlanDescription?: Maybe<Scalars['String']['output']>;
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
  transactions: Array<MerchantPaymentPlanTransaction>;
  trialEndsAt: Scalars['DateTimeISO']['output'];
  trialPeriodDays: Scalars['Int']['output'];
  trialPeriodMonths: Scalars['Int']['output'];
  trialPeriodYears: Scalars['Int']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantPaymentPlanCreateSchema = {
  amount: Scalars['BigInt']['input'];
  currency: CURRENCY;
  description?: InputMaybe<Scalars['String']['input']>;
  endsAfterDays: Scalars['Int']['input'];
  endsAfterMonths: Scalars['Int']['input'];
  endsAfterYears: Scalars['Int']['input'];
  initialAmount: Scalars['BigInt']['input'];
  merchantCustomerCode: Scalars['String']['input'];
  merchantPaymentPlanCode: Scalars['String']['input'];
  merchantPaymentPlanDescription?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  paymentMethodId: Scalars['String']['input'];
  providerStatus: PAYMENT_PLAN_STATUS;
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

export type MerchantPaymentPlanTransaction = {
  __typename?: 'MerchantPaymentPlanTransaction';
  action: PAYMENT_PLAN_PAYMENT_ACTION;
  createdAt: Scalars['DateTimeISO']['output'];
  id: Scalars['ID']['output'];
  paymentPlanId: Scalars['String']['output'];
  periodCount: Scalars['Int']['output'];
  periodEnd: Scalars['DateTimeISO']['output'];
  periodStart: Scalars['DateTimeISO']['output'];
  transaction: MerchantTransaction;
  transactionId: Scalars['String']['output'];
  updatedAt: Scalars['DateTimeISO']['output'];
};

export type MerchantTransaction = {
  __typename?: 'MerchantTransaction';
  action: TRANSACTION_ACTION;
  amount: Scalars['BigInt']['output'];
  canceledAt?: Maybe<Scalars['DateTimeISO']['output']>;
  code: Scalars['String']['output'];
  createdAt: Scalars['DateTimeISO']['output'];
  currency: CURRENCY;
  disputedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  failedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  id: Scalars['ID']['output'];
  merchantCustomerCode: Scalars['String']['output'];
  merchantTransactionCode: Scalars['String']['output'];
  payload: Scalars['JSON']['output'];
  paymentMethod?: Maybe<MerchantCustomerPaymentMethod>;
  paymentMethodCode?: Maybe<Scalars['String']['output']>;
  paymentMethodId?: Maybe<Scalars['String']['output']>;
  paymentMethodType?: Maybe<PAYMENT_METHOD>;
  providerCode: Scalars['String']['output'];
  providerError?: Maybe<Scalars['String']['output']>;
  providerLastVerifiedAt: Scalars['DateTimeISO']['output'];
  providerRelatedCode?: Maybe<Scalars['String']['output']>;
  providerStatus: TRANSACTION_STATUS;
  relatedTransactionId?: Maybe<Scalars['String']['output']>;
  revertedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  startedAt?: Maybe<Scalars['DateTimeISO']['output']>;
  status: TRANSACTION_STATUS;
  storePaymentMethod: Scalars['Boolean']['output'];
  succeededAt?: Maybe<Scalars['DateTimeISO']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  tokenExpiresAt?: Maybe<Scalars['String']['output']>;
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
  adminMerchantCreate: Merchant;
  adminMerchantResetApiSecret: Merchant;
  adminMerchantResetPublicId: Merchant;
  adminMerchantTransactionProviderCreate: MerchantTransactionProvider;
  adminMerchantTransactionProviderUpdate: MerchantTransactionProvider;
  adminMerchantUpdate: Merchant;
  adminMerchantUpdateStatus: Merchant;
  adminMerchantUserCreate: MerchantUser;
  adminMerchantUserUpdate: MerchantUser;
  merchantClientTransactionPaymentSessionStart: MerchantTransaction;
  merchantClientTransactionPaymentSessionVerify: MerchantTransaction;
  merchantCustomerPaymentMethodSyncAll: Array<MerchantCustomerPaymentMethod>;
  merchantCustomerPaymentMethodSyncOne: MerchantCustomerPaymentMethod;
  merchantPaymentPlanCancel: MerchantPaymentPlan;
  merchantPaymentPlanCreate: MerchantPaymentPlan;
  merchantPaymentPlanSyncAll: Array<MerchantPaymentPlan>;
  merchantPaymentPlanSyncOne: MerchantPaymentPlan;
  merchantPaymentPlanTemplateCreate: MerchantPaymentPlanTemplate;
  merchantPaymentPlanTemplateSyncAll: Array<MerchantPaymentPlanTemplate>;
  merchantPaymentPlanTemplateSyncOne: MerchantPaymentPlanTemplate;
  merchantPaymentPlanTemplateUpdate: MerchantPaymentPlanTemplate;
  merchantTransactionVoid: MerchantTransaction;
  userSessionsClose: Scalars['Void']['output'];
};


export type MutationadminMerchantCreateArgs = {
  data: AdminMerchantCreateSchema;
};


export type MutationadminMerchantResetApiSecretArgs = {
  merchantId: Scalars['String']['input'];
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


export type MutationmerchantClientTransactionPaymentSessionStartArgs = {
  data: MerchantClientTransactionPaymentStartSchema;
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
};


export type MutationmerchantClientTransactionPaymentSessionVerifyArgs = {
  merchantTransactionId: Scalars['String']['input'];
};


export type MutationmerchantCustomerPaymentMethodSyncAllArgs = {
  merchantCustomerCode: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantCustomerPaymentMethodSyncOneArgs = {
  merchantCustomerCode: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode: Scalars['String']['input'];
};


export type MutationmerchantPaymentPlanCancelArgs = {
  merchantPaymentPlanId: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantPaymentPlanCreateArgs = {
  data: MerchantPaymentPlanCreateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantPaymentPlanSyncAllArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantPaymentPlanSyncOneArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode: Scalars['String']['input'];
};


export type MutationmerchantPaymentPlanTemplateCreateArgs = {
  data: MerchantPaymentPlanTemplateCreateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantPaymentPlanTemplateSyncAllArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantPaymentPlanTemplateSyncOneArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
  providerCode: Scalars['String']['input'];
};


export type MutationmerchantPaymentPlanTemplateUpdateArgs = {
  data: MerchantPaymentPlanTemplateUpdateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type MutationmerchantTransactionVoidArgs = {
  merchantTransactionId: Scalars['String']['input'];
};

export enum PAYMENT_METHOD {
  CARD = 'CARD'
}

export enum PAYMENT_METHOD_STATUS {
  DISABLED = 'DISABLED',
  ENABLED = 'ENABLED'
}

export enum PAYMENT_PLAN_PAYMENT_ACTION {
  PURCHASE = 'PURCHASE',
  RENEWAL = 'RENEWAL'
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
  adminMerchant: Merchant;
  adminMerchantTransactionProvider: MerchantTransactionProvider;
  adminMerchantTransactionProviders: MerchantTransactionProviderPaginationConnection;
  adminMerchantUser: MerchantUser;
  adminMerchantUsers: MerchantUserPaginationConnection;
  adminMerchants: MerchantPaginationConnection;
  adminUsers: UserPaginationConnection;
  clientPublicTransactionGetPreSessionData: MerchantClientTransactionPreSessionData;
  healthCheck: Scalars['DateTimeISO']['output'];
  healthLivenessCheck: Scalars['DateTimeISO']['output'];
  healthReadinessCheck: Scalars['DateTimeISO']['output'];
  merchant: Merchant;
  merchantClientGetPreSessionData: MerchantClientTransactionPreSessionData;
  merchantCustomerPaymentMethod: MerchantCustomerPaymentMethod;
  merchantCustomerPaymentMethods: MerchantCustomerPaymentMethodPaginationConnection;
  merchantPaymentPlan: MerchantPaymentPlan;
  merchantPaymentPlanTemplate: MerchantPaymentPlanTemplate;
  merchantPaymentPlanTemplates: MerchantPaymentPlanTemplatePaginationConnection;
  merchantPaymentPlans: MerchantPaymentPlanPaginationConnection;
  merchantTransaction: MerchantTransaction;
  merchantTransactionProvider: MerchantTransactionProvider;
  merchantTransactionProviders: MerchantTransactionProviderPaginationConnection;
  merchantTransactions: MerchantTransactionPaginationConnection;
  user: User;
  userMerchant: Merchant;
  userMerchants: MerchantPaginationConnection;
};


export type QueryadminMerchantArgs = {
  merchantId: Scalars['String']['input'];
};


export type QueryadminMerchantTransactionProviderArgs = {
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
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  apiSecret?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerifiedAt?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phoneVerifiedAt?: InputMaybe<Scalars['Boolean']['input']>;
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


export type QuerymerchantClientGetPreSessionDataArgs = {
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
};


export type QuerymerchantCustomerPaymentMethodArgs = {
  merchantCustomerPaymentMethodId: Scalars['String']['input'];
};


export type QuerymerchantCustomerPaymentMethodsArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isDefault?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantCustomerCode?: InputMaybe<Scalars['String']['input']>;
  methodType?: InputMaybe<PAYMENT_METHOD>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  skip?: InputMaybe<Scalars['Int']['input']>;
  sorting?: InputMaybe<Array<SortingFieldSchema>>;
  take?: InputMaybe<Scalars['Int']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
};


export type QuerymerchantPaymentPlanArgs = {
  merchantPaymentPlanId: Scalars['String']['input'];
};


export type QuerymerchantPaymentPlanTemplateArgs = {
  merchantPaymentPlanTemplateId: Scalars['String']['input'];
};


export type QuerymerchantPaymentPlanTemplatesArgs = {
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


export type QuerymerchantPaymentPlansArgs = {
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  canceled?: InputMaybe<Scalars['Boolean']['input']>;
  currency?: InputMaybe<CURRENCY>;
  ended?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  merchantCustomerCode?: InputMaybe<Scalars['String']['input']>;
  merchantPaymentPlanCode?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
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


export type QuerymerchantTransactionArgs = {
  merchantTransactionId: Scalars['String']['input'];
};


export type QuerymerchantTransactionProviderArgs = {
  merchantTransactionProviderId: Scalars['String']['input'];
};


export type QuerymerchantTransactionProvidersArgs = {
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


export type QuerymerchantTransactionsArgs = {
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
  merchantCustomerCode?: InputMaybe<Scalars['String']['input']>;
  merchantTransactionCode?: InputMaybe<Scalars['String']['input']>;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  paymentMethodType?: InputMaybe<PAYMENT_METHOD>;
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
  after?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  apiSecret?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['ConnectionCursor']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  emailVerifiedAt?: InputMaybe<Scalars['Boolean']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phoneVerifiedAt?: InputMaybe<Scalars['Boolean']['input']>;
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
  PAYMENT = 'PAYMENT',
  REFUND = 'REFUND',
  VOID = 'VOID'
}

export enum TRANSACTION_PROVIDER {
  NUVEI = 'NUVEI'
}

export enum TRANSACTION_STATUS {
  DISPUTED = 'DISPUTED',
  EXPIRED = 'EXPIRED',
  FAILED = 'FAILED',
  PENDING = 'PENDING',
  REVERTED = 'REVERTED',
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

export type MerchantFragmentFragment = { __typename?: 'Merchant', id: string, name: string, email: string, phone?: string | null, status: MERCHANT_STATUS, publicId?: string | null, publicIdUpdatedAt?: any | null, createdAt: any, updatedAt: any };

export type MerchantQueryVariables = Exact<{ [key: string]: never; }>;


export type MerchantQuery = { __typename?: 'Query', merchant: { __typename?: 'Merchant', id: string, name: string, email: string, phone?: string | null, status: MERCHANT_STATUS, publicId?: string | null, publicIdUpdatedAt?: any | null, createdAt: any, updatedAt: any } };

export type MerchantCustomerPaymentMethodFragmentFragment = { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, merchantCustomerCode: string, createdAt: any, updatedAt: any, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null };

export type MerchantCustomerPaymentMethodsQueryVariables = Exact<{
  merchantCustomerPaymentMethodId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  methodType?: InputMaybe<PAYMENT_METHOD>;
  merchantCustomerCode?: InputMaybe<Scalars['String']['input']>;
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


export type MerchantCustomerPaymentMethodsQuery = { __typename?: 'Query', merchantCustomerPaymentMethods: { __typename?: 'MerchantCustomerPaymentMethodPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'MerchantCustomerPaymentMethodPaginationEdge', cursor: any, node: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, merchantCustomerCode: string, createdAt: any, updatedAt: any, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type MerchantCustomerPaymentMethodQueryVariables = Exact<{
  merchantCustomerPaymentMethodId: Scalars['String']['input'];
}>;


export type MerchantCustomerPaymentMethodQuery = { __typename?: 'Query', merchantCustomerPaymentMethod: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, merchantCustomerCode: string, createdAt: any, updatedAt: any, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null } };

export type MerchantPaymentPlanTemplateFragmentFragment = { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: any, updatedAt: any, transactionProviderId: string };

export type MerchantPaymentPlanTemplatesQueryVariables = Exact<{
  merchantPaymentPlanTemplateId?: InputMaybe<Scalars['String']['input']>;
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


export type MerchantPaymentPlanTemplatesQuery = { __typename?: 'Query', merchantPaymentPlanTemplates: { __typename?: 'MerchantPaymentPlanTemplatePaginationConnection', totalCount: number, edges: Array<{ __typename?: 'MerchantPaymentPlanTemplatePaginationEdge', cursor: any, node: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: any, updatedAt: any, transactionProviderId: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type MerchantPaymentPlanTemplateQueryVariables = Exact<{
  merchantPaymentPlanTemplateId: Scalars['String']['input'];
}>;


export type MerchantPaymentPlanTemplateQuery = { __typename?: 'Query', merchantPaymentPlanTemplate: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: any, updatedAt: any, transactionProviderId: string } };

export type MerchantPaymentPlanTemplateCreateMutationVariables = Exact<{
  data: MerchantPaymentPlanTemplateCreateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
}>;


export type MerchantPaymentPlanTemplateCreateMutation = { __typename?: 'Mutation', merchantPaymentPlanTemplateCreate: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: any, updatedAt: any, transactionProviderId: string } };

export type MerchantPaymentPlanTemplateUpdateMutationVariables = Exact<{
  data: MerchantPaymentPlanTemplateUpdateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
}>;


export type MerchantPaymentPlanTemplateUpdateMutation = { __typename?: 'Mutation', merchantPaymentPlanTemplateUpdate: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: any, updatedAt: any, transactionProviderId: string } };

export type MerchantPaymentPlanFragmentFragment = { __typename?: 'MerchantPaymentPlan', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_PLAN_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, timeAnchor: any, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, trialEndsAt: any, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, periodCount: number, endsAfterMonths: number, endsAfterDays: number, endsAfterYears: number, endsAt: any, startedAt?: any | null, canceledAt?: any | null, currentPeriodStart: any, currentPeriodEnd: any, merchantCustomerCode: string, merchantPaymentPlanCode: string, merchantPaymentPlanDescription?: string | null, createdAt: any, updatedAt: any, status: PAYMENT_PLAN_STATUS, transactionProviderId: string, templateId?: string | null, paymentMethodId: string, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: any, updatedAt: any, merchantId: string }, template?: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: any, updatedAt: any, transactionProviderId: string } | null, paymentMethod: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, merchantCustomerCode: string, createdAt: any, updatedAt: any, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null }, transactions: Array<{ __typename?: 'MerchantPaymentPlanTransaction', id: string, action: PAYMENT_PLAN_PAYMENT_ACTION, periodCount: number, periodStart: any, periodEnd: any, createdAt: any, updatedAt: any, paymentPlanId: string, transactionId: string, transaction: { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: string | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: any, startedAt?: any | null, succeededAt?: any | null, failedAt?: any | null, canceledAt?: any | null, revertedAt?: any | null, disputedAt?: any | null, storePaymentMethod: boolean, merchantCustomerCode: string, merchantTransactionCode: string, createdAt: any, updatedAt: any, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null } }> };

export type MerchantPaymentPlansQueryVariables = Exact<{
  merchantPaymentPlanId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<CURRENCY>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  providerStatus?: InputMaybe<PAYMENT_PLAN_STATUS>;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  paymentMethod?: InputMaybe<PAYMENT_METHOD>;
  templateId?: InputMaybe<Scalars['String']['input']>;
  merchantCustomerCode?: InputMaybe<Scalars['String']['input']>;
  merchantPaymentPlanCode?: InputMaybe<Scalars['String']['input']>;
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


export type MerchantPaymentPlansQuery = { __typename?: 'Query', merchantPaymentPlans: { __typename?: 'MerchantPaymentPlanPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'MerchantPaymentPlanPaginationEdge', cursor: any, node: { __typename?: 'MerchantPaymentPlan', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_PLAN_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, timeAnchor: any, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, trialEndsAt: any, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, periodCount: number, endsAfterMonths: number, endsAfterDays: number, endsAfterYears: number, endsAt: any, startedAt?: any | null, canceledAt?: any | null, currentPeriodStart: any, currentPeriodEnd: any, merchantCustomerCode: string, merchantPaymentPlanCode: string, merchantPaymentPlanDescription?: string | null, createdAt: any, updatedAt: any, status: PAYMENT_PLAN_STATUS, transactionProviderId: string, templateId?: string | null, paymentMethodId: string, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: any, updatedAt: any, merchantId: string }, template?: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: any, updatedAt: any, transactionProviderId: string } | null, paymentMethod: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, merchantCustomerCode: string, createdAt: any, updatedAt: any, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null }, transactions: Array<{ __typename?: 'MerchantPaymentPlanTransaction', id: string, action: PAYMENT_PLAN_PAYMENT_ACTION, periodCount: number, periodStart: any, periodEnd: any, createdAt: any, updatedAt: any, paymentPlanId: string, transactionId: string, transaction: { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: string | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: any, startedAt?: any | null, succeededAt?: any | null, failedAt?: any | null, canceledAt?: any | null, revertedAt?: any | null, disputedAt?: any | null, storePaymentMethod: boolean, merchantCustomerCode: string, merchantTransactionCode: string, createdAt: any, updatedAt: any, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null } }> } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type MerchantPaymentPlanQueryVariables = Exact<{
  merchantPaymentPlanId: Scalars['String']['input'];
}>;


export type MerchantPaymentPlanQuery = { __typename?: 'Query', merchantPaymentPlan: { __typename?: 'MerchantPaymentPlan', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_PLAN_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, timeAnchor: any, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, trialEndsAt: any, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, periodCount: number, endsAfterMonths: number, endsAfterDays: number, endsAfterYears: number, endsAt: any, startedAt?: any | null, canceledAt?: any | null, currentPeriodStart: any, currentPeriodEnd: any, merchantCustomerCode: string, merchantPaymentPlanCode: string, merchantPaymentPlanDescription?: string | null, createdAt: any, updatedAt: any, status: PAYMENT_PLAN_STATUS, transactionProviderId: string, templateId?: string | null, paymentMethodId: string, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: any, updatedAt: any, merchantId: string }, template?: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: any, updatedAt: any, transactionProviderId: string } | null, paymentMethod: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, merchantCustomerCode: string, createdAt: any, updatedAt: any, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null }, transactions: Array<{ __typename?: 'MerchantPaymentPlanTransaction', id: string, action: PAYMENT_PLAN_PAYMENT_ACTION, periodCount: number, periodStart: any, periodEnd: any, createdAt: any, updatedAt: any, paymentPlanId: string, transactionId: string, transaction: { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: string | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: any, startedAt?: any | null, succeededAt?: any | null, failedAt?: any | null, canceledAt?: any | null, revertedAt?: any | null, disputedAt?: any | null, storePaymentMethod: boolean, merchantCustomerCode: string, merchantTransactionCode: string, createdAt: any, updatedAt: any, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null } }> } };

export type MerchantPaymentPlanCreateMutationVariables = Exact<{
  data: MerchantPaymentPlanCreateSchema;
  merchantTransactionProviderId: Scalars['String']['input'];
}>;


export type MerchantPaymentPlanCreateMutation = { __typename?: 'Mutation', merchantPaymentPlanCreate: { __typename?: 'MerchantPaymentPlan', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_PLAN_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, timeAnchor: any, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, trialEndsAt: any, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, periodCount: number, endsAfterMonths: number, endsAfterDays: number, endsAfterYears: number, endsAt: any, startedAt?: any | null, canceledAt?: any | null, currentPeriodStart: any, currentPeriodEnd: any, merchantCustomerCode: string, merchantPaymentPlanCode: string, merchantPaymentPlanDescription?: string | null, createdAt: any, updatedAt: any, status: PAYMENT_PLAN_STATUS, transactionProviderId: string, templateId?: string | null, paymentMethodId: string, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: any, updatedAt: any, merchantId: string }, template?: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: any, updatedAt: any, transactionProviderId: string } | null, paymentMethod: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, merchantCustomerCode: string, createdAt: any, updatedAt: any, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null }, transactions: Array<{ __typename?: 'MerchantPaymentPlanTransaction', id: string, action: PAYMENT_PLAN_PAYMENT_ACTION, periodCount: number, periodStart: any, periodEnd: any, createdAt: any, updatedAt: any, paymentPlanId: string, transactionId: string, transaction: { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: string | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: any, startedAt?: any | null, succeededAt?: any | null, failedAt?: any | null, canceledAt?: any | null, revertedAt?: any | null, disputedAt?: any | null, storePaymentMethod: boolean, merchantCustomerCode: string, merchantTransactionCode: string, createdAt: any, updatedAt: any, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null } }> } };

export type MerchantPaymentPlanCancelMutationVariables = Exact<{
  merchantPaymentPlanId: Scalars['String']['input'];
  merchantTransactionProviderId: Scalars['String']['input'];
}>;


export type MerchantPaymentPlanCancelMutation = { __typename?: 'Mutation', merchantPaymentPlanCancel: { __typename?: 'MerchantPaymentPlan', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_PLAN_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, timeAnchor: any, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, trialEndsAt: any, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, periodCount: number, endsAfterMonths: number, endsAfterDays: number, endsAfterYears: number, endsAt: any, startedAt?: any | null, canceledAt?: any | null, currentPeriodStart: any, currentPeriodEnd: any, merchantCustomerCode: string, merchantPaymentPlanCode: string, merchantPaymentPlanDescription?: string | null, createdAt: any, updatedAt: any, status: PAYMENT_PLAN_STATUS, transactionProviderId: string, templateId?: string | null, paymentMethodId: string, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: any, updatedAt: any, merchantId: string }, template?: { __typename?: 'MerchantPaymentPlanTemplate', id: string, name: string, description?: string | null, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_PLAN_TEMPLATE_STATUS, payload: any, initialAmount: bigint, amount: bigint, currency: CURRENCY, trialPeriodDays: number, trialPeriodMonths: number, trialPeriodYears: number, renewalIntervalMonths: number, renewalIntervalDays: number, renewalIntervalYears: number, endsAfterDays: number, endsAfterMonths: number, endsAfterYears: number, createdAt: any, updatedAt: any, transactionProviderId: string } | null, paymentMethod: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, merchantCustomerCode: string, createdAt: any, updatedAt: any, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null }, transactions: Array<{ __typename?: 'MerchantPaymentPlanTransaction', id: string, action: PAYMENT_PLAN_PAYMENT_ACTION, periodCount: number, periodStart: any, periodEnd: any, createdAt: any, updatedAt: any, paymentPlanId: string, transactionId: string, transaction: { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: string | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: any, startedAt?: any | null, succeededAt?: any | null, failedAt?: any | null, canceledAt?: any | null, revertedAt?: any | null, disputedAt?: any | null, storePaymentMethod: boolean, merchantCustomerCode: string, merchantTransactionCode: string, createdAt: any, updatedAt: any, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null } }> } };

export type MerchantTransactionProviderFragmentFragment = { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: any, updatedAt: any, merchantId: string };

export type MerchantTransactionProvidersQueryVariables = Exact<{
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
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


export type MerchantTransactionProvidersQuery = { __typename?: 'Query', merchantTransactionProviders: { __typename?: 'MerchantTransactionProviderPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'MerchantTransactionProviderPaginationEdge', cursor: any, node: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: any, updatedAt: any, merchantId: string } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type MerchantTransactionProviderQueryVariables = Exact<{
  merchantTransactionProviderId: Scalars['String']['input'];
}>;


export type MerchantTransactionProviderQuery = { __typename?: 'Query', merchantTransactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: any, updatedAt: any, merchantId: string } };

export type MerchantTransactionFragmentFragment = { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: string | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: any, startedAt?: any | null, succeededAt?: any | null, failedAt?: any | null, canceledAt?: any | null, revertedAt?: any | null, disputedAt?: any | null, storePaymentMethod: boolean, merchantCustomerCode: string, merchantTransactionCode: string, createdAt: any, updatedAt: any, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: any, updatedAt: any, merchantId: string }, paymentMethod?: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, merchantCustomerCode: string, createdAt: any, updatedAt: any, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null } | null };

export type MerchantTransactionsQueryVariables = Exact<{
  merchantTransactionId?: InputMaybe<Scalars['String']['input']>;
  paymentMethodId?: InputMaybe<Scalars['String']['input']>;
  transactionProviderId?: InputMaybe<Scalars['String']['input']>;
  status?: InputMaybe<TRANSACTION_STATUS>;
  currency?: InputMaybe<CURRENCY>;
  paymentMethodType?: InputMaybe<PAYMENT_METHOD>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  providerCode?: InputMaybe<Scalars['String']['input']>;
  hasProviderError?: InputMaybe<Scalars['Boolean']['input']>;
  merchantCustomerCode?: InputMaybe<Scalars['String']['input']>;
  merchantTransactionCode?: InputMaybe<Scalars['String']['input']>;
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


export type MerchantTransactionsQuery = { __typename?: 'Query', merchantTransactions: { __typename?: 'MerchantTransactionPaginationConnection', totalCount: number, edges: Array<{ __typename?: 'MerchantTransactionPaginationEdge', cursor: any, node: { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: string | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: any, startedAt?: any | null, succeededAt?: any | null, failedAt?: any | null, canceledAt?: any | null, revertedAt?: any | null, disputedAt?: any | null, storePaymentMethod: boolean, merchantCustomerCode: string, merchantTransactionCode: string, createdAt: any, updatedAt: any, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: any, updatedAt: any, merchantId: string }, paymentMethod?: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, merchantCustomerCode: string, createdAt: any, updatedAt: any, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null } | null } }>, pageInfo: { __typename?: 'PageInfo', hasNextPage: boolean, hasPreviousPage: boolean, startCursor?: string | null, endCursor?: string | null } } };

export type MerchantTransactionQueryVariables = Exact<{
  merchantTransactionId: Scalars['String']['input'];
}>;


export type MerchantTransactionQuery = { __typename?: 'Query', merchantTransaction: { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: string | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: any, startedAt?: any | null, succeededAt?: any | null, failedAt?: any | null, canceledAt?: any | null, revertedAt?: any | null, disputedAt?: any | null, storePaymentMethod: boolean, merchantCustomerCode: string, merchantTransactionCode: string, createdAt: any, updatedAt: any, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: any, updatedAt: any, merchantId: string }, paymentMethod?: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, merchantCustomerCode: string, createdAt: any, updatedAt: any, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null } | null } };

export type MerchantClientTransactionNuveiPreSessionDataQueryVariables = Exact<{
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
}>;


export type MerchantClientTransactionNuveiPreSessionDataQuery = { __typename?: 'Query', merchantClientGetPreSessionData: { __typename?: 'MerchantClientTransactionGenericPreSessionData', provider: TRANSACTION_PROVIDER, publicKey?: string | null } | { __typename?: 'MerchantClientTransactionNuveiPreSessionData', provider: TRANSACTION_PROVIDER, merchantId: string, merchantSiteId: string } };

export type MerchantClientTransactionPaymentSessionStartMutationVariables = Exact<{
  merchantTransactionProviderId?: InputMaybe<Scalars['String']['input']>;
  transactionProvider?: InputMaybe<TRANSACTION_PROVIDER>;
  data: MerchantClientTransactionPaymentStartSchema;
}>;


export type MerchantClientTransactionPaymentSessionStartMutation = { __typename?: 'Mutation', merchantClientTransactionPaymentSessionStart: { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: string | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: any, startedAt?: any | null, succeededAt?: any | null, failedAt?: any | null, canceledAt?: any | null, revertedAt?: any | null, disputedAt?: any | null, storePaymentMethod: boolean, merchantCustomerCode: string, merchantTransactionCode: string, createdAt: any, updatedAt: any, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: any, updatedAt: any, merchantId: string }, paymentMethod?: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, merchantCustomerCode: string, createdAt: any, updatedAt: any, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null } | null } };

export type MerchantClientTransactionPaymentSessionVerifyMutationVariables = Exact<{
  merchantTransactionId: Scalars['String']['input'];
}>;


export type MerchantClientTransactionPaymentSessionVerifyMutation = { __typename?: 'Mutation', merchantClientTransactionPaymentSessionVerify: { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: string | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: any, startedAt?: any | null, succeededAt?: any | null, failedAt?: any | null, canceledAt?: any | null, revertedAt?: any | null, disputedAt?: any | null, storePaymentMethod: boolean, merchantCustomerCode: string, merchantTransactionCode: string, createdAt: any, updatedAt: any, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: any, updatedAt: any, merchantId: string }, paymentMethod?: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, merchantCustomerCode: string, createdAt: any, updatedAt: any, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null } | null } };

export type MerchantTransactionVoidMutationVariables = Exact<{
  merchantTransactionId: Scalars['String']['input'];
}>;


export type MerchantTransactionVoidMutation = { __typename?: 'Mutation', merchantTransactionVoid: { __typename?: 'MerchantTransaction', id: string, code: string, action: TRANSACTION_ACTION, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerRelatedCode?: string | null, providerStatus: TRANSACTION_STATUS, token?: string | null, tokenExpiresAt?: string | null, paymentMethodType?: PAYMENT_METHOD | null, paymentMethodCode?: string | null, payload: any, amount: bigint, currency: CURRENCY, transactionDate: any, startedAt?: any | null, succeededAt?: any | null, failedAt?: any | null, canceledAt?: any | null, revertedAt?: any | null, disputedAt?: any | null, storePaymentMethod: boolean, merchantCustomerCode: string, merchantTransactionCode: string, createdAt: any, updatedAt: any, status: TRANSACTION_STATUS, transactionProviderId: string, paymentMethodId?: string | null, relatedTransactionId?: string | null, transactionProvider: { __typename?: 'MerchantTransactionProvider', id: string, provider: TRANSACTION_PROVIDER, providerCode: string, status: MERCHANT_TRANSACTION_PROVIDER_STATUS, createdAt: any, updatedAt: any, merchantId: string }, paymentMethod?: { __typename?: 'MerchantCustomerPaymentMethod', id: string, providerCode: string, providerError?: string | null, providerLastVerifiedAt: any, providerStatus: PAYMENT_METHOD_STATUS, methodType: PAYMENT_METHOD, isEnabled: boolean, isDefault: boolean, merchantCustomerCode: string, createdAt: any, updatedAt: any, transactionProviderId: string, paymentMethodInfo?: { __typename?: 'MerchantCustomerPaymentMethodCreditCardInfo', methodType: PAYMENT_METHOD, cardNumberMasked?: string | null, cardBrand?: string | null } | { __typename?: 'MerchantCustomerPaymentMethodGenericInfo', methodType: PAYMENT_METHOD } | null } | null } };

export const MerchantFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<MerchantFragmentFragment, unknown>;
export const MerchantPaymentPlanTemplateFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}}]} as unknown as DocumentNode<MerchantPaymentPlanTemplateFragmentFragment, unknown>;
export const MerchantPaymentPlanFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"timeAnchor"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"trialEndsAt"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"periodCount"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodStart"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodEnd"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlanCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlanDescription"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"templateId"}},{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"periodCount"}},{"kind":"Field","name":{"kind":"Name","value":"periodStart"}},{"kind":"Field","name":{"kind":"Name","value":"periodEnd"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}}]}}]}}]}}]} as unknown as DocumentNode<MerchantPaymentPlanFragmentFragment, unknown>;
export const MerchantTransactionProviderFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}}]} as unknown as DocumentNode<MerchantTransactionProviderFragmentFragment, unknown>;
export const MerchantCustomerPaymentMethodFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}}]} as unknown as DocumentNode<MerchantCustomerPaymentMethodFragmentFragment, unknown>;
export const MerchantTransactionFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}}]} as unknown as DocumentNode<MerchantTransactionFragmentFragment, unknown>;
export const MerchantDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchant"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Merchant"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"publicId"}},{"kind":"Field","name":{"kind":"Name","value":"publicIdUpdatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]} as unknown as DocumentNode<MerchantQuery, MerchantQueryVariables>;
export const MerchantCustomerPaymentMethodsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantCustomerPaymentMethods"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantCustomerPaymentMethodId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TRANSACTION_PROVIDER"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProviderId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"methodType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PAYMENT_METHOD"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantCustomerCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"isDefault"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hasProviderError"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerPaymentMethods"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantCustomerPaymentMethodId"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionProvider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProviderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"providerCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"methodType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"methodType"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantCustomerCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantCustomerCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"isDefault"},"value":{"kind":"Variable","name":{"kind":"Name","value":"isDefault"}}},{"kind":"Argument","name":{"kind":"Name","value":"hasProviderError"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hasProviderError"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}}]} as unknown as DocumentNode<MerchantCustomerPaymentMethodsQuery, MerchantCustomerPaymentMethodsQueryVariables>;
export const MerchantCustomerPaymentMethodDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantCustomerPaymentMethodId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerPaymentMethod"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantCustomerPaymentMethodId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantCustomerPaymentMethodId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}}]} as unknown as DocumentNode<MerchantCustomerPaymentMethodQuery, MerchantCustomerPaymentMethodQueryVariables>;
export const MerchantPaymentPlanTemplatesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantPaymentPlanTemplates"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanTemplateId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TRANSACTION_PROVIDER"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProviderId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currency"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CURRENCY"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerStatus"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PAYMENT_PLAN_TEMPLATE_STATUS"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlanTemplates"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanTemplateId"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionProvider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProviderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currency"}}},{"kind":"Argument","name":{"kind":"Name","value":"providerCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"providerStatus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerStatus"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}}]} as unknown as DocumentNode<MerchantPaymentPlanTemplatesQuery, MerchantPaymentPlanTemplatesQueryVariables>;
export const MerchantPaymentPlanTemplateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantPaymentPlanTemplate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanTemplateId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlanTemplate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantPaymentPlanTemplateId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanTemplateId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}}]} as unknown as DocumentNode<MerchantPaymentPlanTemplateQuery, MerchantPaymentPlanTemplateQueryVariables>;
export const MerchantPaymentPlanTemplateCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateCreateSchema"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlanTemplateCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}}]} as unknown as DocumentNode<MerchantPaymentPlanTemplateCreateMutation, MerchantPaymentPlanTemplateCreateMutationVariables>;
export const MerchantPaymentPlanTemplateUpdateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateUpdate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateUpdateSchema"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlanTemplateUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanTemplateFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanTemplate"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}}]} as unknown as DocumentNode<MerchantPaymentPlanTemplateUpdateMutation, MerchantPaymentPlanTemplateUpdateMutationVariables>;
export const MerchantPaymentPlansDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantPaymentPlans"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TRANSACTION_PROVIDER"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProviderId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currency"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CURRENCY"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerStatus"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PAYMENT_PLAN_STATUS"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethod"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PAYMENT_METHOD"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"templateId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantCustomerCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hasProviderError"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"ended"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"started"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"canceled"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlans"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanId"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionProvider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProviderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"Argument","name":{"kind":"Name","value":"providerCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"providerStatus"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerStatus"}}},{"kind":"Argument","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currency"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentMethodId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentMethod"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethod"}}},{"kind":"Argument","name":{"kind":"Name","value":"templateId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"templateId"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantCustomerCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantCustomerCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantPaymentPlanCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"hasProviderError"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hasProviderError"}}},{"kind":"Argument","name":{"kind":"Name","value":"ended"},"value":{"kind":"Variable","name":{"kind":"Name","value":"ended"}}},{"kind":"Argument","name":{"kind":"Name","value":"started"},"value":{"kind":"Variable","name":{"kind":"Name","value":"started"}}},{"kind":"Argument","name":{"kind":"Name","value":"canceled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"canceled"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"timeAnchor"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"trialEndsAt"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"periodCount"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodStart"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodEnd"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlanCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlanDescription"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"templateId"}},{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"periodCount"}},{"kind":"Field","name":{"kind":"Name","value":"periodStart"}},{"kind":"Field","name":{"kind":"Name","value":"periodEnd"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}}]}}]}}]}}]} as unknown as DocumentNode<MerchantPaymentPlansQuery, MerchantPaymentPlansQueryVariables>;
export const MerchantPaymentPlanDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantPaymentPlan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantPaymentPlanId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"timeAnchor"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"trialEndsAt"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"periodCount"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodStart"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodEnd"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlanCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlanDescription"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"templateId"}},{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"periodCount"}},{"kind":"Field","name":{"kind":"Name","value":"periodStart"}},{"kind":"Field","name":{"kind":"Name","value":"periodEnd"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}}]}}]}}]}}]} as unknown as DocumentNode<MerchantPaymentPlanQuery, MerchantPaymentPlanQueryVariables>;
export const MerchantPaymentPlanCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MerchantPaymentPlanCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlanCreateSchema"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlanCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"timeAnchor"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"trialEndsAt"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"periodCount"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodStart"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodEnd"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlanCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlanDescription"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"templateId"}},{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"periodCount"}},{"kind":"Field","name":{"kind":"Name","value":"periodStart"}},{"kind":"Field","name":{"kind":"Name","value":"periodEnd"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}}]}}]}}]}}]} as unknown as DocumentNode<MerchantPaymentPlanCreateMutation, MerchantPaymentPlanCreateMutationVariables>;
export const MerchantPaymentPlanCancelDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MerchantPaymentPlanCancel"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlanCancel"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantPaymentPlanId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantPaymentPlanId"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantPaymentPlanFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantPaymentPlan"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"timeAnchor"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"trialEndsAt"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"periodCount"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAt"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodStart"}},{"kind":"Field","name":{"kind":"Name","value":"currentPeriodEnd"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlanCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantPaymentPlanDescription"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"templateId"}},{"kind":"Field","name":{"kind":"Name","value":"template"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"initialAmount"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodDays"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodMonths"}},{"kind":"Field","name":{"kind":"Name","value":"trialPeriodYears"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalMonths"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalDays"}},{"kind":"Field","name":{"kind":"Name","value":"renewalIntervalYears"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterDays"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterMonths"}},{"kind":"Field","name":{"kind":"Name","value":"endsAfterYears"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"periodCount"}},{"kind":"Field","name":{"kind":"Name","value":"periodStart"}},{"kind":"Field","name":{"kind":"Name","value":"periodEnd"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentPlanId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionId"}},{"kind":"Field","name":{"kind":"Name","value":"transaction"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}}]}}]}}]}}]} as unknown as DocumentNode<MerchantPaymentPlanCancelMutation, MerchantPaymentPlanCancelMutationVariables>;
export const MerchantTransactionProvidersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantTransactionProviders"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TRANSACTION_PROVIDER"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"MERCHANT_TRANSACTION_PROVIDER_STATUS"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantTransactionProviders"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"provider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}}]} as unknown as DocumentNode<MerchantTransactionProvidersQuery, MerchantTransactionProvidersQueryVariables>;
export const MerchantTransactionProviderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantTransactionProvider"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantTransactionProvider"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}}]} as unknown as DocumentNode<MerchantTransactionProviderQuery, MerchantTransactionProviderQueryVariables>;
export const MerchantTransactionsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantTransactions"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProviderId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"status"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TRANSACTION_STATUS"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"currency"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CURRENCY"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodType"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PAYMENT_METHOD"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TRANSACTION_PROVIDER"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"providerCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"hasProviderError"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantCustomerCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionCode"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"token"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"failed"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"started"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"disputed"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"reverted"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"canceled"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"succeeded"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"take"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"first"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"before"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ConnectionCursor"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SortingFieldSchema"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantTransactions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionId"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentMethodId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodId"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProviderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"status"},"value":{"kind":"Variable","name":{"kind":"Name","value":"status"}}},{"kind":"Argument","name":{"kind":"Name","value":"currency"},"value":{"kind":"Variable","name":{"kind":"Name","value":"currency"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentMethodType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentMethodType"}}},{"kind":"Argument","name":{"kind":"Name","value":"transactionProvider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"providerCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"providerCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"hasProviderError"},"value":{"kind":"Variable","name":{"kind":"Name","value":"hasProviderError"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantCustomerCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantCustomerCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionCode"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionCode"}}},{"kind":"Argument","name":{"kind":"Name","value":"token"},"value":{"kind":"Variable","name":{"kind":"Name","value":"token"}}},{"kind":"Argument","name":{"kind":"Name","value":"failed"},"value":{"kind":"Variable","name":{"kind":"Name","value":"failed"}}},{"kind":"Argument","name":{"kind":"Name","value":"started"},"value":{"kind":"Variable","name":{"kind":"Name","value":"started"}}},{"kind":"Argument","name":{"kind":"Name","value":"disputed"},"value":{"kind":"Variable","name":{"kind":"Name","value":"disputed"}}},{"kind":"Argument","name":{"kind":"Name","value":"reverted"},"value":{"kind":"Variable","name":{"kind":"Name","value":"reverted"}}},{"kind":"Argument","name":{"kind":"Name","value":"canceled"},"value":{"kind":"Variable","name":{"kind":"Name","value":"canceled"}}},{"kind":"Argument","name":{"kind":"Name","value":"succeeded"},"value":{"kind":"Variable","name":{"kind":"Name","value":"succeeded"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}},{"kind":"Argument","name":{"kind":"Name","value":"take"},"value":{"kind":"Variable","name":{"kind":"Name","value":"take"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"first"}}},{"kind":"Argument","name":{"kind":"Name","value":"before"},"value":{"kind":"Variable","name":{"kind":"Name","value":"before"}}},{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"sorting"},"value":{"kind":"Variable","name":{"kind":"Name","value":"sorting"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"cursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}},{"kind":"Field","name":{"kind":"Name","value":"totalCount"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}}]}}]} as unknown as DocumentNode<MerchantTransactionsQuery, MerchantTransactionsQueryVariables>;
export const MerchantTransactionDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantTransaction"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantTransaction"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}}]}}]} as unknown as DocumentNode<MerchantTransactionQuery, MerchantTransactionQueryVariables>;
export const MerchantClientTransactionNuveiPreSessionDataDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"MerchantClientTransactionNuveiPreSessionData"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TRANSACTION_PROVIDER"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantClientGetPreSessionData"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transactionProvider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantClientTransactionNuveiPreSessionData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}},{"kind":"Field","name":{"kind":"Name","value":"merchantSiteId"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantClientTransactionGenericPreSessionData"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"publicKey"}}]}}]}}]}}]} as unknown as DocumentNode<MerchantClientTransactionNuveiPreSessionDataQuery, MerchantClientTransactionNuveiPreSessionDataQueryVariables>;
export const MerchantClientTransactionPaymentSessionStartDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MerchantClientTransactionPaymentSessionStart"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"TRANSACTION_PROVIDER"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantClientTransactionPaymentStartSchema"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantClientTransactionPaymentSessionStart"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"transactionProvider"},"value":{"kind":"Variable","name":{"kind":"Name","value":"transactionProvider"}}},{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionProviderId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionProviderId"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}}]}}]} as unknown as DocumentNode<MerchantClientTransactionPaymentSessionStartMutation, MerchantClientTransactionPaymentSessionStartMutationVariables>;
export const MerchantClientTransactionPaymentSessionVerifyDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MerchantClientTransactionPaymentSessionVerify"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantClientTransactionPaymentSessionVerify"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}}]}}]} as unknown as DocumentNode<MerchantClientTransactionPaymentSessionVerifyMutation, MerchantClientTransactionPaymentSessionVerifyMutationVariables>;
export const MerchantTransactionVoidDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"MerchantTransactionVoid"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"merchantTransactionVoid"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"merchantTransactionId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"merchantTransactionId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransactionProvider"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"merchantId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethod"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"isEnabled"}},{"kind":"Field","name":{"kind":"Name","value":"isDefault"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodCreditCardInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}},{"kind":"Field","name":{"kind":"Name","value":"cardNumberMasked"}},{"kind":"Field","name":{"kind":"Name","value":"cardBrand"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodGenericInfo"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"methodType"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MerchantTransactionFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MerchantTransaction"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"action"}},{"kind":"Field","name":{"kind":"Name","value":"providerCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerError"}},{"kind":"Field","name":{"kind":"Name","value":"providerLastVerifiedAt"}},{"kind":"Field","name":{"kind":"Name","value":"providerRelatedCode"}},{"kind":"Field","name":{"kind":"Name","value":"providerStatus"}},{"kind":"Field","name":{"kind":"Name","value":"token"}},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiresAt"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodType"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodCode"}},{"kind":"Field","name":{"kind":"Name","value":"payload"}},{"kind":"Field","name":{"kind":"Name","value":"amount"}},{"kind":"Field","name":{"kind":"Name","value":"currency"}},{"kind":"Field","name":{"kind":"Name","value":"transactionDate"}},{"kind":"Field","name":{"kind":"Name","value":"startedAt"}},{"kind":"Field","name":{"kind":"Name","value":"succeededAt"}},{"kind":"Field","name":{"kind":"Name","value":"failedAt"}},{"kind":"Field","name":{"kind":"Name","value":"canceledAt"}},{"kind":"Field","name":{"kind":"Name","value":"revertedAt"}},{"kind":"Field","name":{"kind":"Name","value":"disputedAt"}},{"kind":"Field","name":{"kind":"Name","value":"storePaymentMethod"}},{"kind":"Field","name":{"kind":"Name","value":"merchantCustomerCode"}},{"kind":"Field","name":{"kind":"Name","value":"merchantTransactionCode"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProviderId"}},{"kind":"Field","name":{"kind":"Name","value":"transactionProvider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantTransactionProviderFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethodId"}},{"kind":"Field","name":{"kind":"Name","value":"paymentMethod"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"MerchantCustomerPaymentMethodFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"relatedTransactionId"}}]}}]} as unknown as DocumentNode<MerchantTransactionVoidMutation, MerchantTransactionVoidMutationVariables>;