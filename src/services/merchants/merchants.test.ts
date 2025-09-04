import { describe, expect, it } from 'vitest';

import { getClientInstance } from 'test/utils/getClientInstance';
import { expectSyntaxValidation } from 'test/utils/expectSyntaxValidation';

describe('Merchants', () => {
  const client = getClientInstance();

  describe('Syntax Validation', () => {
    it('should validate getCurrent syntax and types', async () => {
      await expectSyntaxValidation(() => client.merchants.getCurrent({}));
    });
  });

  describe('Integration', () => {
    it('should be able to get current merchant', async () => {
      const data = await client.merchants.getCurrent({});
      expect(data).toBeDefined();
    });
  });
});
