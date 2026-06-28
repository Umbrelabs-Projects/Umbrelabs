# Team portraits

Drop team member photos here, then reference them from `app/about/page.tsx`
via the `image` field on a team member, e.g.:

```ts
{ name: "Benjamin Odoi-Lartey", role: "Chief Executive Officer", initials: "BO", image: "/team/benjamin.png" }
```

Guidelines for the best look:
- Cards are portrait (4:5) and crop with `object-cover` centered, so a head-and-shoulders
  shot framed roughly in the centre works best.
- PNG, JPG, or WebP all work. ~800×1000px is plenty.
- Any member without an `image` keeps the elegant initials avatar automatically.
```
