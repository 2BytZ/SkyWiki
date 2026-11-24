// Hover cards for links with data-preview (linkPreviews.json) and data-item (itemPreviews.json).
import { escapeHTML, inlineMarkdown, previewHref } from "./markup.js"
import { namespace, currentLanguage, loadNamespace } from "./i18n.js"
import { resolveItemEnchantments } from "./itemEnchantments.js"

const ARROW = "/assets/Down_Arrow-More_Settings.png"
const FRAME_TOP = "/assets/Info_Card_Small_Top_Preview.png"
const FRAME_BOTTOM = "/assets/Info_Card_Small_Bottom_Preview.png"
const OPEN_DELAY = 450
const CLOSE_DELAY = 250

let openCard = null // { reference, card }
let openTimer = null
let closeTimer = null
let wanted = null // the reference whose card should be showing

function frameHTML() {
    return `<img class="wiki-preview-arrow" src="${ARROW}" alt="" aria-hidden="true">`
        + `<div class="wiki-preview-frame" aria-hidden="true"><div class="wiki-preview-frame__middle"></div>`
        + `<img class="wiki-preview-frame__top" src="${FRAME_TOP}" alt="">`
        + `<img class="wiki-preview-frame__bottom" src="${FRAME_BOTTOM}" alt=""></div>`
}

