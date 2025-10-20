import { AccruPayContext } from '@/types/context.types';
import {
  MerchantApiCustomerPaymentMethodQueryVariables,
  MerchantApiCustomerPaymentMethodsQueryVariables,
  MerchantApiCustomerPaymentMethodSyncOneMutationVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  MERCHANT_PAYMENT_METHODS_GET_MANY_QUERY,
  MERCHANT_PAYMENT_METHODS_GET_ONE_QUERY,
  MERCHANT_PAYMENT_METHODS_SYNC_ONE_MUTATION,
} from './queries';

class PaymentMethods {
  constructor(private context: AccruPayContext) {}

  public async getMany(
    variables: MerchantApiCustomerPaymentMethodsQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_METHODS_GET_MANY_QUERY,
      variables,
    });

    return parsePlainNodes(data.merchantApiCustomerPaymentMethods);
  }

  public async getOne(
    variables: MerchantApiCustomerPaymentMethodQueryVariables,
  ) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_METHODS_GET_ONE_QUERY,
      variables,
    });

    return data.merchantApiCustomerPaymentMethod;
  }

  public async syncOne(
    variables: MerchantApiCustomerPaymentMethodSyncOneMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_PAYMENT_METHODS_SYNC_ONE_MUTATION,
      variables,
    });

    return data!.merchantApiCustomerPaymentMethodSyncOne;
  }
}

export { PaymentMethods };
