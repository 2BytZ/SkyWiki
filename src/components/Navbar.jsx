import { Link } from "react-router-dom"
import "./Navbar.css"

export function Navbar() {
    return (
        <div className="ts-container">
            <div className="ts-inner">
                <div className="logo">
                    <Link to="/" className="mw-logo">
                        <img src="/Shadowmarks_Thieves_Guild_Sign_darkmode.png"/>
                    </Link>
                </div>
                <nav className="navbar">
                    <ul className="nav-main">
                        <li>
                            <Link to="/">
                                <button className="navbutton">Home</button>
                            </Link> 
                        </li>
                        <li>
                            <Link to="/Dranleic_Haligdrake">
                                <button className="navbutton">page1</button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/Pharis_Ironeye">
                                <button className="navbutton">page2</button>
                            </Link>                            
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}