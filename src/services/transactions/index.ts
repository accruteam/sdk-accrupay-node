import { AccruPayContext } from '@/types/context.types';
import {
  MerchantApiTransactionVoidMutationVariables,
  MerchantApiTransactionQueryVariables,
  MerchantApiTransactionsQueryVariables,
  MerchantApiTransactionRefundMutationVariables,
  MerchantApiTransactionSyncOneMutationVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  MERCHANT_TRANSACTIONS_GET_MANY_QUERY,
  MERCHANT_TRANSACTIONS_GET_ONE_QUERY,
  MERCHANT_TRANSACTIONS_VOID_ONE_MUTATION,
  MERCHANT_TRANSACTIONS_REFUND_ONE_MUTATION,
  MERCHANT_TRANSACTIONS_SYNC_ONE_MUTATION,
} from './queries';
import { TransactionClientSessions } from './clientSessions';
import { TransactionsPayments } from './payments';

class Transactions {
  public readonly clientSessions: TransactionClientSessions;
  public readonly payments: TransactionsPayments;

  constructor(private context: AccruPayContext) {
    this.clientSessions = new TransactionClientSessions(this.context);
    this.payments = new TransactionsPayments(this.context);
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
