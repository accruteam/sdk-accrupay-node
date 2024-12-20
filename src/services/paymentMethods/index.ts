import { AccruPaySdkContext } from '@/types/context.types';
import {
  MerchantCustomerPaymentMethodDeleteMutation,
  MerchantCustomerPaymentMethodDeleteMutationVariables,
  MerchantCustomerPaymentMethodQuery,
  MerchantCustomerPaymentMethodQueryVariables,
  MerchantCustomerPaymentMethodsQuery,
  MerchantCustomerPaymentMethodsQueryVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  MERCHANT_CUSTOMER_PAYMENT_METHODS_DELETE_ONE_MUTATION,
  MERCHANT_PAYMENT_METHODS_GET_MANY_QUERY,
  MERCHANT_PAYMENT_METHODS_GET_ONE_QUERY,
} from './queries';

class PaymentMethods {
  constructor(private context: AccruPaySdkContext) {}

  public async getMany(
    variable: MerchantCustomerPaymentMethodsQueryVariables,
  ): Promise<Res<MerchantCustomerPaymentMethodsQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_METHODS_GET_MANY_QUERY,
      variables: variable,
    });
    return data.merchantCustomerPaymentMethods;
  }

  public async getOne(
    variable: MerchantCustomerPaymentMethodQueryVariables,
  ): Promise<Res<MerchantCustomerPaymentMethodQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_METHODS_GET_ONE_QUERY,
      variables: variable,
    });
    return data.merchantCustomerPaymentMethod;
  }

  public async deleteOne(
    variable: MerchantCustomerPaymentMethodDeleteMutationVariables,
  ): Promise<Res<MerchantCustomerPaymentMethodDeleteMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_CUSTOMER_PAYMENT_METHODS_DELETE_ONE_MUTATION,
      variables: variable,
    });
    return data!.merchantCustomerPaymentMethodDelete;
  }
}

export { PaymentMethods };
