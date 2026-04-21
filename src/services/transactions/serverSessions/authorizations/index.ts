import { AccruPayContext } from '@/types/context.types';
import { TransactionServerSessionsAuthorizationsPaymentMethod } from './paymentMethod';

class TransactionServerSessionsAuthorizations {
  public readonly paymentMethod: TransactionServerSessionsAuthorizationsPaymentMethod;

  constructor(private context: AccruPayContext) {
    this.paymentMethod =
      new TransactionServerSessionsAuthorizationsPaymentMethod(this.context);
  }
}

export { TransactionServerSessionsAuthorizations };
