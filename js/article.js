// Character pages: table of contents, footnotes, image lightbox and infobox ornaments.
import { escapeHTML } from "./markup.js"

const ARROWS_ICON = "/assets/Arrows_Selected.png"

// ---------- table of contents (built from the article's h2–h5 headings) ----------
function headingTree(content) {
    const roots = []
    const stack = []
    for (const element of content.querySelectorAll("h2, h3, h4, h5")) {
        const heading = { element, subList: [] }
        while (stack.length && stack.at(-1).element.nodeName >= element.nodeName) stack.pop()
        if (stack.length) stack.at(-1).subList.push(heading)
        else roots.push(heading)
        stack.push(heading)
    }
    return roots
}

function tocItem(heading, level) {
    const item = document.createElement("li")
    item.className = "vector-toc-list-item"
    const row = document.createElement("div")
    row.className = "vector-toc-text"
    const label = document.createElement("span")
    label.className = `item-${level}`
    label.textContent = heading.element.textContent
    row.append(label)
    row.addEventListener("click", () => heading.element.scrollIntoView())

    const list = document.createElement("ul")
    list.id = `toc-${heading.element.id}`
    list.className = "vector-toc-contents"
    list.hidden = true
    heading.subList.forEach((sub) => list.append(tocItem(sub, level + 1)))

    if (heading.subList.length > 1) {
        const button = document.createElement("button")
        button.className = "toc-collapse-button"
        button.setAttribute("aria-controls", list.id)
        button.setAttribute("aria-expanded", "false")
        button.innerHTML = `<img src="${ARROWS_ICON}" alt="">`
        button.addEventListener("click", (event) => {
            event.stopPropagation()
            list.hidden = !list.hidden
            button.setAttribute("aria-expanded", String(!list.hidden))
        })
        row.append(button)
    }
    item.append(row, list)
    return item
}

function initTableOfContents(content) {
    const shell = document.querySelector(".toc-scroll-shell")
    if (!shell) return
    const list = shell.querySelector(".vector-toc-contents")
    const container = shell.querySelector(".vector-sticky-container")
    const track = shell.querySelector(".toc-scrollbar-track")
    const thumb = shell.querySelector(".toc-scrollbar-thumb")

    list.querySelector(".top-heading").addEventListener("click", () => window.scrollTo({ top: 78, behavior: "smooth" }))
    list.append(...headingTree(content).map((heading) => tocItem(heading, 1)))

    // the themed scrollbar
    let thumbHeight = 0
    const updateThumb = () => {
        const trackHeight = track.clientHeight
        const scrollRange = container.scrollHeight - container.clientHeight
        shell.classList.toggle("is-overflowing", scrollRange > 0)
        thumbHeight = scrollRange > 0 ? Math.max(24, trackHeight * container.clientHeight / container.scrollHeight) : trackHeight
        thumb.style.height = `${thumbHeight}px`
        thumb.style.top = `${scrollRange > 0 ? (trackHeight - thumbHeight) * container.scrollTop / scrollRange : 0}px`
    }
    updateThumb()
    container.addEventListener("scroll", updateThumb)
    const observer = new ResizeObserver(updateThumb)
    observer.observe(container)
    observer.observe(container.firstElementChild)

    shell.querySelector(".toc-scrollbar-arrow-top").addEventListener("click", () => container.scrollBy({ top: -80, behavior: "smooth" }))
    shell.querySelector(".toc-scrollbar-arrow-bottom").addEventListener("click", () => container.scrollBy({ top: 80, behavior: "smooth" }))

    let drag = null
    thumb.addEventListener("pointerdown", (event) => {
        event.preventDefault()
        thumb.setPointerCapture(event.pointerId)
        drag = { pointerY: event.clientY, scrollTop: container.scrollTop }
    })
    thumb.addEventListener("pointermove", (event) => {
        if (!drag) return
        const thumbRange = track.clientHeight - thumbHeight
        const scrollRange = container.scrollHeight - container.clientHeight
        if (thumbRange <= 0 || scrollRange <= 0) return
        container.scrollTop = drag.scrollTop + (event.clientY - drag.pointerY) * scrollRange / thumbRange
    })
    thumb.addEventListener("pointerup", () => { drag = null })
    thumb.addEventListener("pointercancel", () => { drag = null })
    track.addEventListener("click", (event) => {
        if (event.target !== track) return
        const scrollRange = container.scrollHeight - container.clientHeight
        const thumbRange = track.clientHeight - thumbHeight
        if (thumbRange <= 0 || scrollRange <= 0) return
        const thumbPosition = event.clientY - track.getBoundingClientRect().top - thumbHeight / 2
        container.scrollTop = thumbPosition / thumbRange * scrollRange
    })
}

