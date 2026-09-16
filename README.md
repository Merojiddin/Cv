# Akhmedov Merojiddin — CV

A compact, two-column résumé in charcoal, white and gold. The content is regular HTML, with separate CSS and minimal JavaScript.

## Open and edit

Open `public/resume.html` directly in a browser. This standalone page requires no installation or internet connection. The hosted page uses the same HTML and CSS.

- **Content and contact details:** `public/resume.html`.
- **Colors, typography, responsive layout and print rules:** `public/styles.css`.
- **Print and WeChat copy controls:** `public/script.js`.
- **Portrait:** find the `PHOTO` comment in `public/resume.html`. Change the empty `src=""` on the `profile-photo` image to a relative path, such as `./images/portrait.jpg`, and put that image in `public/images/`. The initials placeholder hides automatically. Use an approximately 4:5 portrait; `object-fit: cover` crops the image to its frame.

All personal text is written directly in the HTML. Update both occurrences of “7 years” as needed. No university, employers, certificates, dates of education, or other unprovided credentials have been added.

## Print or save a PDF

Select **Print / Save as PDF**. Choose A4, portrait, 100% scale, no margins, and turn off browser headers and footers. Enable background graphics if your browser overrides the page’s color-preservation setting. The controls and screen background are removed by print CSS. Content has internal safe spacing. Phones reflow the document for readability; printing always restores the A4 two-column layout.

`output/pdf/Akhmedov-Merojiddin-CV.pdf` is the supplied PDF snapshot. Regenerate it after editing the HTML or replacing the portrait.

The contact links use the China country code `+86` with the supplied mobile number. Telegram phone links depend on the recipient’s account and privacy settings. Click the WeChat ID to copy it; on browsers without clipboard access, the text is selected for manual copying.

## Hosted development

The Sites/vinext wrapper preserves the standalone HTML as the source of truth. `app/page.tsx` includes its marked content; the layout adds page metadata and the separate script adds interactions.

```sh
npm install
npm run dev
npm run build
```

Lucide icons are included locally under `public/icons/`, with their license. The social preview is `public/og.png`.
