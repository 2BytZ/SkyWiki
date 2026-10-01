import { useRef } from "react"
import { TableOfContents } from "../components/TableOfContents"
import { InfoCard } from "../components/InfoCard"
import "./characterPage.css"

export function Pharis() {
    const contentRef = useRef(null)

    const origin = {
        title: "Homeland/Origin",
        desc: [
            {text: "Stormhold", href: "https://en.uesp.net/wiki/Lore:Stormhold"},
            {text: ", "},
            {text: "Shadowfen", href: "https://en.uesp.net/wiki/Lore:Shadowfen"},
            {text: ", "},
            {text: "Black Marsh", href: "https://en.uesp.net/wiki/Lore:Black_Marsh"},
            {text: ", "},
            {text: "Tamriel", href: "https://en.uesp.net/wiki/Lore:Tamriel"}
        ]
    }
    const race = {title: "Race", desc: [{text: "Argonian", href: "https://en.uesp.net/wiki/Lore:Argonian"}]}
    const gender = {title: "Gender", desc: "Male"}
    const birth = {title: "Birth", desc: "14th of Second Seed, 4E 180"}
    const faction = {
        title: "Factions(s)",
        desc: [
            {text: "Thieves Guild", href: "https://en.uesp.net/wiki/Skyrim:Thieves_Guild_(faction)"},
            {text: ", "},
            {text: "Shadowscales", href: "https://en.uesp.net/wiki/Lore:Shadowscales"}
        ]
    }
    const occupation = {
        title: "Occupation",
        desc: [
            {text: "Treasure-/Bounty Hunter"},
            {text: ", "},
            {text: "Assassin"},
        ]
    }
    const knownfor = {title: "Known for", desc: "His excellent stealth, alchemy, and marksmanship"}
    const relationships = {
        title: "Relations",
        desc: [
            {text: "Saadia", href: "https://en.uesp.net/wiki/Skyrim:Saadia"},
            {text: ", "},
            {text: "Angi", href: "https://en.uesp.net/wiki/Skyrim:Angi"},
            {text: ", "},
            {text: "Faendal", href: "https://en.uesp.net/wiki/Skyrim:Faendal"},
            {text: ", "},
            {text: "Brynjolf", href: "https://en.uesp.net/wiki/Skyrim:Brynjolf"},
            {text: ", "},
            {text: "Jarl Balgruuf the Greater", href: "https://en.uesp.net/wiki/Skyrim:Balgruuf_the_Greater"},
            {text: ", "},
            {text: "Captain Aldis", href: "https://en.uesp.net/wiki/Skyrim:Captain_Aldis"},
            {text: ", "},
            {text: "Frihada", href: "https://en.uesp.net/wiki/Skyrim:Fihada"},
            {text: ", "},
            {text: "Elrindir", href: "https://en.uesp.net/wiki/Skyrim:Elrindir"}
        ]
    }
    const spouse = {title: "Spouse", desc: [{text: "Ysolda", href: "https://en.uesp.net/wiki/Skyrim:Ysolda"}]}
    const children = {title: "Children", desc: "0"}

    const infoCardRows = [origin, race, gender, birth, faction, occupation, knownfor, relationships, spouse, children]
    
    return (
        <>
            <div className="content-body">
                <div className="vector-column-start">
                    <TableOfContents contentRef={contentRef} />
                </div>
                <main className="mw-content-container">
                    <h1 id="top" className="firstheading mw-first-heading">Pharis Ironeye</h1>
                    <div className="vector-content">
                        <div className="mw-body-content" ref={contentRef}>
                            <div className="infobox-wrapper">
                                <table className="infobox vcard">
                                    <caption className="infobox-title">Pharis Ironeye</caption>
                                    <tbody>
                                        <tr>
                                            <td colSpan={2} className="infobox-img">
                                                <img src="/Pharis-Ironeye-home-page-banner-art.jpg" alt="Pharis Ironeye" height={155} width={170} className="mw-file-upright" />
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
                                    You won't find anyone better in all of Tamriel, my friend!
                                </div>
                            </blockquote>
                            <section>
                                <p>
                                    
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
                                                <img src="/bullseye-pharis-headshot-art-gore.jpg" width={300} height={169}/>
                                            </span>
                                        </li>
                                        <li className="gallery-list-item">
                                            <span className="gallery-img">
                                                <img src="/Pharis-Ironeye-sunrise-sitting.jpg" width={300} height={169}/>
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