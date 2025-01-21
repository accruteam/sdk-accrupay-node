import { AccruPayContext } from '@/types/context.types';
import {
  MerchantCustomerPaymentMethodQuery,
  MerchantCustomerPaymentMethodQueryVariables,
  MerchantCustomerPaymentMethodsQuery,
  MerchantCustomerPaymentMethodsQueryVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  MERCHANT_PAYMENT_METHODS_GET_MANY_QUERY,
  MERCHANT_PAYMENT_METHODS_GET_ONE_QUERY,
} from './queries';

class PaymentMethods {
  constructor(private context: AccruPayContext) {}

  public async getMany(
    variables: MerchantCustomerPaymentMethodsQueryVariables,
  ): Promise<Res<MerchantCustomerPaymentMethodsQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_METHODS_GET_MANY_QUERY,
      variables,
    });
    return data.merchantCustomerPaymentMethods;
  }

  public async getOne(
    variables: MerchantCustomerPaymentMethodQueryVariables,
  ): Promise<Res<MerchantCustomerPaymentMethodQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_METHODS_GET_ONE_QUERY,
      variables,
    });
    return data.merchantCustomerPaymentMethod;
  }
}

export { PaymentMethods };
