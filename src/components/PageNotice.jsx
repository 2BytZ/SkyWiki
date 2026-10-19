import "./PageNotice.css";
import i18next from "i18next";
import { useState } from "react";


export function PageNotice(type) {
    const [open, setOpen] = useState(true);
    
    if (type=="language") {
        return (
            <div hidden={i18next.resolvedLanguage!="dov"}>
                {open && 
                    <div className="mw-page-notice">
                        <button type="button" className="page-notice-close-button" onClick={() => setOpen(false)}>X</button>
                        <h2>WARNING: You have changed the language to Dovahzul, the language of dragons!</h2>
                        <section>
                            <p>If you are not a dragon, or aren't well versed in the Thu'um, you'd be advised to revert back to your prefered language.</p>
                            <p>If this was intentional and you are learning &ndash; or trying to learn &ndash; Dovahzul, consider using the resources below, so you have a chance at reading the page.</p>
                        </section>
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
                            <li>
                                <a target="new" href="https://www.thuum.org">Thuum.org</a>
                            </li>
                        </ul>
                    </div>
                }
            </div>
        )
    } else {
        return;
    }
}