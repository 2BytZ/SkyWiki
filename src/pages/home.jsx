import { Link } from "react-router-dom"
import "./home.css"
import { useTranslation } from "react-i18next"
import i18next from "i18next"
import { useState } from "react"

import SkyrimLogo from "../assets/skyrim_logo_white.png"
import OblivionLogo from "../assets/oblivion_logo.png"
import MorrowindLogo from "../assets/morrowind_logo.png"
import { activeElement } from "@floating-ui/react/utils"

export function Home(){
    const {t} = useTranslation("home")
    const [selectedGame, setSelectedGame] = useState("all")

    return (
        <>
            <h1 className={`${i18next.resolvedLanguage=="dov" && "dovahzul-header"} mw-first-header`}>{t("mwFh")}</h1>
            <p hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-english mw-first-header">Valokein wah Kavselok</p>
            <div>
                <div className="mw-filter-buttons">
                <span>Filter characters by game:</span>
                    <nav>
                        <ul className="mw-games-nav">
                            <li id="All_button">
                                <button className="games-nav-button" type="button" onClick={() => setSelectedGame("all")} aria-pressed={selectedGame === "all" } width={40} height={40}>
                                    {t("mwNbA")}    
                                </button>
                            </li>
                            <li>
                                <button className="games-nav-button" type="button" onClick={() => setSelectedGame("skyrim")} aria-pressed={selectedGame === "skyrim" }>
                                    <img src={SkyrimLogo} className="filter-button-icon" width={40} height={40}/>
                                    {t("mwNbS")}
                                </button>
                            </li>
                            <li>
                                <button className="games-nav-button" type="button" onClick={() => setSelectedGame("oblivion")} aria-pressed={selectedGame === "oblivion" }>
                                    <img src={OblivionLogo} className="filter-button-icon" width={40}  height={40}/>
                                    {t("mwNbO")}
                                </button>
                            </li>
                            <li>
                                <button className="games-nav-button" type="button" onClick={() => setSelectedGame("morrowind")} aria-pressed={selectedGame === "morrowind" }>
                                    <img src={MorrowindLogo} className="filter-button-icon" width={40} height={40} />
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
                        <Link to="" title="Go to character page for Priscilla Aurora">
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
                        <Link to="" title="Go to character page for Gwyndolin Golden-Wing">
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
        </>
    )
}