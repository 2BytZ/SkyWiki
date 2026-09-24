import { href } from "react-router-dom"
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
    const birth = { title: "Birth", desc: "6th of First Seed, 4E1XX"}
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </div>
                            </blockquote>
                            <section>
                                <p>
                                    <b>Dranliec Haligdrake</b> is a male Argonian warrior, thief and assassin, said to be the Dragonborn of legend, with connections with notable criminal factions such as the Thieves Guild and the Dark Brotherhood, all the while still having connection with people of power in the land of Skyrim such as the Jarls. Dranleic hails from Cyrodiil in the land of Tamriel. Both his true age and his potential parents are unknown, though we do know of his birthday and that he was born in the last half century or so. He is a notorious force of evil and mischief known throughout Skyrim. Although it is said that he is to be the Dragonborn, many people and citizens alike disagree with this fact because of all the misdeeds he has done and all the chaos that has been caused by him in his time in Skyrim.
                                </p>
                                <p>
                                    Dranleic has been involved in some of the biggest criminal events Skyrim has seen in the last couple centuries and has played a huge part in those criminal operations, often being the centerpiece of the operations – operations such The attempt to kill the Emperor of Tamriel, The Escape of Cidhna mine with Madanach and the bloodbath that followed, the Murder of Vittoria Vici the soon-to-be spouse of Asgier Snow-Shod, along with the takeover of the the major holds of Skyrim; The city of Whiterun, Falkreath, Markarth and Solitude.
                                </p>
                                <p>
                                    Dranleic Haligdrake also had a big influence in the Restoration of the Thieves Guild and the Revitalization of the Dark Brotherhood. For these reasons, Dranliec Haligdrake is known throughout Skyrim and many fear they will encounter him and what may happen to them and their families if they do. Therefore Dranleic is fierce, and a force - not to be reckoned with.
                                </p>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}