
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
            <div className="mw-page-container">
                <div className="mw-page-container-inner">
                    <div className="vector-column-start">
                        <div className="vector-sticky-pinned-container">
                            <nav className="mw-table-of-contents-container">
                                <ul className="vector-toc-contents">
                                    <li className="vector-toc-list-item">
                                        <a href="#" className="vector-toc-link">
                                            <div className="vector-toc-text">Back to top</div>
                                        </a>
                                    </li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="mw-content-container">
                        <main className="mw-body">
                            <header className="mw-body-header">
                                {/* 
                                    TOC collapsed here
                                */}
                                <h1 className="firstHeading mw-first-heading">Dranleic Haligdrake</h1>
                            </header>
                            <div className="mw-body-container">
                                <div className="mw-body-content">
                                    <section>
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
                                    </section>
                                    <section>

                                    </section>
                                    {/* Content goes here in <section>s */}
                                </div>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    )
}