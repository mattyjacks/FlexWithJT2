# Public assets

Place static files (images, videos, docs, favicons) here. Files in this folder are served from the site root.

Examples:
- /images/hero.jpg → public/images/hero.jpg
- /videos/promo.mp4 → public/videos/promo.mp4

In code:

```tsx
<img src="/images/hero.jpg" alt="Flex With JT" />
<video src="/videos/promo.mp4" autoPlay muted loop />
```

Tips:
- Prefer optimized image formats (WebP/AVIF) and reasonable sizes.
- Keep filenames URL-safe (no spaces) and lowercase.
- Organize by type, e.g., `public/images/`, `public/videos/`, `public/icons/`.
