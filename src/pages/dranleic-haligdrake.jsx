import { useRef } from "react"
import { TableOfContents } from "../components/TableOfContents"
import { InfoCard } from "../components/InfoCard"
import { InfoboxWrapper } from "../components/InfoboxWrapper"
import "./characterPage.css"
import { Trans, useTranslation } from "react-i18next"
import i18next from "i18next"
import { LinkPreview } from "../components/LinkPreview"
import { ImageModal } from "../components/ImageModal"

import DialogueSelectorStart from "../assets/Dialogue_Selector_Start.png"
import DialogueSelectorEnd from "../assets/Dialogue_Selector_End.png"
import previewFrameBottom from "../assets/Info_Card_Small_Bottom.png"
import previewFrameTop from "../assets/Info_Card_Small_Top.png"
import CaptionBackgroundLeft from "../assets/Journal_Main_Quest_Caption_Left.png"
import CaptionBackgroundRight from "../assets/Journal_Main_Quest_Caption_Right.png"
import infoboxBackground from "../assets/Main Menu.png"
import messageCardDivider from "../assets/Message_Card_Divider.png"
import dividerOrnateLeft from "../assets/Divider_Ornate_L.png"
import dividerOrnateRight from "../assets/Divider_Ornate_R.png"



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
                                            <td colSpan="2" className="infobox-img">
                                                <div className="infobox-image-frame" aria-hidden="true">
                                                    <div className="infobox-image-frame__middle" />
                                                    <img className="infobox-image-frame__top" src={previewFrameTop} alt="" />
                                                    <img className="infobox-image-frame__bottom" src={previewFrameBottom} alt="" />
                                                </div>
                                                <ImageModal>
                                                    <img src={"/dranleic-haligdrake-powerful-clenched-fist2.jpg"} alt="Dranleic Haligdrake" height="155" width="170" className="mw-file-upright" />
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
                                                    <img src={dividerOrnateLeft} alt="" />
                                                    <div className="infobox-footer__middle" />
                                                    <img src={dividerOrnateRight} alt="" />
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
                                    <p className="dovahzul-english">{t("mwQtT")}</p>
                                </div>
                            </blockquote>
                            <section>
                                <p id="lead-paragraph-1" className={i18next.resolvedLanguage=="dov" && "dovahzul"}>
                                    <Trans i18nKey="mwLp1" ns="dranleic">
                                        <strong>Dranleic Haligdrake</strong> is a male <LinkPreview url={"https://en.uesp.net/wiki/Lore:Argonian"}>Argonian</LinkPreview> warrior, thief and assassin, said to be the <LinkPreview url={"https://en.uesp.net/wiki/Lore:Last_Dragonborn"}>Dragonborn of legend</LinkPreview>. Having ties to notable criminal factions such as the <LinkPreview url={"https://en.uesp.net/wiki/Lore:Thieves_Guild"} >Thieves Guild</LinkPreview> and the <LinkPreview url={"https://en.uesp.net/wiki/Lore:Dark_Brotherhood"}>Dark Brotherhood</LinkPreview>, he also has connections with people in positions of power in <LinkPreview url={"https://en.uesp.net/wiki/Lore:Skyrim"}>Skyrim</LinkPreview>, such as the <LinkPreview url={"https://en.uesp.net/wiki/Skyrim:Jarl"}>Jarls</LinkPreview>. Dranleic hails from <LinkPreview url={"https://en.uesp.net/wiki/Lore:Cyrodiil"}>Cyrodiil</LinkPreview> in <LinkPreview url={"https://en.uesp.net/wiki/Lore:Tamriel"}>Tamriel</LinkPreview>. His true age and potential parents are unknown; however, based on physical appearance and attributes, it is believed he was born in the last half-century. Dranleic is a notorious force of evil and mischief in Skyrim. Although it is said that he is the <LinkPreview url={"https://en.uesp.net/wiki/Lore:Dragonborn"} >Dragonborn</LinkPreview>, many citizens disagree because of the various misdeeds he has committed and chaos he has caused during his time in Skyrim.
                                    </Trans>
                                </p>
                                <p hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-english"><b>Dranleic Revakdovah</b> los aan punmak <LinkPreview url="https://en.uesp.net/wiki/Lore:Argonian">Siigonis</LinkPreview> kendov, tafiir ahrk ahvulon, saag kos faal <LinkPreview url="https://en.uesp.net/wiki/Lore:Last_Dragonborn">Dovahkiin do zoor</LinkPreview>. Piraak gronne wah sahrotwultriintokahhe grik ol faal <LinkPreview url="https://en.uesp.net/wiki/Lore:Thieves_Guild">Tafiirretokah</LinkPreview> ahrk faal <LinkPreview url="https://en.uesp.net/wiki/Lore:Dark_Brotherhood">Vulzeymahmaar</LinkPreview>, rok ahk lost gevothendhe wah muz ko kostaadde do soleyk ko <LinkPreview url="https://en.uesp.net/wiki/Lore:Skyrim">Keizaal</LinkPreview>, grik ol faal <LinkPreview url="https://en.uesp.net/wiki/Skyrim:Jarl">Bronjunne</LinkPreview>. Dranleic yein nol <LinkPreview url="https://en.uesp.net/wiki/Lore:Cyrodiil">Sarodaal</LinkPreview> ko <LinkPreview url="https://en.uesp.net/wiki/Lore:Tamriel">Taazokaan</LinkPreview>. Ok vahzah bok ahrk zahvos lafaanne los vomindok; vutharaak, frolokvon wah kopraanuvgenund ahrk trahkiinne, nii los korah rok lost kiin ko fin laat hefbeneruvos. Dranleic los aan dufrahkei fussevokul ahrk lakif ahst Keizaal. To nii los saag tol rok los faal <LinkPreview url="https://en.uesp.net/wiki/Lore:Dragonborn">Dovahkiin</LinkPreview>, pogaan tursaalle vorolur fah do fin pogaat nostigge rok lost drah ahrk tahrovin rok lost drun ko ok tiid ahst Keizaal.</p>
                                
                                <p id="lead-paragraph-2" className={i18next.resolvedLanguage=="dov" && "dovahzul"}>
                                    <Trans i18nKey="mwLp2" ns="dranleic">
                                        Dranleic has been largely involved in some of the biggest criminal events Tamriel has experienced since <LinkPreview url="https://en.uesp.net/wiki/Lore:Uriel_Septim_VII">The Assassination of Emperor Uriel Septim VII</LinkPreview><sup style={{fontFamily:"skyrim"}}>[1]</sup> and has played a major hand in those criminal operations, often being the centerpiece of the operations &mdash; operations such as <LinkPreview url="">The Attempted Assassination of Emperor Titus Mede II</LinkPreview> and the subsequent successful <LinkPreview url="">assassination of Emperor Titus Mede II</LinkPreview>, <LinkPreview url="">The Escape of Cidhna Mine</LinkPreview> with <LinkPreview url="https://en.uesp.net/wiki/Lore:Madanach">Madanach</LinkPreview> and the bloodbath that followed, <LinkPreview url="">The Assassination of Vittoria Vici</LinkPreview>, the soon-to-be spouse of <LinkPreview url="https://en.uesp.net/wiki/Skyrim:Asgeir_Snow-Shod">Asgier Snow-Shod</LinkPreview>, along with the takeovers of the major holds of Skyrim: the city of <LinkPreview url="https://en.uesp.net/wiki/Lore:Whiterun">Whiterun</LinkPreview>, <LinkPreview url="https://en.uesp.net/wiki/Lore:Falkreath">Falkreath</LinkPreview>, <LinkPreview url="https://en.uesp.net/wiki/Lore:Markarth">Markarth</LinkPreview>, and <LinkPreview url="https://en.uesp.net/wiki/Lore:Solitude">Solitude</LinkPreview>.
                                    </Trans>
                                </p>
                                <p hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-english">Dranleic kosaan lokgaar vothizaan ko osos do fin zusaak wultriin korosendde Taazokaan seirakaan fah <LinkPreview url="https://en.uesp.net/wiki/Lore:Uriel_Septim_VII">fin kriivat do jun Uriel Septim zost</LinkPreview><sup>[1]</sup> ahrk kosaan aan gaat droliik ko daar wultriin rakendde, grinstiid kos fin thermalur do fin rakendde &mdash; rakendde grik ol <LinkPreview url="">fin togaat kriivat do jun Titus Mede ziist</LinkPreview> ahrk fin zopruntaas <LinkPreview url="">kriivat do jun Titus Mede ziist</LinkPreview> mindindaar, <LinkPreview url="">fin filok do Cidhna vungol</LinkPreview> voth <LinkPreview url="https://en.uesp.net/wiki/Lore:Madanach">Madanach</LinkPreview> ahrk fin soswursk daar kiibokaan, <LinkPreview>fin kriivat do Vittoria Vici</LinkPreview>, faal dasuskos wolov do <LinkPreview url="https://en.uesp.net/wiki/Skyrim:Asgeir_Snow-Shod">Asgier Snow-Shod</LinkPreview>, asamit voth fin vaarnurelvon do fin gevildde do Keizaal: fin hiim do <LinkPreview url="https://en.uesp.net/wiki/Lore:Whiterun">Ahrolsedovah</LinkPreview>, <LinkPreview url="https://en.uesp.net/wiki/Lore:Falkreath">Quethsegolahrol</LinkPreview>, <LinkPreview url="https://en.uesp.net/wiki/Lore:Markarth">Golzewer</LinkPreview>, ahrk <LinkPreview url="https://en.uesp.net/wiki/Lore:Solitude">Bromgrindol</LinkPreview>.</p>

                                <p>
                                    Dranleic had a big influence in the outcome of the <LinkPreview url="https://en.uesp.net/wiki/Lore:Stormcloak_Rebellion">civil war</LinkPreview>, restoration and resurgence of the Thieves Guild as well as the revitalization of the Dark Brotherhood, helped to put an end to the <LinkPreview url="https://en.uesp.net/wiki/Lore:Return_of_the_Dragons">Dragon Crisis</LinkPreview> by defeating <LinkPreview url="https://en.uesp.net/wiki/Lore:Alduin">Alduin</LinkPreview> the Firstborn of Akatosh, among other achievements.
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
                                        See also: <a href="https://en.uesp.net/wiki/Lore:Stormcloak_Rebellion">Stormcloak Rebellion</a>
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
                                                <ImageModal>
                                                    <img src="/dranleic-execution-whiterun-takeover.jpg" width={300} height={169}/>
                                                </ImageModal>
                                            </span>
                                        </li>
                                        <li className="gallery-list-item">
                                            <span className="gallery-img">
                                                <ImageModal>
                                                    <img src="/dranleic-sneak-execution-guard.jpg" width={300} height={169}/>
                                                </ImageModal>
                                            </span>
                                        </li>
                                        <li className="gallery-list-item">
                                            <span className="gallery-img">
                                                <ImageModal>
                                                    <img src="/dranleic-execution-petty-bandit-gore.jpg" width={300} height={169}/>
                                                </ImageModal>
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