import { useRef } from "react"
import { TableOfContents } from "../components/TableOfContents"
import { InfoCard } from "../components/InfoCard"
import "./characterPage.css"


export function Dranleic() {
    const contentRef = useRef(null)

    const origin = {
        title: "Hofkiin",
        desc: [
            {text: "Cyrodiil", href: "https://en.uesp.net/wiki/Lore:Cyrodiil"},
            {text: ", "},
            {text: "Tamriel", href: "https://en.uesp.net/wiki/Lore:Tamriel"},
        ]
    }
    const race = {title: "Reyliik", desc: [{text: "Argonian", href: "https://en.uesp.net/wiki/Lore:Argonian"}]}
    const gender = { title: "Veiliin", desc: "Male"}
    const birth = { title: "Kiin", desc: "6th of First Seed, 4E 1XX"}
    const faction = {
        title: "Tokah(he)",
        desc: [
            {text: "Thieves Guild", href: "https://en.uesp.net/wiki/Skyrim:Thieves_Guild_(faction)"},
            {text: ", "},
            {text: "Dark Brotherhood", href: "https://en.uesp.net/wiki/Skyrim:Dark_Brotherhood"},
            {text: ", "},
            {text: "Stormcloaks", href: "https://en.uesp.net/wiki/Lore:Stormcloak_Clan"},
        ]
    }
    const titles = {
        title: "Tet(te)",
        desc: [
            {text: "Thane", href: "https://en.uesp.net/wiki/Lore:Thanes"}, {text: " of "},
            {text: "Whiterun", href: "https://en.uesp.net/wiki/Lore:Whiterun"},
            {text: ", "},
            {text: "Riften", href: "https://en.uesp.net/wiki/Lore:Riften"},
            {text: ", "},
            {text: "Dawnstar", href: "https://en.uesp.net/wiki/Lore:Dawnstar"},
            {text: ", "},
            {text: "Markarth", href: "https://en.uesp.net/wiki/Lore:Markarth"},
            {text: ", "},
            {text: "Morthal", href: "https://en.uesp.net/wiki/Lore:Morthal"},
            {text: ", "},
            {text: "Solitude", href: "https://en.uesp.net/wiki/Lore:Solitude"},
            {text: ", "},
            {text: "Winterhold", href: "https://en.uesp.net/wiki/Lore:Winterhold_(city)"},
            {text: ", "},
            {text: "Windhelm", href: "https://en.uesp.net/wiki/Lore:Windhelm"},
            {text: " and "},
            {text: "Falkreath", href: "https://en.uesp.net/wiki/Lore:Falkreath"},
            {text: ", "},
            {text: "War Hero"},
            {text: ", "},
            {text: "Stormblade"},
            {text: ", "},
            {text: "Guildmaster"},
            {text: ", "},
            {text: "Ysmir", href: "https://en.uesp.net/wiki/Lore:Ysmir"}
        ]
    }
    const spouse = {title: "Wolov", desc: [{text: "Brelyna Maryon", href: "https://en.uesp.net/wiki/Skyrim:Brelyna_Maryon"}]}
    const children = {title: "Kiir", desc: "2"}
    const arrests = {title: "# waarth lost poltor", desc: "4"}
    const kills = {title: "Daazriaan kriihe", desc: "N/A"}
    const bounty = {title: "Qor povaas", desc: "N/A"}
    const sentence = {title: "suzaan thunuv gronzul", desc: "Dinok / Jormah oprotak"}


    const infoCardRows = [origin, race, gender, birth, faction, titles, spouse, children, arrests, kills, bounty, sentence]

    return (
        <>
            <div className="content-body">
                <div className="vector-column-start">
                    <TableOfContents contentRef={contentRef} />
                </div>
                <main className="mw-content-container">
                    <h1 className="firstHeading mw-first-heading">Dranleic Haligdrake</h1>
                    <p className="dovahzul">dranl2c revakdov4</p>
                    <div className="vector-content">
                        <div className="mw-body-content" ref={contentRef}>
                            <div className="infobox-wrapper">
                                <table className="infobox vcard">
                                    <caption className="infobox-title dovahzul-small">dranl2c revakdov4</caption>
                                    <tbody>
                                        <tr>
                                            <td colSpan="2" className="infobox-img">
                                                <img src="/dranleic-haligdrake-powerful-clenched-fist2.jpg" alt="Dranleic Haligdrake" height="155" width="170" className="mw-file-upright" />
                                            </td>
                                        </tr>
                                        {infoCardRows.map((info) => {
                                            return <InfoCard key={info.title} info={info}/>
                                        })}
                                    </tbody>
                                </table>
                            </div>
                            <blockquote className="page-quote">
                                <div className="quote-style">"</div>
                                <div className="quote-text-style">
                                    <span className="dovahzul-quote-style">dr1l w4 p4wo hi los s4vot2. hi fen ni n2l1s...</span>
                                    <p className="dovahzul-english">Draal wah pahwo hi los sahvotei. Hi fen ni neilaas...</p>
                                </div>
                            </blockquote>
                            <section>
                                    <p className="dovahzul">
                                        <b>dranl2c revakdov4</b> los 1n punmak <a href="https://en.uesp.net/wiki/Lore:Argonian">s3gonis</a> kendov, taf3r 4rk 4vulon, s1g kos f1l <a href="https://en.uesp.net/wiki/Lore:Last_Dragonborn">dov4k3n do z8r</a>. p71k gronne w4 s4rotwultr3ntok4he grik ol f1l <a href="https://en.uesp.net/wiki/Lore:Thieves_Guild">taf3rretok4</a> 4rk f1l <a href="https://en.uesp.net/wiki/Lore:Dark_Brotherhood">vulz9m4m1r</a>, he 4k lost gevothendhe w4 muz ko kost1dde do sol9k 4st <a href="https://en.uesp.net/wiki/Lore:Skyrim">k2z1l</a>, grik ol f1l <a href="https://en.uesp.net/wiki/Skyrim:Jarl">bronjunne</a>. dranl2c y2nne nol <a href="https://en.uesp.net/wiki/Lore:Cyrodiil">sarod1l</a> ko  <a href="https://en.uesp.net/wiki/Lore:Tamriel">t1zok1n</a>. ok v4z4 bok 4rk z4vos laf1nne los vomindok; vuthar1k, frolokvon w4 kopr1nuvgenund 4rk tr4k3nne, n3 los kor4 rok lost k3n ko fin l1t hefbeneruvos. dranl2c los 1n dufr4k2 fussevokul 4rk lakif 4st k2z1l. to n3 los s1g tol rok los f1l <a href="https://en.uesp.net/wiki/Lore:Dragonborn">dov4k3n</a>, pog1n t6s1lle vorol6 f4 do fin pog1t nostigge rok lost dr4 4rk t4rovin rok lost drun ko ok t3d 4st k2z1l.
                                    </p>
                                <p className="dovahzul-english">
                                    <b>Dranleic Revakdovah</b> los aan punmak <a href="https://en.uesp.net/wiki/Lore:Argonian">Siigonis</a> kendov, tafiir ahrk ahvulon, saag kos faal <a href="https://en.uesp.net/wiki/Lore:Last_Dragonborn">Dovahkiin do zoor</a>. Piraak gronne wah sahrotwultriintokahhe grik ol faal <a href="https://en.uesp.net/wiki/Lore:Thieves_Guild">Tafiirretokah</a> ahrk faal <a href="https://en.uesp.net/wiki/Lore:Dark_Brotherhood">Vulzeymahmaar</a>, rok ahk lost gevothendhe wah muz ko kostaadde do soleyk ahst <a href="https://en.uesp.net/wiki/Lore:Skyrim">Keizaal</a>, grik ol faal <a href="https://en.uesp.net/wiki/Skyrim:Jarl">Bronjunne</a>. Dranleic yeinne nol <a href="https://en.uesp.net/wiki/Lore:Cyrodiil">Sarodaal</a> ko <a href="https://en.uesp.net/wiki/Lore:Tamriel">Taazokaan</a>. Ok vahzah bok ahrk zahvos lafaanne los vomindok; vutharaak, frolokvon wah kopraanuvgenund ahrk trahkiinne, nii los korah rok lost kiin ko fin laat hefbeneruvos. Dranleic los aan dufrahkei fussevokul ahrk lakif ahst Keizaal. To nii los saag tol rok los faal <a href="https://en.uesp.net/wiki/Lore:Dragonborn">Dovahkiin</a>, pogaan tursaalle vorolur fah do fin pogaat nostigge rok lost drah ahrk tahrovin rok lost drun ko ok tiid ahst Keizaal.
                                </p>
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
                                    <h2>Early life</h2>
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
                                        <section>
                                            <div className="mw-heading mw-heading-5">
                                                <h5 id="Becoming_Guildmaster">Becoming Guildmaster</h5>
                                            </div>
                                            <p>
                                                
                                            </p>
                                        </section>
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