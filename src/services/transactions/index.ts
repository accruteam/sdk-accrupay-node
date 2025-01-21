import { AccruPayContext } from '@/types/context.types';
import {
  MerchantTransactionVoidMutation,
  MerchantTransactionVoidMutationVariables,
  MerchantTransactionQuery,
  MerchantTransactionQueryVariables,
  MerchantTransactionsQuery,
  MerchantTransactionsQueryVariables,
  MerchantClientTransactionPaymentSessionStartMutationVariables,
  MerchantClientTransactionPaymentSessionStartMutation,
  MerchantClientTransactionPaymentSessionVerifyMutation,
  MerchantClientTransactionPaymentSessionVerifyMutationVariables,
  MerchantClientTransactionNuveiPreSessionDataQueryVariables,
  MerchantClientTransactionNuveiPreSessionDataQuery,
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
    variables: MerchantTransactionsQueryVariables,
  ): Promise<Res<MerchantTransactionsQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTIONS_GET_MANY_QUERY,
      variables,
    });
    return data.merchantTransactions;
  }

  public async getOne(
    variables: MerchantTransactionQueryVariables,
  ): Promise<Res<MerchantTransactionQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTIONS_GET_ONE_QUERY,
      variables,
    });
    return data.merchantTransaction;
  }

  public async getClientPaymentPreSessionData(
    variables: MerchantClientTransactionNuveiPreSessionDataQueryVariables,
  ): Promise<Res<MerchantClientTransactionNuveiPreSessionDataQuery>> {
    const { data } = await this.context.apolloClient.query({
      query:
        MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_GET_PRE_SESSION_DATA_QUERY,
      variables,
    });
    return data.merchantClientGetPreSessionData;
  }

  public async startClientPaymentSession(
    variables: MerchantClientTransactionPaymentSessionStartMutationVariables,
  ): Promise<Res<MerchantClientTransactionPaymentSessionStartMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_START_MUTATION,
      variables,
    });
    return data!.merchantClientTransactionPaymentSessionStart;
  }

  public async verifyClientPaymentSession(
    variables: MerchantClientTransactionPaymentSessionVerifyMutationVariables,
  ): Promise<Res<MerchantClientTransactionPaymentSessionVerifyMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_VERIFY_MUTATION,
      variables,
    });
    return data!.merchantClientTransactionPaymentSessionVerify;
  }

  public async voidOne(
    variables: MerchantTransactionVoidMutationVariables,
  ): Promise<Res<MerchantTransactionVoidMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_VOID_ONE_MUTATION,
      variables,
    });
    return data!.merchantTransactionVoid;
  }
}

export { Transactions };
