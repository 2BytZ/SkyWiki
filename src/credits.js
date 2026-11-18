import "./index.css"
import "./dovahzul.css"
import "./components/Navbar.css"
import "./components/Footer.css"
import "./components/PageFooter.css"
import "./pages/credits.css"
import previewsUrl from "./config/locales/en/linkPreviews.json?url"
import darkIcon from "./assets/theme_darkmode_moon.png"
import lightIcon from "./assets/theme_lightmode_sun.png"

const themeButton = document.querySelector(".theme-toggle-btn")
const languageSelect = document.querySelector("#lang-nav")
const languageLabel = document.querySelector("#language-label")
const languageLabels = { en: "Language", da: "Sprog", dov: "Tinvok" }

function updateTheme(theme) {
    document.documentElement.dataset.theme = theme
    localStorage.setItem("skyrim-wiki-theme", theme)
    themeButton.setAttribute("aria-pressed", String(theme === "dark"))
    themeButton.title = theme === "dark" ? "Nocturnal mode" : "Meridia mode"
    document.querySelector("#theme-icon").src = theme === "dark" ? darkIcon : lightIcon
    document.querySelectorAll(".theme-logo").forEach((logo) => {
        logo.src = theme === "dark" ? "/Shadowmarks_Thieves_Guild_Sign_darkmode.png" : "/Shadowmarks_Thieves_Guild_Sign.png"
    })
}

function updateLanguage(language) {
    languageSelect.value = language
    languageSelect.classList.toggle("dovahzul", language === "dov")
    languageLabel.classList.toggle("dovahzul", language === "dov")
    languageLabel.textContent = languageLabels[language]
    localStorage.setItem("language", language)
}

updateTheme(document.documentElement.dataset.theme)
const savedLanguage = localStorage.getItem("language")
updateLanguage(Object.hasOwn(languageLabels, savedLanguage) ? savedLanguage : "en")
themeButton.addEventListener("click", () => updateTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"))
languageSelect.addEventListener("change", () => updateLanguage(languageSelect.value))

const menuButton = document.querySelector(".mobile-nav-toggle")
const menu = document.querySelector("#mobile-navigation")
menuButton.addEventListener("click", () => {
    menu.hidden = !menu.hidden
    menuButton.setAttribute("aria-expanded", String(!menu.hidden))
})
document.querySelector("#copyright-year").textContent = new Date().getFullYear()

const table = document.querySelector(".credits-table")
const body = table.querySelector("tbody")
async function loadCredits() {
    try {
        const response = await fetch(previewsUrl)
        if (!response.ok) throw new Error(`Image credits request failed: ${response.status}`)
        const previews = await response.json()
        for (const [key, preview] of Object.entries(previews)) {
            if (!preview.img || !preview.imageSource) continue
            const url = preview.link || key
            const article = new URL(url)
            const image = new URL(preview.imageSource)
            const row = body.insertRow()
            const articleLink = document.createElement("a")
            articleLink.href = url
            articleLink.textContent = decodeURIComponent(article.pathname.split("/").pop()).split(":").pop().replaceAll("_", " ")
            row.insertCell().append(articleLink)
            const imageLink = document.createElement("a")
            imageLink.href = preview.imageSource
            imageLink.textContent = image.hostname.endsWith("uesp.net") ? "UESP file page"
                : image.hostname.endsWith("fandom.com") ? "Elder Scrolls Wiki (Fandom) file page" : image.hostname
            row.insertCell().append(imageLink)
            row.insertCell().textContent = preview.imageLicense === "by-sa"
                ? "Composition by UESP (CC BY-SA 2.5); components copyright Bethesda Softworks"
                : "Copyright Bethesda Softworks"
        }
        table.hidden = body.rows.length === 0
    } catch (error) {
        console.error("Could not load image credits:", error)
        document.querySelector("#credits-error").hidden = false
    }
}
loadCredits()
