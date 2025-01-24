import { AccruPayContext } from '@/types/context.types';
import { MerchantApiQuery, MerchantApiQueryVariables } from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import { MERCHANTS_GET_CURRENT_QUERY } from './queries';

class Merchants {
  constructor(private context: AccruPayContext) {}

  public async getCurrent(
    variables: MerchantApiQueryVariables,
  ): Promise<Res<MerchantApiQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANTS_GET_CURRENT_QUERY,
      variables,
    });

    return data.merchantApi;
  }
}

export { Merchants };
