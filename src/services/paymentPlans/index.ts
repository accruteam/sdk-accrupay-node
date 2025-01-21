import { AccruPaySdkContext } from '@/types/context.types';
import {
  MerchantPaymentPlansQueryVariables,
  MerchantPaymentPlansQuery,
  MerchantPaymentPlanQuery,
  MerchantPaymentPlanQueryVariables,
  MerchantPaymentPlanCancelMutationVariables,
  MerchantPaymentPlanCancelMutation,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  MERCHANT_PAYMENT_PLANS_GET_MANY_QUERY,
  MERCHANT_PAYMENT_PLANS_GET_ONE_QUERY,
  MERCHANT_PAYMENT_PLANS_CANCEL_ONE_MUTATION,
} from './queries';

class PaymentPlans {
  constructor(private context: AccruPaySdkContext) {}

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
