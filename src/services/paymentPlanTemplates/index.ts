import { AccruPayContext } from '@/types/context.types';
import {
  MerchantApiPaymentPlanTemplatesQueryVariables,
  MerchantApiPaymentPlanTemplateQueryVariables,
  MerchantApiPaymentPlanTemplateUpdateMutationVariables,
  MerchantApiPaymentPlanTemplateCreateMutationVariables,
} from '@api/gql/graphql';
import { parsePlainNodes } from '@utils/parsePlainNodes';
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
  ) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_MANY_QUERY,
      variables,
    });

    return parsePlainNodes(data.merchantApiPaymentPlanTemplates);
  }

  public async getOne(variables: MerchantApiPaymentPlanTemplateQueryVariables) {
    const { data } = await this.context.apolloClient.query({
      query: MERCHANT_PAYMENT_PLAN_TEMPLATES_GET_ONE_QUERY,
      variables,
    });

    return data.merchantApiPaymentPlanTemplate;
  }

  public async createOne(
    variables: MerchantApiPaymentPlanTemplateCreateMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_PAYMENT_PLAN_TEMPLATES_CREATE_ONE_MUTATION,
      variables,
    });

    return data!.merchantApiPaymentPlanTemplateCreate;
  }

  public async updateOne(
    variables: MerchantApiPaymentPlanTemplateUpdateMutationVariables,
  ) {
    const { data } = await this.context.apolloClient.mutate({
      mutation: MERCHANT_PAYMENT_PLAN_TEMPLATES_UPDATE_ONE_MUTATION,
      variables,
    });

    return data!.merchantApiPaymentPlanTemplateUpdate;
  }
}

export { PaymentPlanTemplates };
