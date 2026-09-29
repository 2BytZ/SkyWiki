import { Link } from "react-router-dom"
import { getLocalizedPath } from "../localizedPath"
import "./Navbar.css"

export function Navbar({ language, onLanguageChange }) {
    return (
        <div className="ts-container">
            <div className="ts-inner">
                <div className="logo">
                    <Link to={getLocalizedPath("/", language)} className="mw-logo">
                        <img src="/Shadowmarks_Thieves_Guild_Sign_darkmode.png"/>
                    </Link>
                </div>
                <nav className="navbar">
                    <ul className="nav-main">
                        <li>
                            <Link to={getLocalizedPath("/", language)}>
                                <button className="navbutton">Home</button>
                            </Link> 
                        </li>
                        <li>
                            <Link to={getLocalizedPath("/Dranleic_Haligdrake", language)}>
                                <button className="navbutton">page1</button>
                            </Link>
                        </li>
                        <li>
                            <Link to={getLocalizedPath("/Pharis_Ironeye", language)}>
                                <button className="navbutton">page2</button>
                            </Link>                            
                        </li>
                    </ul>
                    <label className="nav-language-control">
                        <span>Language</span>
                        <select
                            aria-label="Language"
                            value={language}
                            onChange={(event) => onLanguageChange(event.target.value)}
                        >
                            <option value="en">English</option>
                            <option value="da">Dansk</option>
                            <option value="do">Dovahzul</option>
                        </select>
                    </label>
                </nav>
            </div>
        </div>
    )
}