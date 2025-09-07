"# ocsweb" 

## 🏗️ Tech Stack

### Frontend
- **HTML5** - Static web pages with semantic markup
- **CSS3** - Responsive styling and layout
- **JavaScript** - Interactive functionality
- **Static Assets** - Images and other media files

### Infrastructure & Deployment
- **AWS S3** - Static website hosting
  - Bucket: `www.ottawachinesesoccer.ca`
  - Private bucket with CloudFront access
- **AWS CloudFront** - Global CDN for fast content delivery
  - Distribution ID: `ETFFDY715WWS7`
  - HTTPS enforcement and security headers
- **AWS Route 53** - DNS management
  - Custom domain routing
  - Apex domain redirect to www subdomain
- **AWS Certificate Manager** - SSL/TLS certificates
  - Automatic HTTPS for secure connections
- **AWS CDK (Cloud Development Kit)** - 