// ---------- card contents ----------
async function linkCard(reference) {
    const previews = await namespace("linkPreviews")
    const key = reference.dataset.preview
    const preview = previews(key)
    if (!preview) return null
    const linkUrl = previewHref(key, preview)
    const placement = preview.placement === "vertical" ? "vertical" : "horizontal"
    let source = null
    try { source = /^https?:\/\//.test(linkUrl) ? new URL(linkUrl) : null } catch { /* not a URL */ }
    const isUesp = source && (source.hostname === "uesp.net" || source.hostname.endsWith(".uesp.net"))
    const showLegal = isUesp && !(preview.noCopyright === true || preview.noCopyright === "true")
    const inverted = preview.invert === true || preview.invert === "true"

    let legal = ""
    if (showLegal) {
        const history = new URL(source)
        history.searchParams.set("action", "history")
        const title = decodeURIComponent(source.pathname.split("/").pop()).split(":").pop().replaceAll("_", " ")
        legal = `<p class="copyright-and-legal-text">Source: <a href="${escapeHTML(linkUrl)}">${escapeHTML(title)}</a> (<a href="${escapeHTML(history.href)}">history</a>)`
            + (preview.img ? ` · <a href="/wiki/Credits.html">Image credits</a>` : "") + `</p>`
    } else if (preview.img && preview.imageSource) {
        legal = `<p class="copyright-and-legal-text"><a href="/wiki/Credits.html">Image credits</a></p>`
    }

    const card = document.createElement("div")
    card.className = `link-preview__card wiki-preview-card wiki-preview-card--${placement}`
        + (preview.img ? "" : " wiki-preview-card--no-image")
        + (legal ? "" : " wiki-preview-card--no-legal-link")
    card.innerHTML = frameHTML()
        + (preview.img ? `<img src="${escapeHTML(preview.img)}" alt="${escapeHTML(preview.title || "")}" class="wiki-preview-thumb${inverted ? " wiki-preview-thumb--inverted" : ""}">` : "")
        + `<div class="wiki-preview-body"><strong>${inlineMarkdown(preview.title || "")}</strong>`
        + (preview.summary ? `<p class="preview-text preview-text--${placement}">${inlineMarkdown(preview.summary)}</p>` : "")
        + `</div>` + legal
    return card
}

async function findItem(name) {
    const [local, english] = await Promise.all([loadNamespace(currentLanguage, "itemPreviews"), loadNamespace("en", "itemPreviews")])
    return local?.items?.[name] ?? english?.items?.[name]
}

async function itemCard(reference) {
    const name = reference.dataset.item
    const item = await findItem(name)
    if (!item) return null
    const [labels, catalog, translatedCatalog] = await Promise.all([
        namespace("itemPreviews").then((t) => (key) => t("labels")?.[key] ?? key),
        loadNamespace("en", "enchantments"),
        loadNamespace(currentLanguage, "enchantments"),
    ])
    const resolved = resolveItemEnchantments(item, catalog, translatedCatalog)
    resolved.errors.forEach((error) => console.error(`ItemPreview "${name}": ${error}`))

    let body = `<strong>${escapeHTML(item.title || name)}</strong>`
    if (item.type === "weapon" && item.baseDamage != null) body += `<p><b>${escapeHTML(labels("baseDamage"))}:</b> ${escapeHTML(item.baseDamage)}</p>`
    if (item.type === "armor" && item.armorRating != null) body += `<p><b>${escapeHTML(labels("armorRating"))}:</b> ${escapeHTML(item.armorRating)}</p>`
    if (resolved.enchantments.length) {
        body += `<p><b>${escapeHTML(labels("enchantment"))}:</b>` + resolved.enchantments.map((enchantment) =>
            `<span${enchantment.error ? ` class="item-preview__enchantment--invalid"` : ""}><br>${escapeHTML(enchantment.text)}`
            + (enchantment.error ? ` (${escapeHTML(enchantment.error)})` : "") + `</span>`).join("") + `</p>`
    }
    resolved.errors
        .filter((error) => !resolved.enchantments.some((enchantment) => enchantment.error === error))
        .forEach((error) => { body += `<p class="item-preview__error"><b>${escapeHTML(labels("configurationError"))}:</b> ${escapeHTML(error)}</p>` })
    if (item.description) body += `<p><b>${escapeHTML(labels("description"))}:</b><br>${inlineMarkdown(item.description)}</p>`

    const card = document.createElement("div")
    card.className = "link-preview__card wiki-preview-card item-preview__card" + (item.img ? "" : " item-preview__card--no-image")
    card.innerHTML = frameHTML()
        + `<div class="wiki-preview-body item-preview__body">${body}</div>`
        + (item.img ? `<img class="item-preview__image" src="${escapeHTML(item.img)}" alt="${escapeHTML(item.title || name)}">` : "")
    return card
}

// ---------- positioning: above the link, flipped below if there's no room ----------
function position(card, reference) {
    const arrow = card.querySelector(".wiki-preview-arrow")
    const ref = reference.getBoundingClientRect()
    const width = card.offsetWidth
    const height = card.offsetHeight
    const viewWidth = document.documentElement.clientWidth
    const viewHeight = document.documentElement.clientHeight
    const gap = 8
    const top = { side: "top", y: ref.top - height - gap }
    const bottom = { side: "bottom", y: ref.bottom + gap }
    const overflow = (p) => p.side === "top" ? Math.max(0, -p.y) : Math.max(0, p.y + height - viewHeight)
    const place = overflow(top) > 0 && overflow(bottom) < overflow(top) ? bottom : top

    let x = ref.left + ref.width / 2 - width / 2 + 100
    x = Math.max(gap, Math.min(x, viewWidth - width - gap))

    card.style.position = "absolute"
    card.style.left = "0"
    card.style.top = "0"
    card.style.transform = `translate(${Math.round(x + window.scrollX)}px, ${Math.round(place.y + window.scrollY)}px)`

    const arrowWidth = arrow.offsetWidth
    const arrowX = Math.max(5, Math.min(ref.left + ref.width / 2 - x - arrowWidth / 2, width - arrowWidth - 5))
    arrow.style.left = `${arrowX}px`
    arrow.style[place.side === "top" ? "bottom" : "top"] = "-12px"
    arrow.style.transform = place.side === "bottom" ? "rotate(180deg)" : ""
}

// ---------- opening and closing ----------
function close() {
    clearTimeout(closeTimer)
    wanted = null
    if (!openCard) return
    openCard.card.remove()
    openCard.reference.removeAttribute("aria-describedby")
    openCard = null
}

async function open(reference) {
    if (openCard?.reference === reference) return
    wanted = reference
    const card = await (reference.dataset.item !== undefined ? itemCard(reference) : linkCard(reference))
    if (!card || wanted !== reference) return
    close()
    wanted = reference
    card.id = "preview-card"
    card.setAttribute("role", "tooltip")
    document.body.append(card)
    reference.setAttribute("aria-describedby", card.id)
    openCard = { reference, card }
    position(card, reference)
    card.querySelectorAll("img").forEach((image) => {
        if (!image.complete) image.addEventListener("load", () => openCard?.card === card && position(card, reference), { once: true })
    })
    card.addEventListener("pointerenter", () => clearTimeout(closeTimer))
    card.addEventListener("pointerleave", scheduleClose)
}

function scheduleOpen(reference) {
    clearTimeout(openTimer)
    clearTimeout(closeTimer)
    openTimer = setTimeout(() => open(reference), OPEN_DELAY)
}

function scheduleClose() {
    clearTimeout(openTimer)
    clearTimeout(closeTimer)
    closeTimer = setTimeout(close, CLOSE_DELAY)
}

// preload the card's image while the pointer rests on the link
async function preload(reference) {
    const data = reference.dataset.item !== undefined
        ? await findItem(reference.dataset.item)
        : (await namespace("linkPreviews"))(reference.dataset.preview)
    if (data?.img) new Image().src = data.img
}

// Swap an element for one with another tag, keeping its attributes and contents
function retag(element, tagName) {
    const replacement = document.createElement(tagName)
    for (const attribute of element.attributes) replacement.setAttribute(attribute.name, attribute.value)
    replacement.append(...element.childNodes)
    element.replaceWith(replacement)
    return replacement
}

function wrap(element) {
    if (element.parentElement?.classList.contains("link-preview")) return
    const wrapper = document.createElement("span")
    wrapper.className = "link-preview"
    element.replaceWith(wrapper)
    wrapper.append(element)
}

// Lets previews be written as short as the React components were:
//   <a data-preview="whiterun">Whiterun</a>   (was <LinkPreview url="whiterun">Whiterun</LinkPreview>)
//   <a data-item="shiv">Shiv</a>              (was <ItemPreview name="shiv">Shiv</ItemPreview>)
// Fills in the address, the classes and the wrapper. Empty text shows the preview's title
// (or the address), like the components did.
export async function completePreviewLinks(root = document) {
    const previews = await namespace("linkPreviews")
    const missing = new Set()
    for (let link of root.querySelectorAll("[data-preview]")) {
        const key = link.dataset.preview
        const preview = previews(key)
        if (key && !preview && !key.startsWith("http")) missing.add(key)
        if (link.tagName === "A" && !link.hasAttribute("href")) {
            // no preview yet: plain text instead of a link to nowhere
            const href = preview || key.startsWith("http") ? previewHref(key, preview) : ""
            if (href) link.setAttribute("href", href)
            else link = retag(link, "span")
        }
        if (!link.textContent.trim()) link.textContent = preview?.title ?? link.getAttribute("href") ?? key
        link.classList.add("wiki-anchor-text")
        wrap(link)
    }
    if (missing.size) console.warn(`${missing.size} link previews aren't in linkPreviews.json yet:`, [...missing].sort())

    const missingItems = new Set()
    for (let reference of root.querySelectorAll("[data-item]")) {
        const name = reference.dataset.item
        const item = await findItem(name)
        if (!item) missingItems.add(name)
        if (reference.tagName === "A" && !reference.hasAttribute("href")) {
            if (item?.link) reference.setAttribute("href", item.link)
            else if (item) {
                reference = retag(reference, "button") // no page to go to: opens on click instead
                reference.type = "button"
            } else reference = retag(reference, "span")
        }
        if (!reference.textContent.trim()) reference.textContent = item?.title ?? name
        reference.classList.add("wiki-anchor-text", "item-preview__reference")
        wrap(reference)
    }
    if (missingItems.size) console.warn(`${missingItems.size} item previews aren't in itemPreviews.json yet:`, [...missingItems].sort())
}

// Keeps punctuation right after a link on the same line as the link
// (so "Whiterun," never wraps with the comma alone on the next line)
export function keepPunctuationWithLinks(root = document) {
    root.querySelectorAll(".link-preview").forEach((link) => {
        if (link.parentElement?.classList.contains("link-nowrap")) return
        const next = link.nextSibling
        if (next?.nodeType !== Node.TEXT_NODE) return
        const punctuation = next.textContent.match(/^[,.;:!?)'"]+/)
        if (!punctuation) return
        const wrapper = document.createElement("span")
        wrapper.className = "link-nowrap"
        wrapper.style.whiteSpace = "nowrap"
        link.replaceWith(wrapper)
        wrapper.append(link, punctuation[0])
        next.textContent = next.textContent.slice(punctuation[0].length)
    })
}

const REFERENCE = "[data-preview], [data-item]"

export function initPreviews() {
    document.addEventListener("pointerover", (event) => {
        if (event.pointerType === "touch") return
        const reference = event.target.closest(REFERENCE)
        if (!reference || reference.contains(event.relatedTarget)) return
        preload(reference)
        scheduleOpen(reference)
    })
    document.addEventListener("pointerout", (event) => {
        const reference = event.target.closest(REFERENCE)
        if (!reference || reference.contains(event.relatedTarget)) return
        scheduleClose()
    })

    // item previews also open on keyboard focus, and on click when they aren't links
    document.addEventListener("focusin", (event) => {
        const reference = event.target.closest?.("[data-item]")
        if (reference && reference.matches(":focus-visible")) open(reference)
    })
    document.addEventListener("focusout", (event) => {
        if (event.target.closest?.("[data-item]") && openCard?.reference === event.target) scheduleClose()
    })
    document.addEventListener("click", (event) => {
        const reference = event.target.closest("button[data-item]")
        if (reference) {
            clearTimeout(openTimer)
            if (openCard?.reference === reference) close()
            else open(reference)
        } else if (openCard && !openCard.card.contains(event.target)) {
            close()
        }
    })
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") close()
    })
    document.addEventListener("languagechange", () => {
        close()
        keepPunctuationWithLinks() // text may have been redrawn in the new language
    })
    window.addEventListener("resize", () => openCard && position(openCard.card, openCard.reference))
}
