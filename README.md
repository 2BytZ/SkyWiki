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

The header and footer are copied into every page. If you add a page or a nav link, update all the pages.

## Writing pages

Article text is ordinary HTML. The React components are replaced by these patterns:

**Link with a hover preview** (was `<LinkPreview url="whiterun">Whiterun</LinkPreview>`):

```html
<a data-preview="whiterun">Whiterun</a>
```

`data-preview` is the key in `locales/<language>/linkPreviews.json` (or a full URL, if that's how the entry is keyed). The script fills in the address from the entry's `link`, adds the link styling and wraps the link in its `<span class="link-preview">`. A link that already has an `href` keeps it, so the longer form the pages were converted with works too. If the key isn't in linkPreviews.json yet, the text is shown without a link, and the browser console lists every missing key. Leave the text empty (`<a data-preview="whiterun"></a>`) to show the link's address. If a language doesn't have the entry, the English one is shown.

**Item preview** (was `<ItemPreview name="dragonstone">`). Use an `<a href="…">` if the item has a `link`. Otherwise use a button:

```html
<span class="link-preview"><button type="button" class="wiki-anchor-text item-preview__reference" data-item="shiv">Shiv</button></span>
```

`data-item` is the key under `items` in `itemPreviews.json`. Enchantments work as before. See the rules in `js/itemEnchantments.js` and the definitions in `locales/en/enchantments.json`.

**Footnote** (was `<Cite id="uriel-assassination"/>`):

```html
<sup data-cite="uriel-assassination" style="font-family: skyrim"></sup>
```

The numbers and the References list (`<ol data-footnotes="/data/sources/dranleic.json">`) fill in automatically, in order of first use.

**Image that opens in a lightbox:** wrap it in `<div class="image-inner">…</div>`.

**Table of contents:** built automatically from the article's `h2`–`h5` headings.

## Translations

The English text is written directly in the HTML. Attributes connect elements to the locale files:

- `data-i18n="dranleic:mwFh"` sets the element's text from the key `mwFh` in `locales/<language>/dranleic.json`.
- `data-i18n-trans="dranleic:mwLp1"` does the same for a paragraph with links inside. The translation uses `<0>…</0>`, `<2>…</2>` tags, numbered by the paragraph's children, just like react-i18next's `<Trans>`. If a language doesn't have the key, the English HTML stays.
- `data-i18n-infobox="dranleic"` on a `<tbody>` builds the infobox rows from that file's `infobox` list.
- `data-dov-class="dovahzul"` adds a class while Dovahzul is selected.
- `data-lang-only="dov" hidden` means the element only shows in Dovahzul.

## Scripts

- `js/site.js` runs on every page. It handles the theme, language picker, menus and home page filter, and starts the scripts below.
- `js/i18n.js` handles translations.
- `js/previews.js` draws the link and item hover cards.
- `js/article.js` builds the table of contents, footnotes, lightbox and infobox ornaments.
- `js/credits.js` builds the image credits table.
- `js/markup.js` holds small HTML helpers.
- `js/itemEnchantments.js` contains the enchantment rules.
