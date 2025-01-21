import { AccruPayContext } from '@/types/context.types';
import { MerchantQuery, MerchantQueryVariables } from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import { MERCHANTS_GET_CURRENT_QUERY } from './queries';

class Merchants {
  constructor(private context: AccruPayContext) {}

  public async getCurrent(
    variables: MerchantQueryVariables,
  ): Promise<Res<MerchantQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANTS_GET_CURRENT_QUERY,
      variables,
    });
    return data.merchant;
  }
}

export { Merchants };
