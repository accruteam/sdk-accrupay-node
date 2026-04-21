import { gql } from '@api/gql';

export const MERCHANT_TRANSACTION_AUTHORIZATION_SETTLE_MUTATION = gql(`
  mutation MerchantApiTransactionAuthorizationSettle(
    $amount: BigInt!

    $id: String
    $providerCode: String
    $merchantInternalTransactionCode: String
  ) {
    merchantApiTransactionAuthorizationSettle(
      amount: $amount

      id: $id
      providerCode: $providerCode
      merchantInternalTransactionCode: $merchantInternalTransactionCode
    ) {
      ...MerchantTransactionContextFragment
    }
  }
`);

export const MERCHANT_TRANSACTION_AUTHORIZATION_VOID_MUTATION = gql(`
  mutation MerchantApiTransactionAuthorizationVoid(
    $id: String
    $providerCode: String
    $merchantInternalTransactionCode: String
  ) {
    merchantApiTransactionAuthorizationVoid(
      id: $id
      providerCode: $providerCode
      merchantInternalTransactionCode: $merchantInternalTransactionCode
    ) {
      ...MerchantTransactionContextFragment
    }
  }
`);
