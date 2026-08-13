# CVA Building and Electrical — Website

Marketing website for **CVA Building & Electrics Ltd** (trading as CVA Building
and Electrical), Aberdare, South Wales. Built with **Next.js (App Router) +
TypeScript + Tailwind CSS** and designed to deploy on **Vercel**.

## Pages

- **Home** — hero, services, why-us, stats, featured projects, reviews, service area, FAQ
- **About** — company story, values, stats, accreditations
- **Services** — overview + a detail page per service (`/services/[slug]`)
- **Projects** — portfolio grid (real project descriptions, photos to be added)
- **Reviews** — testimonials
- **Contact** — details, opening hours, message form
- **Quote** — free-quote lead-capture form
- Plus `sitemap.xml`, `robots.txt`, a 404 page and LocalBusiness structured data.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## ✏️ Editing content — start here

Almost everything is in **one file**: `src/lib/site.ts`.
Company details, phone numbers, services, projects and reviews all live there.
Change it once and it updates across the whole site.

**Brand colours** live in `tailwind.config.ts` (the `brand` = blue and
`accent` = amber tokens). Change the hex values to restyle the whole site.

## 🔧 Things still to confirm / add (marked `TODO` in the code)

- **Office number:** the van shows `01685 877233`; some Facebook posts show
  `01685 816366`. Confirm which should be primary (set in `src/lib/site.ts`).
- **Email address** — not shown on Facebook; currently a placeholder.
- **Full address & postcode** for the contact page and map.
- **Logo file** — currently a styled text placeholder in `src/components/Logo.tsx`.
  Drop the real logo into `/public` and reference it there.
- **Real photos** — project cards and galleries use coloured placeholders.
  Add clean images to `/public` and swap them into `ProjectCard` / project data.
- **Stats figures** (years, projects completed) — confirm real numbers.
- **Opening hours** — indicative; confirm.

## 📬 Making the forms send email

The quote/contact forms post to `src/app/api/quote/route.ts`, which currently
**logs** submissions (visible in Vercel logs) but does **not** email anyone yet.
To receive leads, wire up an email service — the easiest is
[Resend](https://resend.com): add `RESEND_API_KEY` as a Vercel environment
variable and send the email inside the marked block in that file. Alternatively
point the form at a service like Formspree/Web3Forms.

## 🚀 Deploying on Vercel

1. Push this code to a GitHub repository.
2. In Vercel, **New Project → Import** that repository.
3. If this project sits in a **subfolder** of a larger repo, set the Vercel
   **Root Directory** to that subfolder (e.g. `cva-building-website`).
4. Framework preset: **Next.js** (auto-detected). Click **Deploy**.
5. Add the custom domain (e.g. `cvabuildings.co.uk`) in Vercel → Domains.

---

Built by South Wales Custom Computers.
