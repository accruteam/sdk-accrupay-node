/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  fragment MerchantFragment on Merchant {\n    id\n    email\n    name\n    phone\n    status\n    publicId\n    publicIdUpdatedAt\n    createdAt\n    updatedAt\n  }\n": types.MerchantFragmentFragmentDoc,
    "\n  query Merchant {\n    merchant {\n      ...MerchantFragment\n    }\n  }\n": types.MerchantDocument,
    "\n  fragment MerchantCustomerPaymentMethodFragment on MerchantCustomerPaymentMethod {\n    id\n    providerCode\n    providerError\n    providerLastVerifiedAt\n    providerStatus\n    methodType\n    isEnabled\n    isDefault\n    merchantCustomerCode\n    createdAt\n    updatedAt\n    paymentMethodInfo {\n      ... on MerchantCustomerPaymentMethodCreditCardInfo {\n        methodType\n        cardNumberMasked\n        cardBrand\n      }\n      ... on MerchantCustomerPaymentMethodGenericInfo {\n        methodType\n      }\n    }\n    transactionProviderId\n  }\n": types.MerchantCustomerPaymentMethodFragmentFragmentDoc,
    "\n  query MerchantCustomerPaymentMethods(\n    $merchantCustomerPaymentMethodId: String,\n\n    $transactionProvider: TRANSACTION_PROVIDER,\n    $transactionProviderId: String,\n\n    $providerCode: String,\n    $methodType: PAYMENT_METHOD,\n\n    $merchantCustomerCode: String,\n\n    $isDefault: Boolean,\n    $hasProviderError: Boolean,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    merchantCustomerPaymentMethods(\n      id: $merchantCustomerPaymentMethodId,\n\n      transactionProvider: $transactionProvider,\n      transactionProviderId: $transactionProviderId,\n\n      providerCode: $providerCode,\n      methodType: $methodType,\n\n      merchantCustomerCode: $merchantCustomerCode,\n\n      isDefault: $isDefault,\n      hasProviderError: $hasProviderError,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantCustomerPaymentMethodFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.MerchantCustomerPaymentMethodsDocument,
    "\n  query MerchantCustomerPaymentMethod($merchantCustomerPaymentMethodId: String!) {\n    merchantCustomerPaymentMethod(merchantCustomerPaymentMethodId: $merchantCustomerPaymentMethodId) {\n      ...MerchantCustomerPaymentMethodFragment\n    }\n  }\n": types.MerchantCustomerPaymentMethodDocument,
    "\n  mutation MerchantCustomerPaymentMethodDelete($merchantCustomerPaymentMethodId: String!) {\n    merchantCustomerPaymentMethodDelete(merchantCustomerPaymentMethodId: $merchantCustomerPaymentMethodId)\n  }\n": types.MerchantCustomerPaymentMethodDeleteDocument,
    "\n  fragment MerchantTransactionProviderFragment on MerchantTransactionProvider {\n    id\n    provider\n    credentials\n    status\n    createdAt\n    updatedAt\n    merchantId\n  }\n": types.MerchantTransactionProviderFragmentFragmentDoc,
    "\n  query MerchantTransactionProviders(\n    $merchantTransactionProviderId: String,\n    $provider: TRANSACTION_PROVIDER,\n    $status: MERCHANT_TRANSACTION_PROVIDER_STATUS,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    merchantTransactionProviders(\n      id: $merchantTransactionProviderId,\n      provider: $provider,\n      status: $status,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantTransactionProviderFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.MerchantTransactionProvidersDocument,
    "\n  query MerchantTransactionProvider($merchantTransactionProviderId: String!) {\n    merchantTransactionProvider(merchantTransactionProviderId: $merchantTransactionProviderId) {\n      ...MerchantTransactionProviderFragment\n    }\n  }\n": types.MerchantTransactionProviderDocument,
    "\n  fragment MerchantTransactionFragment on MerchantTransaction {\n    id\n    providerCode\n    providerError\n    providerLastVerifiedAt\n    providerStatus\n    token\n    tokenExpiresAt\n    paymentMethodType\n    payload\n    amount\n    currency\n    transactionDate\n    startedAt\n    succeededAt\n    failedAt\n    canceledAt\n    revertedAt\n    disputedAt\n    storePaymentMethod\n    merchantCustomerCode\n    merchantTransactionCode\n    createdAt\n    updatedAt\n    status\n    transactionProviderId\n    transactionProvider {\n      ...MerchantTransactionProviderFragment\n    }\n    paymentMethodId\n    paymentMethod {\n      ...MerchantCustomerPaymentMethodFragment\n    }\n  }\n": types.MerchantTransactionFragmentFragmentDoc,
    "\n  query MerchantTransactions(\n    $merchantTransactionId: String,\n    $paymentMethodId: String,\n    $transactionProviderId: String,\n\n    $status: TRANSACTION_STATUS,\n    $currency: CURRENCY,\n    $paymentMethodType: PAYMENT_METHOD,\n    $transactionProvider: TRANSACTION_PROVIDER,\n\n    $providerCode: String,\n    $hasProviderError: Boolean,\n\n    $merchantCustomerCode: String,\n    $merchantTransactionCode: String,\n\n    $token: String,\n\n    $failed: Boolean,\n    $started: Boolean,\n    $disputed: Boolean,\n    $reverted: Boolean,\n    $canceled: Boolean,\n    $succeeded: Boolean,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    merchantTransactions(\n      id: $merchantTransactionId\n      paymentMethodId: $paymentMethodId,\n      transactionProviderId: $transactionProviderId,\n\n      status: $status,\n      currency: $currency,\n      paymentMethodType: $paymentMethodType,\n      transactionProvider: $transactionProvider,\n\n      providerCode: $providerCode,\n      hasProviderError: $hasProviderError,\n\n      merchantCustomerCode: $merchantCustomerCode,\n      merchantTransactionCode: $merchantTransactionCode,\n\n      token: $token,\n\n      failed: $failed,\n      started: $started,\n      disputed: $disputed,\n      reverted: $reverted,\n      canceled: $canceled,\n      succeeded: $succeeded,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantTransactionFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n": types.MerchantTransactionsDocument,
    "\n  query MerchantTransaction($merchantTransactionId: String!) {\n    merchantTransaction(merchantTransactionId: $merchantTransactionId) {\n      ...MerchantTransactionFragment\n    }\n  }\n": types.MerchantTransactionDocument,
    "\n  mutation MerchantTransactionWebSdkSessionStart($data: MerchantTransactionStartSchema!) {\n    merchantTransactionWebSdkSessionStart(data: $data) {\n      ...MerchantTransactionFragment\n    }\n  }\n": types.MerchantTransactionWebSdkSessionStartDocument,
    "\n  mutation MerchantTransactionWebSdkSessionVerify($merchantTransactionId: String!) {\n    merchantTransactionWebSdkSessionVerify(merchantTransactionId: $merchantTransactionId) {\n      ...MerchantTransactionFragment\n    }\n  }\n": types.MerchantTransactionWebSdkSessionVerifyDocument,
    "\n  mutation MerchantTransactionVoid($merchantTransactionId: String!) {\n    merchantTransactionVoid(merchantTransactionId: $merchantTransactionId) {\n      ...MerchantTransactionFragment\n    }\n  }\n": types.MerchantTransactionVoidDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment MerchantFragment on Merchant {\n    id\n    email\n    name\n    phone\n    status\n    publicId\n    publicIdUpdatedAt\n    createdAt\n    updatedAt\n  }\n"): (typeof documents)["\n  fragment MerchantFragment on Merchant {\n    id\n    email\n    name\n    phone\n    status\n    publicId\n    publicIdUpdatedAt\n    createdAt\n    updatedAt\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Merchant {\n    merchant {\n      ...MerchantFragment\n    }\n  }\n"): (typeof documents)["\n  query Merchant {\n    merchant {\n      ...MerchantFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment MerchantCustomerPaymentMethodFragment on MerchantCustomerPaymentMethod {\n    id\n    providerCode\n    providerError\n    providerLastVerifiedAt\n    providerStatus\n    methodType\n    isEnabled\n    isDefault\n    merchantCustomerCode\n    createdAt\n    updatedAt\n    paymentMethodInfo {\n      ... on MerchantCustomerPaymentMethodCreditCardInfo {\n        methodType\n        cardNumberMasked\n        cardBrand\n      }\n      ... on MerchantCustomerPaymentMethodGenericInfo {\n        methodType\n      }\n    }\n    transactionProviderId\n  }\n"): (typeof documents)["\n  fragment MerchantCustomerPaymentMethodFragment on MerchantCustomerPaymentMethod {\n    id\n    providerCode\n    providerError\n    providerLastVerifiedAt\n    providerStatus\n    methodType\n    isEnabled\n    isDefault\n    merchantCustomerCode\n    createdAt\n    updatedAt\n    paymentMethodInfo {\n      ... on MerchantCustomerPaymentMethodCreditCardInfo {\n        methodType\n        cardNumberMasked\n        cardBrand\n      }\n      ... on MerchantCustomerPaymentMethodGenericInfo {\n        methodType\n      }\n    }\n    transactionProviderId\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MerchantCustomerPaymentMethods(\n    $merchantCustomerPaymentMethodId: String,\n\n    $transactionProvider: TRANSACTION_PROVIDER,\n    $transactionProviderId: String,\n\n    $providerCode: String,\n    $methodType: PAYMENT_METHOD,\n\n    $merchantCustomerCode: String,\n\n    $isDefault: Boolean,\n    $hasProviderError: Boolean,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    merchantCustomerPaymentMethods(\n      id: $merchantCustomerPaymentMethodId,\n\n      transactionProvider: $transactionProvider,\n      transactionProviderId: $transactionProviderId,\n\n      providerCode: $providerCode,\n      methodType: $methodType,\n\n      merchantCustomerCode: $merchantCustomerCode,\n\n      isDefault: $isDefault,\n      hasProviderError: $hasProviderError,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantCustomerPaymentMethodFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query MerchantCustomerPaymentMethods(\n    $merchantCustomerPaymentMethodId: String,\n\n    $transactionProvider: TRANSACTION_PROVIDER,\n    $transactionProviderId: String,\n\n    $providerCode: String,\n    $methodType: PAYMENT_METHOD,\n\n    $merchantCustomerCode: String,\n\n    $isDefault: Boolean,\n    $hasProviderError: Boolean,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    merchantCustomerPaymentMethods(\n      id: $merchantCustomerPaymentMethodId,\n\n      transactionProvider: $transactionProvider,\n      transactionProviderId: $transactionProviderId,\n\n      providerCode: $providerCode,\n      methodType: $methodType,\n\n      merchantCustomerCode: $merchantCustomerCode,\n\n      isDefault: $isDefault,\n      hasProviderError: $hasProviderError,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantCustomerPaymentMethodFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MerchantCustomerPaymentMethod($merchantCustomerPaymentMethodId: String!) {\n    merchantCustomerPaymentMethod(merchantCustomerPaymentMethodId: $merchantCustomerPaymentMethodId) {\n      ...MerchantCustomerPaymentMethodFragment\n    }\n  }\n"): (typeof documents)["\n  query MerchantCustomerPaymentMethod($merchantCustomerPaymentMethodId: String!) {\n    merchantCustomerPaymentMethod(merchantCustomerPaymentMethodId: $merchantCustomerPaymentMethodId) {\n      ...MerchantCustomerPaymentMethodFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation MerchantCustomerPaymentMethodDelete($merchantCustomerPaymentMethodId: String!) {\n    merchantCustomerPaymentMethodDelete(merchantCustomerPaymentMethodId: $merchantCustomerPaymentMethodId)\n  }\n"): (typeof documents)["\n  mutation MerchantCustomerPaymentMethodDelete($merchantCustomerPaymentMethodId: String!) {\n    merchantCustomerPaymentMethodDelete(merchantCustomerPaymentMethodId: $merchantCustomerPaymentMethodId)\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment MerchantTransactionProviderFragment on MerchantTransactionProvider {\n    id\n    provider\n    credentials\n    status\n    createdAt\n    updatedAt\n    merchantId\n  }\n"): (typeof documents)["\n  fragment MerchantTransactionProviderFragment on MerchantTransactionProvider {\n    id\n    provider\n    credentials\n    status\n    createdAt\n    updatedAt\n    merchantId\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MerchantTransactionProviders(\n    $merchantTransactionProviderId: String,\n    $provider: TRANSACTION_PROVIDER,\n    $status: MERCHANT_TRANSACTION_PROVIDER_STATUS,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    merchantTransactionProviders(\n      id: $merchantTransactionProviderId,\n      provider: $provider,\n      status: $status,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantTransactionProviderFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query MerchantTransactionProviders(\n    $merchantTransactionProviderId: String,\n    $provider: TRANSACTION_PROVIDER,\n    $status: MERCHANT_TRANSACTION_PROVIDER_STATUS,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    merchantTransactionProviders(\n      id: $merchantTransactionProviderId,\n      provider: $provider,\n      status: $status,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantTransactionProviderFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MerchantTransactionProvider($merchantTransactionProviderId: String!) {\n    merchantTransactionProvider(merchantTransactionProviderId: $merchantTransactionProviderId) {\n      ...MerchantTransactionProviderFragment\n    }\n  }\n"): (typeof documents)["\n  query MerchantTransactionProvider($merchantTransactionProviderId: String!) {\n    merchantTransactionProvider(merchantTransactionProviderId: $merchantTransactionProviderId) {\n      ...MerchantTransactionProviderFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  fragment MerchantTransactionFragment on MerchantTransaction {\n    id\n    providerCode\n    providerError\n    providerLastVerifiedAt\n    providerStatus\n    token\n    tokenExpiresAt\n    paymentMethodType\n    payload\n    amount\n    currency\n    transactionDate\n    startedAt\n    succeededAt\n    failedAt\n    canceledAt\n    revertedAt\n    disputedAt\n    storePaymentMethod\n    merchantCustomerCode\n    merchantTransactionCode\n    createdAt\n    updatedAt\n    status\n    transactionProviderId\n    transactionProvider {\n      ...MerchantTransactionProviderFragment\n    }\n    paymentMethodId\n    paymentMethod {\n      ...MerchantCustomerPaymentMethodFragment\n    }\n  }\n"): (typeof documents)["\n  fragment MerchantTransactionFragment on MerchantTransaction {\n    id\n    providerCode\n    providerError\n    providerLastVerifiedAt\n    providerStatus\n    token\n    tokenExpiresAt\n    paymentMethodType\n    payload\n    amount\n    currency\n    transactionDate\n    startedAt\n    succeededAt\n    failedAt\n    canceledAt\n    revertedAt\n    disputedAt\n    storePaymentMethod\n    merchantCustomerCode\n    merchantTransactionCode\n    createdAt\n    updatedAt\n    status\n    transactionProviderId\n    transactionProvider {\n      ...MerchantTransactionProviderFragment\n    }\n    paymentMethodId\n    paymentMethod {\n      ...MerchantCustomerPaymentMethodFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MerchantTransactions(\n    $merchantTransactionId: String,\n    $paymentMethodId: String,\n    $transactionProviderId: String,\n\n    $status: TRANSACTION_STATUS,\n    $currency: CURRENCY,\n    $paymentMethodType: PAYMENT_METHOD,\n    $transactionProvider: TRANSACTION_PROVIDER,\n\n    $providerCode: String,\n    $hasProviderError: Boolean,\n\n    $merchantCustomerCode: String,\n    $merchantTransactionCode: String,\n\n    $token: String,\n\n    $failed: Boolean,\n    $started: Boolean,\n    $disputed: Boolean,\n    $reverted: Boolean,\n    $canceled: Boolean,\n    $succeeded: Boolean,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    merchantTransactions(\n      id: $merchantTransactionId\n      paymentMethodId: $paymentMethodId,\n      transactionProviderId: $transactionProviderId,\n\n      status: $status,\n      currency: $currency,\n      paymentMethodType: $paymentMethodType,\n      transactionProvider: $transactionProvider,\n\n      providerCode: $providerCode,\n      hasProviderError: $hasProviderError,\n\n      merchantCustomerCode: $merchantCustomerCode,\n      merchantTransactionCode: $merchantTransactionCode,\n\n      token: $token,\n\n      failed: $failed,\n      started: $started,\n      disputed: $disputed,\n      reverted: $reverted,\n      canceled: $canceled,\n      succeeded: $succeeded,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantTransactionFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"): (typeof documents)["\n  query MerchantTransactions(\n    $merchantTransactionId: String,\n    $paymentMethodId: String,\n    $transactionProviderId: String,\n\n    $status: TRANSACTION_STATUS,\n    $currency: CURRENCY,\n    $paymentMethodType: PAYMENT_METHOD,\n    $transactionProvider: TRANSACTION_PROVIDER,\n\n    $providerCode: String,\n    $hasProviderError: Boolean,\n\n    $merchantCustomerCode: String,\n    $merchantTransactionCode: String,\n\n    $token: String,\n\n    $failed: Boolean,\n    $started: Boolean,\n    $disputed: Boolean,\n    $reverted: Boolean,\n    $canceled: Boolean,\n    $succeeded: Boolean,\n\n    $skip: Int,\n    $take: Int,\n\n    $after: ConnectionCursor,\n    $first: Int,\n\n    $before: ConnectionCursor,\n    $last: Int,\n\n    $sorting: [SortingFieldSchema!]\n  ) {\n    merchantTransactions(\n      id: $merchantTransactionId\n      paymentMethodId: $paymentMethodId,\n      transactionProviderId: $transactionProviderId,\n\n      status: $status,\n      currency: $currency,\n      paymentMethodType: $paymentMethodType,\n      transactionProvider: $transactionProvider,\n\n      providerCode: $providerCode,\n      hasProviderError: $hasProviderError,\n\n      merchantCustomerCode: $merchantCustomerCode,\n      merchantTransactionCode: $merchantTransactionCode,\n\n      token: $token,\n\n      failed: $failed,\n      started: $started,\n      disputed: $disputed,\n      reverted: $reverted,\n      canceled: $canceled,\n      succeeded: $succeeded,\n\n      skip: $skip,\n      take: $take,\n\n      after: $after,\n      first: $first,\n\n      before: $before,\n      last: $last,\n\n      sorting: $sorting\n    ) {\n      edges {\n        node {\n          ...MerchantTransactionFragment\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n      totalCount\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query MerchantTransaction($merchantTransactionId: String!) {\n    merchantTransaction(merchantTransactionId: $merchantTransactionId) {\n      ...MerchantTransactionFragment\n    }\n  }\n"): (typeof documents)["\n  query MerchantTransaction($merchantTransactionId: String!) {\n    merchantTransaction(merchantTransactionId: $merchantTransactionId) {\n      ...MerchantTransactionFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation MerchantTransactionWebSdkSessionStart($data: MerchantTransactionStartSchema!) {\n    merchantTransactionWebSdkSessionStart(data: $data) {\n      ...MerchantTransactionFragment\n    }\n  }\n"): (typeof documents)["\n  mutation MerchantTransactionWebSdkSessionStart($data: MerchantTransactionStartSchema!) {\n    merchantTransactionWebSdkSessionStart(data: $data) {\n      ...MerchantTransactionFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation MerchantTransactionWebSdkSessionVerify($merchantTransactionId: String!) {\n    merchantTransactionWebSdkSessionVerify(merchantTransactionId: $merchantTransactionId) {\n      ...MerchantTransactionFragment\n    }\n  }\n"): (typeof documents)["\n  mutation MerchantTransactionWebSdkSessionVerify($merchantTransactionId: String!) {\n    merchantTransactionWebSdkSessionVerify(merchantTransactionId: $merchantTransactionId) {\n      ...MerchantTransactionFragment\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation MerchantTransactionVoid($merchantTransactionId: String!) {\n    merchantTransactionVoid(merchantTransactionId: $merchantTransactionId) {\n      ...MerchantTransactionFragment\n    }\n  }\n"): (typeof documents)["\n  mutation MerchantTransactionVoid($merchantTransactionId: String!) {\n    merchantTransactionVoid(merchantTransactionId: $merchantTransactionId) {\n      ...MerchantTransactionFragment\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;