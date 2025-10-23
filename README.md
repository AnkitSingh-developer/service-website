# UrbanServe - Home Services Platform

A modern, full-featured home services marketplace inspired by UrbanClap, built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

### For Customers
- **Browse Services**: 100+ home services across multiple categories
- **Search & Filter**: Easy-to-use search with category filters
- **Service Details**: Detailed information, pricing, and reviews
- **Instant Booking**: Simple 3-step booking process
- **Verified Professionals**: All service providers are background-checked
- **Transparent Pricing**: No hidden charges
- **Multiple Payment Options**: Cards, UPI, Wallets, and Cash

### For Professionals
- **Partner Portal**: Easy registration and onboarding
- **Flexible Schedule**: Accept jobs based on availability
- **Quick Payments**: Direct bank transfers within 24-48 hours
- **Training & Support**: Comprehensive training programs
- **Insurance Coverage**: All professionals covered

## 📄 Pages

1. **Home Page** (`/`)
   - Hero section with search
   - Featured services
   - Popular categories
   - How it works
   - Trust indicators & stats
   - Customer testimonials
   - App download section
   - CTA sections

2. **Services** (`/services`)
   - Service listing with search/filter
   - Category-based filtering
   - Service cards with pricing

3. **Service Detail** (`/services/[slug]`)
   - Detailed service information
   - Booking form
   - Reviews and ratings
   - Related services

4. **About** (`/about`)
   - Company story
   - Mission & vision
   - Core values
   - Team information
   - Company statistics

5. **Contact** (`/contact`)
   - Contact form
   - Contact information
   - Business hours
   - Map location

6. **How It Works** (`/how-it-works`)
   - Step-by-step guide
   - Benefits overview
   - Payment information
   - Quality guarantee

7. **Become a Professional** (`/become-professional`)
   - Benefits for professionals
   - Requirements
   - Application form
   - Success stories

## 🎨 Components

### Layout Components
- **Header**: Navigation with mobile menu, search, login
- **Footer**: Comprehensive footer with links, contact info, social media

### Feature Components
- **HeroSearch**: Search bar for finding services
- **CategoryGrid**: Display service categories
- **ServiceCard**: Service preview cards
- **BookingForm**: Service booking interface
- **ReviewSection**: Customer reviews display

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or npm/pnpm/yarn

### Installation

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components built with Radix UI
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Mono
- **Analytics**: Vercel Analytics

## 📱 Features by Section

### Navigation
- Sticky header with smooth scrolling
- Mobile-responsive hamburger menu
- City selector
- User authentication (UI ready)

### Service Discovery
- Category-based browsing
- Keyword search
- Featured services showcase
- Popular categories grid

### Trust & Safety
- Background-verified professionals
- Customer reviews and ratings
- Service guarantee
- Transparent pricing
- Insurance coverage

### Booking Flow
- Select service
- Choose date/time
- Enter details
- Confirm & pay
- Track professional

## 🎯 Upcoming Features

- [ ] User authentication & profiles
- [ ] Real-time booking system
- [ ] Payment gateway integration
- [ ] Professional dashboard
- [ ] Admin panel
- [ ] Live chat support
- [ ] Mobile app (React Native)
- [ ] Multi-language support
- [ ] Advanced search filters
- [ ] Loyalty program

## 📂 Project Structure

```
urban-clone/
├── app/
│   ├── api/              # API routes
│   ├── about/            # About page
│   ├── contact/          # Contact page
│   ├── how-it-works/     # How it works page
│   ├── become-professional/  # Partner registration
│   ├── services/         # Services pages
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   └── globals.css       # Global styles
├── components/
│   ├── ui/               # Reusable UI components
│   ├── header.tsx        # Header/navbar
│   ├── footer.tsx        # Footer
│   ├── hero-search.tsx   # Search component
│   ├── category-grid.tsx # Categories display
│   ├── service-card.tsx  # Service cards
│   └── ...
├── lib/
│   ├── data/             # Mock data
│   └── utils.ts          # Utility functions
└── public/
    └── images/           # Static images
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is for educational purposes.

## 🙏 Acknowledgments

- Inspired by UrbanClap/Urban Company
- UI components from shadcn/ui
- Icons from Lucide React

---

Built with ❤️ using Next.js and TypeScript

