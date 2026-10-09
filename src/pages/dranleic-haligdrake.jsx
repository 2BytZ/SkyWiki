import { useRef } from "react"
import { TableOfContents } from "../components/TableOfContents"
import { InfoCard } from "../components/InfoCard"
import "./characterPage.css"
import { Trans, useTranslation } from "react-i18next"
import i18next from "i18next"
import { LinkPreview } from "../components/LinkPreview"

import DialogueSelectorStart from "../assets/Dialogue_Selector_Start.png"
import DialogueSelectorEnd from "../assets/Dialogue_Selector_End.png"



export function Dranleic() {
    const contentRef = useRef(null)
    const {t} = useTranslation("dranleic");

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
                    <p hidden={i18next.resolvedLanguage!="dov"} className="dovahzul">dranl2c revakdov4</p>
                    <div className="vector-content">
                        <div className="mw-body-content" ref={contentRef}>
                            <div className="infobox-wrapper">
                                <table className="infobox vcard">
                                    <caption className={`${i18next.resolvedLanguage=="dov" && "dovahzul-small"} infobox-title`}>{t("mwIbt")}</caption>
                                    <tbody>
                                        <tr>
                                            <td colSpan="2" className="infobox-img">
                                                <a href="/dranleic-haligdrake-powerful-clenched-fist2.jpg">
                                                    <img src="/dranleic-haligdrake-powerful-clenched-fist2.jpg" alt="Dranleic Haligdrake" height="155" width="170" className="mw-file-upright" />
                                                </a>
                                            </td>
                                        </tr>
                                        {t("infobox", {returnObjects: true}).map((info) => {
                                            return <InfoCard key={info.title} info={info}/>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <blockquote className="page-quote">
                                <div className="page-quote-frame" aria-hidden="true">
                                    <img className="page-quote-frame-start" src={DialogueSelectorStart} alt="" />
                                    <div className="page-quote-frame-middle" />
                                    <img className="page-quote-frame-end" src={DialogueSelectorEnd} alt="" />
                                </div>
                                <div className="quote-text-style">
                                    <span className={i18next.resolvedLanguage=="dov" && "dovahzul-quote-style"}>{t("mwQt")}</span>
                                    <p className="dovahzul-english">{t("mwQtT")}</p>
                                </div>
                            </blockquote>
                            <section>
                                <p id="lead-paragraph-1" className={i18next.resolvedLanguage=="dov" && "dovahzul"}>
                                    <Trans i18nKey="mwLp1" ns="dranleic" components={[
                                        <b />, 
                                        <LinkPreview url={"https://en.uesp.net/wiki/Lore:Argonian"} />,
                                        <LinkPreview url={"https://en.uesp.net/wiki/Lore:Last_Dragonborn"} />, 
                                        <LinkPreview url={"https://en.uesp.net/wiki/Lore:Thieves_Guild"} />, 
                                        <LinkPreview url={"https://en.uesp.net/wiki/Lore:Dark_Brotherhood"} />,
                                        <LinkPreview url={"https://en.uesp.net/wiki/Lore:Skyrim"} />,
                                        <LinkPreview url={"https://en.uesp.net/wiki/Skyrim:Jarl"} />,
                                        <LinkPreview url={"https://en.uesp.net/wiki/Lore:Cyrodiil"} />,
                                        <LinkPreview url={"https://en.uesp.net/wiki/Lore:Tamriel"} />,
                                        <LinkPreview url={"https://en.uesp.net/wiki/Lore:Dragonborn"} />]}/>
                                </p>
                                <p hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-english"><b>Dranleic Revakdovah</b> los aan punmak <LinkPreview url="https://en.uesp.net/wiki/Lore:Argonian">Siigonis</LinkPreview> kendov, tafiir ahrk ahvulon, saag kos faal <LinkPreview url="https://en.uesp.net/wiki/Lore:Last_Dragonborn">Dovahkiin do zoor</LinkPreview>. Piraak gronne wah sahrotwultriintokahhe grik ol faal <LinkPreview url="https://en.uesp.net/wiki/Lore:Thieves_Guild">Tafiirretokah</LinkPreview> ahrk faal <LinkPreview url="https://en.uesp.net/wiki/Lore:Dark_Brotherhood">Vulzeymahmaar</LinkPreview>, rok ahk lost gevothendhe wah muz ko kostaadde do soleyk ahst <LinkPreview url="https://en.uesp.net/wiki/Lore:Skyrim">Keizaal</LinkPreview>, grik ol faal <LinkPreview url="https://en.uesp.net/wiki/Skyrim:Jarl">Bronjunne</LinkPreview>. Dranleic yeinne nol <LinkPreview url="https://en.uesp.net/wiki/Lore:Cyrodiil">Sarodaal</LinkPreview> ko <LinkPreview url="https://en.uesp.net/wiki/Lore:Tamriel">Taazokaan</LinkPreview>. Ok vahzah bok ahrk zahvos lafaanne los vomindok; vutharaak, frolokvon wah kopraanuvgenund ahrk trahkiinne, nii los korah rok lost kiin ko fin laat hefbeneruvos. Dranleic los aan dufrahkei fussevokul ahrk lakif ahst Keizaal. To nii los saag tol rok los faal <LinkPreview url="https://en.uesp.net/wiki/Lore:Dragonborn">Dovahkiin</LinkPreview>, pogaan tursaalle vorolur fah do fin pogaat nostigge rok lost drah ahrk tahrovin rok lost drun ko ok tiid ahst Keizaal.</p>
                                <p>
                                    Dranleic has been largely involved in some of the biggest criminal events Tamriel has experienced since <a href="">The Assassination of Emperor Uriel Septim VII</a>
                                    <sup>
                                        <a href="">
                                            <span>
                                                <span>[</span>
                                                1
                                                <span>]</span>
                                            </span>
                                        </a>
                                    </sup> and has played a major hand in those criminal operations, often being the centerpiece of the operations &mdash; operations such as <a href="">The Attempted Assassination of Emperor Titus Mede II</a> and the subsequent successful <a href="">assassination of Emperor Titus Mede II</a>, <a href="">The Escape of Cidhna Mine</a> with <a href="https://en.uesp.net/wiki/Lore:Madanach">Madanach</a> and the bloodbath that followed, <a href="">The Assassination of Vittoria Vici</a>, the soon-to-be spouse of <a href="https://en.uesp.net/wiki/Skyrim:Asgeir_Snow-Shod">Asgier Snow-Shod</a>, along with the takeovers of the major holds of Skyrim: the city of Whiterun, Falkreath, Markarth, and Solitude.
                                </p>
                                <p>
                                    Dranleic Haligdrake also had a big influence in the restoration and resurgence of the Thieves Guild and the revitalization of the Dark Brotherhood. For these reasons, Dranleic Haligdrake is known throughout Skyrim, and many fear encountering him and what may happen to them and their families. Therefore, Dranleic is fierce and a force not to be reckoned with.
                                </p>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2 id="Early_life">Early life</h2>
                                </div>
                                <p>
                                    Very little is known about Dranleic regarding his origins and the early days of his life. Ever since he was sentenced to execution in Helgen, along with other bandits, thieves, and Ulfric Stormcloak, almost nothing about him or his past has been known to anyone in Skyrim. It's as if Dranleic suddenly appeared in Skyrim and was unfortunately bundled together with other petty thieves and bandits ready for the chopping block. Some say that he was trying to cross the border of Skyrim to return home but was caught in an Imperial ambush.
                                </p>
                                <p>
                                    Even though there is little to nothing to know for certain about his origins and past, it is still very much possible to speculate. For example, there are clear signs that point to Dranleic Haligdrake originating from Cyrodiil, as well as him being an orphan, seeing as he is so far from home and hasn't had any contact with his potential parents for so long, and also hasn't made an attempt to go back to his homeland. It's also fair to say that Dranleic likely isn't immortal, and so, with his young and strong stature, can confidently say that he must have been born in the 4th era, within the last decade or half-decade. 
                                </p>
                                <p>
                                    The exact date of his birth is also very unclear, to say the least, but theories from sorcerers and their studies suggest he was born around the time of the first week of the third month of the year. So although speculative, this is the most information available related to Dranleic's past.
                                </p>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2 id="Career">Career</h2>
                                </div>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Early_career">Early career</h3>
                                    </div>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Escape_from_Helgen">Escape from Helgen</h4>
                                        </div>
                                        <p>
                                            
                                        </p>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Thanehood_in_Whiterun">Thanehood in Whiterun</h4>
                                        </div>
                                        <p>
                                            
                                        </p>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="The_Greybeards_call">The Greybeards' call</h4>
                                        </div>
                                        <p>
                                            
                                        </p>
                                    </section>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Joining_the_Thieves_Guild">Joining the Thieves Guild</h3>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Becoming_a_Nightingale">Becoming a Nightingale</h4>
                                        </div>
                                        <p>
                                            
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Restoration_of_the_Thieves_Guild">Restoration of the Thieves Guild</h4>
                                        </div>
                                        <p>
                                            
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Becoming_Guildmaster">Becoming Guildmaster</h4>
                                        </div>
                                        <p>
                                            
                                        </p>
                                    </section>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Joining_the_Companions">Joining the Companions</h3>
                                    </div>
                                    <p>
                                        
                                    </p>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Joining_the_Dark_Brotherhood">Joining the Dark Brotherhood</h3>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Revitalizing_the_Dark_Brotherhood">Revitalizing the Dark Brotherhood</h4>
                                        </div>
                                        <p>
                                            
                                        </p>
                                    </section>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Alliance_with_the_Stormcloaks">Alliance with the Stormcloaks</h3>
                                    </div>
                                    <p>
                                        
                                    </p>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Becoming_Thane_of_the_holds">Becoming Thane of the holds</h3>
                                    </div>
                                    <p>
                                        
                                    </p>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Pledging_allegiance_with_the_vampires">Pledging allegiance with the vampires</h3>
                                    </div>
                                    <p>
                                        
                                    </p>
                                </section>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2 id="Notable_events">Notable events</h2>
                                </div>

                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Escaping_from_Cidhna_Mine">Escaping from Cidhna Mine</h3>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Battle_of_the_Forsworn">Battle of the Forsworn</h4>
                                        </div>
                                        <div role="note" className="hatnote">
                                            See also: <a href="https://en.uesp.net/wiki/Lore:Forsworn_Rebellion">The Forsworn Rebellion</a>
                                        </div>
                                        <p>
                                            
                                        </p>
                                    </section>
                                </section>

                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Return_of_the_Dark_Brotherhood">Return of the Dark Brotherhood</h3>
                                    </div>
                                    <p>
                                        
                                    </p>
                                        <div>
                                            <h4 id="The_murder_of_Vittoria_Vici">The murder of Vittoria Vici</h4>
                                        </div>
                                        <div role="note" className="hatnote">
                                            See also: <a href="">The Assassination of Vittoria Vici</a>
                                        </div>
                                        <p>

                                        </p>
                                        <div>
                                            <h4 id="The_assassination_of_Gaius_Maro">The assassination of Gaius Maro</h4>
                                        </div>
                                        <p>

                                        </p>
                                        <div>
                                            <h4 id="The_murder_of_the_Mysterious_Gourmet">The murder of the Mysterious Gourmet</h4>
                                        </div>
                                        <p>

                                        </p>
                                        <div>
                                            <h4 id="Attempted_assassination_of_the_Emperor">Attempted assassination of the Emperor</h4>
                                        </div>
                                        <div role="note" className="hatnote">
                                            See also: <a href="">The Attempted Assassination of Emperor Titus Mede II</a>
                                        </div>
                                        <p>

                                        </p>
                                        <div>
                                            <h4 id="The_assassination_of_Emperor_Titus_Mede_II">The assassination of Emperor Titus Mede II</h4>
                                        </div>
                                        <div role="note" className="hatnote">
                                            See also: <a href="">The Assassination of Emperor Titud Mede II</a>
                                        </div>
                                        <p>
                                            
                                        </p>
                                </section>
                                <section>
                                    <div>
                                        <h3 id="Civil_war">Civil war</h3>
                                    </div>
                                    <div role="note" className="hatnote">
                                        See also: <a href="https://en.uesp.net/wiki/Lore:Stormcloak_Rebellion">Skyrim Civil War</a>
                                    </div>
                                    <p>
                                        [...] Played a big part in the <a href="https://en.uesp.net/wiki/Lore:Stormcloak_Rebellion">Stormcloak rebellion</a> and their success in <a href="">the battle for Solitude</a>...
                                    </p>
                                    <div>
                                        <h4 id="Whiterun_city_takeover">Whiterun city takeover</h4>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <div>
                                        <h4 id="Liberation_of_Falkreath">Liberation of Falkreath</h4>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <div>
                                        <h4 id="Liberation_of_the_Reach">Liberation of the Reach</h4>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <div>
                                        <h4 id="Liberation_of_Hjaalmarch">Liberation of Hjaalmarch</h4>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <div>
                                        <h4 id="Liberation_of_the_Pale">Liberation of the Pale</h4>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <div>
                                        <h4 id="Liberation_of_Winterhold">Liberation of Winterhold</h4>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <div>
                                        <h4 id="Liberation_of_the_Rift">Liberation of the Rift</h4>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <div>
                                        <h4 id="Liberation_of_Haalfingar">Liberation of Haalfingar</h4>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <div>
                                        <h4 id="The_battle_for_Solitude">The battle for Solitude</h4>
                                    </div>
                                    <div role="note" className="hatnote">
                                        See also: <a href="">The Battle of Solitude</a>
                                    </div>
                                    <p>
                                        
                                    </p>

                                </section>
                            </section>
                            <section>
                                <div className="mw-header mw-header-2">
                                    <h2 id="Personal_life">Personal life</h2>
                                </div>
                                <p>

                                </p>
                                
                                <section>
                                    <div>
                                        <h3 id="Personality">Personality</h3>
                                    </div>
                                    <p>

                                    </p>
                                </section>
                                <section>
                                    <div>
                                        <h3 id="Appearance">Appearance</h3>
                                    </div>
                                    <p>

                                    </p>
                                </section>
                                <section>
                                    <div>
                                        <h3 id="Relationships">Relationships</h3>
                                    </div>
                                    <p>
                                        
                                    </p>
                                </section>
                                <section>
                                    <div>
                                        <h3 id="Beliefs">Beliefs</h3>
                                    </div>
                                </section>
                            </section>
                            <section>
                                <div>
                                    <h2 id="Gallery">Gallery</h2>
                                </div>
                                <div className="gallery-image-collection">
                                    <ul className="gallery-container">
                                        <li className="gallery-list-item">
                                            <span className="gallery-img">
                                                <a href="/dranleic-execution-whiterun-takeover.jpg">
                                                    <img src="/dranleic-execution-whiterun-takeover.jpg" width={300} height={169}/>
                                                </a>
                                            </span>
                                        </li>
                                        <li className="gallery-list-item">
                                            <span className="gallery-img">
                                                <a href="/dranleic-sneak-execution-guard.jpg">
                                                    <img src="/dranleic-sneak-execution-guard.jpg" width={300} height={169}/>
                                                </a>
                                            </span>
                                        </li>
                                        <li className="gallery-list-item">
                                            <span className="gallery-img">
                                                <a href="/dranleic-execution-petty-bandit-gore.jpg">
                                                    <img src="/dranleic-execution-petty-bandit-gore.jpg" width={300} height={169}/>
                                                </a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <h2 id="See_also">See also</h2>
                                </div>
                                Emperor Uriel Septim VII (https://en.uesp.net/wiki/Lore:Uriel_VII)
                                Emperor Titus Mede II (https://en.uesp.net/wiki/Lore:Titus_Mede_II)
                                Asgier Snow-Shod (https://en.uesp.net/wiki/Skyrim:Asgeir_Snow-Shod)
                                Vittoria Vici (https://en.uesp.net/wiki/Skyrim:Vittoria_Vici)
                            </section>
                            <section>
                                <div>
                                    <h2 id="References">References</h2>
                                </div>
                                Uriel VII assassination (https://en.uesp.net/wiki/Lore:Assassination!)
                                1. ^ "SPECIAL EDITION! EMPEROR AND HEIRS ASSASSINATED!". The Black Horse Courier. approx. 27th of Last Seed, 3E 433.

                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}