import { AccruPayContext } from '@/types/context.types';
import {
  MerchantApiTransactionProviderQuery,
  MerchantApiTransactionProviderQueryVariables,
  MerchantApiTransactionProvidersQuery,
  MerchantApiTransactionProvidersQueryVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  MERCHANT_TRANSACTION_PROVIDERS_GET_MANY_QUERY,
  MERCHANT_TRANSACTION_PROVIDERS_GET_ONE_QUERY,
} from './queries';

class TransactionProviders {
  constructor(private context: AccruPayContext) {}

  public async getMany(
    variables: MerchantApiTransactionProvidersQueryVariables,
  ): Promise<Res<MerchantApiTransactionProvidersQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTION_PROVIDERS_GET_MANY_QUERY,
      variables,
    });
    return data.merchantApiTransactionProviders;
  }

  public async getOne(
    variables: MerchantApiTransactionProviderQueryVariables,
  ): Promise<Res<MerchantApiTransactionProviderQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTION_PROVIDERS_GET_ONE_QUERY,
      variables,
    });
    return data.merchantApiTransactionProvider;
  }
}

export { TransactionProviders };
