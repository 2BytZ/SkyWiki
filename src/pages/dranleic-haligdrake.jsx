
import { InfoCard } from "../components/InfoCard"
import "./characterPage.css"


export function Dranleic() {
    
    const origin = {
        title: "Homeland/Origin",
        desc: [
            {text: "Cyrodiil", href: "https://en.uesp.net/wiki/Lore:Cyrodiil"},
            {text: ", "},
            {text: "Tamriel", href: "https://en.uesp.net/wiki/Lore:Tamriel"},
        ]
    }
    const race = {title: "Race", desc: [{text: "Argonian", href: "https://en.uesp.net/wiki/Lore:Argonian"}]}
    const gender = { title: "Gender", desc: "Male"}
    const birth = { title: "Birth", desc: "6th of First Seed, 4E 1XX"}
    const faction = {
        title: "Faction(s)",
        desc: [
            {text: "Thieves Guild", href: "https://en.uesp.net/wiki/Skyrim:Thieves_Guild_(faction)"},
            {text: ", "},
            {text: "Dark Brotherhood", href: "https://en.uesp.net/wiki/Skyrim:Dark_Brotherhood"},
            {text: ", "},
            {text: "Stormcloaks", href: "https://en.uesp.net/wiki/Lore:Stormcloak_Clan"},
        ]
    }
    const titles = {
        title: "Title(s)",
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
    const spouse = {title: "Spouse", desc: [{text: "Brelyna Maryon", href: "https://en.uesp.net/wiki/Skyrim:Brelyna_Maryon"}]}
    const children = {title: "Children", desc: "2"}
    const arrests = {title: "# of times in jail", desc: "4"}
    const kills = {title: "Confirmed Kills", desc: "N/A"}
    const bounty = {title: "Accumulated Bounty", desc: "N/A"}
    const sentence = {title: "Estimated judicial sentence", desc: "Death / Public Execution"}


    const infoCardRows = [origin, race, gender, birth, faction, titles, spouse, children, arrests, kills, bounty, sentence]

    return (
        <>
            <div className="content-body">
                <main>
                    <h1 className="firstHeading mw-first-heading">Dranleic Haligdrake</h1>
                    <div className="vector-content">
                        <div className="mw-body-content">
                            <div className="infobox-wrapper">
                                <table className="infobox vcard">
                                    <caption className="infobox-title">Dranleic Haligdrake</caption>
                                    <tbody>
                                        <tr>
                                            <td colSpan="2" className="infobox-img">
                                                <img src="/dummy-pic-character-page.png" alt="Dranleic Haligdrake" height="155" width="170" className="mw-file-upright" />
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
                                    Akatosh, Arkay, Dibella, Julianos, Kynareth, Mara, Stendarr, Zenithar, Talos. Draal wah wo hi los sahvot. Hi fen ni lahney.
                                </div>
                            </blockquote>
                            <section>
                                <p>
                                    <b>Dranleic Haligdrake</b> is a male <a href="https://en.uesp.net/wiki/Lore:Argonian">Argonian</a> warrior, thief and assassin, said to be the <a href="https://en.uesp.net/wiki/Lore:Last_Dragonborn">Dragonborn of legend</a>. Having ties to notable criminal factions such as the <a href="https://en.uesp.net/wiki/Lore:Thieves_Guild">Thieves Guild</a> and the <a href="https://en.uesp.net/wiki/Lore:Dark_Brotherhood">Dark Brotherhood</a>, he also has connections with people in positions of power in <a href="https://en.uesp.net/wiki/Lore:Skyrim">Skyrim</a>, such as the <a href="https://en.uesp.net/wiki/Skyrim:Jarl">Jarls</a>. Dranleic hails from <a href="https://en.uesp.net/wiki/Lore:Cyrodiil">Cyrodiil</a> in <a href="https://en.uesp.net/wiki/Lore:Tamriel">Tamriel</a>. His true age and potential parents are unknown; however, based on physical appearance and attributes, it is believed he was born in the last half-century. Dranleic is a notorious force of evil and mischief in Skyrim. Although it is said that he is the <a href="https://en.uesp.net/wiki/Lore:Dragonborn">Dragonborn</a>, many citizens disagree because of the various misdeeds he has committed and chaos he has caused during his time in <a href="https://en.uesp.net/wiki/Lore:Skyrim">Skyrim</a>.
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
                                    <h2>Career</h2>
                                </div>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Early career</h3>
                                    </div>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4>Escape from Helgen</h4>
                                        </div>
                                        <p>
                                            [TBA]
                                        </p>
                                        <div className="mw-heading mw-heading-4">
                                            <h4>Thanehood in Whiterun</h4>
                                        </div>
                                        <p>
                                            [TBA]
                                        </p>
                                        <div className="mw-heading mw-heading-4">
                                            <h4>The Greybeards' call</h4>
                                        </div>
                                        <p>
                                            [TBA]
                                        </p>
                                    </section>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Joining the Thieves Guild</h3>
                                    </div>
                                    <p>
                                        [TBA]
                                    </p>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4>Becoming a Nightingale</h4>
                                        </div>
                                        <p>
                                            [TBA]
                                        </p>
                                    </section>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4>Restoration of the Thieves Guild</h4>
                                        </div>
                                        <p>
                                            [TBA]
                                        </p>
                                        <section>
                                            <div className="mw-heading mw-heading-5">
                                                <h5>Becoming Guildmaster</h5>
                                            </div>
                                            <p>
                                                [TBA]
                                            </p>
                                        </section>
                                    </section>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Joining the Companions</h3>
                                    </div>
                                    <p>
                                        [TBA]
                                    </p>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Joining the Dark Brotherhood</h3>
                                    </div>
                                    <p>
                                        [TBA]
                                    </p>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4>Revitalizing the Dark Brotherhood</h4>
                                        </div>
                                        <p>
                                            [TBA]
                                        </p>
                                    </section>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Alliance with the Stormcloaks</h3>
                                    </div>
                                    <p>
                                        [TBA]
                                    </p>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Becoming Thane of the holds</h3>
                                    </div>
                                    <p>
                                        [TBA]
                                    </p>
                                </section>
                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Pledging allegiance with the vampires</h3>
                                    </div>
                                    <p>
                                        [TBA]
                                    </p>
                                </section>
                            </section>
                            <section>
                                <div className="mw-heading mw-heading-2">
                                    <h2>Notable events</h2>
                                </div>

                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Escaping from Cidhna Mine</h3>
                                    </div>
                                    <p>
                                        [TBA]
                                    </p>
                                    <section>
                                        <div className="mw-heading mw-heading-4">
                                            <h4>Battle of the Forsworn</h4>
                                        </div>
                                        <div role="note" className="hatnote">
                                            See also: <a href="https://en.uesp.net/wiki/Lore:Forsworn_Rebellion">The Forsworn Rebellion</a>
                                        </div>
                                        <p>
                                            [TBA]
                                        </p>
                                    </section>
                                </section>

                                <section>
                                    <div className="mw-heading mw-heading-3">
                                        <h3>Return of the Dark Brotherhood</h3>
                                    </div>
                                    <p>
                                        [TBA]
                                    </p>
                                        <div>
                                            <h4>The murder of Vittoria Vici</h4>
                                        </div>
                                        <div role="note" className="hatnote">
                                            See also: <a href="">The Assassination of Vittoria Vici</a>
                                        </div>
                                        <p>

                                        </p>
                                        <div>
                                            <h4>The assassination of Gaius Maro</h4>
                                        </div>
                                        <p>

                                        </p>
                                        <div>
                                            <h4>The murder of the Mysterious Gourmet</h4>
                                        </div>
                                        <p>

                                        </p>
                                        <div>
                                            <h4>Attempted assassination of the Emperor</h4>
                                        </div>
                                        <div role="note" className="hatnote">
                                            See also: <a href="">The Attempted Assassination of Emperor Titus Mede II</a>
                                        </div>
                                        <p>

                                        </p>
                                        <div>
                                            <h4>The assassination of Emperor Titus Mede II</h4>
                                        </div>
                                        <div role="note" className="hatnote">
                                            See also: <a href="">The Assassination of Emperor Titud Mede II</a>
                                        </div>
                                        <p>
                                            
                                        </p>
                                </section>
                                <section>
                                    <div>
                                        <h3>Civil war</h3>
                                    </div>
                                    <div role="note" className="hatnote">
                                        See also: <a href="https://en.uesp.net/wiki/Lore:Stormcloak_Rebellion">Skyrim Civil War</a>
                                    </div>
                                    <p>
                                        [...] Played a big part in the <a href="https://en.uesp.net/wiki/Lore:Stormcloak_Rebellion">Stormcloak rebellion</a> and their success in <a href="">the battle for Solitude</a>...
                                    </p>
                                    <div>
                                        <h4>Whiterun city takeover</h4>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <div>
                                        <h4>Liberation of Falkreath</h4>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <div>
                                        <h4>Liberation of the Reach</h4>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <div>
                                        <h4>Liberation of Hjaalmarch</h4>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <div>
                                        <h4>Liberation of the Pale</h4>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <div>
                                        <h4>Liberation of Winterhold</h4>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <div>
                                        <h4>Liberation of the Rift</h4>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <div>
                                        <h4>Liberation of Haalfingar</h4>
                                    </div>
                                    <p>
                                        
                                    </p>
                                    <div>
                                        <h4>The battle for Solitude</h4>
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
                                </section>
                            </section>
                            <section>
                                <div>
                                    <h2>Gallery</h2>
                                </div>
                            </section>
                            <section>
                                <div>
                                    <h2>See also</h2>
                                </div>
                                Emperor Uriel Septim VII (https://en.uesp.net/wiki/Lore:Uriel_VII)
                                Emperor Titus Mede II (https://en.uesp.net/wiki/Lore:Titus_Mede_II)
                                Asgier Snow-Shod (https://en.uesp.net/wiki/Skyrim:Asgeir_Snow-Shod)
                                Vittoria Vici (https://en.uesp.net/wiki/Skyrim:Vittoria_Vici)
                            </section>
                            <section>
                                <div>
                                    <h2>References</h2>
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