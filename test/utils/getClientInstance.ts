import AccruPay from '../../src';

const getClientInstance = () => {
  return new AccruPay({
    apiSecret: process.env.TESTING_API_SECRET!,
    url: process.env.TESTING_API_BASE_URL! || null,
    environment: (process.env.TESTING_API_ENVIRONMENT! as any) || null,
  });
};

export { getClientInstance };
