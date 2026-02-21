# Digital Dream Works Agency Website

Modern, high-performance agency website built with Next.js 14, Tailwind CSS, and Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 📦 Deployment

### Option 1: Vercel (Recommended)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your repository
5. Vercel auto-detects Next.js - just click "Deploy"
6. Add custom domain: `digitaldreamworksagency.com`

### Option 2: Netlify

1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub, select repository
5. Build command: `npm run build`
6. Publish directory: `.next`
7. Deploy
8. Add custom domain in site settings

## 🔧 Configuration

### Google Tag Manager

Replace `GTM-XXXXXXX` in `/app/layout.tsx` (lines 45 and 54) with your actual GTM ID:

```typescript
// Find and replace both instances
'GTM-XXXXXXX' → 'GTM-YOUR-ID'
```

### Contact Information

Update contact details in `/components/Contact.tsx`:
- Email: `hello@digitaldreamworksagency.com`
- Phone: `+1 (786) 735-2988`
- Locations: Florida, USA | Rome, Italy

### SEO Metadata

Update in `/app/layout.tsx`:
- Title
- Description
- Keywords
- Open Graph tags

## 🎨 Customization

### Colors

Edit `/tailwind.config.js` to change brand colors:

```javascript
colors: {
  agency: {
    // Update these values
    500: '#ef4444',
    600: '#dc2626',
    // ...
  }
}
```

### Content

All content is in components:
- Hero: `/components/Hero.tsx`
- Services: `/components/Services.tsx`
- Testimonials: `/components/Testimonials.tsx`
- Contact: `/components/Contact.tsx`

## 📊 Analytics

Add Google Analytics:
1. Get your GTM container ID from [tagmanager.google.com](https://tagmanager.google.com)
2. Replace `GTM-XXXXXXX` in `/app/layout.tsx`
3. Configure tags in GTM dashboard

## 🔒 Security

- HTTPS enforced (automatic on Vercel/Netlify)
- No API keys in frontend code
- Content Security Policy headers recommended (add in hosting provider)

## 📱 Mobile Optimization

- Fully responsive design
- Touch-friendly navigation
- Optimized images (use Next.js Image component)
- Fast loading times

## 🌐 SEO Features

✅ Meta tags (title, description, keywords)
✅ Open Graph tags (social sharing)
✅ Twitter cards
✅ Semantic HTML
✅ Schema.org markup ready
✅ Sitemap.xml ready
✅ Mobile-friendly
✅ Fast page speed

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Deployment**: Vercel/Netlify

## 📂 Project Structure

```
ddw-agency-site/
├── app/
│   ├── layout.tsx       # Root layout with SEO
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Navbar.tsx       # Navigation
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services grid
│   ├── Testimonials.tsx # Client testimonials
│   ├── Contact.tsx      # Contact/CTA
│   └── Footer.tsx       # Footer
├── public/
│   └── (static assets)
├── tailwind.config.js   # Tailwind configuration
├── next.config.js       # Next.js configuration
└── package.json         # Dependencies
```

## 🚨 Important Notes

### Before Going Live

1. ✅ Replace GTM ID with actual ID
2. ✅ Test contact form functionality
3. ✅ Verify all links work
4. ✅ Check mobile responsiveness
5. ✅ Run Lighthouse audit
6. ✅ Set up DNS records
7. ✅ Enable SSL (automatic on Vercel/Netlify)
8. ✅ Submit sitemap to Google Search Console

### Performance Tips

- Use Next.js Image component for all images
- Enable Vercel Analytics for monitoring
- Lazy load heavy components
- Use ISR (Incremental Static Regeneration) if needed

## 📞 Support

For deployment help, contact Emergent or reference:
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment Docs](https://vercel.com/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

## ⚡ Quick Deployment Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel/Netlify connected
- [ ] Custom domain added
- [ ] DNS records updated
- [ ] GTM ID replaced
- [ ] Contact info verified
- [ ] SSL certificate active
- [ ] Analytics working
- [ ] Mobile tested
- [ ] SEO metadata confirmed

---

**Built for Digital Dream Works LLC**  
Florida, USA | Rome, Italy  
[digitaldreamworksagency.com](https://digitaldreamworksagency.com)
