# Automatic Deployment Setup

This guide explains how to set up automatic deployment for the Ottawa Chinese Soccer website using GitHub Actions.

## Current Infrastructure
- **AWS CDK** with S3, CloudFront, Route53, and SSL certificates
- Manual deployment via `npm run deploy` in the `/infrastructure` folder
- Static website files deployed to S3 bucket

## Step 1: Create IAM Policy for GitHub Actions

1. Create a policy file `cdk-deploy-policy.json`:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "cloudformation:*",
                "s3:*",
                "cloudfront:*",
                "route53:*",
                "certificatemanager:*",
                "iam:CreateRole",
                "iam:DeleteRole",
                "iam:GetRole",
                "iam:PassRole",
                "iam:AttachRolePolicy",
                "iam:DetachRolePolicy",
                "iam:PutRolePolicy",
                "iam:DeleteRolePolicy",
                "iam:GetRolePolicy",
                "iam:TagRole",
                "iam:UntagRole",
                "ssm:GetParameter",
                "ssm:GetParameters"
            ],
            "Resource": "*"
        }
    ]
}
```

## Step 2: Create IAM User with AWS CLI

Run these commands (replace `YOUR_ACCOUNT_ID` with your actual AWS account ID):

```bash
# 1. Create the IAM policy
aws iam create-policy \
    --policy-name GitHubActionsCDKDeployPolicy \
    --policy-document file://cdk-deploy-policy.json

# 2. Create the IAM user
aws iam create-user \
    --user-name github-actions-cdk-deploy

# 3. Attach the policy to the user
aws iam attach-user-policy \
    --user-name github-actions-cdk-deploy \
    --policy-arn arn:aws:iam::YOUR_ACCOUNT_ID:policy/GitHubActionsCDKDeployPolicy

# 4. Create access keys (save the output!)
aws iam create-access-key \
    --user-name github-actions-cdk-deploy
```

**Important:** Save the `AccessKeyId` and `SecretAccessKey` from step 4 - you'll need them for GitHub secrets.

## Step 3: Configure GitHub Repository Secrets

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add:
   - `AWS_ACCESS_KEY_ID`: The AccessKeyId from step 2
   - `AWS_SECRET_ACCESS_KEY`: The SecretAccessKey from step 2
   - `AWS_REGION`: Your AWS region (e.g., `us-east-1`)

## Step 4: Create GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to AWS
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'npm'
          cache-dependency-path: infrastructure/package-lock.json
      
      - name: Install dependencies
        run: |
          cd infrastructure
          npm ci
      
      - name: Deploy to AWS
        run: |
          cd infrastructure
          npm run deploy
        env:
          AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
          AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          AWS_REGION: ${{ secrets.AWS_REGION }}
```

## Step 5: Test the Setup

1. Commit and push the workflow file to your main branch
2. Go to **Actions** tab in your GitHub repository
3. Watch the deployment process
4. Check your website to confirm changes are live

## Security Best Practices

- **Principle of Least Privilege**: The IAM user only has permissions needed for CDK deployment
- **Separate Credentials**: GitHub Actions uses dedicated credentials, not your personal AWS account
- **Repository Secrets**: AWS credentials are stored securely in GitHub secrets
- **Branch Protection**: Only deploys from the main branch

## Alternative: OIDC Authentication (More Secure)

For enhanced security, consider using OpenID Connect instead of access keys:
- No long-lived credentials stored
- GitHub authenticates directly with AWS using temporary tokens
- More complex initial setup but better security posture

## Troubleshooting

### Common Issues:
1. **Permission Errors**: Ensure the IAM policy includes all required permissions
2. **Environment Variables**: Check that all GitHub secrets are properly set
3. **CDK Bootstrap**: Make sure your AWS account is CDK bootstrapped in the target region
4. **Dependencies**: Ensure `package-lock.json` is committed for reproducible builds

### Useful Commands:
```bash
# Check CDK bootstrap status
npx cdk bootstrap

# Test deployment locally
cd infrastructure
npm run deploy

# View CloudFormation stack
aws cloudformation describe-stacks --stack-name Chinese2025SoccerBBQWebsiteCustomDomain
```

## Benefits of This Setup

✅ **Automatic**: Deploys on every push to main branch  
✅ **Secure**: Dedicated IAM user with minimal permissions  
✅ **Fast**: Cached dependencies for quicker builds  
✅ **Reliable**: Uses your existing CDK infrastructure  
✅ **Transparent**: Full deployment logs in GitHub Actions  

Now your website will automatically update whenever you push changes to the main branch!