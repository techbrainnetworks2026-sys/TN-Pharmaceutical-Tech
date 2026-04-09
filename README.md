# Techbrain Networks - Pharmaceutical Technology Website

A modern, responsive, professional website for Techbrain Networks - a pharmaceutical technology company. Built with React, featuring a complete suite of pages for showcasing products, services, careers, and more.

## 🚀 Features

- **Fully Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **20+ Pharmaceutical Products**: Comprehensive product catalog with descriptions and benefits
- **Complete Navigation**: Intuitive navbar with dropdown menu for products
- **Multiple Pages**:
  - Home (Landing page with hero section, features, products, industries)
  - About (Company overview, mission, vision, values, achievements)
  - Services (6 core services with detailed descriptions)
  - Products (All 20 pharmaceutical products with benefits)
  - Careers (Job listings and company culture)
  - Contact (Contact form with FAQ section)
  - Footer (Quick links and company information)

## 🎨 Design Highlights

- **Color Scheme**: Professional blue (#0A66C2) and green (#2ECC71)
- **Typography**: Poppins (headings) and Inter (body)
- **Layout**: Card-based design with soft shadows and rounded corners
- **Animations**: Smooth transitions and scroll animations
- **Accessibility**: Semantic HTML and WCAG considerations

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup Steps

1. **Clone or navigate to the project directory**
   ```bash
   cd "Pharmaceutical Technologies"
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The application will automatically open at `http://localhost:3000`
   - Hot reload is enabled for live development

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation with dropdown
│   ├── Navbar.css              # Navbar styling
│   ├── Footer.jsx              # Footer component
│   ├── Footer.css              # Footer styling
│   └── ScrollToTop.jsx         # Auto scroll to top on route change
├── pages/
│   ├── Home.jsx                # Landing page
│   ├── Home.css
│   ├── About.jsx               # Company information
│   ├── About.css
│   ├── Services.jsx            # Services listing
│   ├── Services.css
│   ├── Products.jsx            # All 20 products
│   ├── Products.css
│   ├── Careers.jsx             # Job opportunities
│   ├── Careers.css
│   ├── Contact.jsx             # Contact form & info
│   └── Contact.css
├── styles/
│   └── global.css              # Global styles & utilities
├── App.jsx                     # Main app with routing
└── main.jsx                    # React entry point

index.html                      # HTML template
package.json                    # Dependencies
vite.config.js                  # Vite configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📱 Pages Included

### Home Page
- Hero section with call-to-action buttons
- Features showcase (AI, Cloud, Compliance, Support)
- Featured products grid (6 products)
- Industries section (Pharma, Biotech, Healthcare, Research)
- CTA section for lead generation

### About Page
- Company overview
- Mission and vision statements
- Core values (4 values)
- Achievements (metrics)
- Why partner with us (6 reasons)

### Services Page
- 6 core services with detailed offerings:
  - Custom Software Development
  - Cloud Solutions & Integration
  - AI and Data Analytics
  - Regulatory Compliance Consulting
  - UI/UX Design for Healthcare
  - System Integration
- Service benefits section

### Products Page
- All 20 pharmaceutical products with:
  - Product icon
  - Title and description
  - Key benefits (bullet points)
  - Image suggestions
- Product categories overview
- Demo scheduling CTA

### Careers Page
- Why join Techbrain (4 benefits)
- 6 open job positions with:
  - Position details
  - Experience level
  - Location
  - Requirements
  - Salary range
- Company culture section
- Email for resume submission

### Contact Page
- Contact information (Email, Phone, Office)
- Contact form with validation
  - Name, Email, Phone, Subject, Message
  - Success confirmation message
- Three specialized contact options (Sales, Support, Partnerships)
- FAQ section (6 frequently asked questions)

## 🎯 Key Components

### Responsive Grid System
- `grid-2`: 2-column responsive grid
- `grid-3`: 3-column responsive grid
- `grid-4`: 4-column responsive grid
- All grids adapt to mobile, tablet, and desktop

### Button Styles
- `btn-primary`: Blue primary button
- `btn-secondary`: Green secondary button
- `btn-outline`: Outlined button with hover effect

### Typography Utilities
- Heading styles (h1-h6)
- Text color utilities (text-primary, text-secondary)
- Text alignment utilities

### Animations
- `fade-in`: Fade in animation
- `slide-in-left`: Slide from left
- `slide-in-right`: Slide from right

## 🌐 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 💡 Features & Customization

### Easy Customization
- Update colors in `src/styles/global.css` CSS variables
- Modify content in any page component
- Add new products to Products.jsx
- Update contact information in components

### Colors (CSS Variables)
```css
--primary: #0A66C2 (Blue)
--secondary: #2ECC71 (Green)
--dark: #1a1a1a
--light: #f8f9fa
--gray: #6c757d
```

### Add New Pages
1. Create component in `src/pages/`
2. Create corresponding CSS file
3. Import and add route in `App.jsx`
4. Add navigation link in `Navbar.jsx`

## 📧 Contact Information

- **Email**: info@techbrainnetworks.com
- **Phone**: +91-XXXXXXXXXX
- **Sales**: sales@techbrainnetworks.com
- **Support**: support@techbrainnetworks.com
- **Partnerships**: partnerships@techbrainnetworks.com

## 📄 License

© 2026 Techbrain Networks. All Rights Reserved.

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The build folder contains optimized production files ready for deployment.

### Deployment Options
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Any static hosting service

## 🤝 Support

For questions or issues, contact support@techbrainnetworks.com

---

**Built with React + Vite** | Modern Pharmaceutical Technology Solutions
