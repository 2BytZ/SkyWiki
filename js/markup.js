// Small HTML builders shared by the pages' scripts.
// Each returns an HTML string, so the same markup is produced wherever it is used.

export function escapeHTML(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;");
}

// "**bold**", "*italic*" and "***both***" (used in preview summaries and item descriptions)
export function inlineMarkdown(text) {
    const pattern = /(\*\*\*|\*\*|\*)(.+?)\1/g;
    let html = "";
    let last = 0;
    let match;
    while ((match = pattern.exec(text)) !== null) {
        html += escapeHTML(text.slice(last, match.index));
        const inner = inlineMarkdown(match[2]);
        html += match[1] === "***" ? `<strong><em>${inner}</em></strong>`
            : match[1] === "**" ? `<strong>${inner}</strong>`
            : `<em>${inner}</em>`;
        last = pattern.lastIndex;
    }
    return html + escapeHTML(text.slice(last));
}

// Where a link to a preview key goes: full URLs are used as they are,
// otherwise the preview's own "link", otherwise the key itself.
export function previewHref(url, preview) {
    if (typeof url === "string" && url.startsWith("http")) return url;
    return preview?.link ?? url ?? "";
}

// The markup for a link with a hover preview.
// key: the entry in linkPreviews.json (or a full URL); text: the link text (HTML).
export function linkPreviewHTML({ key, href, html, className }) {
    const classes = ["wiki-anchor-text", className].filter(Boolean).join(" ");
    const keyAttr = key ? ` data-preview="${escapeHTML(key)}"` : "";
    const inner = href
        ? `<a href="${escapeHTML(href)}" class="${classes}"${keyAttr}>${html}</a>`
        : `<span class="${classes}"${keyAttr}>${html}</span>`;
    return `<span class="link-preview">${inner}</span>`;
}

// Rows of a character infobox, from the "infobox" list in the page's locale file.
// lookupPreview(key) returns the preview entry for a key (or undefined).
export function infoboxRowsHTML(rows, lookupPreview, isDovahzul = false) {
    return rows.map((info) => {
        const parts = Array.isArray(info.desc) ? info.desc : [{ text: info.desc }];
        const description = parts.map((part, index) => {
            const separator = index < parts.length - 1 ? escapeHTML(part.separator || ", ") : "";
            const text = escapeHTML(part.text);
            const item = part.href
                ? linkPreviewHTML({
                    key: part.href,
                    href: previewHref(part.href, lookupPreview(part.href)),
                    html: text,
                    className: "infobox-text",
                })
                : `<span class="infobox-text">${text}</span>`;
            return item + separator;
        }).join("");
        const titleClass = isDovahzul ? ` class="dovahzul-smaller"` : "";
        const gloss = `<p class="dovahzul-english"${isDovahzul ? "" : " hidden"}>(${escapeHTML(info.dovah_english ?? "")})</p>`;
        return `<tr><td><span${titleClass}>${escapeHTML(info.title)}</span>${gloss}</td><td>${description}</td></tr>`;
    }).join("\n");
}
