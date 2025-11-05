import { gql } from '@api/gql';

export const MERCHANT_CLIENT_TRANSACTION_ADD_PAYMENT_METHOD_SESSION_START_MUTATION =
  gql(`
  mutation MerchantApiClientTransactionAddPaymentMethodSessionStart(
    $merchantTransactionProviderId: String
    $transactionProvider: TRANSACTION_PROVIDER
    $data: MerchantApiClientTransactionAddPaymentMethodSessionStartSchema!
  ) {
    merchantApiClientTransactionAddPaymentMethodSessionStart(
      merchantTransactionProviderId: $merchantTransactionProviderId
      transactionProvider: $transactionProvider
      data: $data
    ) {
      ...MerchantClientTransactionSessionFragment
    }
  }
`);

export const MERCHANT_CLIENT_TRANSACTION_ADD_PAYMENT_METHOD_SESSION_VERIFY_MUTATION =
  gql(`
  mutation MerchantApiClientTransactionAddPaymentMethodSessionVerify(
    $id: String
    $token: String
    $providerCode: String
    $merchantInternalTransactionCode: String
  ) {
    merchantApiClientTransactionAddPaymentMethodSessionVerify(
      id: $id
      token: $token
      providerCode: $providerCode
      merchantInternalTransactionCode: $merchantInternalTransactionCode
    ) {
      ...MerchantTransactionFragment
    }
  }
`);
