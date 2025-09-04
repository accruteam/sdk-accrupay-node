import { AccruPayContext } from '@/types/context.types';
import {
  MerchantApiTransactionProviderQueryVariables,
  MerchantApiTransactionProvidersQueryVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  MERCHANT_TRANSACTION_PROVIDERS_GET_MANY_QUERY,
  MERCHANT_TRANSACTION_PROVIDERS_GET_ONE_QUERY,
} from './queries';

class TransactionProviders {
  constructor(private context: AccruPayContext) {}

  public async getMany(
    variables: MerchantApiTransactionProvidersQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTION_PROVIDERS_GET_MANY_QUERY,
      variables,
    });

    return parsePlainNodes(data.merchantApiTransactionProviders);
  }

  public async getOne(variables: MerchantApiTransactionProviderQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTION_PROVIDERS_GET_ONE_QUERY,
      variables,
    });

    return data.merchantApiTransactionProvider;
  }
}

export { TransactionProviders };
