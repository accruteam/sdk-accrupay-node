import { AccruPaySdkContext } from '@/types/context.types';
import {
  MerchantTransactionVoidMutation,
  MerchantTransactionVoidMutationVariables,
  MerchantTransactionQuery,
  MerchantTransactionQueryVariables,
  MerchantTransactionsQuery,
  MerchantTransactionsQueryVariables,
  MerchantTransactionClientPaymentSessionStartMutationVariables,
  MerchantTransactionClientPaymentSessionStartMutation,
  MerchantTransactionClientPaymentSessionVerifyMutation,
  MerchantTransactionClientPaymentSessionVerifyMutationVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  MERCHANT_TRANSACTIONS_GET_MANY_QUERY,
  MERCHANT_TRANSACTIONS_GET_ONE_QUERY,
  MERCHANT_TRANSACTIONS_START_CLIENT_PAYMENT_SESSION_MUTATION,
  MERCHANT_TRANSACTIONS_VERIFY_CLIENT_PAYMENT_SESSION_MUTATION,
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

  public async startClientPaymentSession(
    variable: MerchantTransactionClientPaymentSessionStartMutationVariables,
  ): Promise<Res<MerchantTransactionClientPaymentSessionStartMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_START_CLIENT_PAYMENT_SESSION_MUTATION,
      variables: variable,
    });
    return data!.merchantTransactionClientPaymentSessionStart;
  }

  public async verifyClientPaymentSession(
    variable: MerchantTransactionClientPaymentSessionVerifyMutationVariables,
  ): Promise<Res<MerchantTransactionClientPaymentSessionVerifyMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_VERIFY_CLIENT_PAYMENT_SESSION_MUTATION,
      variables: variable,
    });
    return data!.merchantTransactionClientPaymentSessionVerify;
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
