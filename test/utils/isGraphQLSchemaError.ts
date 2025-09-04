const isGraphQLSchemaError = (error: any): boolean => {
  const errors = [
    ...[...(error.graphQLErrors?.result?.errors || [])],
    ...[...(error.networkError?.result?.errors || [])],
    ...[...(error.protocolErrors?.result?.errors || [])],
    ...[...(error.clientErrors?.result?.errors || [])],
  ];

  if (
    !!error?.cause?.extensions?.code &&
    !String(error.cause.extensions.code).startsWith('@')
  )
    return true;

  return errors.some(
    (gqlError: any) =>
      gqlError.extensions?.code === 'GRAPHQL_PARSE_FAILED' ||
      gqlError.extensions?.code === 'GRAPHQL_VALIDATION_FAILED' ||
      gqlError.extensions?.code === 'BAD_USER_INPUT' ||
      gqlError.message?.includes('Cannot query field') ||
      gqlError.message?.includes('Unknown argument') ||
      (gqlError.message?.includes('Field') &&
        gqlError.message?.includes('of type')) ||
      gqlError.message?.includes('Expected type'),
  );
};

export { isGraphQLSchemaError };
