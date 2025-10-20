import { AccruPayContext } from '@/types/context.types';
import {
  MerchantApiClientTransactionSessionBaseConfigQueryVariables,
  MerchantApiClientTransactionPaymentSessionStartV2MutationVariables,
  MerchantApiClientTransactionPaymentSessionVerifyV2MutationVariables,
  MerchantApiClientTransactionSessionQueryVariables,
  MerchantApiClientTransactionSessionsQueryVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  MERCHANT_CLIENT_TRANSACTION_SESSION_GET_BASE_CONFIG_QUERY,
  MERCHANT_CLIENT_TRANSACTION_SESSION_START_MUTATION,
  MERCHANT_CLIENT_TRANSACTION_SESSION_VERIFY_MUTATION,
  MERCHANT_CLIENT_TRANSACTION_SESSION_GET_ONE_QUERY,
  MERCHANT_CLIENT_TRANSACTION_SESSIONS_GET_MANY_QUERY,
} from './queries';

class TransactionsSessions {
  constructor(private context: AccruPayContext) {}

  public async getBaseConfig(
    variables: MerchantApiClientTransactionSessionBaseConfigQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_CLIENT_TRANSACTION_SESSION_GET_BASE_CONFIG_QUERY,
      variables,
    });

    return data.merchantApiClientTransactionSessionBaseConfig;
  }

  public async start(
    variables: MerchantApiClientTransactionPaymentSessionStartV2MutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_CLIENT_TRANSACTION_SESSION_START_MUTATION,
      variables,
    });

    return data!.merchantApiClientTransactionPaymentSessionStartV2;
  }

  public async verify(
    variables: MerchantApiClientTransactionPaymentSessionVerifyV2MutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_CLIENT_TRANSACTION_SESSION_VERIFY_MUTATION,
      variables,
    });

    return data!.merchantApiClientTransactionPaymentSessionVerify;
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

export { TransactionsSessions };
