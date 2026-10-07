import { Link } from "react-router-dom"
import "./Navbar.css"
import LanguageSwitcher from "./LanguageSwitcher"
import { Trans, useTranslation } from "react-i18next"
import i18next from "i18next"

import inventoryFilterSeparator from "../assets/inventory_filter_separator.png"
import inventoryFilterBox from "../assets/inventory_filter_box.png"


export function Navbar({  language, onLanguageChange, theme, onThemeChange }) {
    const {t} = useTranslation("navbar")
    
    return (
        <div className="ts-container">
            <div className="ts-inner">
                <div className="logo">
                    <Link to={("/")} className="mw-logo">
                        <img src={theme == "dark" ? "./Shadowmarks_Thieves_Guild_Sign_darkmode.png" : "./Shadowmarks_Thieves_Guild_Sign.png"}/>
                    </Link>
                </div>
                <nav className="navbar">
                    <ul className="nav-main">
                        <li>
                            <Link to={("/")}>
                                <button className="navbutton">Home</button>
                            </Link> 
                        </li>
                        <li>
                            <Link to={("/Dranleic_Haligdrake")}>
                                <button className="navbutton">Dranleic Haligdrake</button>
                            </Link>
                        </li>
                        <li>
                            <Link to={("/Pharis_Ironeye")}>
                                <button className="navbutton">Pharis Ironeye</button>
                            </Link>                            
                        </li>
                    </ul>
                    <div className="navbar-right">
                        <img className="navbar-right-background" src={inventoryFilterBox} alt="" />
                        <label className="nav-language-control">
                            <span className={i18next.resolvedLanguage=="dov" && "dovahzul"}>{t("lang")}</span>
                            <span>{LanguageSwitcher()}</span>
                        </label>
                        <img className="navbar-right-separator" src={inventoryFilterSeparator} alt="" />
                        <button title={theme === "dark" ? "Switch to Lightmode" : "Switch to Darkmode"}className="theme-toggle-btn" type="button" aria-pressed={theme === "dark"} onClick={() => {
                            onThemeChange(theme === "dark" ? "light" : "dark")
                        }}>
                            <img src={theme === "dark" ? "src/assets/theme_darkmode_moon.png" : "src/assets/theme_lightmode_sun.png"} alt="Mode" width={30} height={30}/>
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    )
}