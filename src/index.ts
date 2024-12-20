import { ApolloClient } from '@apollo/client';

import { IAccruPaySdkParams, createApolloClient } from '@api/apolloClient';

import { Merchants } from '@services/merchants';
import { PaymentMethods } from '@services/paymentMethods';
import { TransactionProviders } from '@services/transactionProviders';
import { Transactions } from '@services/transactions';

import { AccruPaySdkContext } from './types/context.types';

class AccruPaySdk {
  public readonly apolloClient: ApolloClient<unknown>;
  private readonly context: AccruPaySdkContext;

  public readonly merchants: Merchants;
  public readonly paymentMethods: PaymentMethods;
  public readonly transactionProviders: TransactionProviders;
  public readonly transactions: Transactions;

  constructor(params: IAccruPaySdkParams) {
    this.apolloClient = createApolloClient(params);
    this.context = { apolloClient: this.apolloClient };

    this.merchants = new Merchants(this.context);
    this.paymentMethods = new PaymentMethods(this.context);
    this.transactionProviders = new TransactionProviders(this.context);
    this.transactions = new Transactions(this.context);
  }
}

export { AccruPaySdkResponseType } from '@utils/response.type';
export { AccruPaySdk };
