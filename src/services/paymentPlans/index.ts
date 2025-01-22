import { AccruPayContext } from '@/types/context.types';
import {
  MerchantPaymentPlansQueryVariables,
  MerchantPaymentPlansQuery,
  MerchantPaymentPlanQuery,
  MerchantPaymentPlanQueryVariables,
  MerchantPaymentPlanCancelMutationVariables,
  MerchantPaymentPlanCancelMutation,
  MerchantPaymentPlanCreateMutation,
  MerchantPaymentPlanCreateMutationVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  MERCHANT_PAYMENT_PLANS_GET_MANY_QUERY,
  MERCHANT_PAYMENT_PLANS_GET_ONE_QUERY,
  MERCHANT_PAYMENT_PLANS_CANCEL_ONE_MUTATION,
  MERCHANT_PAYMENT_PLANS_CREATE_ONE_MUTATION,
} from './queries';

class PaymentPlans {
  constructor(private context: AccruPayContext) {}

  public async getMany(
    variables: MerchantPaymentPlansQueryVariables,
  ): Promise<Res<MerchantPaymentPlansQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_PLANS_GET_MANY_QUERY,
      variables,
    });
    return data.merchantPaymentPlans;
  }

  public async getOne(
    variables: MerchantPaymentPlanQueryVariables,
  ): Promise<Res<MerchantPaymentPlanQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_PLANS_GET_ONE_QUERY,
      variables,
    });
    return data.merchantPaymentPlan;
  }

  public async createOne(
    variables: MerchantPaymentPlanCreateMutationVariables,
  ): Promise<Res<MerchantPaymentPlanCreateMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_PAYMENT_PLANS_CREATE_ONE_MUTATION,
      variables,
    });
    return data!.merchantPaymentPlanCreate;
  }

  public async cancelOne(
    variables: MerchantPaymentPlanCancelMutationVariables,
  ): Promise<Res<MerchantPaymentPlanCancelMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_PAYMENT_PLANS_CANCEL_ONE_MUTATION,
      variables,
    });
    return data!.merchantPaymentPlanCancel;
  }
}

export { PaymentPlans };
