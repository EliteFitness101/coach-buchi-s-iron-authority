// ResoFit™ site configuration. Never hardcode secrets — analytics IDs
// and provider keys are read from Vite env vars (VITE_*) at build time.

export const site = {
  name: "ResoFit™",
  tagline: "Premium Fitness Equipment • Powered by ChatB2K™ • Wellness Solutions",
  legalEntity: "Resonance Fitness",
  trademarks: ["ResoFit™", "ResoFlex™", "ChatB2K™", "NaijaFit™", "B2K Elite™", "Iron Authority™"],
  brands: {
    equipment: "ResoFlex™",
    platform: "ChatB2K™",
    nutrition: "NaijaFit™",
    coaching: "B2K Elite™",
    membership: "Iron Authority™",
    business: "ResoFit Business Solutions™",
  },
  cities: ["Lagos", "Abuja", "Port Harcourt"],
} as const;

export const support = {
  whatsapp: "+2349012345678",
  whatsappUrl: "https://wa.me/2349012345678",
  telegram: "https://t.me/resofit",
  phone: "+2348007376348",
  hours: "Mon–Sat · 8am – 8pm WAT",
  emails: {
    sales: "sales@resofit.ng",
    support: "support@resofit.ng",
    payments: "payments@resofit.ng",
    corporate: "corporate@resofit.ng",
  },
} as const;

export const social = {
  instagram: "https://instagram.com/resofit",
  facebook: "https://facebook.com/resofit",
  x: "https://x.com/resofit",
  tiktok: "https://tiktok.com/@resofit",
  youtube: "https://youtube.com/@resofit",
  linkedin: "https://linkedin.com/company/resofit",
} as const;

// Analytics/pixel IDs — read from env, never hardcoded. Configure in
// project settings (VITE_GA4_ID, VITE_META_PIXEL_ID, VITE_TIKTOK_PIXEL_ID)
// before enabling tracking in production.
export const analytics = {
  ga4Id: import.meta.env.VITE_GA4_ID as string | undefined,
  metaPixelId: import.meta.env.VITE_META_PIXEL_ID as string | undefined,
  tiktokPixelId: import.meta.env.VITE_TIKTOK_PIXEL_ID as string | undefined,
} as const;
