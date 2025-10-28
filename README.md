# Portfolio v2 – Next.js Personal Site

A modern, responsive portfolio built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.  
Showcases projects and professional experience with fast rendering thanks to SSR/SSG.

---

## 🚀 Features

- ⚡ Next.js 15 with App Router
- 🎨 Tailwind CSS for utility-first styling
- 🌐 Internationalization (i18n) with next-intl (FR/EN/PT)
- 🪄 Page and component animations with Framer Motion
- 📱 100% Lighthouse performance and accessibility score
- 📬 Contact form with React-Hook-Form and Zod validation
- 🔍 Optimized SEO meta tags
- 🎯 One-click deploy to Vercel

---

## 🛠️ Technologies

- **Frontend**: Next.js, React, TypeScript
- **Styling**: Tailwind CSS, Shadcn/UI (Radix UI components)
- **Forms**: React Hook Form, Zod
- **Animations**: Framer Motion
- **Internationalization**: next-intl
- **Emails**: EmailJS
- **Icons**: Lucide React, React Icons

---

## 📂 Project Structure

```
portfolio-v2/
├── messages/           # Translation files (i18n)
├── public/             # Static resources
├── src/
│   ├── app/            # Application routes
│   ├── components/     # React components
│   ├── constants/      # Constant data
│   ├── i18n/           # i18n configuration
│   ├── lib/            # Utilities and functions
│   └── types/          # TypeScript types
└── ...
```

---

## 🏁 Getting Started

1. Clone the repository

   ```bash
   git clone https://github.com/your-username/portfolio-v2.git
   cd portfolio-v2
   ```

2. Install dependencies

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. Run the development server

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

---

## 🌐 Internationalization

This portfolio supports multiple languages (French, English, Portuguese) thanks to next-intl. Translation files are located in the `messages/` folder.

To add a new language:

1. Create a new JSON file in the `messages/` folder
2. Add the language to the i18n configuration

---

## 🚀 Deployment

This project is configured for easy deployment on Vercel.
