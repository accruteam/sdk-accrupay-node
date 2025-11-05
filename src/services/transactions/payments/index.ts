import { AccruPayContext } from '@/types/context.types';
import { TransactionsPaymentsAch } from './ach';
import { TransactionsPaymentsPaymentMethod } from './paymentMethod';

class TransactionsPayments {
  public readonly ach: TransactionsPaymentsAch;
  public readonly paymentMethod: TransactionsPaymentsPaymentMethod;

  constructor(private context: AccruPayContext) {
    this.ach = new TransactionsPaymentsAch(this.context);
    this.paymentMethod = new TransactionsPaymentsPaymentMethod(this.context);
  }
}

export { TransactionsPayments };
