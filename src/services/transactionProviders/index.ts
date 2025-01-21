import { AccruPaySdkContext } from '@/types/context.types';
import {
  MerchantTransactionProviderQuery,
  MerchantTransactionProviderQueryVariables,
  MerchantTransactionProvidersQuery,
  MerchantTransactionProvidersQueryVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  MERCHANT_TRANSACTION_PROVIDERS_GET_MANY_QUERY,
  MERCHANT_TRANSACTION_PROVIDERS_GET_ONE_QUERY,
} from './queries';

class TransactionProviders {
  constructor(private context: AccruPaySdkContext) {}

  public async getMany(
    variables: MerchantTransactionProvidersQueryVariables,
  ): Promise<Res<MerchantTransactionProvidersQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTION_PROVIDERS_GET_MANY_QUERY,
      variables,
    });
    return data.merchantTransactionProviders;
  }

  public async getOne(
    variables: MerchantTransactionProviderQueryVariables,
  ): Promise<Res<MerchantTransactionProviderQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTION_PROVIDERS_GET_ONE_QUERY,
      variables,
    });
    return data.merchantTransactionProvider;
  }
}

export { TransactionProviders };
