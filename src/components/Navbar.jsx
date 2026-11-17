import { Link } from "react-router-dom"
import "./Navbar.css"
import LanguageSwitcher from "./LanguageSwitcher"
import { Trans, useTranslation } from "react-i18next"
import i18next from "i18next"
import { useState } from "react"

import DarkmodeMoon from "../assets/theme_darkmode_moon.png"
import LightmodeSun from "../assets/theme_lightmode_sun.png"

import inventoryFilterSeparator from "../assets/inventory_filter_separator.png"
import inventoryFilterBox from "../assets/inventory_filter_box.png"

import dranleicNavbarIcon from "../assets/dragonborne_warrior.png"
import pharisNavbarIcon from "../assets/bow_and_drinks.png"
import priscillaNavbarIcon from "../assets/frost_and_greatsword.png"
import gwyndolinNavbarIcon from "../assets/wealth_and_pike.png"
import homeNavbarIcon from "../assets/Town.png"


export function Navbar({  language, onLanguageChange, theme, onThemeChange }) {
    const {t} = useTranslation("navbar")
    const [menuOpen, setMenuOpen] = useState(false)
    
    return (
        <div className="ts-container">
            <div className="ts-inner">
                <div className="hamburger-menu">
                    <button
                        type="button"
                        className="mobile-nav-toggle"
                        aria-label="Toggle navigation"
                        aria-controls="mobile-navigation"
                        aria-expanded={menuOpen}
                        onClick={() => setMenuOpen(open => !open)}
                    >
                        ☰
                    </button>
                </div>
                <div className="logo">
                    <Link to="/wiki/Home" className="mw-logo">
                        <img src={theme == "dark" ? "/Shadowmarks_Thieves_Guild_Sign_darkmode.png" : "/Shadowmarks_Thieves_Guild_Sign.png"}/>
                    </Link>
                </div>
                <nav className="navbar">
                    <ul className="nav-main">
                        <li>
                            <Link className="nav-link" to="/wiki/Home">
                                <button className="navbutton">
                                    <img src={homeNavbarIcon} />
                                    Home
                                </button>
                            </Link> 
                        </li>
                        <li>
                            <Link className="nav-link" to={("/wiki/Dranleic_Haligdrake")}>
                                <button className="navbutton">
                                    <img src={dranleicNavbarIcon}  />
                                    Dranleic Haligdrake
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" to={("/wiki/Pharis_Ironeye")}>
                                <button className="navbutton">
                                    <img src={pharisNavbarIcon}  />
                                    Pharis Ironeye
                                </button>
                            </Link>                            
                        </li>
                        <li>
                            <Link className="nav-link">
                                <button type="button" className="navbutton">
                                    <img src={priscillaNavbarIcon} />
                                    Priscilla Aurora
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link">
                                <button type="button" className="navbutton">
                                    <img src={gwyndolinNavbarIcon} />
                                    Gwyndolin Golden-Wing
                                </button>
                            </Link>
                        </li>
                    </ul>
                    <div className="navbar-right">
                        <img className="navbar-right-background" src={inventoryFilterBox} alt="" />
                        <label className="nav-language-control">
                            <span className={i18next.resolvedLanguage=="dov" && "dovahzul"}>{t("lang")}</span>
                            <span><LanguageSwitcher /></span>
                        </label>
                        <img className="navbar-right-separator" src={inventoryFilterSeparator} alt="" />
                        <button title={theme === "dark" ? "Nocturnal mode" : "Meridia mode"}className="theme-toggle-btn" type="button" aria-pressed={theme === "dark"} onClick={() => {
                            onThemeChange(theme === "dark" ? "light" : "dark")
                        }}>
                            <img src={theme === "dark" ? `${DarkmodeMoon}` : `${LightmodeSun}`} alt="Mode" width={30} height={30}/>
                        </button>
                    </div>
                </nav>
                <nav id="mobile-navigation" className="mobile-navigation" hidden={!menuOpen}>
                    <Link
                        to="/wiki/Home"
                        className="mw-logo"
                        aria-label="Home"
                        onClick={() => setMenuOpen(false)}
                    >
                        <img
                            src={theme === "dark"
                                ? "/Shadowmarks_Thieves_Guild_Sign_darkmode.png"
                                : "/Shadowmarks_Thieves_Guild_Sign.png"}
                            alt=""
                        />
                    </Link>

                    <div>
                        <Link to="/wiki/Home" onClick={() => setMenuOpen(false)}>Home</Link>
                        <Link to="/wiki/Credits" onClick={() => setMenuOpen(false)}>Credits</Link>
                    </div>

                    <div>
                        <strong>Characters</strong>
                        <p>Skyrim</p>
                        <Link to="/wiki/Dranleic_Haligdrake" onClick={() => setMenuOpen(false)}>
                            Dranleic Haligdrake
                        </Link>
                        <Link to="/wiki/Pharis_Ironeye" onClick={() => setMenuOpen(false)}>
                            Pharis Ironeye
                        </Link>
                        <span>Lahvriiluz</span>
                        <p>Oblivion</p>
                        <span>Priscilla Aurora</span>
                        <p>Morrowind</p>
                        <span>Gwyndolin Golden-Wing</span>
                    </div>
                </nav>
            </div>
        </div>
    )
}