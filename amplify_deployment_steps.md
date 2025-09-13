# AWS Amplify Deployment Steps

This guide walks you through migrating from CDK to AWS Amplify for automatic deployment of the Ottawa Chinese Soccer website.

## Why AWS Amplify?

- ✅ **5-minute setup** vs 30+ minutes with GitHub Actions
- ✅ **No IAM users, policies, or secrets** to manage
- ✅ **Instant deployment** on every GitHub push
- ✅ **Automatic SSL certificates** and CDN
- ✅ **Keep your existing domain** (ottawachinesesoccer.ca)

## Prerequisites

- GitHub repository with your website files
- AWS account with existing Route53 domain
- Access to AWS Amplify Console

## Step 1: Create New Amplify App

1. **Open AWS Amplify Console**: https://console.aws.amazon.com/amplify/
2. **Click "New app"** → **"Host web app"**
3. **Select "GitHub"** as your source provider
4. **Click "Continue"**

## Step 2: Connect GitHub Repository

1. **Authorize GitHub access**: A popup will appear asking for GitHub permissions
2. **Select repository**: Choose `ottawa-chinese-soccer-from-mario`
3. **Select branch**: Choose `main` (or your primary branch)
4. **Click "Next"**

## Step 3: Configure Build Settings

Since you have static HTML files, use this build configuration:

1. **App name**: `Ottawa Chinese Soccer Website` (or your preferred name)
2. **Build and test settings**: Replace the default with:

```yaml
version: 1
frontend:
  phases:
    build:
      commands:
        - echo "No build process needed for static files"
  artifacts:
    baseDirectory: /
    files:
      - '**/*'
    exclude:
      - infrastructure/**/*
      - .git/**/*
      - .claude/**/*
      - '*.md'
```

3. **Advanced settings** (optional):
   - Environment variables: None needed for static site
   - Service role: Use existing or create new (Amplify will handle this)

4. **Click "Next"** → **"Save and deploy"**

## Step 4: Wait for Initial Deployment

1. **Monitor the build process** in the Amplify console
2. **Initial deployment takes 2-5 minutes**
3. **You'll get a temporary URL**: `https://main.xxxxx.amplifyapp.com`
4. **Test this URL** to ensure your site works correctly

## Step 5: Add Custom Domain

1. **Go to "Domain management"** in the left sidebar of your Amplify app
2. **Click "Add domain"**
3. **Enter your domain**: `ottawachinesesoccer.ca`
4. **Configure subdomains**:
   - Root domain: `ottawachinesesoccer.ca` → `main` branch
   - WWW subdomain: `www.ottawachinesesoccer.ca` → `main` branch
5. **Click "Configure domain"**

## Step 6: DNS Configuration

You have two options for DNS setup:

### Option A: Automatic Route53 Setup (Recommended)

1. **Select "I want to use Route53 to manage my domain"**
2. **Amplify will automatically**:
   - Update your existing Route53 hosted zone
   - Replace current A records with appropriate CNAME records
   - Configure SSL certificate validation
3. **Click "Configure"**

### Option B: Manual DNS Update

If you prefer manual control:

1. **Amplify provides DNS records** to update
2. **Go to Route53 console** and update your hosted zone:
   - Replace existing A records for `ottawachinesesoccer.ca`
   - Replace existing A records for `www.ottawachinesesoccer.ca`
   - Use the CNAME values provided by Amplify
3. **Wait for DNS propagation** (up to 48 hours, usually much faster)

## Step 7: SSL Certificate Setup

- **Automatic**: Amplify automatically provisions SSL certificates
- **No manual Certificate Manager setup needed**
- **Wait for domain verification**: This can take 10-15 minutes
- **Status will show "Available"** when ready

## Step 8: Test Your Setup

1. **Check Amplify URL**: Verify `https://main.xxxxx.amplifyapp.com` works
2. **Test custom domain**: Visit `https://ottawachinesesoccer.ca`
3. **Test WWW redirect**: Visit `https://www.ottawachinesesoccer.ca`
4. **Verify HTTPS**: Ensure SSL certificate is working

