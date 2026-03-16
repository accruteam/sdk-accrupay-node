---
"@accrupay/node": minor
---

migrate SDK internals to Apollo Client v4 and regenerate GraphQL schema/types.

### Breaking changes

- Apollo Client v4 changed the SDK error model. Check the CombinedGraphQLErrors for more details.
- `onNetworkError` now receives `Error` (Apollo v4 error model), instead of Apollo v3 `NetworkError`.
- Transaction responses from SDK service methods no longer include `code`, `token`, and `tokenExpiresAt` in the base transaction fragment.
- Client session base config (Nuvei) no longer includes `data.provider` and `data.environment`; use `data.env`, bypass params to Nuvei's WebSDK.

### Added / changed

- Apollo v4-compatible error handling with explicit handling for `CombinedGraphQLErrors`, `CombinedProtocolErrors`, and `ServerError`.
- Regenerated GraphQL artifacts (`schema.graphql`, introspection, generated TS types) with latest API updates, including STRIPE enum support and customer-selector capabilities exposed by schema/types.
