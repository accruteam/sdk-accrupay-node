import { AccruPayContext } from '@/types/context.types';
import {
  MerchantApiClientTransactionAuthorizationSessionStartMutationVariables,
  MerchantApiClientTransactionAuthorizationSessionVerifyMutationVariables,
} from '@api/gql/graphql';
import {
  MERCHANT_CLIENT_TRANSACTION_AUTHORIZATION_SESSION_START_MUTATION,
  MERCHANT_CLIENT_TRANSACTION_AUTHORIZATION_SESSION_VERIFY_MUTATION,
} from './queries';

class TransactionClientSessionsAuthorizations {
  constructor(private context: AccruPayContext) {}

  public async start(
    variables: MerchantApiClientTransactionAuthorizationSessionStartMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation:
        MERCHANT_CLIENT_TRANSACTION_AUTHORIZATION_SESSION_START_MUTATION,
      variables,
    });

    return data!.merchantApiClientTransactionAuthorizationSessionStart;
  }

  public async verify(
    variables: MerchantApiClientTransactionAuthorizationSessionVerifyMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation:
        MERCHANT_CLIENT_TRANSACTION_AUTHORIZATION_SESSION_VERIFY_MUTATION,
      variables,
    });

    return data!.merchantApiClientTransactionAuthorizationSessionVerify;
  }
}

export { TransactionClientSessionsAuthorizations };
