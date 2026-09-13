import { readFileSync, existsSync } from "node:fs";
const config = JSON.parse(
  readFileSync(new URL("../src/site-config.json", import.meta.url)),
);
const missing = [];
let validForm = false;
try {
  const url = new URL(config.signupUrl);
  validForm =
    url.protocol === "https:" &&
    (url.hostname === "forms.gle" ||
      (url.hostname === "docs.google.com" &&
        url.pathname.startsWith("/forms/")));
} catch {}
if (!validForm) missing.push("A public Google Form respondent URL");
if (!config.signupVerified)
  missing.push("A verified test response in the private Google Sheet");
for (const person of config.team) {
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(person.email))
    missing.push(`Verified email for ${person.name}`);
  if (
    !person.photo ||
    !existsSync(new URL(`../public${person.photo}`, import.meta.url))
  )
    missing.push(`Identified headshot for ${person.name}`);
}
for (const [platform, url] of Object.entries(config.socials)) {
  try {
    if (new URL(url).protocol !== "https:") throw new Error();
  } catch {
    missing.push(`Public ${platform} URL`);
  }
}
if (missing.length) {
  console.error(
    `Not ready for final launch:\n${missing.map((item) => `- ${item}`).join("\n")}`,
  );
  process.exitCode = 1;
} else
  console.log(
    "Launch inputs complete. Check the Vercel production URL is public before handoff.",
  );
