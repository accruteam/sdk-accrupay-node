import { gql } from '@api/gql';

export const MERCHANT_SERVER_PAYMENT_METHOD_TRANSACTION_AUTHORIZATION_SESSION_START_MUTATION =
  gql(`
  mutation MerchantApiServerPaymentMethodTransactionAuthorizationSessionStart(
    $merchantTransactionProviderId: String
    $transactionProvider: TRANSACTION_PROVIDER
    $data: MerchantApiServerPaymentMethodTransactionAuthorizationSessionStartSchema!
  ) {
    merchantApiServerPaymentMethodTransactionAuthorizationSessionStart(
      merchantTransactionProviderId: $merchantTransactionProviderId
      transactionProvider: $transactionProvider
      data: $data
    ) {
      ...MerchantTransactionSessionContextFragment
    }
  }
`);

export const MERCHANT_SERVER_PAYMENT_METHOD_TRANSACTION_AUTHORIZATION_SESSION_VERIFY_MUTATION =
  gql(`
  mutation MerchantApiServerPaymentMethodTransactionAuthorizationSessionVerify(
    $id: String
    $merchantInternalTransactionCode: String
    $providerCode: String
  ) {
    merchantApiServerPaymentMethodTransactionAuthorizationSessionVerify(
      id: $id
      merchantInternalTransactionCode: $merchantInternalTransactionCode
      providerCode: $providerCode
    ) {
      ...MerchantTransactionSessionContextFragment
    }
  }
`);
