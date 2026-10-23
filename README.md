# P Ajay Kumar — Developer Portfolio

A polished, responsive, static portfolio based on Ajay Kumar's supplied résumé. Designed to be hosted **free on GitHub Pages**, with no build tooling required.

## What's included

- `index.html` — all content and accessible HTML structure
- `styles.css` — responsive layout, dark/light themes, and illustrations (no paid assets)
- `script.js` — theme preference, mobile navigation, reveal animations, and copy-email button
- `assets/favicon.svg` — site icon
- `assets/Ajay-Kumar-Resume.pdf` — copy of the supplied résumé (public if uploaded)
- `.nojekyll` — keeps GitHub Pages from processing the website with Jekyll

## Preview

1. Open `index.html` in your browser, or use VS Code Live Server.
2. Test the desktop and mobile views, color-mode toggle, résumé button, navigation, and email contact.
3. All content is static: no server, paid API, database, or recurring fee needed.

## Publish to GitHub Pages (free)

1. Create a **public** GitHub repository (for example `ajay-portfolio`).
2. Upload the **contents of this folder** to the repository root, keeping the `assets/` folder intact. (Do not upload only the ZIP.)
3. In the repo, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, the `main` branch, and the `/ (root)` directory. Save.
5. After deployment completes, the site will be at `https://YOUR-USERNAME.github.io/ajay-portfolio/`.
   - If the repo is named `YOUR-USERNAME.github.io`, it will be at `https://YOUR-USERNAME.github.io/`.
6. No paths are hardcoded to the domain, so it works on either URL.

## Important: review before making public

- **Ask Ajay to approve** publishing his work history, email, résumé, and especially the **phone number present inside the PDF**. GitHub repositories and GitHub Pages sites are publicly accessible when published.
- **Client confidentiality:** The experience cards summarize résumé claims; graphics are explicitly illustrative, not actual client screenshots.
- **Missing social links:** No GitHub/LinkedIn URLs or public project demos were given. Rather than invent links, the site provides functional email contact. Add verified profile links if Ajay supplies them.
- **Accuracy:** The site says **3+ years** of experience, two professional roles, and cites the résumé's reported 30% reduction in page-load time. All claims should be reviewed by Ajay before publishing.
- The CSS uses freely available Google Fonts, with system-font fallbacks if fonts are blocked. Remove the `@import` in `styles.css` if you want zero third-party requests.

## Customize

- Name, role, email, and career content: edit `index.html`.
- Colors and spacing: edit the top `:root` variables in `styles.css`.
- Contact: search for `ajaykumar.parella@gmail.com` in `index.html` and replace both the mail links and the copy button value.
- Social profiles: add verified URLs in the header or footer.
- Résumé: replace `assets/Ajay-Kumar-Resume.pdf` with a revised, public-safe version (same filename) if desired.

## Accessibility & technology

Semantic sections and headings, keyboard-focus styling, reduced-motion support, skip link, usable mobile menu, aria labels, responsive layouts, and a high-contrast light/dark theme. Written in plain HTML, CSS, and JavaScript; no dependency installation.


## October 2026 update

- Added Ajay's telephone number in About as a tap-to-call link.
- Added LinkedIn in the Get in Touch contact area: https://www.linkedin.com/in/ajay-kumar-parella-1035b5278/
- Added a subtle scroll-linked, three-layer full-stack diagram in Expertise. It follows scroll position and supports reduced-motion preferences.
- Retained original design, colors, theme switch, navigation, and resume download.

**Before publishing:** Ajay should approve public display of the phone number and attached résumé.

To redeploy the same Netlify site, open its dashboard and upload the new ZIP through the site's deployment area. Uploading to a new Netlify Drop site may generate a different URL.
