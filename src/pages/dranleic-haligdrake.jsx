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
import { Cite, FootnoteList, FootnoteProvider } from "../components/Footnotes";
import sources from "../data/sources/dranleic.json";

import DialogueSelectorStart from "../assets/Dialogue_Selector_Start.png"
import DialogueSelectorEnd from "../assets/Dialogue_Selector_End.png"
import previewFrameBottom from "../assets/Info_Card_Small_Bottom_Preview.png"
import previewFrameTop from "../assets/Info_Card_Small_Top_Preview.png"
import infoboxImageFrameBottom from "../assets/Info_Card_Small_Bottom.png"
import infoboxImageFrameTop from "../assets/Info_Card_Small_Top.png"
import CaptionBackgroundLeft from "../assets/Journal_Main_Quest_Caption_Left.png"
import CaptionBackgroundRight from "../assets/Journal_Main_Quest_Caption_Right.png"
import infoboxBackground from "../assets/Main Menu.png"
import messageCardDivider from "../assets/Message_Card_Divider.png"
import dividerOrnateLeft from "../assets/Divider_Ornate_L.png"
import dividerOrnateRight from "../assets/Divider_Ornate_R.png"
import CheckmarkBox from "../assets/Checkmark.png"
import CheckmarkCheck from  "../assets/Checkmark Check.png"
import TOCBackgroundImage from "../assets/Main Menu.png"



