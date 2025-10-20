import { AccruPayContext } from '@/types/context.types';
import {
  MerchantApiTransactionVoidMutationVariables,
  MerchantApiTransactionQueryVariables,
  MerchantApiTransactionsQueryVariables,
  MerchantApiClientTransactionPaymentSessionStartMutationVariables,
  MerchantApiClientTransactionPaymentSessionVerifyMutationVariables,
  MerchantApiClientTransactionNuveiPreSessionDataQueryVariables,
  MerchantApiTransactionRefundMutationVariables,
  MerchantApiTransactionSyncOneMutationVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  MERCHANT_TRANSACTIONS_GET_MANY_QUERY,
  MERCHANT_TRANSACTIONS_GET_ONE_QUERY,
  MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_START_MUTATION,
  MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_VERIFY_MUTATION,
  MERCHANT_TRANSACTIONS_VOID_ONE_MUTATION,
  MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_GET_PRE_SESSION_DATA_QUERY,
  MERCHANT_TRANSACTIONS_REFUND_ONE_MUTATION,
  MERCHANT_TRANSACTIONS_SYNC_ONE_MUTATION,
} from './queries';
import { TransactionsSessions } from './sessions';

class Transactions {
  public readonly sessions: TransactionsSessions;

  constructor(private context: AccruPayContext) {
    this.sessions = new TransactionsSessions(this.context);
  }

  public async getMany(variables: MerchantApiTransactionsQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTIONS_GET_MANY_QUERY,
      variables,
    });

    return parsePlainNodes(data.merchantApiTransactions);
  }

  public async getOne(variables: MerchantApiTransactionQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_TRANSACTIONS_GET_ONE_QUERY,
      variables,
    });

    return data.merchantApiTransaction;
  }

  public async getClientPaymentPreSessionData(
    variables: MerchantApiClientTransactionNuveiPreSessionDataQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query:
        MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_GET_PRE_SESSION_DATA_QUERY,
      variables,
    });

    return data.merchantApiClientGetPreSessionData;
  }

  public async startClientPaymentSession(
    variables: MerchantApiClientTransactionPaymentSessionStartMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_START_MUTATION,
      variables,
    });

    return data!.merchantApiClientTransactionPaymentSessionStart;
  }

  public async verifyClientPaymentSession(
    variables: MerchantApiClientTransactionPaymentSessionVerifyMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_CLIENT_PAYMENT_SESSION_VERIFY_MUTATION,
      variables,
    });

    return data!.merchantApiClientTransactionPaymentSessionVerify;
  }

  public async voidOne(variables: MerchantApiTransactionVoidMutationVariables) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_VOID_ONE_MUTATION,
      variables,
    });

    return data!.merchantApiTransactionVoid;
  }

  public async refundOne(
    variables: MerchantApiTransactionRefundMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_REFUND_ONE_MUTATION,
      variables,
    });

    return data!.merchantApiTransactionRefund;
  }

  public async syncOne(
    variables: MerchantApiTransactionSyncOneMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_TRANSACTIONS_SYNC_ONE_MUTATION,
      variables,
    });

    return data!.merchantApiTransactionSyncOne;
  }
}

export { Transactions };
