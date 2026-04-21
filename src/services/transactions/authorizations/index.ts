import { AccruPayContext } from '@/types/context.types';
import {
  MerchantApiTransactionAuthorizationSettleMutationVariables,
  MerchantApiTransactionAuthorizationVoidMutationVariables,
} from '@api/gql/graphql';
import {
  MERCHANT_TRANSACTION_AUTHORIZATION_SETTLE_MUTATION,
  MERCHANT_TRANSACTION_AUTHORIZATION_VOID_MUTATION,
} from './queries';

class TransactionsAuthorizations {
  constructor(private context: AccruPayContext) {}

  public async settle(
    variables: MerchantApiTransactionAuthorizationSettleMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTION_AUTHORIZATION_SETTLE_MUTATION,
      variables,
    });

    return data!.merchantApiTransactionAuthorizationSettle;
  }

  public async void(
    variables: MerchantApiTransactionAuthorizationVoidMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTION_AUTHORIZATION_VOID_MUTATION,
      variables,
    });

    return data!.merchantApiTransactionAuthorizationVoid;
  }
}

export { TransactionsAuthorizations };
