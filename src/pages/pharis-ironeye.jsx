import { useRef } from "react"
import { TableOfContents } from "../components/TableOfContents"
import { InfoCard } from "../components/InfoCard"
import { InfoboxWrapper } from "../components/InfoboxWrapper"
import "./characterPage.css"
import { Trans, useTranslation } from "react-i18next"
import i18next from "i18next"
import { LinkPreview } from "../components/LinkPreview"

import previewFrameBottom from "../assets/Info_Card_Small_Bottom.png"
import previewFrameTop from "../assets/Info_Card_Small_Top.png"
import CaptionBackgroundLeft from "../assets/Journal_Miscellaneous_Caption_Left.png"
import CaptionBackgroundRight from "../assets/Journal_Miscellaneous_Caption_Right.png"
import infoboxBackground from "../assets/Main Menu.png"
import messageCardDivider from "../assets/Message_Card_Divider.png"
import dividerOrnateLeft from "../assets/Divider_Ornate_L.png"
import dividerOrnateRight from "../assets/Divider_Ornate_R.png"
import DialogueSelectorStart from "../assets/Dialogue_Selector_Start.png"
import DialogueSelectorEnd from "../assets/Dialogue_Selector_End.png"





export function Pharis() {
    const contentRef = useRef(null)
    const {t} = useTranslation("pharis")

    return (
        <>
            <div className="content-body">
                <div className="vector-column-start">
                    <div className="image-overlay">
                        <img src="src/assets/Main Menu.png" className="toc-background-img"/>
                        <span>
                            <TableOfContents contentRef={contentRef} />
                        </span>
                    </div>                
                </div>
                <main className="mw-content-container">
                    <h1 className={`${i18next.resolvedLanguage=="dov" && "firstHeading"} mw-first-heading`}>{t("mwFh")}</h1>
                    <p hidden={i18next.resolvedLanguage!="dov"} className="dovahzul">pharis dolm3n</p>
                    <div className="vector-content">
                        <div className="mw-body-content" ref={contentRef}>
                            <InfoboxWrapper
                                style={{ "--infobox-background": `url(${infoboxBackground})` }}
                            >
                                <table className="infobox vcard">
                                    <caption 
                                        className={`${i18next.resolvedLanguage=="dov" && "dovahzul-small"} infobox-title`}
                                        style={{
                                            "--infobox-title-background-left": `url(${CaptionBackgroundLeft})`,
                                            "--infobox-title-background-right": `url(${CaptionBackgroundRight})`,
                                        }}
                                    >
                                        {t("mwIbt")}
                                    </caption>
                                    <thead className="infobox-image-header">
                                        <tr>
                                            <td colSpan={2} className="infobox-img">
                                                <div className="infobox-image-frame" aria-hidden="true">
                                                    <div className="infobox-image-frame__middle" />
                                                    <img className="infobox-image-frame__top" src={previewFrameTop} alt="" />
                                                    <img className="infobox-image-frame__bottom" src={previewFrameBottom} alt="" />
                                                </div>
                                                <a href="/Pharis-Ironeye-home-page-banner-art.jpg">
                                                    <img src="/Pharis-Ironeye-home-page-banner-art.jpg" alt="Pharis Ironeye" height={155} width={170} className="mw-file-upright" />
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2}>
                                                <img className="infobox-image-divider" src={messageCardDivider} />
                                            </td>    
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {t("infobox", {returnObjects: true}).map((info) => {
                                            return <InfoCard key={info.title} info={info}/>
                                        })}
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={2}>
                                                <div className="infobox-footer__ornament" aria-hidden="true">
                                                    <img src={dividerOrnateLeft} />
                                                    <div className="infobox-footer__middle" />
                                                    <img src={dividerOrnateRight} />
                                                </div>
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </InfoboxWrapper>
                            <blockquote className="page-quote">
                                <div className="page-quote-frame" aria-hidden="true">
                                    <img className="page-quote-frame-start" src={DialogueSelectorStart} />
                                    <div className="page-quote-frame-middle" />
                                    <img className="page-quote-frame-end" src={DialogueSelectorEnd} />
                                </div>
                                <div className="quote-text-style">
                                    <span className={i18next.resolvedLanguage=="dov" && "dovahzul-quote-style"}>{t("mwQt")}</span>
                                </div>
                            </blockquote>
                            <section>
                                <p id="lead-paragraph-1" className={i18next.resolvedLanguage=="dov" && "dovahzul"}>
                                    <Trans i18nKey={"mwLp1"} ns="pharis" components={[

                                    ]}/>
                                </p>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2>Early life</h2>
                                </div>
                                <p>
                                    ...
                                </p>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2>Career</h2>
                                </div>
                                <p>

                                </p>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-3">
                                    <h3>Early career</h3>
                                </div>
                                <p>

                                </p>
                            </section>
                            <section>
                                <div>
                                    <h2>Skyrim</h2>
                                </div>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Arrival in Skyrim</h3>
                                    </div>
                                    <p>

                                    </p>
                                </section>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2>Factions and affiliations</h2>
                                </div>
                                <p>

                                </p>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Joining the Thieves Guild</h3>
                                    </div>
                                    <p>

                                    </p>
                                </section>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2>Notable events</h2>
                                </div>
                                <p>

                                </p>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2>Personal life</h2>
                                </div>
                                <p>

                                </p>
                                <section>
                                    <div>
                                        <h3>Personality</h3>
                                    </div>
                                    <p>

                                    </p>
                                </section>
                                <section>
                                    <div>
                                        <h3>Appearance</h3>
                                    </div>
                                    <p>
                                        
                                    </p>
                                </section>
                                <section>
                                    <div>
                                        <h3>Relationships</h3>
                                    </div>
                                    <p>

                                    </p>
                                </section>
                                <section>
                                    <div>
                                        <h3>Beliefs</h3>
                                    </div>
                                    <p>

                                    </p>
                                </section>
                            </section>
                            <section>
                                <div>
                                    <h2>Gallery</h2>
                                </div>
                                <div className="gallery-image-collection">
                                    <ul className="gallery-container"> 
                                        <li className="gallery-list-item">
                                            <span className="gallery-img">
                                                <a href="/bullseye-pharis-headshot-art-gore.jpg">
                                                    <img src="/bullseye-pharis-headshot-art-gore.jpg" width={300} height={169}/>
                                                </a>
                                                
                                            </span>
                                        </li>
                                        <li className="gallery-list-item">
                                            <span className="gallery-img">
                                                <a href="/Pharis-Ironeye-sunrise-sitting.jpg">
                                                    <img src="/Pharis-Ironeye-sunrise-sitting.jpg" width={300} height={169}/>
                                                </a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <h2>See also</h2>
                                </div>

                            </section>
                            <section>
                                <div>
                                    <h2>References</h2>
                                </div>

                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}