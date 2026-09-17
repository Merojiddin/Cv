# Akhmedov Merojiddin — CV

A two-column résumé in charcoal, white and gold. The English version uses two pages; the concise Uzbek, Russian and Chinese versions each fit one A4 page, with the supplied native-language copy and a simple translator heading. The content is regular HTML, with separate CSS and minimal JavaScript.

## Open and edit

Open `public/resume.html` directly in a browser. The English, Uzbek (Latin script), Simplified Chinese, and Russian pages share the same styling and link to one another. These standalone pages require no installation or internet connection.

- **Content and contact details:** `public/resume.html`.
- **Uzbek content:** `public/resume-uz.html`.
- **Simplified Chinese content:** `public/resume-zh.html`.
- **Russian content:** `public/resume-ru.html`.
- **Colors, typography, responsive layout and print rules:** `public/styles.css`.
- **Print and WeChat copy controls:** `public/script.js`.
- **Portrait:** all four language pages use `public/me.JPEG`. To replace the photo, replace that file or change each `profile-photo` image path. Filename capitalization must match exactly. `object-fit: cover` crops the image to its frame.

All personal text is written directly in the HTML. Keep personal information, the portrait path, and years of experience consistent across the four language files when editing. Education is the supplied Bachelor's Degree in International Commerce at Yangzhou University, Yangzhou, China, 2017–2021. All experience and qualifications come from the supplied CV content.

## Print or save a PDF

Select **Print / Save as PDF**. Choose A4, portrait, 100% scale, no margins, and turn off browser headers and footers. Enable background graphics if your browser overrides the page’s color-preservation setting. The controls and screen background are removed by print CSS. Content has internal safe spacing. Phones reflow the document for readability; printing restores each language’s A4 layout with page numbers: two pages in English and one page in Uzbek, Russian and Chinese.

The supplied PDF snapshots are `output/pdf/Akhmedov-Merojiddin-CV.pdf` (English), `output/pdf/Akhmedov-Merojiddin-CV-Uzbek.pdf`, `output/pdf/Akhmedov-Merojiddin-CV-Chinese.pdf`, and `output/pdf/Akhmedov-Merojiddin-CV-Russian.pdf`. Regenerate the relevant PDF after editing its HTML or replacing the portrait. The language switcher and print controls are excluded from every printed version.

The contact links use the China country code `+86` with the supplied mobile number. Telegram phone links depend on the recipient’s account and privacy settings. Click the WeChat ID to copy it; on browsers without clipboard access, the text is selected for manual copying.

## Previous version

Commit `682dfef` (`Version 1`) preserves the complete CV before the expanded content and two-page update. To inspect that version without disturbing current work, run `git worktree add ../CV-Version-1 682dfef` and open its `public/resume.html`.

## Hosted development

The Sites/vinext wrapper preserves the standalone HTML as the source of truth. `app/page.tsx` includes its marked content; the layout adds page metadata and the separate script adds interactions.

```sh
npm install
npm run dev
npm run build
```

Lucide icons are included locally under `public/icons/`, with their license. The social preview is `public/og.png`.

## Vercel deployment

`vercel.json` publishes the existing `public/` directory as a static site, with no dependency installation or build step. The root URL serves `resume.html`; the Uzbek, Chinese, and Russian pages remain available through the language switcher. The vinext wrapper is not needed by Vercel.

Use the Vercel project name `merojiddin`. Deploy from the repository root with `npx vercel --prod` after signing in. Vercel supplies a `.vercel.app` address; the precise name depends on availability. Keep the project on the free Hobby plan if creating a new account.
