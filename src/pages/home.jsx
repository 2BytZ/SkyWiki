import { Link } from "react-router-dom"
import "./home.css"

export function Home(){
    return (
        <>
            <h1 className="mw-first-header">Welcome to [Insert not cringe title here]</h1>
            <div>
                <div className="mw-games-buttons">
                    <nav>
                        <ul className="mw-games-nav">
                            <li>
                                <Link to="/" ><button>Skyrim</button></Link>
                            </li>
                            <li>
                                <Link to="" ><button>Oblivion</button></Link>
                            </li>
                            <li>
                                <Link to="" ><button>Morrowind</button></Link>            
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="character-nav">
                <ul className="gallery">
                    <li className="gallerybox">
                        <Link to="/Dranleic_Haligdrake" title="Go to character page for Dranleic Haligdrake">
                            <div className="thumb">
                                <img src="/dummy-pic-1.png" alt="Dranleic Haligdrake" width="480" height="360"/>
                            </div>
                            <div className="gallerytext">
                                <p>Dranleic Haligdrake</p>
                            </div>
                        </Link>
                    </li>
                    <li className="gallerybox">
                        <Link to="/Pharis_Ironeye" title="Go to character page for Pharis Ironeye">
                            <div className="thumb">
                                <img src="/Pharis-Ironeye-sideview-firing-bow.jpg" alt="Pharis Ironeye" width="480" height="360"/>
                            </div>
                            <div className="gallerytext">
                                <p>Pharis Ironeye</p>
                            </div>
                        </Link>
                    </li>
                    <li className="gallerybox">
                        <Link to="" title="Go to character page for Priscilla Aurora">
                            <div className="thumb">
                                <img src="/dummy-pic-1.png" alt="Priscilla Aurora" width="480" height="360" />
                            </div>
                            <div className="gallerytext">
                                <p>Priscilla Aurora</p>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}