// "Hide"/"Show" checkbox and the mobile drawer button
function initTocToggles() {
    const body = document.querySelector(".content-body")
    const toggle = document.querySelector(".toc-toggle-wrapper button")
    if (!body || !toggle) return
    const label = document.querySelector(".hide-toc-button > span")
    const check = document.querySelector(".toc-toggle-check")
    const toc = document.querySelector("#table-of-contents")

    const setHidden = (hidden) => {
        body.classList.toggle("toc-hidden", hidden)
        label.textContent = hidden ? "Show" : "Hide"
        toggle.setAttribute("aria-expanded", String(!hidden))
        check.hidden = !hidden
        toc.hidden = hidden
    }
    toggle.addEventListener("click", () => setHidden(!body.classList.contains("toc-hidden")))

    const drawerButton = document.querySelector(".mobile-toc-collapse-btn button")
    drawerButton?.addEventListener("click", () => {
        setHidden(false)
        const nowHidden = body.classList.toggle("mobile-toc-hidden")
        drawerButton.setAttribute("aria-expanded", String(!nowHidden))
        drawerButton.setAttribute("aria-label", nowHidden ? "Expand table of contents" : "Collapse table of contents")
    })
}

// ---------- footnotes ----------
// <sup data-cite="id"></sup> (was <Cite id="id"/>) and <ol data-footnotes="/data/sources/x.json"></ol> (was <FootnoteList/>)
// In source texts, "[label](url)" becomes a link and "*text*" italics
function renderSourceText(text) {
    const pattern = /\*((?:\[[^\]]+\]\([^)\s]+\)|[^*])+)\*|\[([^\]]+)\]\(([^)\s]+)\)/g
    let html = ""
    let last = 0
    let match
    while ((match = pattern.exec(text)) !== null) {
        html += escapeHTML(text.slice(last, match.index))
        html += match[1] !== undefined
            ? `<i>${renderSourceText(match[1])}</i>`
            : `<a href="${escapeHTML(match[3])}" target="_blank" rel="noreferrer">${escapeHTML(match[2])}</a>`
        last = pattern.lastIndex
    }
    return html + escapeHTML(text.slice(last))
}

async function initFootnotes() {
    const list = document.querySelector("ol[data-footnotes]")
    let sources = []
    if (list) {
        try {
            const response = await fetch(list.dataset.footnotes)
            if (!response.ok) throw new Error(`HTTP ${response.status}`)
            sources = await response.json()
        } catch (error) {
            console.error(`Could not load footnote sources from ${list.dataset.footnotes}`, error)
        }
    }
    const sourceById = (id) => sources.find((source) => source.id === id)
    let activeId = null

    const render = () => {
        const used = [] // numbered in order of first use
        for (const cite of document.querySelectorAll("sup[data-cite]")) {
            const id = cite.dataset.cite
            cite.style.fontFamily = "skyrim"
            if (!sourceById(id)) {
                console.warn(`Footnote source "${id}" not found`)
                cite.removeAttribute("id")
                cite.style.color = "red"
                cite.textContent = "[?]"
                continue
            }
            if (!used.includes(id)) used.push(id)
            const number = used.indexOf(id) + 1
            cite.id = `cite_ref-${number}`
            cite.style.color = ""
            cite.innerHTML = `<a>[${number}]</a>`
        }
        if (!list) return
        list.innerHTML = used.map((id, index) =>
            `<li id="cite_note-${index + 1}" class="footnote-item${activeId === id ? " footnote-active" : ""}" data-source="${escapeHTML(id)}">`
            + `<a class="footnote-back">↑</a> <span class="footnote-text">${renderSourceText(sourceById(id).text)}</span></li>`).join("")
    }

    const setActive = (id) => {
        activeId = id
        list?.querySelectorAll(".footnote-item").forEach((item) => item.classList.toggle("footnote-active", item.dataset.source === id))
    }

    document.addEventListener("click", (event) => {
        const citeLink = event.target.closest("sup[data-cite] > a")
        if (citeLink) {
            const cite = citeLink.parentElement
            setActive(cite.dataset.cite)
            document.getElementById(cite.id.replace("cite_ref", "cite_note"))?.scrollIntoView()
            return
        }
        const back = event.target.closest(".footnote-back")
        if (back) {
            setActive(null)
            document.getElementById(back.parentElement.id.replace("cite_note", "cite_ref"))?.scrollIntoView()
        }
    })
    document.addEventListener("languagechange", render)
    render()
}

