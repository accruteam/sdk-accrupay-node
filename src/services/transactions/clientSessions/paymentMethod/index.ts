import { AccruPayContext } from '@/types/context.types';
import { TransactionClientSessionsPaymentMethodAdd } from './add';

class TransactionClientSessionsPaymentMethod {
  public readonly add: TransactionClientSessionsPaymentMethodAdd;

  constructor(private context: AccruPayContext) {
    this.add = new TransactionClientSessionsPaymentMethodAdd(this.context);
  }
}

export { TransactionClientSessionsPaymentMethod };
