# Diamond Tool Business Website - Walkthrough

I have created a static, customizable website for your diamond tool business, inspired by the reference site. It is built with Next.js and Tailwind CSS, designed for easy programmatic customization.

I have created a static, customizable website for your diamond tool business, inspired by the reference site. It is built with Next.js and Tailwind CSS, designed for easy programmatic customization.

**Project Location**: `/Users/antmke/.gemini/antigravity/playground/giant-pioneer`

**Localization**: The site content has been localized to Russian as requested.

## Features
- **Modern Design**: Clean, industrial look with a responsive layout.
- **Data-Driven**: Content is managed via JSON files, making it easy to update without touching code.
- **Components**:
    - **Hero**: Impactful landing section with CTA.
    - **Stats**: Company achievements.
    - **Product Grid**: Display of products from data.
    - **Contact**: Simple contact information display.
- **SEO Ready**: Basic metadata and `robots.txt` included.

## How to Customize
You can programmatically customize the site by editing the JSON files in `src/data/`:

### 1. Site Configuration (`src/data/config.json`)
Edit this file to change:
- Site Title and Description
- Contact Information (Phone, Email, Address)
- Navigation Links
- Hero Section Text (Title, Subtitle, CTA)
- Stats Numbers

### 2. Products (`src/data/products.json`)
Edit this file to manage your product catalog. Each product has:
- `id`: Unique identifier
- `name`: Product name
- `description`: Short description
- `price`: Price string
- `category`: Category name
- `image`: Path to image (currently placeholders)

## How to Run Locally
1. Navigate to the project directory:
   ```bash
   cd /Users/antmke/.gemini/antigravity/playground/giant-pioneer
   ```
   *Note: Ensure `package.json` is present in this directory.*

2. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### GitHub Pages (Automated)
This project includes a GitHub Action to automatically deploy to GitHub Pages.

1. Push the code to a GitHub repository.
2. Go to the repository **Settings** > **Pages**.
3. Under **Build and deployment**, select **GitHub Actions** as the source.
4. The action will automatically build and deploy your site on every push to `main`.

### Manual Static Build
To build locally for other static hosts:
```bash
npm run build
```
The output will be in the `out` folder.
