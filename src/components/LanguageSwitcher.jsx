import { useTranslation } from "react-i18next";

const isChromium =
    navigator.userAgentData?.brands?.some((b) => b.brand === "Chromium") ??
    /Chrome|Chromium|CriOS/.test(navigator.userAgent);

export default function LanguageSwitcher() {
    const {i18n} = useTranslation();

    const handleLanguageChange = (e) => {
        const language = e.target.value;
        localStorage.setItem("language", language);
        i18n.changeLanguage(language);
    };

    return (
        <select id="lang-nav" onChange={handleLanguageChange} value={i18n.language} className={i18n.language=="dov" && "dovahzul"}>
            <option value="en">English</option>
            <option value="da">Dansk</option>
            <option value="dov" className="dovahzul-lang-dropdown">{isChromium ? "dov4zul" : "Dovahzul"}</option>
        </select>
    )
}