import { gql } from '@api/gql';

export const MERCHANT_TRANSACTIONS_SERVER_PAYMENT_METHOD_CHARGE_MUTATION = gql(`
  mutation MerchantApiServerPaymentMethodTransactionCreate(
    $merchantTransactionProviderId: String,
    $transactionProvider: TRANSACTION_PROVIDER,
    $data: MerchantApiServerPaymentMethodTransactionCreateSchema!
  ) {
    merchantApiServerPaymentMethodTransactionCreate(
      merchantTransactionProviderId: $merchantTransactionProviderId,
      transactionProvider: $transactionProvider,
      data: $data
    ) {
      ...MerchantTransactionFragment
    }
  }
`);
