// Runs on every page: theme, language, navigation, then the features the page has.
import { applyLanguage, currentLanguage } from "./i18n.js"
import { initPreviews, completePreviewLinks } from "./previews.js"
import { initArticle } from "./article.js"

const THEME_KEY = "skyrim-wiki-theme"

// ---------- theme ----------
function setTheme(theme) {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem(THEME_KEY, theme) } catch { /* storage unavailable */ }
    const dark = theme === "dark"
    const button = document.querySelector(".theme-toggle-btn")
    if (button) {
        button.setAttribute("aria-pressed", String(dark))
        button.title = dark ? "Nocturnal mode" : "Meridia mode"
        button.querySelector("img").src = dark ? "/assets/theme_darkmode_moon.png" : "/assets/theme_lightmode_sun.png"
    }
    document.querySelectorAll(".theme-logo").forEach((logo) => {
        logo.src = dark ? "/images/Shadowmarks_Thieves_Guild_Sign_darkmode.png" : "/images/Shadowmarks_Thieves_Guild_Sign.png"
    })
}

function initTheme() {
    setTheme(document.documentElement.dataset.theme === "dark" ? "dark" : "light")
    document.querySelector(".theme-toggle-btn")?.addEventListener("click", () => {
        setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark")
    })
}

// ---------- language picker ----------
function initLanguagePicker() {
    const select = document.querySelector("#lang-nav")
    if (!select) return
    const isChromium = navigator.userAgentData?.brands?.some((b) => b.brand === "Chromium")
        ?? /Chrome|Chromium|CriOS/.test(navigator.userAgent)
    // Chromium can't draw the dragon font in the option list, so the option is spelled in its letters
    select.querySelector('option[value="dov"]').textContent = isChromium ? "dov4zul" : "Dovahzul"
    // Chrome keeps the old width until the select is laid out again
    select.style.display = "none"
    void select.offsetWidth
    select.style.display = ""
    const sync = () => {
        select.value = currentLanguage
        select.classList.toggle("dovahzul", currentLanguage === "dov")
    }
    select.addEventListener("change", () => applyLanguage(select.value))
    document.addEventListener("languagechange", sync)
    sync()
}

// ---------- navigation and footer ----------
/* function initScrollHeader() {
    const header = document.querySelector(".ts-container")
    if (!header) return

    const revealDistance = 80
    let previousY = Math.max(0, window.scrollY)
    let upwardStartY = previousY

    window.addEventListener("scroll", () => {
        const currentY = Math.max(0, window.scrollY)
        const menuOpen = document.querySelector(".mobile-nav-toggle")
            ?.getAttribute("aria-expanded") === "true"
        const settingsOpen = document.querySelector(".settings-button")
            ?.getAttribute("aria-expanded") === "true"

        if (currentY === 0 || menuOpen || settingsOpen) {
            header.classList.remove("is-hidden")
            upwardStartY = currentY
        } else if (currentY > previousY) {
            header.classList.add("is-hidden")
            upwardStartY = currentY
        } else if (upwardStartY - currentY >= revealDistance) {
            header.classList.remove("is-hidden")
        }

        previousY = currentY
    }, { passive: true })
}
 */
function initNavigation() {
    const toggle = document.querySelector(".mobile-nav-toggle")
    const menu = document.querySelector("#mobile-navigation")
    toggle?.addEventListener("click", () => {
        menu.hidden = !menu.hidden
        toggle.setAttribute("aria-expanded", String(!menu.hidden))
    })
    const year = document.querySelector("#copyright-year")
    if (year) year.textContent = new Date().getFullYear()

    // the "you switched to Dovahzul" notice can be dismissed
    document.addEventListener("click", (event) => {
        event.target.closest(".page-notice-close-button")?.closest(".mw-page-notice__lang")?.remove()
    })
}
function expandSettings() {
    const toggle = document.querySelector(".settings-button")
    const panel = document.querySelector("#settings-panel")
    const cog = document.querySelector(".settings-cog")
    if (!toggle || !panel || !cog) return

    toggle.addEventListener("click", () => {
        const isOpen = panel.classList.toggle("is-open")
        panel.inert = !isOpen
        toggle.setAttribute("aria-expanded", String(isOpen))

        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            cog.getAnimations().forEach((animation) => animation.cancel())
            cog.animate(
                [
                    { transform: "rotate(0deg)" },
                    { transform: "rotate(360deg)" }
                ],
                { duration: 400, easing: "ease" }
            )
        }
    })
}
// ---------- home page character filter ----------
function initGameFilter() {
    const buttons = document.querySelectorAll("[data-game-filter]")
    buttons.forEach((button) => button.addEventListener("click", () => {
        const game = button.dataset.gameFilter
        buttons.forEach((b) => b.setAttribute("aria-pressed", String(b === button)))
        document.querySelectorAll("[data-game]").forEach((card) => {
            card.hidden = game !== "all" && card.dataset.game !== game
        })
    }))
}

initTheme()
initLanguagePicker()
initNavigation()
// initScrollHeader()
expandSettings()
initGameFilter()
initPreviews()
// before translations and footnotes look at the article, so they see the finished links
await completePreviewLinks()
initArticle()
if (document.querySelector(".credits-table")) import("./credits.js")
applyLanguage(currentLanguage)
