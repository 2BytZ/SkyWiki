import { useEffect, useState } from "react"
import { Navbar } from "./Navbar"
import { Outlet } from "react-router-dom"

const LANGUAGE_STORAGE_KEY = "skyrim-wiki-language"

export function Layout() {
    const [language, setLanguage] = useState(() => (
        window.localStorage.getItem(LANGUAGE_STORAGE_KEY) === "da" ? "da" : "en"
    ))

    useEffect(() => {
        window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    }, [language])

    return (
        <>
            <Navbar language={language} onLanguageChange={setLanguage}/>
            <main>
                <Outlet context={{ language }}/>
            </main>
        </>
    )
}