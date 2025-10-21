// Environment Configuration
const config = {
  development: {
    nodeEnv: 'development',
    cognito: {
      domain: process.env.COGNITO_DOMAIN || 'your-dev-cognito-domain.auth.region.amazoncognito.com',
      clientId: process.env.COGNITO_CLIENT_ID || 'your_dev_client_id',
      clientSecret: process.env.COGNITO_CLIENT_SECRET || 'your_dev_client_secret',
      scope: process.env.COGNITO_SCOPE || 'cognito-api-scope',
    },
    api: {
      baseUrl: process.env.API_BASE_URL || 'http://localhost:3000/v1',
    },
  },
  staging: {
    nodeEnv: 'staging',
    cognito: {
      domain: process.env.COGNITO_DOMAIN || 'your-staging-cognito-domain.auth.region.amazoncognito.com',
      clientId: process.env.COGNITO_CLIENT_ID || 'your_staging_client_id',
      clientSecret: process.env.COGNITO_CLIENT_SECRET || 'your_staging_client_secret',
      scope: process.env.COGNITO_SCOPE,
    },
    api: {
      baseUrl: process.env.API_BASE_URL || 'https://staging-api.example.com/v1',
    },
  },
  production: {
    nodeEnv: 'production',
    cognito: {
      domain: process.env.COGNITO_DOMAIN || 'your-prod-cognito-domain.auth.region.amazoncognito.com',
      clientId: process.env.COGNITO_CLIENT_ID || 'your_prod_client_id',
      clientSecret: process.env.COGNITO_CLIENT_SECRET || 'your_prod_client_secret',
      scope: process.env.COGNITO_SCOPE,
    },
    api: {
      baseUrl: process.env.API_BASE_URL || 'https://api.example.com/v1',
    },
  },
};

const currentEnv = process.env.NODE_ENV || 'development';
export default config[currentEnv];
