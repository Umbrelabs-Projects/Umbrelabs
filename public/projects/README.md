# Project screenshots

Drop project screenshots here, then reference them from `app/portfolio/page.tsx`
via the `image` field on a project, e.g.:

```ts
image: "/projects/hostella.png"
```

Guidelines for the best look:
- Use a wide-ish screenshot. Cards crop to ~21:9 (featured/wide) or ~16:10 (standard),
  anchored to the top of the image (`object-top`), so keep the important content near the top.
- PNG or JPG/WebP all work. Aim for ~1600px wide for crisp display without huge files.
- File name should match what you set in the `image` field (currently `hostella.png` for Hostella).

If an image is missing or fails to load, the card automatically falls back to the
branded gradient + serif number, so nothing breaks.
```
