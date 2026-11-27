# Gesher LLC — Completion Checklist

Source: https://gesher.llc
Repository: pixelrisemedia1/Gesher.llc
Status: IN PROGRESS — unchecked items are not verified complete.
Rule: Check an item only after comparing against the source or testing the public deployment and recording evidence in the commit/issue/notes.

## 1. Routes and source pages
- [ ] Home
- [ ] About
- [ ] Product/catalog routes (extract complete source list)
- [ ] Gallery
- [ ] Contact
- [ ] OAuth consent / authorization page (confirm source usage)

## 2. Images, video, documents and other media
- [ ] assets/logo.webp — compare logo artwork, transparent edges and all placements
- [ ] Recover and inspect all source image files from the five split migration archive parts; list file-by-file with dimensions and checksums
- [ ] Map every product image to its exact SKU/product/title, gallery position, resolution, crop and alt text
- [ ] Map every gallery image and video/poster to page, sequence, caption and lightbox behavior
- [ ] Inventory icons, category graphics, backgrounds, certification marks, brochures and downloadable documents; current visible tree has only the logo outside migration parts

## 3. Site-specific content and functionality
- [ ] Reassemble the split source archive and record its file manifest before changing site content
- [ ] Build every source product/category page, retaining accurate titles, descriptions, specifications, variants, prices/availability if shown
- [ ] Implement product search/filter/sort, category navigation, gallery zoom/lightbox and related-item links if source has them
- [ ] Recreate the full About page including company story, capabilities, locations and approved claims
- [ ] Recreate Contact form and every phone/email/address/map/social destination
- [ ] Verify all material/product names and units; do not invent specifications or certifications
- [ ] Confirm OAuth route role and ensure no nonfunctional sign-in is presented

## Shared production acceptance checks
- [ ] Verify source route inventory against the live source and archived export; record date and evidence for each route.
- [ ] Compare each page at matching desktop, tablet and mobile viewports; record unresolved visual differences.
- [ ] Audit every image, logo, icon, video, poster, caption, document and embedded asset; verify local/independent URL, dimensions, crop, alt text and successful public loading.
- [ ] Confirm no Base44 media URLs, SDK/runtime, API, auth, storage, form or database dependency remains in the copied site or its public requests.
- [ ] Verify every navigation destination, CTA, form, menu, carousel, modal, filter and document link; no dead controls or fake success states.
- [ ] Verify accurate title/description/social metadata, favicon, headings, canonical URL plan, robots/sitemap when appropriate and not-found behavior.
- [ ] Check keyboard use, focus visibility, contrast, labels, alt text, reduced-motion, mobile touch targets and responsive reflow.
- [ ] Check spelling, dates, claims, addresses, phone numbers, email addresses, legal content and document versions against approved source material.
- [ ] Check browser console, failed network requests, broken links, 404s, image loading and performance on desktop/mobile.
- [ ] Verify GitHub Actions deployment succeeds; open the live deployed copy in a fresh session and directly load/refresh every route.
- [ ] Record final verification date, deployed commit, public URL, and any remaining limitation. Custom domain/DNS is intentionally deferred until requested.
