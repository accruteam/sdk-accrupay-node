import { AccruPayContext } from '@/types/context.types';
import { TransactionServerSessionsAuthorizations } from './authorizations';

class TransactionServerSessions {
  public readonly authorizations: TransactionServerSessionsAuthorizations;

  constructor(private context: AccruPayContext) {
    this.authorizations = new TransactionServerSessionsAuthorizations(
      this.context,
    );
  }
}

export { TransactionServerSessions };
