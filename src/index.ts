import { ApolloClient } from '@apollo/client';

import { IAccruPaySdkParams, createApolloClient } from '@api/apolloClient';

import { Merchants } from '@services/merchants';
import { AccruPaySdkContext } from './types/context.types';

class AccruPaySdk {
  public readonly apolloClient: ApolloClient<unknown>;
  private readonly context: AccruPaySdkContext;

  public readonly merchants: Merchants;

  constructor(params: IAccruPaySdkParams) {
    this.apolloClient = createApolloClient(params);
    this.context = { apolloClient: this.apolloClient };

    this.merchants = new Merchants(this.context);
  }
}

export { AccruPaySdkResponseType } from '@utils/response.type';
export { AccruPaySdk };
