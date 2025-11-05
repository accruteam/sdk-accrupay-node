import { gql } from '@api/gql';

export const MERCHANT_CLIENT_TRANSACTION_SESSION_START_MUTATION = gql(`
  mutation MerchantApiClientTransactionPaymentSessionStart(
    $merchantTransactionProviderId: String
    $transactionProvider: TRANSACTION_PROVIDER
    $data: MerchantApiClientTransactionPaymentSessionStartSchema!
  ) {
    merchantApiClientTransactionPaymentSessionStartV2(
      merchantTransactionProviderId: $merchantTransactionProviderId
      transactionProvider: $transactionProvider
      data: $data
    ) {
      ...MerchantClientTransactionSessionFragment
    }
  }
`);

export const MERCHANT_CLIENT_TRANSACTION_SESSION_VERIFY_MUTATION = gql(`
  mutation MerchantApiClientTransactionPaymentSessionVerifyV2(
    $id: String
    $token: String
    $providerCode: String
    $merchantInternalTransactionCode: String
  ) {
    merchantApiClientTransactionPaymentSessionVerify(
      id: $id
      token: $token
      providerCode: $providerCode
      merchantInternalTransactionCode: $merchantInternalTransactionCode
    ) {
      ...MerchantTransactionFragment
    }
  }
`);
