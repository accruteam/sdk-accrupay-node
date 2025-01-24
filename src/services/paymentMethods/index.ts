import { AccruPayContext } from '@/types/context.types';
import {
  MerchantApiCustomerPaymentMethodQuery,
  MerchantApiCustomerPaymentMethodQueryVariables,
  MerchantApiCustomerPaymentMethodsQuery,
  MerchantApiCustomerPaymentMethodsQueryVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  MERCHANT_PAYMENT_METHODS_GET_MANY_QUERY,
  MERCHANT_PAYMENT_METHODS_GET_ONE_QUERY,
} from './queries';

class PaymentMethods {
  constructor(private context: AccruPayContext) {}

  public async getMany(
    variables: MerchantApiCustomerPaymentMethodsQueryVariables,
  ): Promise<Res<MerchantApiCustomerPaymentMethodsQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_METHODS_GET_MANY_QUERY,
      variables,
    });
    return data.merchantApiCustomerPaymentMethods;
  }

  public async getOne(
    variables: MerchantApiCustomerPaymentMethodQueryVariables,
  ): Promise<Res<MerchantApiCustomerPaymentMethodQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_METHODS_GET_ONE_QUERY,
      variables,
    });
    return data.merchantApiCustomerPaymentMethod;
  }
}

export { PaymentMethods };