// ---------- image lightbox ----------
function initImageModal() {
    document.addEventListener("click", (event) => {
        const frame = event.target.closest(".image-inner")
        const image = frame?.querySelector("img")
        if (!image) return
        const modal = document.createElement("div")
        modal.className = "lightbox-container"
        modal.innerHTML = `<div class="modal-content-and-placement-divider"><div class="modal-wrapper lightbox-modal image-lightbox">`
            + `<button type="button" class="lightbox-button">X</button><div class="modal-content"><div class="lightbox"><div class="media">`
            + `<img src="${escapeHTML(image.getAttribute("src"))}" alt="${escapeHTML(image.alt)}"></div></div></div></div></div>`
            + `<div class="blackout"></div>`
        const close = () => {
            modal.remove()
            document.removeEventListener("keydown", onKey)
        }
        const onKey = (e) => { if (e.key === "Escape") close() }
        modal.querySelector(".lightbox-button").addEventListener("click", close)
        modal.querySelector(".blackout").addEventListener("click", close)
        document.addEventListener("keydown", onKey)
        document.body.append(modal)
    })
}

// ---------- infobox title ornaments (only drawn when there's room beside the title) ----------
function initInfoboxOrnaments(wrapper) {
    const title = wrapper.querySelector(".infobox-title")
    if (!title) return
    const update = () => {
        const titleBounds = title.getBoundingClientRect()
        const screenWidth = document.documentElement.clientWidth
        const ornamentScale = Math.min(1.2, 1 + Math.max(0, screenWidth - 1920) * 0.00015)
        const ornamentSize = Number.parseFloat(getComputedStyle(title).getPropertyValue("--infobox-title-ornament-size")) / 100
        const range = document.createRange()
        range.selectNodeContents(title)
        const textBounds = range.getBoundingClientRect()
        const textGap = 1
        const ornamentWidth = titleBounds.width * ornamentSize * ornamentScale
        const availableWidth = Math.max(0, Math.min(textBounds.left - textGap, screenWidth - textBounds.right - textGap))
        title.style.setProperty("--infobox-title-text-inset-left", `${textBounds.left - titleBounds.left}px`)
        title.style.setProperty("--infobox-title-text-inset-right", `${titleBounds.right - textBounds.right}px`)
        title.style.setProperty("--infobox-title-ornament-width", `${ornamentWidth}px`)
        title.style.setProperty("--infobox-title-ornament-shift", `${ornamentWidth * 0.4}px`)
        wrapper.classList.toggle("infobox-wrapper--ornaments-visible", availableWidth >= ornamentWidth * 0.6)
    }
    const observer = new ResizeObserver(update)
    observer.observe(wrapper)
    observer.observe(title)
    new MutationObserver(update).observe(title, { characterData: true, childList: true, subtree: true })
    window.addEventListener("resize", update)
    window.visualViewport?.addEventListener("resize", update)
    document.fonts.addEventListener("loadingdone", update)
    document.addEventListener("languagechange", update)
    update()
    document.fonts.ready.then(update)
}

export function initArticle() {
    const content = document.querySelector(".mw-body-content")
    if (content) initTableOfContents(content)
    initTocToggles()
    initFootnotes()
    initImageModal()
    document.querySelectorAll(".infobox-wrapper").forEach(initInfoboxOrnaments)
}
