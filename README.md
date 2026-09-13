# Study Spot

A responsive landing page for a proposed CU Boulder pilot. Built with React, TypeScript, Vite, self-hosted fonts, and Lucide icons. Study-space conditions in the interactive preview are explicitly fictional sample data.

## Development

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Content

Edit `src/site-config.json` to update the shared signup URL, verified team emails, identified headshots, and social URLs. Headshots belong in `public/team/` and config paths should start with `/team/`. Missing photos render initials; missing contact and social links are omitted. These are preview fallbacks, not substitutes for the agreed final team information.

All “Join the pilot” links open the same Google Form in a new tab. The form requires a valid email, includes optional feedback, accepts responses without Google sign-in, and saves them to a private Google Sheet owned by the founder's school account. No visitor data is stored by this site. Signup becomes active only when a URL is present and `signupVerified` is true.

Google Form and response-sheet management links are retained in local `tmp/launch-notes.md` rather than the public repository. One clearly labeled `studyspot-test@example.com` response was used to verify the integration; exclude it when measuring genuine pilot interest.

The root Word documents, slide deck, and original photos are preserved locally and ignored by Git and Vercel. Only explicitly selected public assets should be added to the website.

## Publishing

Import `dmankin-hb/study-spot` into the Study Spot Vercel workspace using Vite, the repository root, build command `npm run build`, and output directory `dist`. Use preview deployments for review; the `main` branch is the production branch once the final launch inputs are complete. No environment variables are required.

Before final launch, run `npm run check:launch`. It checks the Google Form configuration, confirmation that a test reached the response sheet, all four team email addresses and headshots, and both social links. This check deliberately remains separate from the build so an incomplete team section can be previewed.

## Verification

- TypeScript and optimized production build.
- Responsive layouts, sample filters, mobile navigation, keyboard focus, anchor targets, and signup destinations.
- Google Form validation and a successful anonymous test response in the private response sheet.
- Final launch additionally requires provided team assets, confirmed contact details, public social URLs, and a public Vercel production address.
