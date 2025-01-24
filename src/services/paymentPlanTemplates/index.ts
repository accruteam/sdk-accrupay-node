import { AccruPayContext } from '@/types/context.types';
import {
  MerchantApiPaymentPlanTemplatesQueryVariables,
  MerchantApiPaymentPlanTemplatesQuery,
  MerchantApiPaymentPlanTemplateQuery,
  MerchantApiPaymentPlanTemplateQueryVariables,
  MerchantApiPaymentPlanTemplateUpdateMutationVariables,
  MerchantApiPaymentPlanTemplateUpdateMutation,
  MerchantApiPaymentPlanTemplateCreateMutation,
  MerchantApiPaymentPlanTemplateCreateMutationVariables,
} from '@api/gql/graphql';
import { Res } from '@utils/response.type';
import {
  MERCHANT_PAYMENT_PLAN_TEMPLATES_CREATE_ONE_MUTATION,
  MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_MANY_QUERY,
  MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_ONE_QUERY,
  MERCHANT_PAYMENT_PLAN_TEMPLATES_UPDATE_ONE_MUTATION,
} from './queries';

class PaymentPlanTemplates {
  constructor(private context: AccruPayContext) {}

  public async getMany(
    variables: MerchantApiPaymentPlanTemplatesQueryVariables,
  ): Promise<Res<MerchantApiPaymentPlanTemplatesQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_MANY_QUERY,
      variables,
    });
    return data.merchantApiPaymentPlanTemplates;
  }

  public async getOne(
    variables: MerchantApiPaymentPlanTemplateQueryVariables,
  ): Promise<Res<MerchantApiPaymentPlanTemplateQuery>> {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_ONE_QUERY,
      variables,
    });
    return data.merchantApiPaymentPlanTemplate;
  }

  public async createOne(
    variables: MerchantApiPaymentPlanTemplateCreateMutationVariables,
  ): Promise<Res<MerchantApiPaymentPlanTemplateCreateMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_PAYMENT_PLAN_TEMPLATES_CREATE_ONE_MUTATION,
      variables,
    });
    return data!.merchantApiPaymentPlanTemplateCreate;
  }

  public async updateOne(
    variables: MerchantApiPaymentPlanTemplateUpdateMutationVariables,
  ): Promise<Res<MerchantApiPaymentPlanTemplateUpdateMutation>> {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_PAYMENT_PLAN_TEMPLATES_UPDATE_ONE_MUTATION,
      variables,
    });
    return data!.merchantApiPaymentPlanTemplateUpdate;
  }
}

export { PaymentPlanTemplates };
