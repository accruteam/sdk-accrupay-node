import { AccruPayContext } from '@/types/context.types';
import {
  MerchantApiPaymentPlansQueryVariables,
  MerchantApiPaymentPlanQueryVariables,
  MerchantApiPaymentPlanCancelMutationVariables,
  MerchantApiPaymentPlanCreateMutationVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
import {
  MERCHANT_PAYMENT_PLANS_GET_MANY_QUERY,
  MERCHANT_PAYMENT_PLANS_GET_ONE_QUERY,
  MERCHANT_PAYMENT_PLANS_CANCEL_ONE_MUTATION,
  MERCHANT_PAYMENT_PLANS_CREATE_ONE_MUTATION,
} from './queries';

class PaymentPlans {
  constructor(private context: AccruPayContext) {}

  public async getMany(variables: MerchantApiPaymentPlansQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_PLANS_GET_MANY_QUERY,
      variables,
    });

    return parsePlainNodes(data.merchantApiPaymentPlans);
  }

  public async getOne(variables: MerchantApiPaymentPlanQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_PLANS_GET_ONE_QUERY,
      variables,
    });

    return data.merchantApiPaymentPlan;
  }

  public async createOne(
    variables: MerchantApiPaymentPlanCreateMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_PAYMENT_PLANS_CREATE_ONE_MUTATION,
      variables,
    });

    return data!.merchantApiPaymentPlanCreate;
  }

  public async cancelOne(
    variables: MerchantApiPaymentPlanCancelMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_PAYMENT_PLANS_CANCEL_ONE_MUTATION,
      variables,
    });

    return data!.merchantApiPaymentPlanCancel;
  }
}

export { PaymentPlans };
