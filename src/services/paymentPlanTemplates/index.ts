import { AccruPayContext } from '@/types/context.types';
import {
  MerchantPaymentPlanTemplatesQueryVariables,
  MerchantPaymentPlanTemplatesQuery,
  MerchantPaymentPlanTemplateQuery,
  MerchantPaymentPlanTemplateQueryVariables,
  MerchantPaymentPlanTemplateUpdateMutationVariables,
  MerchantPaymentPlanTemplateUpdateMutation,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_MANY_QUERY,
  MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_ONE_QUERY,
  MERCHANT_PAYMENT_PLAN_TEMPLATES_UPDATE_ONE_MUTATION,
} from './queries';

class PaymentPlanTemplates {
  constructor(private context: AccruPayContext) {}

  public async getMany(
    variables: MerchantPaymentPlanTemplatesQueryVariables,
  ): Promise<Res<MerchantPaymentPlanTemplatesQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_MANY_QUERY,
      variables,
    });
    return data.merchantPaymentPlanTemplates;
  }

  public async getOne(
    variables: MerchantPaymentPlanTemplateQueryVariables,
  ): Promise<Res<MerchantPaymentPlanTemplateQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_ONE_QUERY,
      variables,
    });
    return data.merchantPaymentPlanTemplate;
  }

  public async updateOne(
    variables: MerchantPaymentPlanTemplateUpdateMutationVariables,
  ): Promise<Res<MerchantPaymentPlanTemplateUpdateMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_PAYMENT_PLAN_TEMPLATES_UPDATE_ONE_MUTATION,
      variables,
    });
    return data!.merchantPaymentPlanTemplateUpdate;
  }
}

export { PaymentPlanTemplates };
