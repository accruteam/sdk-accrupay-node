import { AccruPayContext } from '@/types/context.types';
import {
  MerchantApiTransactionVoidMutation,
  MerchantApiTransactionVoidMutationVariables,
  MerchantApiTransactionQuery,
  MerchantApiTransactionQueryVariables,
  MerchantApiTransactionsQuery,
  MerchantApiTransactionsQueryVariables,
  MerchantApiClientTransactionPaymentSessionStartMutationVariables,
  MerchantApiClientTransactionPaymentSessionStartMutation,
  MerchantApiClientTransactionPaymentSessionVerifyMutation,
  MerchantApiClientTransactionPaymentSessionVerifyMutationVariables,
  MerchantApiClientTransactionNuveiPreSessionDataQueryVariables,
  MerchantApiClientTransactionNuveiPreSessionDataQuery,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  MERCHANT_TRANSACTIONS_GET_MANY_QUERY,
  MERCHANT_TRANSACTIONS_GET_ONE_QUERY,
  MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_START_MUTATION,
  MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_VERIFY_MUTATION,
  MERCHANT_TRANSACTIONS_VOID_ONE_MUTATION,
  MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_GET_PRE_SESSION_DATA_QUERY,
} from './queries';

class Transactions {
  constructor(private context: AccruPayContext) {}

  public async getMany(
    variables: MerchantApiTransactionsQueryVariables,
  ): Promise<Res<MerchantApiTransactionsQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTIONS_GET_MANY_QUERY,
      variables,
    });
    return data.merchantApiTransactions;
  }

  public async getOne(
    variables: MerchantApiTransactionQueryVariables,
  ): Promise<Res<MerchantApiTransactionQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTIONS_GET_ONE_QUERY,
      variables,
    });
    return data.merchantApiTransaction;
  }

  public async getClientPaymentPreSessionData(
    variables: MerchantApiClientTransactionNuveiPreSessionDataQueryVariables,
  ): Promise<Res<MerchantApiClientTransactionNuveiPreSessionDataQuery>> {
    const { data } = await this.context.apolloClient.query({
      query:
        MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_GET_PRE_SESSION_DATA_QUERY,
      variables,
    });
    return data.merchantApiClientGetPreSessionData;
  }

  public async startClientPaymentSession(
    variables: MerchantApiClientTransactionPaymentSessionStartMutationVariables,
  ): Promise<Res<MerchantApiClientTransactionPaymentSessionStartMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_START_MUTATION,
      variables,
    });
    return data!.merchantApiClientTransactionPaymentSessionStart;
  }

  public async verifyClientPaymentSession(
    variables: MerchantApiClientTransactionPaymentSessionVerifyMutationVariables,
  ): Promise<Res<MerchantApiClientTransactionPaymentSessionVerifyMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_VERIFY_MUTATION,
      variables,
    });
    return data!.merchantApiClientTransactionPaymentSessionVerify;
  }

  public async voidOne(
    variables: MerchantApiTransactionVoidMutationVariables,
  ): Promise<Res<MerchantApiTransactionVoidMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_VOID_ONE_MUTATION,
      variables,
    });
    return data!.merchantApiTransactionVoid;
  }
}

export { Transactions };
