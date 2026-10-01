import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
    const {i18n} = useTranslation();

    const handleLanguageChange = (e) => {
        i18n.changeLanguage(e.target.value);
    };

    return (
        <select id="lang-nav" onChange={handleLanguageChange} value={i18n.language} className={i18n.language=="dov" && "dovahzul"}>
            <option value="en">English</option>
            <option value="da">Dansk</option>
            <option value="dov" className="dovahzul-lang-dropdown">dov4zul</option>
        </select>
    )
}