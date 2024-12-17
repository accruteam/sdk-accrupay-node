import { gql } from '@api/gql';

export const MERCHANTS_GET_CURRENT_QUERY = gql(`
  query Merchant {
    merchant {
      ...MerchantFragment
    }
  }
`);
