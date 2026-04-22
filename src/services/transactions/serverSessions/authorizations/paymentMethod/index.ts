import { AccruPayContext } from '@/types/context.types';
import {
  MerchantApiServerPaymentMethodTransactionAuthorizationSessionStartMutationVariables,
  MerchantApiServerPaymentMethodTransactionAuthorizationSessionVerifyMutationVariables,
} from '@api/gql/graphql';
import {
  MERCHANT_SERVER_PAYMENT_METHOD_TRANSACTION_AUTHORIZATION_SESSION_START_MUTATION,
  MERCHANT_SERVER_PAYMENT_METHOD_TRANSACTION_AUTHORIZATION_SESSION_VERIFY_MUTATION,
} from './queries';

class TransactionServerSessionsAuthorizationsPaymentMethod {
  constructor(private context: AccruPayContext) {}

  public async start(
    variables: MerchantApiServerPaymentMethodTransactionAuthorizationSessionStartMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation:
        MERCHANT_SERVER_PAYMENT_METHOD_TRANSACTION_AUTHORIZATION_SESSION_START_MUTATION,
      variables,
    });

    return data!
      .merchantApiServerPaymentMethodTransactionAuthorizationSessionStart;
  }

  public async verify(
    variables: MerchantApiServerPaymentMethodTransactionAuthorizationSessionVerifyMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation:
        MERCHANT_SERVER_PAYMENT_METHOD_TRANSACTION_AUTHORIZATION_SESSION_VERIFY_MUTATION,
      variables,
    });

    return data!
      .merchantApiServerPaymentMethodTransactionAuthorizationSessionVerify;
  }
}

export { TransactionServerSessionsAuthorizationsPaymentMethod };