## Step 9: Test Automatic Deployment

1. **Make a small change** to any file in your repository
2. **Commit and push** to the main branch:
   ```bash
   git add .
   git commit -m "Test automatic deployment"
   git push origin main
   ```
3. **Watch the deployment** in Amplify console
4. **Verify changes appear** on your website (usually within 2-3 minutes)

## Step 10: Clean Up Old Infrastructure (Optional)

Once you've verified everything works:

1. **Go to CloudFormation console**
2. **Find your CDK stack**: `Chinese2025SoccerBBQWebsiteCustomDomain`
3. **Delete the stack** to remove:
   - S3 buckets
   - CloudFront distribution
   - Old Route53 records
   - SSL certificates
4. **Save costs** by removing unused resources

## Configuration Files

### Build Specification (amplify.yml)
If you want to customize the build process, create `amplify.yml` in your repository root:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - echo "Nothing to install for static site"
    build:
      commands:
        - echo "No build process needed"
  artifacts:
    baseDirectory: /
    files:
      - '**/*'
    exclude:
      - infrastructure/**/*
      - .git/**/*
      - .claude/**/*
      - README.md
      - '*.md'
  cache:
    paths: []
```

### Environment Variables (if needed)
In Amplify Console → App settings → Environment variables:
- Generally not needed for static sites
- Add any custom environment variables if required

## Troubleshooting

### Common Issues:

1. **Domain verification fails**:
   - Check Route53 hosted zone is correctly configured
   - Wait up to 48 hours for DNS propagation
   - Verify domain ownership in Amplify console

2. **Build fails**:
   - Check build logs in Amplify console
   - Ensure static files are in repository root
   - Verify amplify.yml configuration if using custom build

3. **SSL certificate issues**:
   - Wait for automatic certificate provisioning
   - Check domain validation records in Route53
   - Certificate creation can take 10-20 minutes

4. **Files not displaying correctly**:
   - Check file paths are relative, not absolute
   - Verify all assets (CSS, JS, images) are committed to repository
   - Check browser developer tools for 404 errors

### Useful Commands:

```bash
# Check current git status
git status

# Add all changes and commit
git add .
git commit -m "Your commit message"
git push origin main

# View deployment logs (in Amplify console)
# App → Build history → Click on latest build
```

## Migration Checklist

**Before Migration:**
- [ ] Backup current website files
- [ ] Note current DNS settings
- [ ] Ensure all files are committed to GitHub

**During Setup:**
- [ ] Create Amplify app and connect to GitHub
- [ ] Configure build settings for static files
- [ ] Add custom domain configuration
- [ ] Choose DNS management option (auto vs manual)
- [ ] Wait for SSL certificate provisioning

**After Migration:**
- [ ] Test website on Amplify temporary URL
- [ ] Test custom domain access (http and https)
- [ ] Verify automatic deployment with test commit
- [ ] Check all pages and assets load correctly
- [ ] Monitor for 24-48 hours to ensure stability
- [ ] Clean up old CDK infrastructure (optional)

## Benefits After Migration

✅ **Zero-configuration deployments**: Push to GitHub → Live in 2-3 minutes  
✅ **No credential management**: No AWS keys or GitHub secrets  
✅ **Automatic SSL renewal**: Never worry about certificate expiration  
✅ **Global CDN included**: Fast loading worldwide via CloudFront  
✅ **Branch deployments**: Easily create staging environments  
✅ **Deployment history**: Roll back to previous versions easily  
✅ **Cost optimization**: Pay only for what you use  

## Support and Resources

- **AWS Amplify Documentation**: https://docs.amplify.aws/
- **GitHub Integration Guide**: https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html
- **Custom Domain Setup**: https://docs.aws.amazon.com/amplify/latest/userguide/custom-domains.html
- **Troubleshooting Guide**: https://docs.aws.amazon.com/amplify/latest/userguide/troubleshooting.html

Your website will now automatically deploy whenever you push changes to GitHub - it's that simple!