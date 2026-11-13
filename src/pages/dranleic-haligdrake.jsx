import { useRef, useState } from "react"
import { TableOfContents } from "../components/TableOfContents"
import { InfoCard } from "../components/InfoCard"
import { InfoboxWrapper } from "../components/InfoboxWrapper"
import "./characterPage.css"
import { Trans, useTranslation } from "react-i18next"
import i18next from "i18next"
import { LinkPreview } from "../components/LinkPreview"
import { ItemPreview } from "../components/ItemPreview"
import { ImageModal } from "../components/ImageModal"
import { PageNotice } from "../components/PageNotice"
import { PageFooter } from "../components/PageFooter"
import { Cite, FootnoteList, FootnoteProvider } from "../components/Footnotes";
import sources from "../data/sources/dranleic.json";

import DialogueSelectorStart from "../assets/Dialogue_Selector_Start.png"
import DialogueSelectorEnd from "../assets/Dialogue_Selector_End.png"
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
    const [mobileTOCHidden, setMobileTOCHidden] = useState(false);
    const {t} = useTranslation("dranleic");
    const [imageWidth, setImageWidth] = useState(0);

    return (
        <FootnoteProvider sources={sources}>
            <div className={`content-body${tocHidden ? " toc-hidden" : ""}`}>
                <div className="mobile-toc-collapse-btn">
                    <button
                        type="button"
                        aria-controls="hamburger-collapse"
                        aria-expanded={!tocHidden}
                        onClick={() => setMobileTOCHidden(!mobileTOCHidden)}
                        style={{width: "44px", height: "44px"}}
                    >
                    &uarr;
                    </button>
                </div>
                <div className="vector-column-start" id="hamburger-collapse" hidden={mobileTOCHidden}>
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
                                    Little is known about Dranleic's origins or early life. His earliest documented appearance was at <LinkPreview url={"helgen"}>Helgen</LinkPreview>, where he was sentenced to execution along with other thieves, <LinkPreview url={"stormcloaks-faction"}>Stormcloak</LinkPreview> rebels, and <LinkPreview url={"ulfric-stormcloak"}>Ulfric Stormcloak</LinkPreview>. No records about him before this event have been found. <LinkPreview url={"imperial-legion"}>Imperial Legion</LinkPreview> soldiers and the few survivors from the <LinkPreview url={"xyz"}>dragon attack at Helgen</LinkPreview> described him as "having seemingly appeared from nowhere," and said he was "unfortunately bundled together with other petty thieves and bandits ready for the chopping block."[ref] An account from an anonymous Stormcloak soldier stated Dranleic was trying to cross the border out of <LinkPreview url={"skyrim"}>Skyrim</LinkPreview> to return home but was then "caught in an Imperial ambush."[ref]
                                </p>
                                <p hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-english">

                                </p>
                                    
                                <p>
                                    Due to the absence of direct evidence, multiple theories have arisen. Scholars and bardic tales have suggested that he originated in <LinkPreview url={"cyrodiil"}>Cyrodiil</LinkPreview>: if, as the Stormcloak soldier claimed, he was crossing the border to return home, his home must have lain on the other side. Although <LinkPreview url={"argonian"}>Argonians</LinkPreview> are native to the province of <LinkPreview url={"black-marsh"}>Black Marsh</LinkPreview>, they live throughout <LinkPreview url={"tamriel"}>Tamriel</LinkPreview>, so scholars cannot say with certainty whether he was born in Cyrodiil or elsewhere.
                                </p>
                                <p hidden={i18next.resolvedLanguage!="dov"} className="dovahzul-english">
                                    
                                </p>

                                <p>
                                    Some also theorize that he is an orphan, citing his apparent lack of contact with any relatives as well as the fact that he has made no known attempts to return home since the events at Helgen.[citation needed] Some researchers have dismissed rumors that the <LinkPreview url={"dragonborn"}>Dragonborn</LinkPreview> are immortal,[ref] and estimate from his appearance that he was born in the <LinkPreview url={"fourth-era-history"}>Fourth Era</LinkPreview>, between 4E 160 and 4E 180. The exact date of his birth is uncertain, though two independent kinds of sources point to the same month. One group claims to have seen Dranleic celebrate his birthday, stating it falls on the 6th of <LinkPreview url={"first-seed"}>First Seed</LinkPreview>, while sources from mages' studies suggest he was born sometime during that month, on the grounds that his nature matches that of the <LinkPreview url={"the-lord"}>Lord</LinkPreview> birthsign.[ref]
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
                                        Dranleic's documented activity begins in <LinkPreview url={"skyrim"}>Skyrim</LinkPreview> in 4E 201, when he was captured near the <LinkPreview url={"cyrodiil"}>Cyrodiil</LinkPreview> border and taken to <LinkPreview url={"helgen"}>Helgen</LinkPreview> for execution. He survived <LinkPreview url={"world-eater"}>Alduin</LinkPreview>'s attack on Helgen and avoided execution, then made his way to <LinkPreview url={"whiterun"}>Whiterun</LinkPreview>, where his part in the death of the dragon <LinkPreview url={"mirmulnir"}>Mirmulnir</LinkPreview> led witnesses to hail him as the <LinkPreview url={"last-dragonborn"}>Dragonborn</LinkPreview>. Soon afterward, he was summoned to <LinkPreview url={"high-hrothgar"}>High Hrothgar</LinkPreview>, where the <LinkPreview url={"greybeards"}>Greybeards</LinkPreview> reportedly confirmed that he is Dragonborn, but this remains disputed by some of Skyrim's citizens.
                                    </p>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Escape_from_Helgen">Escape from Helgen</h4>
                                        </div>
                                        <div>
                                            Main article: <a href="">Attack on Helgen</a>
                                        </div>
                                        <p>
                                            On the 17th of <LinkPreview url={"last-seed"}>Last Seed</LinkPreview>, 4E 201, Dranleic was captured by Imperial forces near the <LinkPreview url={"pale-pass"}>Pale Pass</LinkPreview> on the <LinkPreview url={"cyrodiil"}>Cyrodiil</LinkPreview>-<LinkPreview url={"skyrim"}>Skyrim</LinkPreview> border.[ref] He was taken to <LinkPreview url={"helgen"}>Helgen</LinkPreview> alongside <LinkPreview url={"stormcloaks-faction"}>Stormcloak</LinkPreview> rebels, other prisoners, and <LinkPreview url={"ulfric-stormcloak"}>Ulfric Stormcloak</LinkPreview>, <LinkPreview url={"jarl"}>Jarl</LinkPreview> of <LinkPreview url={"windhelm"}>Windhelm</LinkPreview>. <LinkPreview url={"imperial-soldiers-skyrim"}>Imperial soldiers</LinkPreview> mistook Dranleic for a Stormcloak and sentenced him to execution with the rest. <LinkPreview url={"general-tullius"}>General Tullius</LinkPreview> later described the whole ordeal with Dranleic as "a big misunderstanding"[ref]. When Dranleic was called forward, he approached the headsman. Just before his execution, a black <LinkPreview url={"dragon"}>dragon</LinkPreview>, later identified as <LinkPreview url={"world-eater"}>Alduin</LinkPreview>, attacked the town. In the chaos, Stormcloak prisoners scattered and fled to the Keep, where the Imperial soldiers' barracks were located. Dranleic was unbound by a Stormcloak, and he fought alongside them through Legionnaires to escape through Helgen Keep.[ref]
                                        </p>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Whiterun">Whiterun</h4>
                                        </div>
                                        <p>
                                            After escaping Helgen, Dranleic traveled to <LinkPreview url={"riverwood"}>Riverwood</LinkPreview>, where one of the escapees had connections, and after a short rest continued to <LinkPreview url={"whiterun"}>Whiterun</LinkPreview>. "I'd never seen an Argonian so stone-faced in my life, but he claimed to have had news from Helgen about the dragon attack," a former Whiterun guard stated, and he was admitted.[ref] At <LinkPreview url={"dragonsreach"}>Dragonsreach</LinkPreview>, he told the then-Jarl <LinkPreview url={"balgruuf"}>Balgruuf the Greater</LinkPreview> of what he had seen at Helgen, and the jarl believed him. Balgruuf's <LinkPreview url={"court-wizard"}>court wizard</LinkPreview>, <LinkPreview url={"farengar"}>Farengar Secret-Fire</LinkPreview>, who had been studying dragons, reportedly welcomed the news with enthusiasm and asked Dranleic to recover a <ItemPreview name="dragonstone">Dragonstone</ItemPreview> from <LinkPreview url={"bleak-falls"}>Bleak Falls Barrow</LinkPreview>, an ancient <LinkPreview url={"nord"}>Nord</LinkPreview> tomb in the mountains above Riverwood.[ref]
                                        </p>
                                        <div className="thumb tright">
                                            <div className="thumbinner">
                                                <ImageModal>
                                                    <img ref={(el) => { if (el?.complete) setImageWidth(el.naturalWidth); }} onLoad={(e) => setImageWidth(e.currentTarget.naturalWidth)} src={"/dummy-pic-1.png"} />
                                                </ImageModal>
                                                <div className="thumbcaption">
                                                    A dead Dunmer
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            Dranleic cleared the bandits and <LinkPreview url={"draugr"}>draugr</LinkPreview> from the barrow and retrieved the Dragonstone from its inner sanctum, where he also took an <ItemPreview name="honed-ancient-nord-battle-axe-of-frost">ancient nord battle axe</ItemPreview> from the draugr guarding the stone.[ref] Journeymen, who later investigated the barrow reported finding the body of a <LinkPreview url={"dunmer"}>Dunmer</LinkPreview> near a chamber where Dranleic had freed him from a <LinkPreview url={"frostbite-spider"}>Frostbite spider</LinkPreview>'s web.[ref]
                                        </p>
                                        <p>
                                            When Dranleic delivered the Dragonstone to Farengar, <LinkPreview url={"irileth"}>Irileth</LinkPreview>, Balgruuf's <LinkPreview url={"housecarl"}>housecarl</LinkPreview>, reported that a dragon had been sighted at the watchtower west of Whiterun. A company of guards marched out, and Balgruuf advised Dranleic to join them. They found the tower in ruins, and the dragon, later identified as <LinkPreview url={"mirmulnir"}>Mirmulnir</LinkPreview>, attacked soon after. Irileth, the guards, and Dranleic fought it; several guards were killed, but the dragon was slain.[ref] Eyewitnesses stated that Dranleic "absorbed its soul" as the dragon's body burned away to bone, and onlookers took this as a sign that he was <LinkPreview url={"dragonborn"}>Dragonborn</LinkPreview>.[ref]
                                        </p>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Greybeards_summons">Greybeards' summons</h4>
                                        </div>
                                        <p>
                                            Soon after the <LinkPreview url={"dragon"}>dragon</LinkPreview>'s death, a thunderous voice from the mountains was heard calling "DOVAHKIIN!", which was the voice of the <LinkPreview url={"greybeards"}>Greybeards</LinkPreview> of <LinkPreview url={"high-hrothgar"}>High Hrothgar</LinkPreview>.[ref] Dranleic first reported back to <LinkPreview url={"balgruuf"}>Balgruuf</LinkPreview>, who named him Thane of Whiterun (See <i>Titles and honors</i> section) and told him, "You'd better get up to High Hrothgar immediately. There's no refusing the summons of the Greybeards."[ref] He then traveled to <LinkPreview url={"ivarstead"}>Ivarstead</LinkPreview>, where residents recalled seeing him somewhere around the 18th of <LinkPreview url={"last-seed"}>Last Seed</LinkPreview>, 4E 201, before he climbed the 7,000 Steps to the monastery.[ref] At High Hrothgar, the Greybeards tested him, taught him the ways of the Voice, or <i><LinkPreview url={"thuum"}>Thu'um</LinkPreview></i>, and gave him knowledge of the words FUS and RO (the first two words of <LinkPreview url={"https://en.uesp.net/wiki/Skyrim:Unrelenting_Force"}>Unrelenting Force</LinkPreview>) and WULD (the first word of <LinkPreview url={"https://en.uesp.net/wiki/Skyrim:Whirlwind_Sprint"}>Whirlwind Sprint</LinkPreview>). They found him not only <LinkPreview url={"dragonborn"}>Dragonborn</LinkPreview> but unusually gifted in the Voice.[ref]
                                        </p>
                                    </section>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Cidhna_Mine_escape">Escape from Cidhna Mine</h3>
                                    </div>
                                    <div role="note" className="hatnote">
                                        See also: <a href="https://en.uesp.net/wiki/Lore:Forsworn_Rebellion">Forsworn Rebellion</a>
                                    </div>
                                    <div className="thumb tright">
                                        <div className="thumbinner">
                                            <ImageModal>
                                                <img ref={(el) => { if (el?.complete) setImageWidth(el.naturalWidth); }} onLoad={(e) => setImageWidth(e.currentTarget.naturalWidth)} src={"/dummy-pic-1.png"} />
                                            </ImageModal>
                                            <div className="thumbcaption">
                                                Dranleic in Cidhna Mine wearing prison clothes
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        On the [date] of [month], 4E 201, Dranleic was arrested by the guards of <LinkPreview url={"markarth"}>Markarth</LinkPreview> at the <LinkPreview url={"shrine-of-talos"}>Shrine of Talos</LinkPreview> for murder and conspiracy against the city of Markarth, as stated by the guards.[ref] He had reportedly been seen snooping around the city, investigating a so-called "Forsworn Conspiracy" following the murder of <LinkPreview url={"margret"}>Margret</LinkPreview>, who was killed right in the market in broad daylight by a <LinkPreview url={"breton"}>Breton</LinkPreview> named <LinkPreview url={"weylin"}>Weylin</LinkPreview>, a <LinkPreview url={"forsworn"}>Forsworn</LinkPreview> spy. Dranleic was believed to be guilty of murdering <LinkPreview url={"thonar-silver-blood"}>Thonar Silver-Blood</LinkPreview>'s wife, <LinkPreview url={"betrid"}>Betrid Silver-Blood</LinkPreview>, along with the <LinkPreview url={"treasury-house"}>Treasury House</LinkPreview> cleaning crew, <LinkPreview url={"nana-ildene"}>Nana Ildene</LinkPreview> and <LinkPreview url={"donnel"}>Donnel</LinkPreview> after breaking into Thonar's quarters, the residents of <LinkPreview url={"nepos's-house"}>Nepos's house</LinkPreview>, those being the owner, <LinkPreview url={"nepos-the-nose"}>Nepos the Nose</LinkPreview>, and his servants; <LinkPreview url={"morven"}>Morven</LinkPreview>, <LinkPreview url={"tynan"}>Tynan</LinkPreview>, and <LinkPreview url={"uaile"}>Uaile</LinkPreview>. However, it was later discovered that they were also Forsworn in disguise and they were to blame for Betrid's death. 
                                    </p>
                                    <div className="thumb tleft">
                                        <div className="thumbinner">
                                            <ImageModal>
                                                <img ref={(el) => { if (el?.complete) setImageWidth(el.naturalWidth); }} onLoad={(e) => setImageWidth(e.currentTarget.naturalWidth)} src={"/dummy-pic-1.png"} />
                                            </ImageModal>
                                            <div className="thumbcaption">
                                                Dranleic wearing the Armor of the Old Gods
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        These actions, reportedly set in motion by <LinkPreview url={"eltrys"}>Eltrys</LinkPreview>, a Breton citizen, damaged Dranleic's reputation in Markarth and landed him in <LinkPreview url={"cidhna-mine"}>Cidhna Mine</LinkPreview>. There, he escaped with <LinkPreview url={"madanach"}>Madanach</LinkPreview> through a secret tunnel to <LinkPreview url={"markarth-ruins"}>Markarth Ruins</LinkPreview> along with the other Forsworn prisoners. One of the prisoners, <LinkPreview url={"grisvar-the-unlucky"}>Grisvar</LinkPreview>, was also found shanked to death with a makeshift <ItemPreview name={"shiv"}>Shiv</ItemPreview> made of a sharpened stick, at the back of the mine. It is unclear if this too was Dranleic's doing. After escaping through the ruins and emerging on the other side in Markarth, he and the Forsworn, as well as Madanach, confronted Thonar, accompanied by a Markarth City guard. Here, Dranleic was seen wearing the <ItemPreview name={"old-gods-set"}>Armor of the Old Gods</ItemPreview>, given to him by the Forsworn. After a short speech by Thonar, the battle between the city guard and Thonar, and the Forsworn and Dranleic began. Thonar, the guards, and some of the citizens of Markarth were all killed, and Madanach and the rest of the Forsworn army, as well as Dranleic, ran to <LinkPreview url={"druadach-redoubt"}>Druadach Redoubt</LinkPreview> when they made it outside the city gates.
                                    </p>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Thieves_Guild">Thieves Guild</h3>
                                    </div>
                                    <p>
                                        It is widely known that Dranleic is a member of the <LinkPreview url={"thieves-guild"}>Thieves Guild</LinkPreview>. However, due to the nature of the Thieves Guild, the details surrounding how this came to be are very thin. It is known that the Thieves Guild is a secretive organization and one that does not speak openly about its business or its members. All their operations happen underground and in secret.
                                    </p>
                                    <p>
                                        The first recorded Thieves Guild activity involving Dranleic was on the [day] of [month], 4E 201, when he went door to door in <LinkPreview url={"riften"}>Riften</LinkPreview>, demanding payment from business owners that they supposedly owed. Dranleic visited the <LinkPreview url={"bee-and-barb"}>Bee and Barb</LinkPreview>, the <LinkPreview url={"pawned-prawn"}>Pawned Prawn</LinkPreview>, and <LinkPreview url={"haelga's-bunkhouse"}>Haelga's Bunkhouse</LinkPreview>. The innkeeper, <LinkPreview url={"keerava"}>Keerava</LinkPreview> of the Bee and Barb, was initially reluctant to pay, but after he threatened her, she handed over what she had, and Dranleic left the premises. The owner of the Pawned Prawn, <LinkPreview url={"Bersi"}></LinkPreview>, stated, "I refused to give up any coin, then [Dranleic] smashed my precious urn! It was priceless, y'know? Priceless! Now it's in pieces. Tiny, little, useless pieces. He threatened to break more of my stuff, so I gave him the damn coin and told him to never come back!" <LinkPreview url={"haelga"}>Haelga</LinkPreview> of Haelga's Bunkhouse stated she initially refused Dranleic, whereupon he left. When Dranleic returned to the Bunkhouse after visiting the other establishments, Haelga paid him without hesitation, fearing what might happen otherwise. Haelga later discovered that her <LinkPreview url={"statue-of-dibella"}>statue of Dibella</LinkPreview> had been stolen and claimed that Dranleic was responsible.
                                    </p>
                                    <p>
                                        On the [day] of [month], 4E 201, a break-in at the <LinkPreview url={"dwemer-museum"}>Dwemer Museum</LinkPreview> in <LinkPreview url={"markarth"}>Markarth</LinkPreview> was reported. The same day, carriage drivers and Markarth guards reported seeing Dranleic travel to and enter Markarth city. No evidence or traces were found at the museum, but local reports tie it to Dranleic and the Thieves Guild, though nothing was reported stolen and no connection has ever been confirmed.
                                    </p>
                                    <p>
                                        Following this, on the [day] of [month], 4E 201, a break-in at <LinkPreview url={"riftweals-manor"}>Riftweald Manor</LinkPreview> was reported in Riften, which was, at the time, owned by <LinkPreview url={"mercer-frey"}>Mercer Frey</LinkPreview>, leader of the Thieves Guild in <LinkPreview url={"skyrim"}>Skyrim</LinkPreview>. The manor was found completely empty, and its <LinkPreview url={"nord"}>Nord</LinkPreview> doorman, <LinkPreview url={"vald"}>Vald</LinkPreview>, lay dead outside the front entrance. Riften guards stated "There is no question about it; this was definitely the work of the Thieves Guild." To the residents of Riften, this was rather unusual. The Thieves Guild normally does not engage in infighting, especially not with its leader. Riften officials started to investigate the situation, but later dropped it. When residents asked why, they received no comment and were asked to leave.
                                    </p>
                                    <div className="thumb tright">
                                        <div className="thumbinner">
                                            <ImageModal>
                                                <img ref={(el) => { if (el?.complete) setImageWidth(el.naturalWidth); }} onLoad={(e) => setImageWidth(e.currentTarget.naturalWidth)} src={"/dummy-pic-1.png"} />
                                            </ImageModal>
                                            <div className="thumbcaption">
                                                Dranleic wearing a non-standard Thieves Guild uniform
                                            </div>
                                        </div>
                                    </div>
                                    <p>
                                        On the [day] of [month], 4E 201, the ruins of <LinkPreview url={"irkngthand"}>Irkngthand</LinkPreview> collapsed for unknown reasons. Investigators searching the rubble after its collapse found the remains of a man, later identified as Mercer Frey. It is unclear whether this is related to the events of the break-in at Riftweald Manor. Not long after Mercer's death, illegal activity and reports of burglary and thievery rose sharply across Skyrim. Reporters link the surge to the apparent change in leadership at the Thieves Guild following the death of the previous Guildmaster. This sudden spike in Thieves Guild activity sparked renewed fear among citizens. Although it remains unverified who the new leader of the guild is, witnesses have reported seeing Dranleic wearing a black, bluish-tinted uniform unlike the brown attire of ordinary guild thieves, suggesting a higher position in the guild.
                                    </p>
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
                                        The <LinkPreview url={"penitus"}>Penitus Oculatus</LinkPreview> date Dranleic's membership in the <LinkPreview url={"dark-brotherhood-skyrim"}>Dark Brotherhood</LinkPreview> from the murder of <LinkPreview url={"grelod-the-kind"}>Grelod the Kind</LinkPreview> in <LinkPreview url={"riften"}>Riften</LinkPreview> in 4E 201. Over the following months, he is believed to have killed at least sixteen people across <LinkPreview url={"skyrim"}>Skyrim</LinkPreview>, most of them identified by a distinctive mark found on the bodies. His public murder of <LinkPreview url={"vittoria-vici"}>Vittoria Vici</LinkPreview> in <LinkPreview url={"solitude"}>Solitude</LinkPreview> allowed investigators to link the earlier deaths to him, and his activities culminated in the assassination of <LinkPreview url={"titus-mede-II"}>Emperor Titus Mede II</LinkPreview>, which ended up getting the <LinkPreview url={"brotherhood-sanctuary-skyrim"}>Dark Brotherhood sanctuary</LinkPreview> destroyed.
                                    </p>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Background_Dark_Brotherhood">Background</h4>
                                        </div>
                                        <div className="thumb tleft">
                                            <div className="thumbinner">
                                                <ImageModal>
                                                    <img ref={(el) => { if (el?.complete) setImageWidth(el.naturalWidth); }} onLoad={(e) => setImageWidth(e.currentTarget.naturalWidth)} src={"/dummy-pic-1.png"} />
                                                </ImageModal>
                                                <div className="thumbcaption">
                                                    Dranleic executing Grelod the Kind by doing a suplex
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            During his time in <LinkPreview url={"skyrim"}>Skyrim</LinkPreview>, Dranleic is said to have killed at least sixteen people in the name of the <LinkPreview url={"dark-brotherhood"}>Dark Brotherhood</LinkPreview>. His first known association with the Brotherhood came on the [day] of [month], 4E 201, when he was seen entering and leaving the house of <LinkPreview url={"aventus-aretino"}>Aventus Aretino</LinkPreview>, where locals rumored the <LinkPreview url={"black-sacrament-ritual"}>Black Sacrament</LinkPreview> had been performed to summon the Dark Brotherhood. The same day, <LinkPreview url={"grelod-the-kind"}>Grelod the Kind</LinkPreview> was murdered by Dranleic at the <LinkPreview url={"honorhall"}>Honorhall Orphanage</LinkPreview> in <LinkPreview url={"riften"}>Riften</LinkPreview>, in front of the orphans and her assistant, <LinkPreview url={"constance-michel"}>Constance Michel</LinkPreview>. Members of the <LinkPreview url={"penitus"}>Penitus Oculatus</LinkPreview> believe this marks the beginning of Dranleic's membership in the Dark Brotherhood.
                                        </p>
                                        <p>
                                            A couple of days later, on the [day] of [month], 4E 201, three people were found dead at an <LinkPreview url={"abandoned-shack"}>abandoned shack</LinkPreview> in <LinkPreview url={"hjaalmarch"}>Hjaalmarch</LinkPreview>, about ten minutes' walk east of <LinkPreview url={"solitude"}>Solitude</LinkPreview>. They were identified as <LinkPreview url={"fultheim"}>Fultheim the Fearless</LinkPreview>, <LinkPreview url={"alea-quintos"}>Alea Quintos</LinkPreview>, and a <LinkPreview url={"khajiit"}>Khajiit</LinkPreview> named <LinkPreview url={"vasha"}>Vasha</LinkPreview>. Each had been killed by a single deep cut, which investigators attributed to a sword, running from the upper left shoulder across the torso to the lower right ribs. Whether Dranleic was responsible has never been established, and the wound differs from the distinctive cut later found on his victims.
                                        </p>
                                        <p>
                                            Dranleic is believed to have killed many more across Skyrim, among them <LinkPreview url={"narfi"}>Narfi</LinkPreview>, a beggar in <LinkPreview url={"ivarstead"}>Ivarstead</LinkPreview>; <LinkPreview url={"beitild"}>Beitild</LinkPreview>, the owner of <LinkPreview url={"iron-breaker-mine"}>Iron-Breaker Mine</LinkPreview> in <LinkPreview url={"dawnstar"}>Dawnstar</LinkPreview>; and <LinkPreview url={"ennodius-papius"}>Ennodius Papius</LinkPreview>, a former lumberjack at <LinkPreview url={"anga's-mill"}>Anga's Mill</LinkPreview>, west of <LinkPreview url={"windhelm"}>Windhelm</LinkPreview>. The Penitus Oculatus attribute these and other deaths to Dranleic because each victim bore the same deep cut down their backs as <LinkPreview url={"vittoria-vici"}>Vittoria Vici</LinkPreview>, whom witnesses saw him kill. The priests and priestesses of <LinkPreview url={"arkay"}>Arkay</LinkPreview> who tend the <LinkPreview url={"hall-of-the-dead"}>Halls of the Dead</LinkPreview> across the holds of Skyrim worked together to match the wounds. The table below lists named victims believed to have been killed by Dranleic.
                                        </p>
                                        <table className="table">
                                            <tr>
                                                <th><strong>Victim</strong></th>
                                                <th><strong>Date</strong></th>
                                                <th><strong>Location</strong></th>
                                            </tr>
                                            <tr>
                                                <td><LinkPreview url={"grelod-the-kind"}>Grelod the Kind</LinkPreview></td>
                                                <td>N/A</td>
                                                <td><LinkPreview url={"honorhall"}>Honorhall Orphanage</LinkPreview>, <LinkPreview url={"riften"}>Riften</LinkPreview>, the <LinkPreview url={"the-rift"}>Rift</LinkPreview></td>
                                            </tr>
                                            <tr>
                                                <td><LinkPreview url={"narfi"}>Narfi, the Beggar</LinkPreview></td>
                                                <td>N/A</td>
                                                <td><LinkPreview url={"ivarstead"}>Ivarstead</LinkPreview>, the <LinkPreview url={"the-rift"}>Rift</LinkPreview></td>
                                            </tr>
                                            <tr>
                                                <td><LinkPreview url={"Beitild"}>Beitild</LinkPreview> of <LinkPreview url={"iron-breaker-mine"}>Iron-Breaker Mine</LinkPreview></td>
                                                <td>N/A</td>
                                                <td><LinkPreview url={"dawnstar"}>Dawnstar</LinkPreview>, the <LinkPreview url={"the-pale"}>Pale</LinkPreview></td>
                                            </tr>
                                            <tr>
                                                <td><LinkPreview url={"ennodius-papius"}>Ennodius Papius</LinkPreview></td>
                                                <td>N/A</td>
                                                <td><LinkPreview url={"anga's-mill"}>Anga's Mill</LinkPreview>, the <LinkPreview url={"the-pale"}>Pale</LinkPreview></td>
                                            </tr>
                                            <tr>
                                                <td><LinkPreview url={"nilsine-shatter-shield"}>Nilsine Shatter-Shield</LinkPreview></td>
                                                <td>N/A</td>
                                                <td><LinkPreview url={"windhelm"}>Windhelm</LinkPreview>, <LinkPreview url={"eastmarch"}>Eastmarch</LinkPreview></td>
                                            </tr>
                                            <tr>
                                                <td><LinkPreview url={"alain-dufont"}>Alain Dufont</LinkPreview></td>
                                                <td>N/A</td>
                                                <td><LinkPreview url={"raldbthar"}>Raldbthar</LinkPreview>, the <LinkPreview url={"the-pale"}>Pale</LinkPreview></td>
                                            </tr>
                                            <tr>
                                                <td>Vampires, <LinkPreview url={"hern"}>Hern</LinkPreview> and <LinkPreview url={"hert"}>Hert</LinkPreview></td>
                                                <td>N/A</td>
                                                <td><LinkPreview url={"half-moon-mill"}>Half-Moon Mill</LinkPreview>, <LinkPreview url={"falkreath-hold"}>Falkreath Hold</LinkPreview></td>
                                            </tr>
                                            <tr>
                                                <td><LinkPreview url={"lurbuk"}>Lurbuk</LinkPreview>, the <LinkPreview url={"orc"}>Orc</LinkPreview> <LinkPreview url={"bard"}>Bard</LinkPreview></td>
                                                <td>N/A</td>
                                                <td><LinkPreview url={"moorside-inn"}>Moorside Inn</LinkPreview>, <LinkPreview url={"morthal"}>Morthal</LinkPreview>, <LinkPreview url={"hjaalmarch"}>Hjaalmarch</LinkPreview></td>
                                            </tr>
                                            <tr>
                                                <td><LinkPreview url={"vittoria-vici"}>Vittoria Vici</LinkPreview></td>
                                                <td>N/A</td>
                                                <td><LinkPreview url={"temple-of-the-divines"}>Temple of the Divines</LinkPreview>, <LinkPreview url={"solitude"}>Solitude</LinkPreview>, <LinkPreview url={"haafingar"}>Haafingar</LinkPreview></td>
                                            </tr>
                                            <tr>
                                                <td><LinkPreview url={"anton-virane"}>Anton Virane</LinkPreview></td>
                                                <td>N/A</td>
                                                <td><LinkPreview url={"understone-keep"}>Understone Keep</LinkPreview>, <LinkPreview url={"markarth"}>Markarth</LinkPreview>, the <LinkPreview url={"the-reach"}>Reach</LinkPreview></td>
                                            </tr>
                                            <tr>
                                                <td>The <LinkPreview url={"the-gourmet"}>Gourmet</LinkPreview></td>
                                                <td>N/A</td>
                                                <td><LinkPreview url={"nightgate-inn"}>Nightgate Inn</LinkPreview>, the <LinkPreview url={"the-pale"}>Pale</LinkPreview></td>
                                            </tr>
                                            <tr>
                                                <td><LinkPreview url={"commander-maro"}>Commander Maro</LinkPreview></td>
                                                <td>N/A</td>
                                                <td><LinkPreview url={"east-empire-company-warehouse"}>Solitude Docks</LinkPreview>, <LinkPreview url={"haafingar"}>Haafingar</LinkPreview></td>
                                            </tr>
                                            <tr>
                                                <td><LinkPreview url={"titus-mede-II"}>Emperor Titus Mede II</LinkPreview></td>
                                                <td>N/A</td>
                                                <td>Ship <LinkPreview url={"the-katariah"}>Katariah</LinkPreview>, Solitude Inlet, <LinkPreview url={"haafingar"}>Haafingar</LinkPreview></td>
                                            </tr>
                                            <tr>
                                                <td><LinkPreview url={"amaund-motierre"}>Amaund Motierre</LinkPreview></td>
                                                <td> __ of ______, 4E 201</td>
                                                <td><LinkPreview url={"bannered-mare"}>Bannered Mare</LinkPreview>, <LinkPreview url={"whiterun"}>Whiterun</LinkPreview>, <LinkPreview url={"whiterun-hold"}>Whiterun Hold</LinkPreview></td>
                                            </tr>
                                        </table>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Murder_of_Vittoria_Vici">Murder of Vittoria Vici</h4>
                                        </div>
                                        <p>
                                            On the [day] of [month], 4E 201, <LinkPreview url={"vittoria-vici"}>Vittoria Vici</LinkPreview> and her fiancé, <LinkPreview url={"asgeir-snow-shod"}>Asgeir Snow-Shod</LinkPreview>, were set to be married in <LinkPreview url={"solitude"}>Solitude</LinkPreview> at the <LinkPreview url={"temple-of-the-divines"}>Temple of the Divines</LinkPreview>. The ceremony was scheduled for [time] and Vittoria was to give a speech to the assembled guests. The wedding festival was an open event, so anyone could walk in and out as they pleased.
                                        </p>
                                        <div className="thumb tright">
                                            <div className="thumbinner">
                                                <ImageModal>
                                                    <img ref={(el) => { if (el?.complete) setImageWidth(el.naturalWidth); }} onLoad={(e) => setImageWidth(e.currentTarget.naturalWidth)} src={"/dummy-pic-1.png"} />
                                                </ImageModal>
                                                <div className="thumbcaption">
                                                    Dranleic murdering the bride at the Temple of the Divines
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            Eyewitnesses reported that Dranleic arrived at [time] and spoke with some of the guests before taking a seat. Spectators stated, "When Vittoria got up to give a speech and welcome the guests, [Dranleic] got up and left." At this point, he slipped into the entryway and up to the balcony where Vittoria and Asgeir were standing. At [time], while she was giving her speech, Vittoria Vici was murdered in cold blood by Dranleic Haligdrake in front of the assembled guests, the Solitude guards, and Asgeir Snow-Shod. Dranleic was chased by the city guard, and made his way towards the stairwell under the <LinkPreview url={"castle-dour"}>Castle Dour</LinkPreview> tower bridge, near the market, which leads out of the city to the docks and escaped.
                                        </p>
                                        <p>
                                            Following her death, the temple scene was investigated, and was searched for traces of the murderer. When guards inspected Vittoria Vici's body, they noticed that the wound bore a striking resemblance to those found on other victims reported across <LinkPreview url={"skyrim"}>Skyrim</LinkPreview> before the wedding. One deep cut running down the victim's back. This was immediately reported to the <LinkPreview url={"penitus"}>Penitus Oculatus</LinkPreview> and other relevant authorities for further investigation.
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Assassination_of_Gaius_Maro">Murder of Gaius Maro</h4>
                                        </div>
                                        <p>
                                            On the [day] of [month], 4E 201, <LinkPreview url={"gaius-maro"}>Gaius Maro</LinkPreview>, the son of <LinkPreview url={"commander-maro"}>Commander Maro</LinkPreview> of the <LinkPreview url={"penitus"}>Penitus Oculatus</LinkPreview>, was found dead on his way to <LinkPreview url={"solitude"}>Solitude</LinkPreview> from <LinkPreview url={"dragon-bridge"}>Dragon Bridge</LinkPreview>. A letter implicating him in a plot to kill the emperor was found on his person. No wound resembling the mark on earlier victims was found on him, but Commander Maro claimed this was the work of the <LinkPreview url={"dark-brotherhood"}>Dark Brotherhood</LinkPreview> in a ploy to disrupt the Penitus Oculatus's efforts to protect the emperor. It has not been confirmed who is responsible for Gaius's death, but previous records suggest Dranleic is the prime suspect.
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Murder_of_the_Mysterious_Gourmet">Murder of the Mysterious Gourmet</h4>
                                        </div>
                                        <p>
                                            On the [day] of [month], 4E 201, the corpse of an <LinkPreview url={"orc"}>Orc</LinkPreview> was found at <LinkPreview url={"nightgate-inn"}>Nightgate Inn</LinkPreview> in an empty mead barrel in the inn's cellar. The innkeeper found the corpse after his "important guest" went missing and claimed the body to be that of the legendary <LinkPreview url={"the-gourmet"}>Gourmet</LinkPreview>, the author behind the cookbook <i><LinkPreview url={"uncommon-taste"}>Uncommon Taste</LinkPreview></i>, who had been a special guest at the inn for an extended period of time. The Orc bore the same mark seen on other victims such as <LinkPreview url={"vittoria-vici"}>Vittoria Vici</LinkPreview>, implying that this was also the work of the <LinkPreview url={"dark-brotherhood"}>Dark Brotherhood</LinkPreview> and by extension Dranleic Haligdrake. A <LinkPreview url={"priest-of-arkay"}>priest of Arkay</LinkPreview> said that the body had been dead for some time before it was found.
                                        </p>
                                        <p>
                                            Because of how the Gourmet was secretive about his identity, no one was able to identify the Orc by his real name, and the innkeeper's claim about him being the Gourmet is the only reference available to identify the body.
                                        </p>
                                        <div className="thumb tleft">
                                            <div className="thumbinner">
                                                <ImageModal>
                                                    <img ref={(el) => { if (el?.complete) setImageWidth(el.naturalWidth); }} onLoad={(e) => setImageWidth(e.currentTarget.naturalWidth)} src={"/dummy-pic-1.png"} />
                                                </ImageModal>
                                                <div className="thumbcaption">
                                                    Dranleic murdering the heada chef of Understone Keep
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            The same day, the head chef of <LinkPreview url={"understone-keep"}>Understone Keep</LinkPreview> in <LinkPreview url={"markarth"}>Markarth</LinkPreview>, <LinkPreview url={"anton-virane"}>Anton Virane</LinkPreview>, was also killed and he too bore the mark associated with Dranleic. It is unclear whether or how this was related to the death of the Gourmet. A sous chef reported overhearing a conversation with Anton about the whereabouts of the Gourmet and his true identity. However, they stated they were so shaken by seeing Anton be murdered that they could not remember the details of the conversation.
                                        </p>
                                    </section>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Assassination_of_Titus_Mede_II">Assassination of Titus Mede II</h3>
                                    </div>
                                    <div role="note" className="hatnote">
                                        See also: <a href="">The Assassination of Emperor Titus Mede II</a>
                                    </div>
                                    <p>
                                        Dranleic is held responsible for the attempted assassination of <LinkPreview url={"titus-mede-II"}>Emperor Titus Mede II</LinkPreview> at <LinkPreview url={"castle-dour"}>Castle Dour</LinkPreview>, and for the successful assassination that followed aboard the ship <LinkPreview url={"the-katariah"}>Katariah</LinkPreview>, where sixteen people were found dead, including the emperor and <LinkPreview url={"commander-maro"}>Commander Maro</LinkPreview>. Because no one present survived, the case against Dranleic rests largely on a note found on the body of <LinkPreview url={"amaund-motierre"}>Amaund Motierre</LinkPreview>.
                                    </p>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Attempt">Attempt</h4>
                                        </div>
                                        <div role="note" className="hatnote">
                                            Main article: <a href="">The Attempted Assassination of Emperor Titus Mede II</a>
                                        </div>
                                        <div className="thumb tright">
                                            <div className="thumbinner">
                                                <ImageModal>
                                                    <img ref={(el) => { if (el?.complete) setImageWidth(el.naturalWidth); }} onLoad={(e) => setImageWidth(e.currentTarget.naturalWidth)} src={"/dummy-pic-1.png"} />
                                                </ImageModal>
                                                <div className="thumbcaption">
                                                    Dranleic "larping" as the Gourmet
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            On the [day] of [month], 4E 201, the emperor of <LinkPreview url={"tamriel"}>Tamriel</LinkPreview>, <LinkPreview url={"titus-mede-II"}>Titus Mede II</LinkPreview>, was to dine at <LinkPreview url={"castle-dour"}>Castle Dour</LinkPreview> on a meal prepared by the legendary <LinkPreview url={"the-gourmet"}>Gourmet</LinkPreview>. However, instead of the real Gourmet, Dranleic arrived in his place, disguised as him, and made his way to the kitchen, where he instructed the chef on how to prepare the potage. Before the potage was finished, he added a "secret ingredient" to the dish: <ItemPreview name="jarrin-root">Jarrin Root</ItemPreview>, which is highly poisonous.
                                        </p>
                                        <p>
                                            When the dish was ready, Dranleic and the chef brought it to the room where the emperor was waiting, and watched as he tasted it. He praised the dish before choking and dying of the poison. Dranleic fled the castle toward the bridge he had used to escape after the death of <LinkPreview url={"vittoria-vici"}>Vittoria Vici</LinkPreview>, where <LinkPreview url={"commander-maro"}>Commander Maro</LinkPreview> and several other agents confronted him, but he got away. After the events at Castle Dour, the <LinkPreview url={"dark-brotherhood-skyrim"}>Dark Brotherhood</LinkPreview>'s <LinkPreview url={"brotherhood-sanctuary-skyrim"}>sanctuary</LinkPreview>, where its members resided, was found destroyed, and the bodies of its members, including its leader, were discovered. According to Commander Maro, this was their plan: destroying the sanctuary along with killing its members.
                                        </p>
                                        <p>
                                            According to the <LinkPreview url={"penitus"}>Penitus Oculatus</LinkPreview>, the man at the castle that day was a decoy. Commander Maro stated that he had made a deal with a member of the Dark Brotherhood, under which the Penitus Oculatus would let the Brotherhood continue its business in exchange for Dranleic's life.[ref] However, he said that he had since gone back on his word and would destroy the entire Brotherhood because they killed his son.[ref]
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Assassination">Assassination</h4>
                                        </div>
                                        <div className="thumb tright">
                                            <div className="thumbinner">
                                                <ImageModal>
                                                    <img ref={(el) => { if (el?.complete) setImageWidth(el.naturalWidth); }} onLoad={(e) => setImageWidth(e.currentTarget.naturalWidth)} src={"/dummy-pic-1.png"} />
                                                </ImageModal>
                                                <div className="thumbcaption">
                                                    The body of Titus Mede II on the Katariah
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            On the [day] of [month], 4E 201 at dawn, it was discovered by citizens, guards, and fishermen alike that <LinkPreview url={"commander-maro"}>Commander Maro</LinkPreview> had been murdered on the docks, as well as all of the <LinkPreview url={"penitus-agents"}>Penitus Oculatus agents</LinkPreview> who were stationed on the ship <LinkPreview url={"the-katariah"}>Katariah</LinkPreview>, <LinkPreview url={"captain-avidus"}>Captain Avidus</LinkPreview> and <LinkPreview url={"salvarus"}>Lieutenant Salvarus</LinkPreview> and other sailors. In total, sixteen people, including the emperor, were found dead. The ship was found with dead bodies strewn around through the gangways and galley. Inside the <LinkPreview url={"emperor's-quarters"}>Emperor's Quarters</LinkPreview>, the emperor, <LinkPreview url={"titus-mede-II"}>Titus Mede II</LinkPreview>, lay dead on the floor at the window looking out to the water. People investigating noted with interest that none of the bodies bore the mark associated with Dranleic. The emperor in particular had just one, clean stab wound in his chest, denoting a more "considerate" death. Guardsmen could not directly link the deaths to Dranleic, but given his previous crimes, and since the rest of the <LinkPreview url={"dark-brotherhood-skyrim"}>Dark Brotherhood</LinkPreview> in Skyrim was believed to have died when its sanctuary collapsed, the killings were assumed to be his work.
                                        </p>
                                        <div className="thumb tleft">
                                            <div className="thumbinner">
                                                <ImageModal>
                                                    <img ref={(el) => { if (el?.complete) setImageWidth(el.naturalWidth); }} onLoad={(e) => setImageWidth(e.currentTarget.naturalWidth)} src={"/dummy-pic-1.png"} />
                                                </ImageModal>
                                                <div className="thumbcaption">
                                                    The body of Amaund Motierre at the Bannered Mare
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            That same morning, at the <LinkPreview url={"bannered-mare"}>Bannered Mare</LinkPreview> in <LinkPreview url={"whiterun"}>Whiterun city</LinkPreview>, inside a private room was the body of <LinkPreview url={"amaund-motierre"}>Amaund Motierre</LinkPreview>. The body was discovered and reported by the innkeeper, <LinkPreview url={"hulda"}>Hulda</LinkPreview>. The body was linked to Dranleic because it bore the mark seen on his other victims. On the body was a note: "While there are many who would see me dead, there is one who set the machine in motion. This person, whomever he or she may be, must be punished for their treachery. Once you have been rewarded for my assassination, I want you to kill the very person who ordered it. Would you do me this kindness? — Emperor Titus Mede II's last order." This note has been taken as evidence that Dranleic killed the emperor, since no one else present at the Katariah that night survived to hear his last words. 
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
                                        During the <LinkPreview url={"stormcloak-rebellion"}>Skyrim civil war</LinkPreview>, Dranleic fought for the <LinkPreview url={"stormcloak-clan"}>Stormcloaks</LinkPreview>, though he has never said why he chose to join them. He took part in the takeover of <LinkPreview url={"whiterun"}>Whiterun</LinkPreview>, the capture of  <LinkPreview url={"fort-neugrad"}>Fort Neugrad</LinkPreview>, <LinkPreview url={"fort-sungard"}>Fort Sungard</LinkPreview>, <LinkPreview url={"fort-snowhawk"}>Fort Snowhawk</LinkPreview>, and <LinkPreview url={"fort-hraggstad"}>Fort Hraggstad</LinkPreview>, and the final attack on <LinkPreview url={"solitude"}>Solitude</LinkPreview>, where he killed <LinkPreview url={"tullius"}>General Tullius</LinkPreview>. With most of the <LinkPreview url={"imperials"}>Imperials</LinkPreview> driven out, the war is more or less over, though <LinkPreview url={"ulfric-stormcloak"}>Ulfric</LinkPreview> has yet to become High King of Skyrim.
                                    </p>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Alliance_with_the_Stormcloaks">Alliance with the Stormcloaks</h4>
                                        </div>
                                        <p>
                                            Dranleic has not stated why he chose to join the <LinkPreview url={"stormcloaks-clan"}>Stormcloaks</LinkPreview>, but some people theorize it was in part due to what occurred at <LinkPreview url={"helgen"}>Helgen</LinkPreview>. He went to <LinkPreview url={"windhelm"}>Windhelm</LinkPreview> to speak with <LinkPreview url={"jarl"}>Jarl</LinkPreview> <LinkPreview url={"ulfric-stormcloak"}>Ulfric</LinkPreview> about joining. There, <LinkPreview url={"galmar-stone-fist"}>Galmar Stone-Fist</LinkPreview> instructed him to travel to <LinkPreview url={"serpentstone-isle"}>Serpentstone Isle</LinkPreview> and defeat an <LinkPreview url={"ice-wraith"}>ice wraith</LinkPreview> that resides there. If Dranleic succeeded, he would be seen as worthy to join the Stormcloaks' ranks. Galmar was surprised by how swiftly Dranleic returned with <ItemPreview name="ice-wraith-teeth">ice wraith teeth</ItemPreview> as proof of his accomplishment, not even a day after he had left Windhelm. Ulfric congratulated him and gave a formal speech stating that he was now a part of the Stormcloaks.
                                        </p>
                                        <div className="thumb tright">
                                            <div className="thumbinner">
                                                <ImageModal>
                                                    <img ref={(el) => { if (el?.complete) setImageWidth(el.naturalWidth); }} onLoad={(e) => setImageWidth(e.currentTarget.naturalWidth)} src={"/dummy-pic-1.png"} />
                                                </ImageModal>
                                                <div className="thumbcaption">
                                                    Dranleic fighting the draugr with the Jagged Crown
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            After this, Dranleic's next mission was to join other Stormcloaks on an expedition to acquire the <LinkPreview url={"jagged-crown"}>Jagged Crown</LinkPreview>, which Galmar claimed was located in <LinkPreview url={"korvanjund"}>Korvanjund</LinkPreview>. There, he and the other <LinkPreview url={"stormcloak-soldiers"}>Stormcloak soldiers</LinkPreview> made their way through traps and <LinkPreview url={"draugr"}>draugr</LinkPreview> to get deeper into the crypt and find the crown. Once they reached the tomb and found the crown, a draugr said to be the remains of <LinkPreview url={"king-borgas"}>King Borgas</LinkPreview> rose. Once the draugr was defeated, Dranleic ran off with the crown to deliver it to Ulfric, as instructed by Galmar.
                                        </p>
                                    </section>
                                    <section>
                                    <div className="mw-heading mw-heading-4">
                                        <h4 id="Whiterun_city_takeover">Whiterun city takeover</h4>
                                    </div>
                                    <p>
                                        <LinkPreview url={"ulfric-stormcloak"}>Ulfric</LinkPreview>'s first target was <LinkPreview url={"whiterun"}>Whiterun</LinkPreview>, because of its strategic location and because <LinkPreview url={"balgruuf-the-greater"}>Balgruuf</LinkPreview> had yet to take a side in the <LinkPreview url="stormcloak-rebellion">civil war</LinkPreview>. As <LinkPreview url={"galmar-stone-fist"}>Galmar</LinkPreview> put it, "If he's not with us, he's against us." Before the attack, however, Dranleic was tasked by Ulfric with delivering an axe to Balgruuf. This is an ancient <LinkPreview url={"nord"}>Nord</LinkPreview> tradition: if Balgruuf accepts the axe, it means he has decided to ally himself with the <LinkPreview url={"stormcloak-clan"}>Stormcloaks</LinkPreview>; if not, it means war.
                                    </p>
                                    <p>
                                        When Dranleic arrived in Whiterun, he walked steadily up to the jarl. Balgruuf, who had not seen Dranleic since he left for <LinkPreview url={"high-hrothgar"}>High Hrothgar</LinkPreview>, was pleased to see that he had made the trip. His mood quickly changed, however, as Dranleic presented the axe. Balgruuf returned the axe, and Dranleic was instructed to return to <LinkPreview url={"windhelm"}>Windhelm</LinkPreview>. So he did. When he returned with the axe, Ulfric said, “I was wrong about him.” The Stormcloaks gathered at Whiterun's gates and rushed into battle. They fired fireballs from catapults, destroying some of the city's infrastructure and killing many men, with Dranleic killing the most. When they made it inside the city walls, they rushed to <LinkPreview url={"dragonsreach"}>Dragonsreach</LinkPreview> to confront Balgruuf the Greater. There, Balgruuf and <LinkPreview url={"irileth"}>Irileth</LinkPreview> fought alongside each other against Galmar and Dranleic. They were no match for Dranleic, and Balgruuf surrendered. Turning to Dranleic, he said, <i>“And you. A Stormcloak? I'd thought better of you. You'll all come to regret this day.”</i>
                                    </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="Capturing_the_forts_of_Skyrim">Capturing the forts of Skyrim</h4>
                                        </div>
                                        <p>
                                            Dranleic fought alongside other <LinkPreview url={"stormcloaks"}>Stormcloak</LinkPreview> soldiers to capture the forts of several holds before the assault on <LinkPreview url={"solitude"}>Solitude</LinkPreview>: <LinkPreview url={"fort-neugrad"}>Fort Neugrad</LinkPreview>, <LinkPreview url={"fort-sungard"}>Fort Sungard</LinkPreview>, <LinkPreview url={"fort-snowhawk"}>Fort Snowhawk</LinkPreview>, and <LinkPreview url={"fort-hraggstad"}>Fort Hraggstad</LinkPreview>. Taking <LinkPreview url={"falkreath"}>Falkreath</LinkPreview> required the Stormcloaks to capture Fort Neugrad and rescue the Stormcloaks imprisoned in its dungeons. Dranleic stormed the fort, freed the prisoners alongside the other soldiers, and fought the <LinkPreview url={"imperial-soldiers"}>Imperials</LinkPreview> from inside the fort. Fort Sungard in the <LinkPreview url={"the-reach"}>Reach</LinkPreview> was swiftly taken by the Stormcloaks in the night, with Dranleic among them, and so was Fort Snowhawk, after Dranleic stole documents from an <LinkPreview url="imperial">Imperial</LinkPreview> courier detailing plans to send reinforcements to the fort. The documents were then forged and delivered to <LinkPreview url={"tullius"}>General Tullius</LinkPreview>, and the fort was easily taken, since it never received the reinforcements it so desperately needed. Then all that was missing was to take Fort Hraggstad in <LinkPreview url={"haafingar"}>Haafingar</LinkPreview> in order to weaken the <LinkPreview url="the-empire">empire</LinkPreview> and the defense of Solitude. Like the ones before the fort was swiftly taken by the Stormcloaks and Dranleic. They could now initiate their attack on Solitude and have <LinkPreview url={"ulfric-stormcloak"}>Ulfric</LinkPreview> take his place as the rightful High King of Skyrim.
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4 id="The_battle_for_Solitude">Battle for Solitude</h4>
                                        </div>
                                        <div role="note" className="hatnote">
                                           See also: <a href="">Battle of Solitude</a>
                                        </div>
                                        <div className="thumb tright">
                                            <div className="thumbinner">
                                                <ImageModal>
                                                    <img ref={(el) => { if (el?.complete) setImageWidth(el.naturalWidth); }} onLoad={(e) => setImageWidth(e.currentTarget.naturalWidth)} src={"/dummy-pic-1.png"} />
                                                </ImageModal>
                                                <div className="thumbcaption">
                                                    Dranleic next to Galmar and Ulfric at the Castle Dour entrance during Ulfric's speech
                                                </div>
                                            </div>
                                        </div>
                                        <p>
                                            On the [day] of [month], 4E 201, <LinkPreview url={"ulfric-stormcloak"}>Ulfric</LinkPreview> and the <LinkPreview url={"stormcloaks"}>Stormcloaks</LinkPreview> attacked <LinkPreview url={"solitude"}>Solitude</LinkPreview>, the capital of Skyrim. Dranleic was among the soldiers who fought the city's many <LinkPreview url="imperial-soldiers">Imperial defenders</LinkPreview>. Dranleic and the other soldiers made their way to <LinkPreview url={"castle-dour"}>Castle Dour</LinkPreview> to confront and kill <LinkPreview url="tullius">General Tullius</LinkPreview> and <LinkPreview url={"legate-rikke"}>Legate Rikke</LinkPreview>. Once inside the castle, few words were exchanged before both sides began to fight. As with <LinkPreview url={"balgruuf-the-greater"}>Balgruuf</LinkPreview> and <LinkPreview url={"irileth"}>Irileth</LinkPreview> in <LinkPreview url={"whiterun"}>Whiterun</LinkPreview>, neither Tullius nor Rikke was a match for Dranleic, and he was given the honor of beheading Tullius, as Tullius had nearly done to him at <LinkPreview url={"helgen"}>Helgen</LinkPreview>. Dranleic stood beside Ulfric and <LinkPreview url={"galmar-stone-fist"}>Galmar</LinkPreview> as Ulfric gave a victory speech at the castle entrance to the Stormcloak soldiers who made it through the battle. Much of the city's infrastructure was damaged, but it has mostly been repaired since. Most <LinkPreview url={"imperials"}>Imperials</LinkPreview> were slain in the attack on Solitude, and the survivors joined the <LinkPreview url={"stormcloak-clan"}>Stormcloaks</LinkPreview>.
                                        </p>
                                        <p>
                                            However, Ulfric could not yet become high king, because <LinkPreview url={"elisif-the-fair"}>Elisif</LinkPreview> was still high queen and held the throne. He planned to marry her to secure his place as high king, but the arrangements have not gone through, and many wonder whether Skyrim will ever have a new high king before Elisif is no more. Still, the Stormcloaks' victory is very real: they have driven out most of the Imperials and the <LinkPreview url={"the-empire"}>Empire</LinkPreview>, and citizens of Skyrim can rest more easily now that the civil war is more or less behind them.
                                        </p>
                                    </section>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Vampires</h3> 
                                    </div>
                                    <p>
                                        Few are aware that Dranleic has an alliance with the vampires in <LinkPreview url={"skyrim"}>Skyrim</LinkPreview>. However, sources and rumors suggest that the vampires see him as a powerful individual and therefore do not engage him in battle. How exactly this came to be is unclear. Dranleic is not a vampire in any form, so it is unusual that the vampires do not attack or at least target him. <LinkPreview url={"isran"}>Isran</LinkPreview>, the leader of the <LinkPreview url={"dawnguard"}>Dawnguard</LinkPreview>, explained that Dranleic betrayed the Dawnguard for his own gain by aligning himself with the vampires in order to have more authority in these already troubled times.
                                    </p>
                                    <div className="thumb tright">
                                            <div className="thumbinner">
                                                <ImageModal>
                                                    <img ref={(el) => { if (el?.complete) setImageWidth(el.naturalWidth); }} onLoad={(e) => setImageWidth(e.currentTarget.naturalWidth)} src={"/dummy-pic-1.png"} />
                                                </ImageModal>
                                                <div className="thumbcaption">
                                                    Dranleic walking together with Serana at Solitude
                                                </div>
                                            </div>
                                        </div>
                                    <p>
                                        At that time, the Dawnguard was seeking new members as it reformed, and it had recently been attacked by vampires, as had the <LinkPreview url={"vigilants"}>Vigilants of Stendarr</LinkPreview>. Isran reported that on the [day] of [month], Dranleic came to <LinkPreview url={"fort-dawnguard"}>Fort Dawnguard</LinkPreview> wishing to join the Dawnguard and the Vigilants of Stendarr in ridding Skyrim of vampires and vampirism. He was given the task of finding out what the vampires were looking for, since Isran and the Vigilants theorized there had to be a motive behind the sudden attack. However, Isran stated he did not see Dranleic return after leaving Fort Dawnguard for <LinkPreview url={"dimhollow-crypt"}>Dimhollow Crypt</LinkPreview> alongside <LinkPreview url={"tolan"}>Tolan</LinkPreview>, a Vigilant of Stendarr who survived the vampires' attack.
                                    </p>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3 id="Dragon_Crisis">Dragon Crisis</h3>
                                    </div>
                                    <p>
                                        You had to be there :V
                                    </p>
                                </section>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2 id="Titles_and_honors">Titles and honors</h2>
                                </div>
                                <p>
                                    <LinkPreview url={"jarl"}>Jarl</LinkPreview> <LinkPreview url={"balgruuf-the-greater"}>Balgruuf the Greater</LinkPreview> named Dranleic <LinkPreview url={"thane"}>Thane</LinkPreview> of <LinkPreview url={"whiterun"}>Whiterun</LinkPreview> in recognition of his service, which included retrieving the <ItemPreview name={"dragonstone"}>Dragonstone</ItemPreview> from <LinkPreview url={"bleak-falls-barrow"}>Bleak Falls Barrow</LinkPreview> and helping to kill the <LinkPreview url={"dragon"}>dragon</LinkPreview> at the Western Watchtower. Balgruuf said, “By my right as Jarl, I name you Thane of Whiterun. It's the greatest honor that's within my power to grant.”[ref] 
                                </p>
                                <p>
                                    Following the <LinkPreview url={"stormcloak-rebellion"}>civil war</LinkPreview>, Dranleic was named thane of every other hold by its jarl.
                                </p>
                                <table className="table">
                                    <tr>
                                        <th><strong>Hold</strong></th>
                                        <th><strong>Jarl</strong></th>
                                        <th><strong>Date</strong></th>
                                    </tr>
                                    <tr>
                                        <td><LinkPreview url={"whiterun"}>Whiterun</LinkPreview></td>
                                        <td><LinkPreview url={"balgruuf-the-greater"}>Balgruuf the Greater</LinkPreview></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><LinkPreview url={"riften"}>Riften</LinkPreview></td>
                                        <td><LinkPreview url={"laila-law-giver"}>Laila Law-Giver</LinkPreview></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><LinkPreview url={"dawnstar"}>Dawnstar</LinkPreview></td>
                                        <td><LinkPreview url={"jarl-skald"}>Skald</LinkPreview></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><LinkPreview url={"markarth"}>Markarth</LinkPreview></td>
                                        <td><LinkPreview url={"thongvor-silver-blood"}>Thongvor Silver-Blood</LinkPreview></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><LinkPreview url={"morthal"}>Morthal</LinkPreview></td>
                                        <td><LinkPreview url={"sorli-the-builder"}>Sorli the Builder</LinkPreview></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><LinkPreview url={"solitude"}>Solitude</LinkPreview></td>
                                        <td><LinkPreview url={"elisif-the-fair"}>Elisif the Fair</LinkPreview></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><LinkPreview url={"winterhold"}>Winterhold</LinkPreview></td>
                                        <td><LinkPreview url={"jarl-korir"}>Korir</LinkPreview></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><LinkPreview url={"windhelm"}>Windhelm</LinkPreview></td>
                                        <td><LinkPreview url={"ulfric-stormcloak"}>Ulfric Stormcloak</LinkPreview></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td><LinkPreview url={"falkreath"}>Falkreath</LinkPreview></td>
                                        <td><LinkPreview url={"dengeir-of-stuhn"}>Dengeir of Stuhn</LinkPreview></td>
                                        <td></td>
                                    </tr>
                                </table>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Other titles</h3>
                                    </div>
                                    <table className="table">
                                        <tr>
                                            <th><strong>Title</strong></th>
                                            <th><strong>Granted by</strong></th>
                                            <th><strong>Status</strong></th>
                                        </tr>
                                        <tr>
                                            <td>Stromblade</td>
                                            <td><LinkPreview url={"ulfric-stormcloak"}>Ulfric Stormcloak</LinkPreview></td>
                                            <td>Confirmed</td>
                                        </tr>
                                        <tr>
                                            <td>War Hero</td>
                                            <td>-</td>
                                            <td>Confirmed</td>
                                        </tr>
                                        <tr>
                                            <td><LinkPreview url={"ysmir"}>Ysmir</LinkPreview></td>
                                            <td>The <LinkPreview url={"greybeards"}>Greybeards</LinkPreview></td>
                                            <td>Confirmed</td>
                                        </tr>
                                        <tr>
                                            <td><LinkPreview url={"dragonborn"}>Dragonborn</LinkPreview></td>
                                            <td>The Greybeards</td>
                                            <td>Disputed</td>
                                        </tr>
                                        <tr>
                                            <td><LinkPreview url={"last-dragonborn"}>Dragonborn of legend</LinkPreview></td>
                                            <td>-</td>
                                            <td>Disputed</td>
                                        </tr>
                                        <tr>
                                            <td>Guildmaster</td>
                                            <td>-</td>
                                            <td>Unconfirmed</td>
                                        </tr>
                                    </table>
                                </section>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2>Public perception</h2>
                                </div>
                                <p>
                                    Dranleic is a rather controversial person in <LinkPreview url={"skyrim"}>Skyrim</LinkPreview>. It is often debated whether he is or is not the figure depicted on <LinkPreview url={"alduin's-wall"}>Alduin's Wall</LinkPreview> or whether he has the blood of dragons at all. He is feared, doubted, and admired, all at once, by the citizens of Skyrim, and many still question his place in the province, where he comes from, and what authority he holds, such as within the <LinkPreview url={"thieves-guild-skyrim"}>Thieves Guild</LinkPreview>. The people of Skyrim can be split into three primary groups: the doubters, who believe Dranleic is a fraud and not a <LinkPreview url={"dragonborn"}>Dragonborn</LinkPreview> at all; the believers, who wholeheartedly believe Dranleic is a savior and a living legend; and the fence-sitters, who believe he is a Dragonborn, but not the one in the legend.
                                </p>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>The Doubters</h3>
                                    </div>
                                    <p>
                                        ...
                                    </p>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>The Believers</h3>
                                    </div>
                                    <p>
                                        ...
                                    </p>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>The Fence-sitters</h3>
                                    </div>
                                    <p>
                                        ...
                                    </p>
                                </section>
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