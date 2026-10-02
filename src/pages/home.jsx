import { Link } from "react-router-dom"
import "./home.css"
import { useTranslation } from "react-i18next"
import i18next from "i18next"

export function Home(){
    const {t} = useTranslation("home")
    return (
        <>
            <h1 className={`${i18next.resolvedLanguage=="dov" && "dovahzul-header"} mw-first-header`}>{t("mwFh")}</h1>
            <p hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-english mw-first-header">Valokein wah Kavselok</p>
            <div>
                <div className="mw-games-buttons">
                    <nav>
                        <ul className="mw-games-nav">
                            <li>
                                <Link to={("/")} ><button>{t("mwNbS")}</button></Link>
                            </li>
                            <li>
                                <Link to="" ><button>{t("mwNbO")}</button></Link>
                            </li>
                            <li>
                                <Link to="" ><button>{t("mwNbM")}</button></Link>            
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="character-nav">
                <ul className="gallery">
                    <li className="gallerybox">
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
                    <li className="gallerybox">
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
                    <li className="gallerybox">
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
                </ul>
            </div>
        </>
    )
}