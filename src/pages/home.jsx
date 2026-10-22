import { Link } from "react-router-dom"
import "./home.css"
import { useTranslation } from "react-i18next"
import i18next from "i18next"
import { useState } from "react"

import { PageNotice } from "../components/PageNotice"

import SkyrimLogo from "../assets/skyrim_logo_white.png"
import OblivionLogo from "../assets/oblivion_logo.png"
import MorrowindLogo from "../assets/morrowind_logo.png"
import ArenaLogo from "../assets/arena_logo.png"
import { LinkPreview } from "../components/LinkPreview"

export function Home(){
    const {t} = useTranslation("home")
    const [selectedGame, setSelectedGame] = useState("all")

    return (
        <>
            <h1 className={`${i18next.resolvedLanguage=="dov" && "dovahzul-header"} mw-first-header`}>{t("mwFh")}</h1>
            <p hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-english mw-first-header">Valokein wah Kavselok</p>
            <br />
            <div className="home-body-content">
                {PageNotice("language")}
                <div className="home-body-text">
                    <p>
                        This website is created for the purpose of writing down my own personal headcanons for my player character in the Elder Scrolls series.
                    </p>
                    <p>
                        It serves the purpose of acting like a real wiki, with links and references to things that actually happened in the game, and using that to further reinforce my characters' "backstory" and, well, their character!
                    </p>
                    <p>
                        Currently, the site is still very much under construction and it is still missing a lot of content and material that I either haven't started to even write yet, or just haven't inserted into the website yet. The most full and up-to-date page on the website currently is <LinkPreview url={"/Dranleic_Haligdrake"}>Dranleic Haligdrake</LinkPreview>, who is my first Skyrim playthrough character.
                    </p>
                    <p>
                        I had a lot of fun making this website. And I will continue to improve upon it and add more content whenever I come around to it.
                        Until then, I hope you too can find some joy in what I've created out of my passion for this game series, and even inspire you for a character in your next playthrough ;)
                    </p>
                </div>
                    {/* 
                    
                        Paste short introduction to the site here 
                        to give the user a clearer idea of what this 
                        website is all about 
                    
                    */}
                
                <div>
                    <div className="mw-filter-buttons">
                    <span className={`${i18next.resolvedLanguage=="dov" && "dovahzul-small"}`}>{t("mwFt")}</span>
                        <nav>
                            <ul className="mw-games-nav">
                                <li id="All_button">
                                    <button className="games-nav-button" type="button" onClick={() => setSelectedGame("all")} aria-pressed={selectedGame === "all" } width={40} height={40}>
                                        {t("mwNbA")}    
                                    </button>
                                </li>
                                <li>
                                    <button className="games-nav-button" type="button" onClick={() => setSelectedGame("skyrim")} aria-pressed={selectedGame === "skyrim" }>
                                        <img src={SkyrimLogo} className="filter-button-icon light-mode-invert" width={40} height={40}/>
                                        {t("mwNbS")}
                                    </button>
                                </li>
                                <li>
                                    <button className="games-nav-button" type="button" onClick={() => setSelectedGame("oblivion")} aria-pressed={selectedGame === "oblivion" }>
                                        <img src={OblivionLogo} className="filter-button-icon light-mode-invert" width={40}  height={40}/>
                                        {t("mwNbO")}
                                    </button>
                                </li>
                                <li>
                                    <button className="games-nav-button" type="button" onClick={() => setSelectedGame("morrowind")} aria-pressed={selectedGame === "morrowind" }>
                                        <img src={MorrowindLogo} className="filter-button-icon light-mode-invert" width={40} height={40} />
                                        {t("mwNbM")}                                        
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className="character-nav">
                    <ul className="gallery">
                        <li className="gallerybox" hidden={selectedGame !== "all" && selectedGame !== "skyrim"} >
                            <Link to={"/Dranleic_Haligdrake"} title="Go to character page for Dranleic Haligdrake">
                                <div className="thumb">
                                    <img src="/dranleic-haligdrake-power-stance-swords.jpg" alt="Dranleic Haligdrake" width="480" height="360"/>
                                </div>
                                <div className="gallerytext">
                                    <p>Dranleic Haligdrake</p>
                                    <span hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-smaller">dranl2c revakdov4</span>
                                </div>
                            </Link>
                        </li>
                        <li className="gallerybox" hidden={selectedGame !== "all" && selectedGame !== "skyrim"}>
                            <Link to={"/Pharis_Ironeye"} title="Go to character page for Pharis Ironeye">
                                <div className="thumb">
                                    <img src="/Pharis-Ironeye-sideview-firing-bow.jpg" alt="Pharis Ironeye" width="480" height="360"/>
                                </div>
                                <div className="gallerytext">
                                    <p>Pharis Ironeye</p>
                                    <span hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-smaller">pharis dolm3n</span>
                                </div>
                            </Link>
                        </li>
                        <li className="gallerybox" hidden={selectedGame !== "all" && selectedGame !== "oblivion"}>
                            <Link title="Go to character page for Priscilla Aurora">
                                <div className="thumb">
                                    <img src="/dummy-pic-1.png" alt="Priscilla Aurora" width="480" height="360" />
                                </div>
                                <div className="gallerytext">
                                    <p>Priscilla Aurora</p>
                                    <span hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-smaller">priscilla loksilkun</span>
                                </div>
                            </Link>
                        </li>
                        <li className="gallerybox" hidden={selectedGame !== "all" && selectedGame !== "morrowind"}>
                            <Link title="Go to character page for Gwyndolin Golden-Wing">
                                <div className="thumb">
                                    <img src="/dummy-pic-1.png" alt="Gwyndolin Golden-Wing" width={480} height={360} />
                                </div>
                                <div className="gallerytext">
                                    <p>Gwyndolin Golden-Wing</p>
                                    <span hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-smaller">gwyndolin yuvonv3ng</span>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}