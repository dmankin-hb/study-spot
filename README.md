# Study Spot

A responsive product landing page for Study Spot, a study-space discovery app in development. Boulder is the planned starting market; the vision is to expand to campuses and communities nationwide. Built with React, TypeScript, Vite, self-hosted fonts, and Lucide icons. The interactive app preview uses illustrative sample conditions, not live readings.

## Development

```sh
npm ci
npm run dev
npm run build
npm run preview
npm run check:launch
```

There is no configured formatter, linter, or unit-test runner. The production build includes TypeScript checks. The launch check validates the respondent form URL, its existing verification flag, confirmed team emails, and public headshot files. Social accounts are optional; supplied URLs must be HTTPS.

## Content sources

Reviewed all five files in the adjacent `Study Spot-docs` folder:

- **Study Spot Description.docx:** four space conditions, campus-first audience, and expansion to additional universities and cities.
- **Landing Page Reflection Study Spot.docx:** in-development status, planned Boulder pilot, interest-list purpose, optional feedback, and the existing calm blue visual direction.
- **Landing Page Assignment.docx:** confirmed team names and email addresses. Unconfirmed social accounts are omitted.
- **Study Spot Pitch 1.pptx:** know-before-you-go positioning and campus-to-campus scale. Proposed features, research figures, and partnerships are not represented as live capabilities.
- **Team Concept Description.docx:** contains evaluation questions rather than additional product facts.

The current polishing request supersedes academic framing in these source materials and requires nationwide ambition without overstating current availability.

## Team photography

The original files remain in `headshots/` and are excluded from Git and deployments. Optimized, orientation-corrected 600 × 645 WebP portraits are published in `public/team/` (about 168 KB total). Cards use natural cover crops, lazy loading, and name-specific alternative text.

| Source filename     | Person        | Confirmed email            |
| ------------------- | ------------- | -------------------------- |
| `emma-herzog.jpeg`  | Emma Herzog   | emma.herzog@colorado.edu   |
| `daniel-mankin.JPG` | Daniel Mankin | daniel.mankin@colorado.edu |
| `emma-blevens.jpeg` | Emma Blevens  | emma.blevens@colorado.edu  |
| `maddy-clark.png`   | Maddy Clark   | madelyn.clark@colorado.edu |

Names and contacts are maintained in `src/site-config.json`. No professional titles are assigned.

## Signup

“Join the list” links lead to `#join`, which embeds the original Google Form respondent URL from the shared config. A direct link opens the same form in a separate tab if embedding is unavailable. The site does not intercept submissions or store responses. Google controls the form’s contents and validation; form edits must be made through Google Forms. The form title and description were updated and verified publicly through the owner’s Safari session. Google’s organization footer remains controlled by the form account. The questions and response destination were preserved.

The existing `signupVerified` flag records prior submission verification, not a new test during this polish. No new test response was submitted. If the form changes, check its height on mobile and desktop and reverify the response destination. Do not remove iframe scrolling: browser zoom and Google validation messages can increase content height.

## Brand and positioning changes

The favicon and navbar share one SVG with an open book contained within a location pin. The signup section reuses this same mark, replacing separately layered icons.

Boulder-specific marketing was updated in the hero launch note, team introduction, team cards, signup copy, footer, HTML description, Open Graph description, and this README. The old unavailable-signup dialog was removed in favor of an inline generic fallback. Boulder and CU names remain only as context for the planned initial market and sample locations. The preview filters and `#app-preview` anchor remain functional.

## Publishing and domain

Requested address: `study-spot.vercel.app`. Vercel rejected it because it is already assigned to another team. Keep the existing production domain attached. Choose an available domain or arrange transfer of the requested domain before adding canonical and Open Graph URL metadata; those tags are omitted to avoid pointing search engines at another team's site.

Use the existing Vercel project, Vite framework, build command `npm run build`, and output directory `dist`. No environment variables are required. The existing project deploys from the repository's `main` branch.

## Browser verification

Chromium checks passed at 320, 375, 390, 768, 1024, and 1440 px: no horizontal page overflow, all four portraits loaded, the Quiet/Outlets/All filters returned 1/2/3 sample spaces, mobile navigation closed after selection, internal links resolved, and the app-preview anchor landed correctly. No page JavaScript errors were observed. Google’s form loaded with its required email and optional feedback fields. No new submission was made. Desktop and mobile screenshots were reviewed. The hosted form copy is now updated. The requested domain remains unavailable.
