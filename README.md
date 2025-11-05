# AccruPay Node SDK

[![npm version](https://img.shields.io/npm/v/@accrupay/node.svg)](https://www.npmjs.com/package/@accrupay/node)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/node/v/@accrupay/node.svg)](https://nodejs.org/)

The official Node.js SDK for AccruPay Merchant API. Built with TypeScript and GraphQL, providing type-safe access to payment processing, transaction management, and merchant operations.

## Table of Contents

- [Installation](#installation)
- [Quick Start](#quick-start)
- [Authentication](#authentication)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Error Handling](#error-handling)
- [TypeScript Support](#typescript-support)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install @accrupay/node
# or
yarn add @accrupay/node
# or
pnpm add @accrupay/node
```

## Quick Start

### 1. Initialize the SDK

```typescript
import AccruPay, { TRANSACTION_PROVIDER } from '@accrupay/node';

const sdk = new AccruPay({
  apiSecret: 'your-api-secret-from-merchant-portal',
});
```

### 2. Get Client Session Configuration

```typescript
// Get base configuration for payment sessions (client-facing)
const config = await sdk.transactions.clientSessions.getBaseConfig({
  transactionProvider: TRANSACTION_PROVIDER.NUVEI,
  merchantTransactionProviderId: 'your-provider-id', // optional
});

console.log('Session config:', config);
// Output: { provider: 'NUVEI', data: { merchantId: '...', environment: '...' } }
```

### 3. Start a Client Payment Session

```typescript
import AccruPay, { TRANSACTION_PROVIDER, CURRENCY, COUNTRY_ISO_2 } from '@accrupay/node';

const session = await sdk.transactions.clientSessions.payments.start({
  transactionProvider: TRANSACTION_PROVIDER.NUVEI,
  merchantTransactionProviderId: 'your-provider-id', // optional
  data: {
    amount: 10000n, // Amount in cents (100.00 USD)
    currency: CURRENCY.USD,
    merchantInternalCustomerCode: 'customer-123',
    merchantInternalTransactionCode: 'txn-456',
    billing: {
      billingFirstName: 'John',
      billingLastName: 'Doe',
      billingEmail: 'john@example.com',
      billingAddressCountry: COUNTRY_ISO_2.US,
      billingAddressLine1: '123 Main St',
      billingAddressCity: 'New York',
      billingAddressState: 'NY',
      billingAddressPostalCode: '10001',
    },
    storePaymentMethod: false,
  },
});

console.log('Session started:', session);
// Use data for frontend integration
```

### 4. Verify Payment Session

```typescript
// After frontend payment completion
const transaction = await sdk.transactions.clientSessions.payments.verify({
  id: session.id, // or use token, providerCode, or merchantInternalTransactionCode
});

console.log('Transaction completed:', transaction);
```

### 5. Fetch Transaction History (Server)

```typescript
// Get paginated list of transactions
const transactions = await sdk.transactions.getMany({
  take: 10,
  skip: 0,
  currency: CURRENCY.USD,
});

console.log('Transactions:', transactions.items);
console.log('Total count:', transactions.totalCount);
```

## Authentication

The SDK uses API secrets for authentication. Obtain your API secret from the AccruPay Merchant Portal.

```typescript
import AccruPay from '@accrupay/node';

const sdk = new AccruPay({
  apiSecret: process.env.ACCRUPAY_API_SECRET,
  environment: process.env.NODE_ENV === 'production' ? 'production' : 'qa',
});
```

### Error Handling

```typescript
import AccruPay from '@accrupay/node';

const sdk = new AccruPay({
  apiSecret: 'your-api-secret',
  environment: 'production',
  onAuthError: () => {
    console.error('Authentication failed');
    // Handle re-authentication
  },
  onGraphQLError: (errors) => {
    console.error('GraphQL errors:', errors);
    // Handle GraphQL errors
  },
  onNetworkError: (error) => {
    console.error('Network error:', error);
    // Handle network errors
  },
});
```

## API Reference

### Core Services

#### Transactions
- `sdk.transactions.getMany()` - List transactions with pagination
- `sdk.transactions.getOne()` - Get single transaction
- `sdk.transactions.voidOne()` - Void a transaction
- `sdk.transactions.refundOne()` - Refund a transaction
- `sdk.transactions.syncOne()` - Sync transaction with provider


#### Transaction Client Sessions (Frontend flow)
- `sdk.transactions.clientSessions.getBaseConfig()` - Get session configuration
- `sdk.transactions.clientSessions.payments.start()` - Start client payment session
- `sdk.transactions.clientSessions.payments.verify()` - Verify completed payment session
- `sdk.transactions.clientSessions.paymentMethod.add.start()` - Start session to add payment method (without payment)
- `sdk.transactions.clientSessions.paymentMethod.add.verify()` - Verify completed add payment method session
- `sdk.transactions.clientSessions.getOne()` - Get session details (by id | token | providerCode | merchantInternalTransactionCode)
- `sdk.transactions.clientSessions.getMany()` - List sessions

#### Transactions Payments (Server-initiated)
- `sdk.transactions.payments.ach.initiate({ merchantTransactionProviderId?, transactionProvider?, data })`
  - Initiate ACH transaction using `MerchantApiServerAchPaymentTransactionCreateSchema`
- `sdk.transactions.payments.paymentMethod.charge({ merchantTransactionProviderId?, transactionProvider?, data })`
  - Charge using a stored customer payment method via `MerchantApiServerPaymentMethodTransactionCreateSchema`

#### Payment Plans
- `sdk.paymentPlans.getMany()` - List payment plans
- `sdk.paymentPlans.getOne()` - Get payment plan details
- `sdk.paymentPlans.createOne()` - Create payment plan
- `sdk.paymentPlans.cancelOne()` - Cancel payment plan
- `sdk.paymentPlans.syncOne()` - Sync payment plan with provider

#### Payment Plan Templates
- `sdk.paymentPlanTemplates.getMany()` - List payment plan templates
- `sdk.paymentPlanTemplates.getOne()` - Get payment plan template details
- `sdk.paymentPlanTemplates.createOne()` - Create payment plan template
- `sdk.paymentPlanTemplates.updateOne()` - Update payment plan template
- `sdk.paymentPlanTemplates.syncOne()` - Sync payment plan template with provider

#### Payment Methods
- `sdk.paymentMethods.getMany()` - List customer payment methods
- `sdk.paymentMethods.getOne()` - Get payment method details
- `sdk.paymentMethods.syncOne()` - Sync payment method with provider

#### Transaction Providers
- `sdk.transactionProviders.getMany()` - List transaction providers
- `sdk.transactionProviders.getOne()` - Get transaction provider details

#### Merchants
- `sdk.merchants.getCurrent()` - Get current merchant information

### Data Types

#### Transaction Session Data
```typescript
import { CURRENCY, COUNTRY_ISO_2, DEVICE_TYPE } from '@accrupay/node';

interface SessionStartData {
  amount: bigint; // Amount in cents
  currency: CURRENCY;
  merchantInternalCustomerCode: string;
  merchantInternalTransactionCode: string;
  billing: {
    billingFirstName: string;
    billingLastName: string;
    billingEmail: string;
    billingAddressCountry: COUNTRY_ISO_2;
    billingAddressLine1?: string;
    billingAddressCity?: string;
    billingAddressState?: string;
    billingAddressPostalCode?: string;
  };
  shipping?: {
    shippingFirstName: string;
    shippingLastName: string;
    shippingEmail: string;
    shippingAddressCountry: COUNTRY_ISO_2;
    // ... other shipping fields
  };
  user?: {
    userFirstName: string;
    userLastName: string;
    userEmail: string;
    // ... other user fields
  };
  device?: {
    deviceId?: string;
    deviceIp?: string;
    deviceBrowser?: string;
    deviceOS?: string;
    deviceName?: string;
    deviceType?: DEVICE_TYPE;
  };
  storePaymentMethod: boolean;
}
```

## Examples

### Complete Payment Flow (Client Session)

```typescript
import AccruPay, { TRANSACTION_PROVIDER, CURRENCY, COUNTRY_ISO_2 } from '@accrupay/node';

async function processPayment() {
  const sdk = new AccruPay({
    apiSecret: process.env.ACCRUPAY_API_SECRET,
    environment: 'production',
  });

  try {
    // 1. Get session configuration
    const config = await sdk.transactions.clientSessions.getBaseConfig({
      transactionProvider: TRANSACTION_PROVIDER.NUVEI,
    });

    // 2. Start payment session
    const session = await sdk.transactions.clientSessions.payments.start({
      transactionProvider: TRANSACTION_PROVIDER.NUVEI,
      data: {
        amount: 2500n, // $25.00
        currency: CURRENCY.USD,
        merchantInternalCustomerCode: 'customer-123',
        merchantInternalTransactionCode: `txn-${Date.now()}`,
        billing: {
          billingFirstName: 'Jane',
          billingLastName: 'Smith',
          billingEmail: 'jane@example.com',
          billingAddressCountry: COUNTRY_ISO_2.US,
          billingAddressLine1: '456 Oak Ave',
          billingAddressCity: 'Los Angeles',
          billingAddressState: 'CA',
          billingAddressPostalCode: '90210',
        },
        storePaymentMethod: true,
      },
    });

     console.log('Payment session created:', {
      sessionId: session.id,
      token: session.token,
      providerCode: session.providerCode,
    });

    // 3. Use session data to complete payment on the frontend
   
    // 4. After frontend payment completion, verify the session
    const transaction = await sdk.transactions.clientSessions.payments.verify({
      id: session.id,
    });

    console.log('Payment completed:', {
      transactionId: transaction.id,
      status: transaction.status,
      amount: transaction.amount,
    });

    return transaction;
  } catch (error) {
    console.error('Payment processing failed:', error);
    throw error;
  }
}
```

### Server-Side Payments (ACH and Stored Method)

```typescript
import AccruPay, { TRANSACTION_PROVIDER, CURRENCY, COUNTRY_ISO_2 } from '@accrupay/node';

const sdk = new AccruPay({ apiSecret: process.env.ACCRUPAY_API_SECRET });

// 1) ACH initiate
const achTx = await sdk.transactions.payments.ach.initiate({
  transactionProvider: TRANSACTION_PROVIDER.NUVEI, // or omit and use merchantTransactionProviderId
  data: {
    amount: 5000n,
    currency: CURRENCY.USD,
    merchantInternalCustomerCode: 'cust-1',
    merchantInternalTransactionCode: 'txn-ach-1',
    billing: {
      billingEmail: 'john@example.com',
      billingFirstName: 'John',
      billingLastName: 'Doe',
      billingAddressCountry: COUNTRY_ISO_2.US,
    },
    ach: {
      accountNumber: '000123456789',
      routingNumber: '011000015',
    },
    storePaymentMethod: false,
  },
});

// 2) Stored payment method charge
const pmTx = await sdk.transactions.payments.paymentMethod.charge({
  transactionProvider: TRANSACTION_PROVIDER.NUVEI,
  data: {
    amount: 2500n,
    currency: CURRENCY.USD,
    merchantCustomerPaymentMethodId: 'pm_123',
    merchantInternalCustomerCode: 'cust-1',
    merchantInternalTransactionCode: 'txn-pm-1',
    billing: {
      billingEmail: 'john@example.com',
      billingFirstName: 'John',
      billingLastName: 'Doe',
      billingAddressCountry: COUNTRY_ISO_2.US,
    },
  },
});
```

### Add Payment Method (Client Session)

```typescript
import AccruPay, { TRANSACTION_PROVIDER, CURRENCY, COUNTRY_ISO_2 } from '@accrupay/node';

const sdk = new AccruPay({ apiSecret: process.env.ACCRUPAY_API_SECRET });

// Start a session to add a payment method (without making a payment, $0 auth)
const addPmSession = await sdk.transactions.clientSessions.paymentMethod.add.start({
  transactionProvider: TRANSACTION_PROVIDER.NUVEI,
  data: {
    currency: CURRENCY.USD,
    merchantInternalCustomerCode: 'cust-1',
    merchantInternalTransactionCode: `add-pm-${Date.now()}`,
    billing: {
      billingEmail: 'john@example.com',
      billingFirstName: 'John',
      billingLastName: 'Doe',
      billingAddressCountry: COUNTRY_ISO_2.US,
    },
  },
});

// Use session data for frontend integration to collect payment method
// After completion, verify the session to get the stored payment method
const transaction = await sdk.transactions.clientSessions.paymentMethod.add.verify({
  id: addPmSession.id,
});

console.log('Payment method stored:', transaction.paymentMethod);
```

### Transaction Management

```typescript
import { CURRENCY, SORT_ORDER } from '@accrupay/node';

// List recent transactions
const recentTransactions = await sdk.transactions.getMany({
  take: 20,
  skip: 0,
  currency: CURRENCY.USD,
  sorting: [{ field: 'createdAt', order: SORT_ORDER.DESC }],
});

// Get specific transaction
const transaction = await sdk.transactions.getOne({
  id: 'transaction-id',
});

// Refund a transaction
const refund = await sdk.transactions.refundOne({
  id: 'transaction-id',
  amount: 1000n, // Refund $10.00
});
```

## Error Handling

The SDK provides comprehensive error handling through Apollo Client:

```typescript
const sdk = new AccruPay({
  apiSecret: 'your-api-secret',
  onAuthError: () => {
    // Handle authentication errors (401, 403)
    console.error('Authentication failed - check your API secret');
  },
  onGraphQLError: (errors) => {
    // Handle GraphQL errors (validation, business logic)
    errors.forEach(error => {
      console.error('GraphQL Error:', error.message);
      if (error.extensions?.code) {
        console.error('Error Code:', error.extensions.code);
      }
    });
  },
  onNetworkError: (error) => {
    // Handle network errors (timeout, connection issues)
    console.error('Network Error:', error.message);
  },
});
```

## TypeScript Support

The SDK is built with TypeScript and provides full type definitions:

```typescript
import AccruPay, { 
  TRANSACTION_PROVIDER, 
  CURRENCY, 
  CLIENT_TRANSACTION_SESSION_STATUS,
  TRANSACTION_STATUS,
  COUNTRY_ISO_2,
  DEVICE_TYPE
} from '@accrupay/node';

// All methods are fully typed
const session = await sdk.transactions.clientSessions.payments.start({
  transactionProvider: TRANSACTION_PROVIDER.NUVEI, // Type-safe enum
  data: {
    amount: 1000n, // BigInt type
    currency: CURRENCY.USD, // Type-safe enum
    billing: {
      billingAddressCountry: COUNTRY_ISO_2.US, // Type-safe enum
      // ... other properties with full type checking
    },
    device: {
      deviceType: DEVICE_TYPE.DESKTOP, // Type-safe enum
    },
  },
});
```

## Environment Configuration

### Production
```typescript
import AccruPay from '@accrupay/node';

const sdk = new AccruPay({
  apiSecret: 'your-production-secret',
  environment: 'production',
});
```

### QA/Testing
```typescript
import AccruPay from '@accrupay/node';

const sdk = new AccruPay({
  apiSecret: 'your-qa-secret',
  environment: 'qa',
});
```

### Custom URL
```typescript
import AccruPay from '@accrupay/node';

const sdk = new AccruPay({
  apiSecret: 'your-secret',
  url: 'https://custom-api.example.com/graphql',
});
```

## Requirements

- Node.js >= 18
- TypeScript >= 4.5 (optional but recommended)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

- Documentation: [https://docs.accru.co](https://docs.accru.co)
- Issues: [GitHub Issues](https://github.com/accruteam/sdk-accrupay-node/issues)
- Email: support@accru.co
