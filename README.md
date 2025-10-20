# Auth Integration API Documentation

[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)
[![OpenAPI](https://img.shields.io/badge/OpenAPI-3.0-green.svg)](https://swagger.io/specification/)

API documentation with AWS Cognito integration, supporting development, staging, and production environments.

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
```bash
# Copy example environment file
cp env.example .env.local

# Edit with your actual credentials
nano .env.local
```

### 3. Start Development Server
```bash
npm run dev
# Server will start on http://localhost:4321
```

### 4. Test the API
- Open `http://localhost:4321`
- Click "Cognito Test" in the sidebar
- Test your AWS Cognito integration

## 🌍 Environment Support

### Development
```bash
npm run dev
# Uses: .env.local or config.js defaults
```

### Staging
```bash
npm run dev:staging
# Uses: .env.staging.local or staging config
```

### Production
```bash
npm run dev:prod
# Uses: environment variables from hosting platform
```

## 🔐 Features

- **AWS Cognito OAuth2**: Client credentials flow for server-to-server authentication
- **API Documentation**: Complete OpenAPI specification with examples
- **Multi-Environment**: Development, staging, and production configurations
- **Security Best Practices**: Secure credential management and deployment
- **OpenAPI 3.0**: Complete API specification with examples
- **Responsive Design**: Works on desktop and mobile devices

## 📚 Documentation

- **[Setup Guide](/src/content/docs/setup-guide.mdx)**: Complete setup instructions
- **[Cognito Test](/src/content/docs/cognito-test.mdx)**: Testing guide and examples
- **[API Reference](/api/)**: Complete API documentation
- **[Security Guide](/SECURITY-GUIDE.md)**: Security best practices

## 🛠️ Project Structure

```
auth_integration/
├── src/
│   ├── content/docs/          # Documentation pages
│   │   ├── setup-guide.mdx    # Setup instructions
│   │   ├── cognito-test.mdx   # Testing page
│   │   └── index.mdx          # Home page
│   └── assets/                # Images and assets
├── config.js                  # Environment configuration
├── openapi.yaml              # API specification
├── astro.config.mjs          # Astro/Starlight configuration
├── test-cognito.html         # Standalone test page
├── env.example               # Example environment variables
├── .gitignore                # Git ignore rules
└── SECURITY-GUIDE.md         # Security documentation
```

## 🔧 Configuration

### Environment Variables

#### Development
```bash
# .env.local (KEEP LOCAL - Never commit)
NODE_ENV=development
COGNITO_DOMAIN=your-dev-cognito-domain.auth.region.amazoncognito.com
COGNITO_CLIENT_ID=your_dev_client_id
COGNITO_CLIENT_SECRET=your_dev_client_secret
COGNITO_SCOPE=backend-api-v3-admins/auths:read
API_BASE_URL=http://localhost:3000/v1
```

#### Staging
```bash
# .env.staging.local (KEEP LOCAL - Never commit)
NODE_ENV=staging
COGNITO_DOMAIN=your-staging-cognito-domain.auth.region.amazoncognito.com
COGNITO_CLIENT_ID=your_staging_client_id
COGNITO_CLIENT_SECRET=your_staging_client_secret
COGNITO_SCOPE=backend-api-v3-admins/auths:read
API_BASE_URL=https://staging-api.example.com/v1
```

#### Production
Set environment variables in your hosting platform:
```bash
# Production Environment Variables (Set in hosting platform)
NODE_ENV=production
COGNITO_DOMAIN=your-prod-cognito-domain.auth.region.amazoncognito.com
COGNITO_CLIENT_ID=your_prod_client_id
COGNITO_CLIENT_SECRET=your_prod_client_secret
COGNITO_SCOPE=backend-api-v3-admins/auths:read
API_BASE_URL=https://api.example.com/v1
```

## 🧞 Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts development server                        |
| `npm run dev:staging`     | Starts staging server                            |
| `npm run dev:prod`        | Starts production server                         |
| `npm run build`           | Build for development                            |
| `npm run build:staging`   | Build for staging                                |
| `npm run build:prod`      | Build for production                             |
| `npm run preview`         | Preview your build locally                       |

## 🔒 Security & Configuration Management

### Environment File Management
- **Local Development**: `.env.local` - Development configuration (excluded from version control)
- **Staging Environment**: `.env.staging.local` - Staging configuration (excluded from version control)
- **Production Environment**: Environment variables configured in hosting platform

### Version Control Security
- **Excluded Files**: Environment files with credentials are automatically excluded from version control
- **Template Files**: Configuration templates with placeholder values are included
- **Source Code**: All application code and documentation are version controlled

## 🚀 Deployment

### GitHub Pages (Recommended)
1. **Push to GitHub**: Push your code to a GitHub repository
2. **Enable Pages**: Go to repository Settings → Pages
3. **Select Source**: Choose "GitHub Actions" as the source
4. **Automatic Deployment**: Every push to `main` branch will deploy automatically

**Your site will be available at**: `https://casparhealth.github.io/auth-integration`

**Note**: Configuration is already set up for `casparhealth` organization.

### Manual Deployment
```bash
# Build the project
npm run build:prod

# Upload dist/ folder to your hosting provider
```

## 🧪 Testing

### API Documentation Test
1. Go to `http://localhost:4321/api`
2. View the complete API specification
3. Use the provided code examples to test the OAuth2 token endpoint

## 🆘 Troubleshooting

### Common Issues
1. **Invalid Client Credentials**: Check your `client_id` and `client_secret`
2. **CORS Error**: Add your domain to Cognito allowed origins
3. **Environment Variables Not Loading**: Check if `.env.local` file exists
4. **Build Errors**: Verify Node.js version (18+ required)

### Debug Steps
1. Check environment variables: `echo $NODE_ENV`
2. Test Cognito endpoint directly with cURL
3. Check server logs: `npm run dev -- --verbose`

## 📖 Learn More

- [Starlight Documentation](https://starlight.astro.build/)
- [Astro Documentation](https://docs.astro.build)
- [OpenAPI Specification](https://swagger.io/specification/)
- [AWS Cognito Documentation](https://docs.aws.amazon.com/cognito/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**Ready to get started?** Follow the [Setup Guide](/src/content/docs/setup-guide.mdx) for detailed instructions!
