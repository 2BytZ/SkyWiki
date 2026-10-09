import { useEffect, useState } from "react"
import { Navbar } from "./Navbar"
import { Outlet } from "react-router-dom"

const LANGUAGE_STORAGE_KEY = "skyrim-wiki-language"
const THEME_STORAGE_KEY = "skyrim-wiki-theme"

export function Layout() {
   
    const [theme, setTheme] = useState(() => {
        const savedTheme = window.localStorage.getItem(THEME_STORAGE_KEY)

        if (savedTheme === "light" || savedTheme === "dark") {
            return savedTheme        
        }

        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    })

    const [language, setLanguage] = useState(() => {
        const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
        return ["en", "da", "do"].includes(savedLanguage) ? savedLanguage : "en"
    })

    useEffect(() => {
        document.documentElement.dataset.theme = theme
        window.localStorage.setItem(THEME_STORAGE_KEY, theme)
    }, [theme])

    useEffect(() => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    }, [language])

    function handleLanguageChange(nextLanguage) {
        setLanguage(nextLanguage)
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage)
    }

    return (
        <>
            <Navbar language={language} onLanguageChange={handleLanguageChange} theme={theme} onThemeChange={setTheme}/>
            <main className="mw-page-container">
                <Outlet context={{ language }}/>
            </main>
        </>
    )
}