import { AccruPaySdkContext } from '@/types/context.types';
import {
  MerchantTransactionVoidMutation,
  MerchantTransactionVoidMutationVariables,
  MerchantTransactionQuery,
  MerchantTransactionQueryVariables,
  MerchantTransactionsQuery,
  MerchantTransactionsQueryVariables,
  MerchantTransactionWebSdkSessionStartMutationVariables,
  MerchantTransactionWebSdkSessionStartMutation,
  MerchantTransactionWebSdkSessionVerifyMutation,
  MerchantTransactionWebSdkSessionVerifyMutationVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  MERCHANT_TRANSACTIONS_GET_MANY_QUERY,
  MERCHANT_TRANSACTIONS_GET_ONE_QUERY,
  MERCHANT_TRANSACTIONS_START_WEB_SDK_SESSION_MUTATION,
  MERCHANT_TRANSACTIONS_VERIFY_WEB_SDK_SESSION_MUTATION,
  MERCHANT_TRANSACTIONS_VOID_ONE_MUTATION,
} from './queries';

class Transactions {
  constructor(private context: AccruPaySdkContext) {}

  public async getMany(
    variable: MerchantTransactionsQueryVariables,
  ): Promise<Res<MerchantTransactionsQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTIONS_GET_MANY_QUERY,
      variables: variable,
    });
    return data.merchantTransactions;
  }

  public async getOne(
    variable: MerchantTransactionQueryVariables,
  ): Promise<Res<MerchantTransactionQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTIONS_GET_ONE_QUERY,
      variables: variable,
    });
    return data.merchantTransaction;
  }

  public async startWebSdkSession(
    variable: MerchantTransactionWebSdkSessionStartMutationVariables,
  ): Promise<Res<MerchantTransactionWebSdkSessionStartMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_START_WEB_SDK_SESSION_MUTATION,
      variables: variable,
    });
    return data!.merchantTransactionWebSdkSessionStart;
  }

  public async verifyWebSdkSession(
    variable: MerchantTransactionWebSdkSessionVerifyMutationVariables,
  ): Promise<Res<MerchantTransactionWebSdkSessionVerifyMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_VERIFY_WEB_SDK_SESSION_MUTATION,
      variables: variable,
    });
    return data!.merchantTransactionWebSdkSessionVerify;
  }

  public async voidOne(
    variable: MerchantTransactionVoidMutationVariables,
  ): Promise<Res<MerchantTransactionVoidMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_VOID_ONE_MUTATION,
      variables: variable,
    });
    return data!.merchantTransactionVoid;
  }
}

export { Transactions };
