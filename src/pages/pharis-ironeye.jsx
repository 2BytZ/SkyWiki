import { useRef, useState } from "react"
import { TableOfContents } from "../components/TableOfContents"
import { InfoCard } from "../components/InfoCard"
import { InfoboxWrapper } from "../components/InfoboxWrapper"
import "./characterPage.css"
import { Trans, useTranslation } from "react-i18next"
import i18next from "i18next"
import { LinkPreview } from "../components/LinkPreview"
import { ImageModal } from "../components/ImageModal"
import { PageNotice } from "../components/PageNotice"
import { PageFooter } from "../components/PageFooter"

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
    const [tocHidden, setTocHidden] = useState(false);
    const [imageWidth, setImageWidth] = useState(0);
    
    return (
        <>
            <div className={`content-body${tocHidden ? " toc-hidden" : ""}`}>
                <div className="vector-column-start">
                    <div  className="image-overlay" >
                        <div className="hide-toc-button">
                            <span>{tocHidden ? "Show" : "Hide"}</span>
                            <span className="toc-toggle-wrapper">
                                <button
                                    type="button"
                                    aria-controls="table-of-contents"
                                    aria-expanded={!tocHidden}
                                    onClick={() => setTocHidden(!tocHidden)}
                                    style={{width: "20px", height: "20px"}}
                                >
                                </button>
                                <img src="src/assets/Checkmark.png" className="toc-toggle-checkbox" />
                                <img
                                    src="src/assets/Checkmark Check.png"
                                    className="toc-toggle-check"
                                    hidden={!tocHidden}
                                />
                            </span>
                        </div>
                        <div id="table-of-contents" hidden={tocHidden}>
                            <img src="src/assets/Main Menu.png" className="toc-background-img"/>
                            <span>
                                <TableOfContents contentRef={contentRef} />
                            </span>
                        </div>
                    </div>
                </div>
                <main className="mw-content-container">
                    {PageNotice("construction")}
                    {PageNotice("missing-translation")}
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
                                            <td colSpan="2" className="infobox-img" style={{ "--imageWidth": imageWidth }}>
                                                <div className="infobox-image-frame" aria-hidden="true">
                                                    <div className="infobox-image-frame__middle" />
                                                    <img className="infobox-image-frame__top" src={previewFrameTop} alt="" />
                                                    <img className="infobox-image-frame__bottom" src={previewFrameBottom} alt="" />
                                                </div>
                                                <ImageModal>
                                                    <img id="profile-img" ref={(el) => { if (el?.complete) setImageWidth(el.naturalWidth); }} onLoad={(e) => setImageWidth(e.currentTarget.naturalWidth)} src="/Pharis-Ironeye-home-page-banner-art.jpg" alt="Pharis Ironeye" className="mw-file-upright" />
                                                </ImageModal>
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
                                    <tfoot className="infobox-footer">
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
                                    <Trans i18nKey="mwLp1" ns="pharis">
                                        [Placeholder] An expert bounty hunter and assassin. He loves drinking, like, a lot, but he's not an alcoholic. He his quick with his hands and therefore pretty good at stealing. Though, he doesn't do it much, and does so only when necessary, unless it's a quick drink and he's short on Septims, if you know what I mean. He is an Archer, once an aspired one, but now a true Archer through and through with the reputation and effort he's put in from his time as bounty hunter/assassin. 'You won't find anyone better for the job in all of Tamriel!' Or so he says.
                                    </Trans>
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
                                <div className="mw-heading mw-heading-2">
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
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Personality</h3>
                                    </div>
                                    <p>

                                    </p>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Appearance</h3>
                                    </div>
                                    <p>
                                        
                                    </p>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Relationships</h3>
                                    </div>
                                    <p>

                                    </p>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Beliefs</h3>
                                    </div>
                                    <p>

                                    </p>
                                </section>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2>Gallery</h2>
                                </div>
                                <div className="gallery-image-collection">
                                    <ul className="gallery-container"> 
                                        <li className="gallery-list-item">
                                            <span className="gallery-img">
                                                <ImageModal>
                                                    <img src="/bullseye-pharis-headshot-art-gore.jpg" width={300} height={169}/>
                                                </ImageModal>                                        
                                            </span>
                                        </li>
                                        <li className="gallery-list-item">
                                            <span className="gallery-img">
                                                <ImageModal>
                                                    <img src="/Pharis-Ironeye-sunrise-sitting.jpg" width={300} height={169}/>
                                                </ImageModal>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2>See also</h2>
                                </div>

                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2>References</h2>
                                </div>

                            </section>
                        </div>
                    </div>
                </main>
                <PageFooter/>
            </div>
        </>
    )
}