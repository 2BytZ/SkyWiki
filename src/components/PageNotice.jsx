import "./PageNotice.css";
import i18next from "i18next";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LinkPreview } from "./LinkPreview";


export function PageNotice(type) {
    const [open, setOpen] = useState(true);
    
    if (type=="language") {
        return (
            <div hidden={i18next.resolvedLanguage!="dov"}>
                {open && 
                    <div className="mw-page-notice__lang">
                        <button type="button" className="page-notice-close-button" onClick={() => setOpen(false)}>X</button>
                        <div className="notice-content-wrapper">
                            <strong className="notice-header">WARNING</strong>
                            <div className="notice-content">
                                <p>You have changed the language to <LinkPreview url={"https://en.uesp.net/wiki/Lore:Dragon_Language"}>Dovahzul</LinkPreview>, the language of dragons!</p>
                                <p>If you are not a dragon, or aren't well versed in the <LinkPreview url={"https://en.uesp.net/wiki/Lore:Thu%27um"}>Thu'um</LinkPreview>, you'd be advised to revert back to your prefered language.</p>
                                <br />
                                <p style={{fontFamily: 'skyrim', fontWeight: "300", fontSize: "16px", '--p-size': '16px'}}>If this was intentional and you are learning &ndash; or trying to learn &ndash; Dovahzul, consider using the resources below, so you have a chance to reading the page.</p>
                            </div>
                            <ul>
                                <li>
                                    <a target="new" href="https://www.thuum.org/library/Dovahzul%20Print%20Dictionary%204th%20Edition.pdf">Dovahzul Dictionary 4th Edition</a>
                                </li>
                                <li>
                                    <a target="new" href="https://www.thuum.org/assets/Learning%20Dovahzul.pdf">Learning Dovahzul - First Edition - from www.thuum.org</a>
                                </li>
                                <li>
                                    <a target="new" href="https://www.thuum.org/translator.php">Dovahzul to English translator</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                }
            </div>
        )
    } else if (type=="construction") {
        return (
            <div className="mw-page-notice">
                <div className="notice-content-wrapper">
                    <strong className="notice-header">UNDER CONSTRUCTION!</strong>
                    <div className="notice-content">
                        <p>This page is still under construction and is missing a lot of content!</p> 
                        <p>You can still browse the page as you like, but there may not be much to see...</p>
                        <p>Proceed to a different page, or go back to the home page <Link to="/">here</Link>.</p>
                    </div>
                </div>
            </div>
        )
    } else if (type=="missing-translation") {
        return (
            <div className="mw-page-notice">
                <div className="notice-content-wrapper">
                    <strong style={{color:"--text-h"}}>This page seems to be missing translation for one or more languages</strong>
                    <div className="notice-content">
                        <p>Unfortunately, this means some may not be able to read the page.</p>
                        <p>However, they will be added at a later date!</p> 
                    </div>
                </div>
            </div>
        )
    }
    else {
        return;
    }
}