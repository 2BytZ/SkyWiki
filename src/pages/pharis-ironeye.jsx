import { useRef } from "react"
import { TableOfContents } from "../components/TableOfContents"
import { InfoCard } from "../components/InfoCard"
import "./characterPage.css"
import { Trans, useTranslation } from "react-i18next"
import i18next from "i18next"
import { LinkPreview } from "../components/LinkPreview"

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
                    </div>                </div>
                <main className="mw-content-container">
                    <h1 id="top" className="firstheading mw-first-heading">Pharis Ironeye</h1>
                    <div className="vector-content">
                        <div className="mw-body-content" ref={contentRef}>
                            <div className="infobox-wrapper">
                                <table className="infobox vcard">
                                    <caption className="infobox-title">Pharis Ironeye</caption>
                                    <thead>
                                        <tr>
                                            <td colSpan={2} className="infobox-img">
                                                <a href="/Pharis-Ironeye-home-page-banner-art.jpg">
                                                    <img src="/Pharis-Ironeye-home-page-banner-art.jpg" alt="Pharis Ironeye" height={155} width={170} className="mw-file-upright" />
                                                </a>
                                                
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {t("infobox", {returnObjects: true}).map((info) => {
                                            return <InfoCard key={info.title} info={info}/>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <blockquote className="page-quote">
                                <div className="quote-style">"</div>
                                <div className="quote-text-style">
                                    You won't find anyone better in all of Tamriel, my friend!
                                </div>
                            </blockquote>
                            <section>
                                <p id="lead-paragraph-1" className={i18next.resolvedLanguage=="dov" && "dovahzul"}>
                                    <Trans i18nKey={"mwLp1"} ns="pharis" components={
                                        [

                                        ]
                                    } />
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