import { Link } from "react-router-dom"
import "./Navbar.css"
import LanguageSwitcher from "./LanguageSwitcher"
import { Trans, useTranslation } from "react-i18next"
import i18next from "i18next"

export function Navbar() {
    const {t} = useTranslation("navbar")
    
    return (
        <div className="ts-container">
            <div className="ts-inner">
                <div className="logo">
                    <Link to={("/")} className="mw-logo">
                        <img src="/Shadowmarks_Thieves_Guild_Sign_darkmode.png"/>
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
                    <label className="nav-language-control">
                        <span className={i18next.resolvedLanguage=="dov" && "dovahzul"}>{t("lang")}</span>
                        <span>{LanguageSwitcher()}</span>
                    </label>
                </nav>
            </div>
        </div>
    )
}