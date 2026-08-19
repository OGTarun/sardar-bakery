# Sardar Bakery

Production-ready website for **Sardar Bakery** — an established bakery and
fast-food destination in Khanna, Punjab.

> Where Tradition Bakes Trust · Est. 1950
>
> Cakes · Bakery · Fast Food

## Stack

- Vite + React 18 + TypeScript
- Framer Motion (hero sequence, scroll reveals, parallax, tab/toggle micro-interactions)
- Bespoke CSS design system (no UI framework)
- Playfair Display + Jost (Google Fonts)

## Getting started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build (tsc --noEmit + vite build)
npm run preview  # preview the production build
```

## Project structure

```
src/
  data/site.ts        # central business config: name, phone, hours, social,
                      #   address, maps, badge copy, image references
  data/menu.ts        # ALL menu data: snacks, cakes (½/1 kg), pastries,
                      #   bakery specials, custom-cake themes, services
  components/         # one component + stylesheet per section
  styles/             # design tokens + global styles
public/
  favicon.svg
  logo.png            # client logo, transparent PNG (brand contexts only)
  cake-classic.png    # client-supplied cake photography
  cake-new.png        # client-supplied designer cake photography
  cupcakes.png        # client-supplied cupcake photography
```

## Content & real-world confirmation notes

- **Phone:** `+91 97805 88066` is taken from the supplied menu and set in
  `src/data/site.ts` (`phonePrimary`). It drives every call button, the navbar
  and the footer.
- **Hours:** `8:30 AM – 9:00 PM` (from the supplied menu) — set in `site.hours`,
  used in the contact section and footer and in the structured-data JSON-LD.
- **Address:** only "Khanna, Punjab" is shown. A precise street address was not
  confirmed — extend `site.addressFull` / `site.addressShort` when provided.
- **Menu pricing:** transcribed exactly from the supplied menu into
  `src/data/menu.ts`. Do not round prices, "correct" product wording, or invent
  sizes/taxes.
- **WhatsApp:** not shown until confirmed for the number — set `site.whatsapp`
  to switch a WhatsApp CTA on (config-driven).
- **Instagram:** intentionally absent — add `site.instagram` once a verified
  account exists.
- **Google Maps:** `maps.embedUrl` / `maps.directionsUrl` search for "Sardar
  Bakery, Khanna, Punjab". Once an official place page is live, paste it into
  `maps.placeUrl` and swap `embedUrl` for the official embed.
- **Imagery:** client-supplied assets in `public/` are referenced from
  `site.images`. Unsplash URLs remain as premium food-photography placeholders
  only where a real photo is not yet supplied — swap each `src` as photos arrive;
  layout and alt text are already in place.

The whole site is driven by `src/data/site.ts` and `src/data/menu.ts`, making it
quick to white-label for another bakery client.