# Project screenshots

Drop project screenshots here, then reference them from `app/portfolio/page.tsx`
via the `image` field on a project, e.g.:

```ts
image: "/projects/hostella.png"
```

## Case study detail pages

Full case studies live at `/portfolio/<slug>` (e.g. `/portfolio/hostella`, `/portfolio/procobiz`).
Content is defined in `lib/case-studies.ts`; gallery images can be organised per project:

```
public/projects/
  hostella.png              ← card + case study cover (existing)
  procobiz.png              ← card + case study cover (existing)
  hostella/
    dashboard.png           ← optional gallery shot
    booking.png
    mobile.png
  procobiz/
    procobiz_services.png
    procobiz_about.png
    procobiz_contact.png
```

Placeholder frames on case study pages show the expected filename until you add the file.
PNG, JPG, or WebP all work. Aim for ~1600px wide for crisp display.

Guidelines for portfolio **cards**:
- Use a wide-ish screenshot. Cards crop to ~21:9 (featured/wide) or ~16:10 (standard),
  anchored to the top of the image (`object-top`), so keep the important content near the top.
- If an image is missing or fails to load, the card automatically falls back to the
  branded gradient + serif number, so nothing breaks.

To add a new case study:
1. Add an entry to `caseStudies` in `lib/case-studies.ts`
2. Set `slug` on the matching project in `app/portfolio/page.tsx`
3. Drop screenshots under `public/projects/<slug>/` as needed
