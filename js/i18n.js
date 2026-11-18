// Translations. Text is written in English in the HTML; elements marked with
// data-i18n attributes get their text from /locales/<language>/<namespace>.json:
//
//   data-i18n="ns:key"         replaces the element's text with the value of "key"
//   data-i18n-trans="ns:key"   like data-i18n, but the value may contain <0>…</0> tags that
//                              reuse the element's own child elements (same as react-i18next's
//                              <Trans>). If the key is missing, the English HTML is kept.
//   data-i18n-infobox="ns"     a <tbody> whose rows are built from the "infobox" list
//   data-dov-class="cls"       adds the class "cls" while Dovahzul is selected
//   data-lang-only="dov"       only shown while that language is selected
//
// Missing keys fall back to English.

import { infoboxRowsHTML } from "./markup.js"

export const LANGUAGES = ["en", "da", "dov"]
const STORAGE_KEY = "language"
const bundles = new Map()

export function savedLanguage() {
    let language = null
    try { language = localStorage.getItem(STORAGE_KEY) } catch { /* storage unavailable */ }
    return LANGUAGES.includes(language) ? language : "en"
}

export let currentLanguage = savedLanguage()

export function loadNamespace(language, ns) {
    const key = `${language}/${ns}`
    if (!bundles.has(key)) {
        bundles.set(key, fetch(`/locales/${language}/${ns}.json`)
            .then((response) => response.ok ? response.json() : {})
            .catch((error) => {
                console.error(`Could not load /locales/${key}.json`, error)
                return {}
            }))
    }
    return bundles.get(key)
}

// Loads a namespace in the current language and English; returns a lookup function
export async function namespace(ns, language = currentLanguage) {
    const [local, english] = await Promise.all([loadNamespace(language, ns), loadNamespace("en", ns)])
    return (key) => local?.[key] ?? english?.[key]
}

function splitKey(value) {
    const index = value.indexOf(":")
    return [value.slice(0, index), value.slice(index + 1)]
}

// Replace the element's own text but keep child elements (e.g. icons in buttons)
function setOwnText(element, text) {
    const textNodes = [...element.childNodes].filter((node) => node.nodeType === Node.TEXT_NODE)
    const replacement = document.createTextNode(text)
    if (textNodes.length) {
        textNodes[0].replaceWith(replacement)
        textNodes.slice(1).forEach((node) => node.remove())
    } else {
        element.append(replacement)
    }
}

// ---------- <Trans>-style values ----------
const decoder = document.createElement("textarea")
function decodeEntities(text) {
    decoder.innerHTML = text
    return decoder.value
}

function parseTrans(text) {
    const root = { children: [] }
    const stack = [root]
    const tagPattern = /<(\/?)([\w-]+)\s*(\/?)>/g
    let last = 0
    let match
    while ((match = tagPattern.exec(text)) !== null) {
        if (match.index > last) stack.at(-1).children.push(decodeEntities(text.slice(last, match.index)))
        const [, closing, name, selfClosing] = match
        if (closing) {
            if (stack.length > 1) stack.pop()
        } else {
            const node = { name, children: [] }
            stack.at(-1).children.push(node)
            if (!selfClosing && !["br", "hr"].includes(name)) stack.push(node)
        }
        last = tagPattern.lastIndex
    }
    if (last < text.length) stack.at(-1).children.push(decodeEntities(text.slice(last)))
    return root.children
}

function renderTrans(nodes, originals) {
    const fragment = document.createDocumentFragment()
    for (const node of nodes) {
        if (typeof node === "string") {
            fragment.append(node)
            continue
        }
        if (!/^\d+$/.test(node.name)) { // plain HTML such as <br/> or <strong>
            const element = document.createElement(node.name)
            element.append(renderTrans(node.children, []))
            fragment.append(element)
            continue
        }
        const original = originals[Number(node.name)]
        if (!(original instanceof Element)) {
            fragment.append(renderTrans(node.children, []))
            continue
        }
        let clone
        if (original.classList.contains("link-preview")) {
            // the text belongs inside the link, not around it
            clone = original.cloneNode(true)
            const link = clone.firstElementChild
            if (node.children.length) link.replaceChildren(renderTrans(node.children, [...link.childNodes]))
        } else if (original.hasAttribute("data-cite") || !node.children.length) {
            clone = original.cloneNode(true)
        } else {
            clone = original.cloneNode(false)
            clone.append(renderTrans(node.children, [...original.childNodes]))
        }
        fragment.append(clone)
    }
    return fragment
}

const originalContent = new WeakMap()

// ---------- applying a language ----------
export async function applyLanguage(language) {
    currentLanguage = LANGUAGES.includes(language) ? language : "en"
    try { localStorage.setItem(STORAGE_KEY, currentLanguage) } catch { /* storage unavailable */ }
    const isDovahzul = currentLanguage === "dov"

    const textElements = document.querySelectorAll("[data-i18n]")
    const transElements = document.querySelectorAll("[data-i18n-trans]")
    const infoboxes = document.querySelectorAll("[data-i18n-infobox]")
    const namespaces = new Set(["linkPreviews"])
    textElements.forEach((element) => namespaces.add(splitKey(element.dataset.i18n)[0]))
    transElements.forEach((element) => namespaces.add(splitKey(element.dataset.i18nTrans)[0]))
    infoboxes.forEach((element) => namespaces.add(element.dataset.i18nInfobox))
    const lookups = Object.fromEntries(await Promise.all(
        [...namespaces].map(async (ns) => [ns, await namespace(ns, currentLanguage)])))

    // the language may have changed again while loading
    if (language !== currentLanguage) return

    textElements.forEach((element) => {
        const [ns, key] = splitKey(element.dataset.i18n)
        const value = lookups[ns](key)
        if (typeof value === "string") setOwnText(element, value)
    })

    transElements.forEach((element) => {
        if (!originalContent.has(element)) originalContent.set(element, [...element.childNodes].map((n) => n.cloneNode(true)))
        const original = originalContent.get(element)
        const [ns, key] = splitKey(element.dataset.i18nTrans)
        const value = lookups[ns](key)
        if (typeof value === "string") {
            element.replaceChildren(renderTrans(parseTrans(value), original))
        } else {
            element.replaceChildren(...original.map((n) => n.cloneNode(true)))
        }
    })

    infoboxes.forEach((tbody) => {
        const rows = lookups[tbody.dataset.i18nInfobox]("infobox")
        if (Array.isArray(rows)) tbody.innerHTML = infoboxRowsHTML(rows, lookups.linkPreviews, isDovahzul)
    })

    document.querySelectorAll("[data-dov-class]").forEach((element) => {
        element.classList.toggle(element.dataset.dovClass, isDovahzul)
    })
    document.querySelectorAll("[data-lang-only]").forEach((element) => {
        element.hidden = element.dataset.langOnly !== currentLanguage
    })

    document.dispatchEvent(new CustomEvent("languagechange", { detail: { language: currentLanguage } }))
}
