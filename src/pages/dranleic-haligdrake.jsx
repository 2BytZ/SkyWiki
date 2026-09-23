import { InfoCard } from "../components/InfoCard"


export function Dranleic() {
    
    const origin = {
        title: "Homeland/Origin",
        desc: [
            {text: "Cyrodiil", href: "https://en.uesp.net/wiki/Lore:Cyrodiil"},
            {text: ", "},
            {text: "Tamriel", href: "https://en.uesp.net/wiki/Lore:Tamriel"},
        ]
    }
    const race = {
        title: "Race", 
        desc: [
            {text: "Argonian", href: "https://en.uesp.net/wiki/Lore:Argonian"}
        ]
    }
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
            {text: ", "},
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
    const family = {title: "Family Role", desc: "Father, married to Brelyna Maryon with two children"}
    const arrests = {title: "# of times in jail", desc: "4"}
    const kills = {title: "Confirmed Kills", desc: "N/A"}
    const bounty = {title: "Accumulated Bounty", desc: "N/A"}
    const sentence = {title: "Estimated judicial sentence", desc: "Death / Public Execution"}


    const infoCardRows = [origin, race, gender, birth, faction, titles, family, arrests, kills, bounty, sentence]

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Dranleic Haligdrake</td>
                    </tr>
                    <tr>
                        <img src="public/Dranleic-Haligdrake-thumb.jpg" alt="Dranleic Haligdrake" />
                    </tr>
                </thead>
                <tbody>
                    {infoCardRows.map((info) => {
                        return <InfoCard key={info.title} info={info}/>
                    })}            
                </tbody>
            </table>
        </>
    )
}