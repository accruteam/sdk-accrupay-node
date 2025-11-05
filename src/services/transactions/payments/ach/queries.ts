import { gql } from '@api/gql';

export const MERCHANT_TRANSACTIONS_SERVER_ACH_INITIATE_MUTATION = gql(`
  mutation MerchantApiServerAchPaymentTransactionCreate(
    $merchantTransactionProviderId: String,
    $transactionProvider: TRANSACTION_PROVIDER,
    $data: MerchantApiServerAchPaymentTransactionCreateSchema!
  ) {
    merchantApiServerAchPaymentTransactionCreate(
      merchantTransactionProviderId: $merchantTransactionProviderId,
      transactionProvider: $transactionProvider,
      data: $data
    ) {
      ...MerchantTransactionFragment
    }
  }
`);
