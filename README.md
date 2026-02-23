# Sadik Infra — Corporate Construction Website

A premium corporate website for **Sadik Infra**, built with React, Vite, and Tailwind CSS.

---

> [!CAUTION]
> **`node_modules/` and `dist/` are NOT included in this repository.** This is standard practice for all Node.js projects.
> - `node_modules/` is auto-generated when you run `npm install` (it reads `package.json` and downloads all dependencies).
> - `dist/` is auto-generated when you run `npm run build` (it compiles the production bundle).
>
> **You must run `npm install` first before starting the project.**

## 🚀 How to Run

### Prerequisites
- [Node.js](https://nodejs.org/) v18+ installed.

### Steps

```bash
# 1. Navigate to the project folder
cd sadiq-infra

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev

# 4. Open in browser
# Visit http://localhost:5173/
```

### Production Build

```bash
npm run build     # Output goes to /dist
npm run preview   # Preview the production build locally
```

---

## 🔧 How to Customize

### Company Details
Edit `src/config/company.js` to update:
- Company name, tagline
- Phone number, email, address
- Working hours
- Google Maps embed link
- Social media links

### WhatsApp & EmailJS
Edit `src/config/contact.js` (or create a `.env` file from `.env.example`):
- `VITE_EMAILJS_SERVICE_ID` — Your EmailJS Service ID
- `VITE_EMAILJS_TEMPLATE_ID` — Your EmailJS Template ID
- `VITE_EMAILJS_PUBLIC_KEY` — Your EmailJS Public Key
- WhatsApp number

### Services
Edit `src/data/servicesData.js` to add, remove, or modify services.
Each service has: title, description, icon, image, benefits, and idealFor.

### Projects
Edit `src/data/projectsData.js` to update the project portfolio.
Each project has: title, category, location, description, image, year, and status.

### Images
Place your images inside `public/images/`. Key images used:
- `hero-construction.jpg` — Home page hero banner
- `about-engineer.jpg` — About page & Why Choose Us
- `about-site-work.jpg` — About page header background
- `commercial-building.jpg` — Services page header
- `contact-background.jpg` — Contact page header

Recommended: Compress images to under 300KB for performance.

### Colors & Fonts
Edit `tailwind.config.js`:
- **Primary**: `#111827` (Dark Slate)
- **Secondary**: `#f59e0b` (Construction Yellow)
- **Fonts**: Inter (body), Poppins/Montserrat (headings)

### SEO
- Edit `index.html` for global meta tags.
- Edit page-level SEO in each page file using the `<MetaWrapper>` component.
- Update `public/sitemap.xml` with your actual domain.
- Update `public/robots.txt` with your domain.

---

## 📁 Project Structure

```
sadiq-infra/
├── public/              # Static assets (images, robots.txt, sitemap.xml)
├── src/
│   ├── components/      # Reusable UI components
│   ├── config/          # Company and contact configuration
│   ├── data/            # Services and projects data
│   ├── layouts/         # Page layout (Navbar + Footer wrapper)
│   ├── pages/           # Route pages (Home, About, Services, etc.)
│   ├── App.jsx          # Root component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles + Tailwind
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 🛠 Tech Stack
- **React 18** + **Vite**
- **Tailwind CSS v3**
- **React Router** (client-side routing)
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **EmailJS** (contact form)
- **React Helmet Async** (SEO)

---

## 📦 Deployment
- **Netlify**: The `public/_redirects` file handles SPA routing automatically.
- **Vercel**: Add a `vercel.json` with `"rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]`.

Run `npm run build` and deploy the `dist/` folder.

---

Developed by **Crawlop**