export function Dranleic() {
    const contentRef = useRef(null);
    const [tocHidden, setTocHidden] = useState(false);
    const {t} = useTranslation("dranleic");
    const [imageWidth, setImageWidth] = useState(0);

    return (
        <FootnoteProvider sources={sources}>
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
                                <img src={CheckmarkBox} className="toc-toggle-checkbox" />
                                <img
                                    src={CheckmarkCheck}
                                    className="toc-toggle-check"
                                    hidden={!tocHidden}
                                />
                            </span>
                        </div>
                        <div id="table-of-contents" hidden={tocHidden}>
                            <img src={TOCBackgroundImage} className="toc-background-img"/>
                            <span>
                                <TableOfContents contentRef={contentRef} />
                            </span>
                        </div>
                    </div>
                </div>
                <main className="mw-content-container">
                    {PageNotice("language")}
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
                                            <td colSpan="2" className="infobox-img" style={{ "--imageWidth": imageWidth }}>
                                                <div className="infobox-image-frame" aria-hidden="true">
                                                    <div className="infobox-image-frame__middle" />
                                                    <img className="infobox-image-frame__top" src={infoboxImageFrameTop} />
                                                    <img className="infobox-image-frame__bottom" src={infoboxImageFrameBottom} />
                                                </div>
                                                <ImageModal>
                                                    <img id="profile-img" ref={(el) => { if (el?.complete) setImageWidth(el.naturalWidth); }} onLoad={(e) => setImageWidth(e.currentTarget.naturalWidth)} src={"/dranleic-haligdrake-powerful-clenched-fist2.jpg"} alt="Dranleic Haligdrake" className="mw-file-upright" />
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
                                        <strong>Dranleic Haligdrake</strong> (or <strong>Dranleic "Revakdovah"</strong> lit. <i>"Holy-Dragon"</i> in <LinkPreview url={"https://en.uesp.net/wiki/Lore:Dragon_Language"}>Dovahzul</LinkPreview>), also known as the <strong>Dragonborne</strong>, the <strong>Rider of Night</strong>, <strong>Dragonborn of Darkness</strong>, and <strong>Alduin's Scale</strong>, is a male <LinkPreview url={"https://en.uesp.net/wiki/Lore:Argonian"}>Argonian</LinkPreview> warrior, thief and assassin, said to be the <LinkPreview url={"https://en.uesp.net/wiki/Lore:Last_Dragonborn"}>Dragonborn of legend</LinkPreview>. Having ties to notable criminal factions such as the <LinkPreview url={"https://en.uesp.net/wiki/Lore:Thieves_Guild"} >Thieves Guild</LinkPreview> and the <LinkPreview url={"https://en.uesp.net/wiki/Lore:Dark_Brotherhood"}>Dark Brotherhood</LinkPreview>, he also has connections with people in positions of power in <LinkPreview url={"https://en.uesp.net/wiki/Lore:Skyrim"}>Skyrim</LinkPreview>, such as the <LinkPreview url={"https://en.uesp.net/wiki/Skyrim:Jarl"}>Jarls</LinkPreview>. Dranleic hails from <LinkPreview url={"https://en.uesp.net/wiki/Lore:Cyrodiil"}>Cyrodiil</LinkPreview> in <LinkPreview url={"https://en.uesp.net/wiki/Lore:Tamriel"}>Tamriel</LinkPreview>. His true age and potential parents are unknown; however, based on physical appearance and attributes, it is believed he was born in the last half-century. Dranleic is a notorious force of evil and mischief in Skyrim. Although it is said that he is the <LinkPreview url={"https://en.uesp.net/wiki/Lore:Dragonborn"} >Dragonborn</LinkPreview>, many citizens disagree because of the various misdeeds he has committed and chaos he has caused during his time in Skyrim.
                                    </Trans>
                                </p>
                                <p hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-english"><b>Dranleic Revakdovah</b> los aan punmak <LinkPreview url="https://en.uesp.net/wiki/Lore:Argonian">Siigonis</LinkPreview> kendov, tafiir ahrk ahvulon, saag kos faal <LinkPreview url="https://en.uesp.net/wiki/Lore:Last_Dragonborn">Dovahkiin do zoor</LinkPreview>. Piraak gronne wah sahrotwultriintokahhe grik ol faal <LinkPreview url="https://en.uesp.net/wiki/Lore:Thieves_Guild">Tafiirretokah</LinkPreview> ahrk faal <LinkPreview url="https://en.uesp.net/wiki/Lore:Dark_Brotherhood">Vulzeymahmaar</LinkPreview>, rok ahk lost gevothendhe wah muz ko kostaadde do soleyk ko <LinkPreview url="https://en.uesp.net/wiki/Lore:Skyrim">Keizaal</LinkPreview>, grik ol faal <LinkPreview url="https://en.uesp.net/wiki/Skyrim:Jarl">Bronjunne</LinkPreview>. Dranleic yein nol <LinkPreview url="https://en.uesp.net/wiki/Lore:Cyrodiil">Sarodaal</LinkPreview> ko <LinkPreview url="https://en.uesp.net/wiki/Lore:Tamriel">Taazokaan</LinkPreview>. Ok vahzah bok ahrk zahvos lafaanne los vomindok; vutharaak, frolokvon wah kopraanuvgenund ahrk trahkiinne, nii los korah rok lost kiin ko fin laat hefbeneruvos. Dranleic los aan dufrahkei fussevokul ahrk lakif ahst Keizaal. To nii los saag tol rok los faal <LinkPreview url="https://en.uesp.net/wiki/Lore:Dragonborn">Dovahkiin</LinkPreview>, pogaan tursaalle vorolur fah do fin pogaat nostigge rok lost drah ahrk tahrovin rok lost drun ko ok tiid ahst Keizaal.</p>
                                
                                <p id="lead-paragraph-2" className={i18next.resolvedLanguage=="dov" && "dovahzul"}>
                                    <Trans i18nKey="mwLp2" ns="dranleic">
                                        Dranleic has been largely involved in some of the biggest criminal events Tamriel has experienced since <LinkPreview url="">The Assassination of Emperor Uriel Septim VII</LinkPreview><Cite id="uriel-assassination"/> and has played a major hand in those criminal operations, often being the centerpiece of the operations &mdash; operations such as <LinkPreview url="">The Attempted Assassination of Emperor Titus Mede II</LinkPreview> and the subsequent successful <LinkPreview url="">assassination of Emperor Titus Mede II</LinkPreview>, <LinkPreview url="">The Escape of Cidhna Mine</LinkPreview> with <LinkPreview url="https://en.uesp.net/wiki/Lore:Madanach">Madanach</LinkPreview> and the bloodbath that followed, <LinkPreview url="">The Assassination of Vittoria Vici</LinkPreview>, the soon-to-be spouse of <LinkPreview url="https://en.uesp.net/wiki/Skyrim:Asgeir_Snow-Shod">Asgier Snow-Shod</LinkPreview>, along with the takeovers of the major holds of Skyrim: the city of <LinkPreview url="https://en.uesp.net/wiki/Lore:Whiterun">Whiterun</LinkPreview>, <LinkPreview url="https://en.uesp.net/wiki/Lore:Falkreath">Falkreath</LinkPreview>, <LinkPreview url="https://en.uesp.net/wiki/Lore:Markarth">Markarth</LinkPreview>, and <LinkPreview url="https://en.uesp.net/wiki/Lore:Solitude">Solitude</LinkPreview>.
                                    </Trans>
                                </p>
                                <p hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-english">Dranleic kosaan lokgaar vothizaan ko osos do fin zusaak wultriin korosendde Taazokaan seirakaan fah <LinkPreview url="https://en.uesp.net/wiki/Lore:Uriel_Septim_VII">fin kriivat do jun Uriel Septim zost</LinkPreview><Cite id="uriel-assassination"/> ahrk kosaan aan gaat droliik ko daar wultriin rakendde, grinstiid kos fin thermalur do fin rakendde &mdash; rakendde grik ol <LinkPreview url="">fin togaat kriivat do jun Titus Mede ziist</LinkPreview> ahrk fin zopruntaas <LinkPreview url="">kriivat do jun Titus Mede ziist</LinkPreview> mindindaar, <LinkPreview url="">fin filok do Cidhna vungol</LinkPreview> voth <LinkPreview url="https://en.uesp.net/wiki/Lore:Madanach">Madanach</LinkPreview> ahrk fin soswursk daar kiibokaan, <LinkPreview>fin kriivat do Vittoria Vici</LinkPreview>, faal dasuskos wolov do <LinkPreview url="https://en.uesp.net/wiki/Skyrim:Asgeir_Snow-Shod">Asgier Snow-Shod</LinkPreview>, asamit voth fin vaarnurelvon do fin gevildde do Keizaal: fin hiim do <LinkPreview url="https://en.uesp.net/wiki/Lore:Whiterun">Ahrolsedovah</LinkPreview>, <LinkPreview url="https://en.uesp.net/wiki/Lore:Falkreath">Quethsegolahrol</LinkPreview>, <LinkPreview url="https://en.uesp.net/wiki/Lore:Markarth">Golzewer</LinkPreview>, ahrk <LinkPreview url="https://en.uesp.net/wiki/Lore:Solitude">Bromgrindol</LinkPreview>.</p>

                                <p>
                                    Dranleic had a big influence in the outcome of the <LinkPreview url="https://en.uesp.net/wiki/Lore:Stormcloak_Rebellion">civil war</LinkPreview>, restoration and resurgence of the Thieves Guild as well as the revitalization of the Dark Brotherhood, helped to put an end to the <LinkPreview url="https://en.uesp.net/wiki/Lore:Return_of_the_Dragons">Dragon Crisis</LinkPreview> by defeating <LinkPreview url="https://en.uesp.net/wiki/Lore:Alduin">Alduin</LinkPreview> the Firstborn of <LinkPreview url="https://en.uesp.net/wiki/Lore:Akatosh">Akatosh</LinkPreview>, among other achievements.
                                </p>
                                <p hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-english">

                                </p>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2 id="Early_life">Early life</h2>
                                </div>
                                <p>
                                    Little is known about Dranleic's origins or early life. His earliest documented appearance was at <LinkPreview url={"https://en.uesp.net/wiki/Lore:Helgen"}>Helgen</LinkPreview>, where he was sentenced to execution along with other thieves, <LinkPreview url={"https://en.uesp.net/wiki/Lore:Stormcloaks"}>Stormcloak</LinkPreview> rebels, and <LinkPreview url={"https://en.uesp.net/wiki/Lore:Ulfric_Stormcloak"}>Ulfric Stormcloak</LinkPreview>. No records about him before this event have been found. <LinkPreview url={"https://en.uesp.net/wiki/Lore:Imperial_Legion"}>Imperial Legion</LinkPreview> soldiers and witnesses from the <LinkPreview url={"xyz"}>dragon attack at Helgen</LinkPreview> described him as <i>"having seemingly appeared from nowhere,"</i> and said he was <i>"unfortunately bundled together with other petty thieves and bandits ready for the chopping block."</i>[i] An account from an anonymous Stormcloak soldier stated Dranleic was trying to cross the border out of <LinkPreview url={"https://en.uesp.net/wiki/Lore:Skyrim"}>Skyrim</LinkPreview> to return home but was then <i>"caught in an Imperial ambush."</i>[i]
                                </p>
                                <p hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-english">

                                </p>
                                    
                                <p>
                                    Due to the absence of direct evidence, multiple theories have arisen. Scholars and bardic tales have suggested that he originated in <LinkPreview url={"https://en.uesp.net/wiki/Lore:Cyrodiil"}>Cyrodiil</LinkPreview>: if, as the Stormcloak soldier claimed, he was crossing the border to return home, his home must have lain on the other side. Although <LinkPreview url={"https://en.uesp.net/wiki/Lore:Argonian"}>Argonians</LinkPreview> are native to the province of <LinkPreview url={"https://en.uesp.net/wiki/Lore:Black_Marsh"}>Black Marsh</LinkPreview>, they live throughout <LinkPreview url={"https://en.uesp.net/wiki/Lore:Tamriel"}>Tamriel</LinkPreview>, so scholars cannot say with certainty whether he was born in Cyrodiil or elsewhere.
                                </p>
                                <p hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-english">
                                    
                                </p>

                                <p>
                                    Some also theorize that he is an orphan, citing his apparent lack of contact with any relatives as well as the fact that he has made no known attempts to return home since the events at Helgen.[citation needed] Some researchers have dismissed rumors that the <LinkPreview url={"https://en.uesp.net/wiki/Lore:Dragonborn"}>Dragonborn</LinkPreview> are immortal,[i] and estimate from his appearance that he was born in the <LinkPreview url={"https://en.uesp.net/wiki/Lore:History#Fourth_Era"}>Fourth Era</LinkPreview>, between 4E 160 and 4E 180. The exact date of his birth is uncertain, though two independent kinds of sources point to the same week. One group claims to have seen Dranleic celebrate his birthday, stating it falls on the 6th of <LinkPreview url={"first-seed"}>First Seed</LinkPreview>, while other sources from mages' studies suggest he was born during the first week of First Seed.[citation needed]
                                </p>
                                <p hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-english">
                                    
                                </p>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2 id="Career">Career</h2>
                                </div>
                                <p>
                                    ...
                                </p>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Arrival_in_Skyrim">Arrival in Skyrim</h3>
                                    </div>
                                    <p>
                                        Dranleic's documented activity begins in <LinkPreview url={"https://en.uesp.net/wiki/Lore:Skyrim"}>Skyrim</LinkPreview> in 4E 201, when he was captured near the <LinkPreview url={"https://en.uesp.net/wiki/Lore:Cyrodiil"}>Cyrodiil</LinkPreview> border and taken to <LinkPreview url={"https://en.uesp.net/wiki/Lore:Helgen"}>Helgen</LinkPreview> for execution. He survived the dragon attack that interrupted the proceedings and made his way to <LinkPreview url={"https://en.uesp.net/wiki/Lore:Whiterun"}>Whiterun</LinkPreview>, where his part in the death of a dragon led witnesses to hail him as the <LinkPreview url={"https://en.uesp.net/wiki/Lore:Dragonborn"}>Dragonborn</LinkPreview>. Soon afterward, he was summoned to <LinkPreview url={"https://en.uesp.net/wiki/Lore:High_Hrothgar"}>High Hrothgar</LinkPreview>, where the <LinkPreview url={"https://en.uesp.net/wiki/Lore:Greybeards"}>Greybeards</LinkPreview> reportedly confirmed the claim, which remains disputed by some.
                                    </p>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Escape_from_Helgen">Escape from Helgen</h4>
                                        </div>
                                        <div>
                                            Main article: <a href="">Attack on Helgen</a>
                                        </div>
                                        <p>
                                            On the 17th of Last Seed, 4E 201, Dranleic was captured by Imperial forces near the <LinkPreview url={"pale-pass"}>Pale Pass</LinkPreview> on the <LinkPreview url={"https://en.uesp.net/wiki/Lore:Cyrodiil"}>Cyrodiil</LinkPreview>-<LinkPreview url={"https://en.uesp.net/wiki/Lore:Skyrim"}>Skyrim</LinkPreview> border.[ref] He was taken to <LinkPreview url={"https://en.uesp.net/wiki/Lore:Helgen"}>Helgen</LinkPreview> alongside <LinkPreview url={"stormcloaks-faction"}>Stormcloak rebels</LinkPreview>, other prisoners, and <LinkPreview url={"https://en.uesp.net/wiki/Lore:Ulfric_Stormcloak"}>Ulfric Stormcloak</LinkPreview>, <LinkPreview url={"https://en.uesp.net/wiki/Lore:Jarl"}>Jarl</LinkPreview> of <LinkPreview url={"https://en.uesp.net/wiki/Lore:Windhelm"}>Windhelm</LinkPreview>. <LinkPreview url={"imperial-soldiers-skyrim"}>Imperial soldiers</LinkPreview> mistook him for a Stormcloak and sentenced him to execution with the rest. <LinkPreview url={"https://en.uesp.net/wiki/Lore:General_Tullius"}>General Tullius</LinkPreview> later described the whole ordeal with Dranleic as "a big misunderstanding"[ref]. As Dranleic stepped up to the block for his turn, a black dragon, later identified as <LinkPreview url={"https://en.uesp.net/wiki/Lore:Alduin"}>Alduin</LinkPreview>, attacked the town and interrupted the proceedings. In the chaos, Stormcloak prisoners scattered and fled to the Keep, where the Imperial soldiers' barracks were located. Dranleic was then freed by a Stormcloak, and he fought alongside them through Legionnaires to escape through Helgen Keep.[ref]
                                        </p>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Whiterun">Whiterun</h4>
                                        </div>
                                        <p>
                                            After escaping Helgen, Dranleic traveled to <LinkPreview url={"https://en.uesp.net/wiki/Lore:Riverwood"}>Riverwood</LinkPreview>, where one of the escapees had connections, and after a short rest continued to <LinkPreview url={"https://en.uesp.net/wiki/Lore:Whiterun"}>Whiterun</LinkPreview>. "I'd never seen an Argonian so stone-faced in my life, but he claimed to have had news from Helgen about the dragon attack," a former Whiterun guard stated, and he was admitted.[ref] At <LinkPreview url={"https://en.uesp.net/wiki/Lore:Dragonsreach"}>Dragonsreach</LinkPreview>, he told the then-Jarl <LinkPreview url={"https://en.uesp.net/wiki/Lore:Balgruuf_the_Greater"}>Balgruuf the Greater</LinkPreview> of what he had seen at Helgen, and the jarl believed him. Balgruuf's <LinkPreview url={"https://en.uesp.net/wiki/Skyrim:Court_Wizard"}>court wizard</LinkPreview>, <LinkPreview url={"https://en.uesp.net/wiki/Lore:Farengar_Secret-Fire"}>Farengar Secret-Fire</LinkPreview>, who has been studying the return of the dragons, reportedly welcomed the news with enthusiasm and asked Dranleic to recover a <LinkPreview url={"https://en.uesp.net/wiki/Lore:Dragonstone"}>Dragonstone</LinkPreview> from <LinkPreview url={"https://en.uesp.net/wiki/Lore:Bleak_Falls_Barrow"}>Bleak Falls Barrow</LinkPreview>, an ancient Nord tomb in the mountains above Riverwood.[ref]
                                        </p>
                                        <p>
                                            Dranleic cleared the bandits and <LinkPreview url={"https://en.uesp.net/wiki/Lore:Draugr"}>draugr</LinkPreview> from the barrow and retrieved the Dragonstone from its inner sanctum, where he also took an ancient nord battle axe from a draugr.[ref] Journeymen, who later investigated the barrow reported finding the body of a <LinkPreview url={"https://en.uesp.net/wiki/Lore:Dunmer"}>Dunmer</LinkPreview> near a chamber where Dranleic had seemingly freed him from a spider's web.[ref]
                                        </p>
                                        <p>
                                            When Dranleic delivered the Dragonstone to Farengar, <LinkPreview url={"https://en.uesp.net/wiki/Skyrim:Irileth"}>Irileth</LinkPreview>, Balgruuf's <LinkPreview url={"https://en.uesp.net/wiki/Skyrim:Housecarl"}>housecarl</LinkPreview>, reported that a dragon had been sighted at the watchtower west of Whiterun. A company of guards marched out, and Balgruuf advised Dranleic to join them. They found the tower in ruins, and the dragon, later identified as <LinkPreview url={"https://en.uesp.net/wiki/Lore:Mirmulnir"}>Mirmulnir</LinkPreview>, attacked soon after. Irileth, the guards, and Dranleic fought it; several guards were killed, but the dragon was slain.[ref] Eyewitnesses stated that Dranleic "absorbed its soul" as the dragon's body burned away to bone, and onlookers took this as a sign that he was Dragonborn.[ref]
                                        </p>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Greybeards_summons">Greybeards' summons</h4>
                                        </div>
                                        <p>
                                            Soon after the dragon's death, a thunderous voice from the mountains was heard calling "DOVAHKIIN!", which was identified as the voice of the <LinkPreview url={"https://en.uesp.net/wiki/Lore:Greybeards"}>Greybeards</LinkPreview> of <LinkPreview url={"https://en.uesp.net/wiki/Lore:High_Hrothgar"}>High Hrothgar</LinkPreview>.[ref] Dranleic first reported back to Balgruuf, who named him Thane of Whiterun (see Titles and honors), and then traveled to <LinkPreview url={"https://en.uesp.net/wiki/Lore:Ivarstead"}>Ivarstead</LinkPreview> to climb the 7,000 Steps to the monastery. As stated by Balgruuf, "You'd better get up to High Hrothgar immediately. There's no refusing the summons of the Greybeards." There, on the 18th of Last Seed, 4E 201, the Greybeards tested him, taught him the ways of the Voice, or <LinkPreview url={"https://en.uesp.net/wiki/Lore:Thu%27um"}>Thu'um</LinkPreview>, and gave him knowledge of the words FUS and RO (the first two words of <LinkPreview url={"https://en.uesp.net/wiki/Skyrim:Unrelenting_Force"}>Unrelenting Force</LinkPreview>) and WULD (the first word of <LinkPreview url={"https://en.uesp.net/wiki/Skyrim:Whirlwind_Sprint"}>Whirlwind Sprint</LinkPreview>). According to the Greybeards, he was not only <LinkPreview url={"https://en.uesp.net/wiki/Lore:Dragonborn"}>Dragonborn</LinkPreview> but unusually gifted in the way of the Voice.[ref]
                                        </p>
                                    </section>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Cidhna_Mine_escape">Escape from Cidhna Mine</h3>
                                    </div>
                                    <p>
                                        ...
                                    </p>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Battle_of_the_Forsworn">Battle of the Forsworn</h4>
                                        </div>
                                        <div role="note" className="hatnote">
                                            See also: <a href="https://en.uesp.net/wiki/Lore:Forsworn_Rebellion">The Forsworn Rebellion</a>
                                        </div>
                                        <p>
                                            ...
                                        </p>
                                    </section>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Thieves_Guild">Thieves Guild</h3>
                                    </div>
                                    <p>
                                        ...
                                    </p>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Joining_Thieves_Guild">Joining</h4>
                                        </div>
                                        <p>
                                            ...
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Nightingale">Nightingale</h4>
                                        </div>
                                        <p>
                                            ...
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Restoration_of_the_guild">Restoration of the guild</h4>
                                        </div>
                                        <p>
                                            ...
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Guildmaster">Guildmaster</h4>
                                        </div>
                                        <p>
                                            ...
                                        </p>
                                    </section>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Companions">Companions</h3>
                                    </div>
                                    <p>
                                        ...
                                    </p>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Dark_Brotherhood">Dark Brotherhood</h3>
                                    </div>
                                    <p>
                                        ...
                                    </p>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Joining_Dark_Brotherhood">Joining</h4>
                                        </div>
                                        <p>
                                            ...
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Murder_of_Vittoria_Vici">Murder of Vittoria Vici</h4>
                                        </div>
                                        <p>
                                            ...
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Assassination_of_Gaius_Maro">Assassination of Gaius Maro</h4>
                                        </div>
                                        <p>
                                            ...
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Murder_of_the_Mysterious_Gourmet">Murder of the Mysterious Gourmet</h4>
                                        </div>
                                        <p>
                                            ...
                                        </p>
                                    </section>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Assassination_of_Titus_Mede_II">Assassination of Titus Mede II</h3>
                                    </div>
                                    <div role="note" className="hatnote">
                                        See also: <a href="">The Assassination of Emperor Titud Mede II</a>
                                    </div>
                                    <p>
                                        ...
                                    </p>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Attempt">Attempt</h4>
                                        </div>
                                        <div role="note" className="hatnote">
                                            Main article: <a href="">The Attempted Assassination of Emperor Titus Mede II</a>
                                        </div>
                                        <p>
                                            ...
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Assassination">Assassination</h4>
                                        </div>
                                        <p>
                                            ...
                                        </p>
                                    </section>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Civil_war">Civil war</h3>
                                    </div>
                                    <div role="note" className="hatnote">
                                        See also: <a href="https://en.uesp.net/wiki/Lore:Stormcloak_Rebellion">Stormcloak Rebellion</a>
                                    </div>
                                    <p>
                                        [...] Played a big part in the <a href="https://en.uesp.net/wiki/Lore:Stormcloak_Rebellion">Stormcloak rebellion</a> and their success in <a href="">the battle for Solitude</a>...
                                    </p>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Alliance_with_the_Stormcloaks">Alliance with the Stormcloaks</h4>
                                        </div>
                                        <p>
                                            ...
                                        </p>
                                    </section>
                                    <section>
                                    <div className="mw-heading mw-heading-4">
                                        <h4 id="Whiterun_city_takeover">Whiterun city takeover</h4>
                                    </div>
                                    <p>
                                        ...
                                    </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Liberation_of_Falkreath">Liberation of Falkreath</h4>
                                        </div>
                                        <p>
                                            ...
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Liberation_of_the_Reach">Liberation of the Reach</h4>
                                        </div>
                                        <p>
                                            ...
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Liberation_of_Hjaalmarch">Liberation of Hjaalmarch</h4>
                                        </div>
                                        <p>
                                            ...
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="The_battle_for_Solitude">Battle for Solitude</h4>
                                        </div>
                                        <div role="note" className="hatnote">
                                           See also: <a href="">Battle of Solitude</a>
                                        </div>
                                        <p>
                                            ...
                                        </p>
                                    </section>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Vampires</h3>
                                    </div>
                                    <p>
                                        ...
                                    </p>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Dragon_Crisis">Dragon Crisis</h3>
                                    </div>
                                    <p>
                                        ...
                                    </p>
                                </section>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2 id="Titles_and_honors">Titles and honors</h2>
                                </div>
                                <p>
                                    ...
                                </p>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2>Public perception</h2>
                                </div>
                                <p>
                                    ...
                                </p>
                            </section>
                            <section>
                                <div className="mw-header mw-header-2">
                                    <h2 id="Personal_life">Personal life</h2>
                                </div>
                                <p>
                                    ...
                                </p>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Appearance">Appearance</h3>
                                    </div>
                                    <p>
                                        ...
                                    </p>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4>Equipment and combat style</h4>
                                        </div>
                                        <p>
                                            ...
                                        </p>
                                    </section>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Personality">Personality</h3>
                                    </div>
                                    <p>
                                        ...
                                    </p>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Beliefs">Beliefs</h3>
                                    </div>
                                    <p>
                                        ...
                                    </p>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Relationships">Relationships</h3>
                                    </div>
                                    <p>
                                        ...
                                    </p>
                                </section>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
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
                            <section id="See_also">
                                <div className="mw-heading mw-heading-2">
                                    <h2>See also</h2>
                                </div>
                                <section id="People">
                                    <div className="mw-heading mw-heading-3">
                                        <h3>People</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            <LinkPreview url="https://en.uesp.net/wiki/Lore:Uriel_VII">Emperor Uriel Septim VII</LinkPreview> &ndash; Emperor of the Third Empire during the Third Era
                                        </li>
                                        <li>
                                            <LinkPreview url="https://en.uesp.net/wiki/Lore:Titus_Mede_II">Emperor Titus Mede II</LinkPreview> &ndash; Emperor of the Third Empire during the Fourth Era
                                        </li>
                                        <li>
                                            <LinkPreview url="https://en.uesp.net/wiki/Skyrim:Asgeir_Snow-Shod">Asgier Snow-Shod</LinkPreview> &ndash; Nord warrior with connections to the Stormcloaks
                                        </li>
                                        <li>
                                            <LinkPreview url="https://en.uesp.net/wiki/Skyrim:Vittoria_Vici">Vittoria Vici</LinkPreview> &ndash; First cousin of Emperor Titus Mede II
                                        </li>
                                    </ul>
                                </section>
                                <section id="Events">
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Events</h3>
                                    </div>
                                    <ul>
                                        <li>
                                            The Return of the Dragons
                                        </li>
                                        <li>
                                            Stormcloak Rebellion
                                        </li>
                                        <li>
                                            The Forsworn Uprising
                                        </li>
                                    </ul>
                                </section>
                            </section>
                            <section id="References">
                                <div className="mw-heading mw-heading-2">
                                    <h2>References</h2>
                                </div>
                                <div className="mw-references-columns">
                                    <FootnoteList/>
                                </div>
                            </section>
                        </div>
                    </div>
                </main>
                <PageFooter/>
            </div>
        </FootnoteProvider>
    )
}