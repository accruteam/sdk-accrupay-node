import { isGraphQLSchemaError } from './isGraphQLSchemaError';

const expectSyntaxValidation = async (testFn: () => Promise<any>) => {
  try {
    await testFn();
  } catch (error) {
    if (isGraphQLSchemaError(error)) {
      throw new Error(
        `GraphQL syntax/schema error detected: ${JSON.stringify(error, null, 2)}`,
      );
    }
  }
};

export { expectSyntaxValidation };
