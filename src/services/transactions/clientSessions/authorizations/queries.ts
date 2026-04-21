import { gql } from '@api/gql';

export const MERCHANT_CLIENT_TRANSACTION_AUTHORIZATION_SESSION_START_MUTATION =
  gql(`
  mutation MerchantApiClientTransactionAuthorizationSessionStart(
    $merchantTransactionProviderId: String
    $transactionProvider: TRANSACTION_PROVIDER
    $data: MerchantApiClientTransactionAuthorizationSessionStartSchema!
  ) {
    merchantApiClientTransactionAuthorizationSessionStart(
      merchantTransactionProviderId: $merchantTransactionProviderId
      transactionProvider: $transactionProvider
      data: $data
    ) {
      ...MerchantTransactionSessionContextFragment
    }
  }
`);

export const MERCHANT_CLIENT_TRANSACTION_AUTHORIZATION_SESSION_VERIFY_MUTATION =
  gql(`
  mutation MerchantApiClientTransactionAuthorizationSessionVerify(
    $id: String
    $token: String
    $providerCode: String
    $merchantInternalTransactionCode: String
  ) {
    merchantApiClientTransactionAuthorizationSessionVerify(
      id: $id
      token: $token
      providerCode: $providerCode
      merchantInternalTransactionCode: $merchantInternalTransactionCode
    ) {
      ...MerchantTransactionSessionContextFragment
    }
  }
`);
