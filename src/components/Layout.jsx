import { useEffect, useState } from "react"
import { Navbar } from "./Navbar"
import { Outlet } from "react-router-dom"

const LANGUAGE_STORAGE_KEY = "skyrim-wiki-language"

export function Layout() {
    const [language, setLanguage] = useState(() => {
        const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY)
        return ["en", "da", "do"].includes(savedLanguage) ? savedLanguage : "en"
    })

    useEffect(() => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    }, [language])

    function handleLanguageChange(nextLanguage) {
        setLanguage(nextLanguage)
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage)
    }

    return (
        <>
            <Navbar language={language} onLanguageChange={handleLanguageChange}/>
            <main>
                <Outlet context={{ language }}/>
            </main>
        </>
    )
}