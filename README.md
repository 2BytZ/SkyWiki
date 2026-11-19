# Himmeloften (static version)

Plain HTML, CSS and JavaScript. There's no build step and nothing to install: upload the folder's contents to the root of your web host.

## Viewing it locally

The pages load their translations and previews with `fetch()`, and they use paths that start with `/`. That means you can't just double-click an HTML file. Serve the folder instead:

- **VS Code:** right-click `index.html` and choose *Open with Live Server*. Open the `Himmeloften` folder itself, not a parent folder.
- **Terminal:** run `python -m http.server` in this folder, then open http://localhost:8000.

## Folders

| Path | What's in it |
|---|---|
| `wiki/Home.html`, `wiki/Dranleic_Haligdrake.html`, `wiki/Pharis_Ironeye.html`, `wiki/Credits.html` | The pages |
| `index.html`, `wiki/index.html` | Forward to the home page |
| `404.html` | Forwards the old React addresses (`/wiki/Home/`, `/wiki/Credits/`, …) to the new pages; otherwise "Page not found" |
| `css/` | The stylesheets, unchanged from the React project. Pages link them in the order React applied them, so keep that order. |
| `js/` | The scripts (see below) |
| `locales/en`, `locales/da`, `locales/dov` | The translation, link-preview and item-preview files |
| `data/sources/` | Footnote sources |
| `images/` | Photos and preview images (was `public/`) |
| `assets/` | UI artwork (was `src/assets/`) |
| `fonts/` | Fonts |

## Writing pages

Pages are written much like the React components were. This table shows what replaced each one:

| React | Static |
|---|---|
| `<Navbar/>` / `<Footer/>` (in Layout) | `<site-header></site-header>` / `<site-footer></site-footer>` |
| `<PageFooter/>` | `<page-footer></page-footer>` |
| `<TableOfContents/>` | `<table-of-contents></table-of-contents>` (built from the article's h2–h5 headings) |
| `{PageNotice("language")}` | `<page-notice type="language"></page-notice>` (also `construction`, `missing-translation`) |
| `<LinkPreview url="whiterun">Whiterun</LinkPreview>` | `<a data-preview="whiterun">Whiterun</a>` |
| `<ItemPreview name="shiv">Shiv</ItemPreview>` | `<a data-item="shiv">Shiv</a>` |
| `<Cite id="uriel-assassination"/>` | `<sup data-cite="uriel-assassination"></sup>` |
| `<FootnoteList/>` | `<ol data-footnotes="/data/sources/dranleic.json"></ol>` |
| `<ImageModal><img …></ImageModal>` | `<div class="image-inner"><img …></div>` |
| `{t("mwFh")}` inside an element | `data-i18n="dranleic:mwFh"` on the element, which you leave empty |
| `<Trans i18nKey="mwLp1" ns="dranleic">…</Trans>` | `data-i18n-trans="dranleic:mwLp1"` on the paragraph, with the English inside |
| the infobox rows from `t("infobox")` | `<tbody data-i18n-infobox="dranleic"></tbody>` |

The header, footer and other shared parts live in `js/parts.js`. To add a nav link, edit it there once.

Preview links get their address from `linkPreviews.json` (an `href` you write yourself is kept), and item previews from `itemPreviews.json`. If an item has no `link`, it opens its card on click. Leave a preview link empty to show the preview's title or address. The browser console lists any preview and item names that aren't in the JSON files yet.

## Translations

All three languages come from the locale files, as in React: `locales/en`, `locales/da` and `locales/dov`. The infobox and texts marked `data-i18n` are filled from `<language>/<page>.json`. Keys missing in Danish or Dovahzul fall back to English. Paragraphs marked `data-i18n-trans` have their English in the HTML, and the other languages use the key with `<0>…</0>` tags, numbered by the paragraph's children, like react-i18next's `<Trans>`.

- `data-dov-class="dovahzul"` adds a class while Dovahzul is selected (was ``className={i18next.resolvedLanguage=="dov" && "dovahzul"}``).
- `data-lang-only="dov" hidden` only shows the element in Dovahzul (was `hidden={i18next.resolvedLanguage!="dov"}`).

## Scripts

- `js/parts.js` holds the shared parts: header, footer, page footer, table of contents and notices.
- `js/site.js` runs on every page. It handles the theme, language picker, menus and home page filter, and starts the scripts below.
- `js/i18n.js` handles translations.
- `js/previews.js` draws the link and item hover cards.
- `js/article.js` builds the table of contents, footnotes, lightbox and infobox ornaments.
- `js/credits.js` builds the image credits table.
- `js/markup.js` holds small HTML helpers.
- `js/itemEnchantments.js` contains the enchantment rules.
