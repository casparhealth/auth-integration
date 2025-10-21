# 🔐 Security Guide: File Management

## Files to KEEP LOCAL (Never Commit to Git)

### ❌ NEVER COMMIT THESE FILES:
```
.env                    # Contains your actual secrets
.env.local             # Local environment variables
.env.development.local # Development secrets
.env.staging.local     # Staging secrets
.env.production.local  # Production secrets
config.local.js        # Local configuration with secrets
secrets.js             # Any file containing secrets
credentials.json       # Credential files
```

### ✅ SAFE TO COMMIT THESE FILES:
```
config.js              # Template with placeholder values
env.example            # Example environment file
.env.example           # Example environment file
.gitignore             # Git ignore rules
package.json           # Dependencies
astro.config.mjs       # Astro configuration
openapi.yaml           # API documentation
src/                   # Source code
test-cognito.html      # Test page (no secrets)
```

## Environment Setup

### 1. Development Environment
Create a local `.env.local` file (this will be ignored by git):
```bash
# .env.local (KEEP LOCAL)
NODE_ENV=development
COGNITO_DOMAIN=your-actual-dev-cognito-domain.auth.region.amazoncognito.com
COGNITO_CLIENT_ID=your_actual_dev_client_id
COGNITO_CLIENT_SECRET=your_actual_dev_client_secret
COGNITO_SCOPE=cognito-api-scope
API_BASE_URL=http://localhost:3000/v1
```

### 2. Staging Environment
Create a local `.env.staging.local` file:
```bash
# .env.staging.local (KEEP LOCAL)
NODE_ENV=staging
COGNITO_DOMAIN=your-actual-staging-cognito-domain.auth.region.amazoncognito.com
COGNITO_CLIENT_ID=your_actual_staging_client_id
COGNITO_CLIENT_SECRET=your_actual_staging_client_secret
COGNITO_SCOPE=cognito-api-scope
API_BASE_URL=https://staging-api.example.com/v1
```

### 3. Production Environment
Set environment variables in your hosting platform:
```bash
# Production Environment Variables (Set in hosting platform)
NODE_ENV=production
COGNITO_DOMAIN=your-actual-prod-cognito-domain.auth.region.amazoncognito.com
COGNITO_CLIENT_ID=your_actual_prod_client_id
COGNITO_CLIENT_SECRET=your_actual_prod_client_secret
COGNITO_SCOPE=cognito-api-scope
API_BASE_URL=https://api.example.com/v1
```

## How to Use Different Environments

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
# Uses: .env.production.local or production config
```

## Security Best Practices

### 1. Never Commit Secrets
- Always use `.env` files for secrets
- Add `.env*` to `.gitignore`
- Use placeholder values in committed files

### 2. Use Environment Variables
- Set secrets in your hosting platform
- Use different credentials for each environment
- Rotate secrets regularly

### 3. File Structure
```
auth_integration/
├── .env.local              # ❌ KEEP LOCAL - Dev secrets
├── .env.staging.local      # ❌ KEEP LOCAL - Staging secrets
├── .env.production.local   # ❌ KEEP LOCAL - Prod secrets
├── config.js               # ✅ COMMIT - Template with placeholders
├── env.example             # ✅ COMMIT - Example file
├── .gitignore              # ✅ COMMIT - Git ignore rules
└── ...other files
```

## Quick Setup Commands

### 1. Set up local development:
```bash
# Copy the example file
cp env.example .env.local

# Edit with your actual dev credentials
nano .env.local
```

### 2. Set up staging:
```bash
# Copy the example file
cp env.example .env.staging.local

# Edit with your actual staging credentials
nano .env.staging.local
```

### 3. Set up production:
- Set environment variables in your hosting platform
- Never create `.env.production.local` files

## Verification

### Check what's being tracked by git:
```bash
git status
```

### Check what's being ignored:
```bash
git check-ignore .env.local
git check-ignore .env.staging.local
```

## Emergency: If You Accidentally Committed Secrets

### 1. Remove from git history:
```bash
git filter-branch --force --index-filter 'git rm --cached --ignore-unmatch .env.local' --prune-empty --tag-name-filter cat -- --all
```

### 2. Force push (if already pushed):
```bash
git push origin --force --all
```

### 3. Rotate your secrets immediately!

## Summary

- **KEEP LOCAL**: Any file with actual secrets (`.env*`, `config.local.js`)
- **COMMIT**: Template files with placeholder values (`config.js`, `env.example`)
- **USE**: Environment variables for production deployment
- **ROTATE**: Secrets regularly and never commit them
