import { gql } from '@api/gql';

export const MERCHANT_CLIENT_TRANSACTION_SESSION_CONTEXT_FRAGMENT = gql(`
  fragment MerchantTransactionSessionContextFragment on MerchantClientTransactionSessionContext {
    customer {
      ...MerchantCustomerBaseFragment
    }
    paymentMethod {
      ...MerchantCustomerPaymentMethodFragment
    }
    session {
      ...MerchantClientTransactionSessionFragment
    }
    transactionProvider {
      ...MerchantTransactionProviderFragment
    }
    transactions {
      ...MerchantTransactionBaseFragment
    }
  }
`);

export const MERCHANT_TRANSACTION_CONTEXT_FRAGMENT = gql(`
  fragment MerchantTransactionContextFragment on MerchantTransactionContext {
    customer {
      ...MerchantCustomerBaseFragment
    }
    paymentMethod {
      ...MerchantCustomerPaymentMethodFragment
    }
    session {
      ...MerchantClientTransactionSessionFragment
    }
    transaction {
      ...MerchantTransactionFragment
    }
    transactionProvider {
      ...MerchantTransactionProviderFragment
    }
  }
`);
