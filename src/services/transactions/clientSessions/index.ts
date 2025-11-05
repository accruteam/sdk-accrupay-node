import { AccruPayContext } from '@/types/context.types';
import {
  MerchantApiClientTransactionSessionBaseConfigQueryVariables,
  MerchantApiClientTransactionSessionQueryVariables,
  MerchantApiClientTransactionSessionsQueryVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  MERCHANT_CLIENT_TRANSACTION_SESSION_GET_BASE_CONFIG_QUERY,
  MERCHANT_CLIENT_TRANSACTION_SESSION_GET_ONE_QUERY,
  MERCHANT_CLIENT_TRANSACTION_SESSIONS_GET_MANY_QUERY,
} from './queries';
import { TransactionClientSessionsPayments } from './payments';
import { TransactionClientSessionsPaymentMethod } from './paymentMethod';

class TransactionClientSessions {
  public readonly payments: TransactionClientSessionsPayments;
  public readonly paymentMethod: TransactionClientSessionsPaymentMethod;

  constructor(private context: AccruPayContext) {
    this.payments = new TransactionClientSessionsPayments(this.context);
    this.paymentMethod = new TransactionClientSessionsPaymentMethod(
      this.context,
    );
  }

  public async getBaseConfig(
    variables: MerchantApiClientTransactionSessionBaseConfigQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_CLIENT_TRANSACTION_SESSION_GET_BASE_CONFIG_QUERY,
      variables,
    });

    return data.merchantApiClientTransactionSessionBaseConfig;
  }

  public async getOne(
    variables: MerchantApiClientTransactionSessionQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_CLIENT_TRANSACTION_SESSION_GET_ONE_QUERY,
      variables,
    });

    return data.merchantApiClientTransactionSession;
  }

  public async getMany(
    variables: MerchantApiClientTransactionSessionsQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_CLIENT_TRANSACTION_SESSIONS_GET_MANY_QUERY,
      variables,
    });

    return parsePlainNodes(data.merchantApiClientTransactionSessions);
  }
}

export { TransactionClientSessions };
