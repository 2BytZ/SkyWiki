import { Link } from "react-router-dom"
import "./home.css"

export function Home(){
    return (
        <>
            <h1>Welcome to [Insert not cringe title here]</h1>
            <div>
                <div className="mw-games-buttons">
                    <nav>
                        <ul className="mw-games-nav">
                            <Link to="/" ><button>Skyrim</button></Link>
                            <Link to="" ><button>Oblivion</button></Link>
                            <Link to="" ><button>Morrowind</button></Link>            
                        </ul>
                    </nav>
                </div>
            </div>
            


            <ul className="gallery">
                <li>
                    <Link className="gallerybox" to="/Dranleic_Haligdrake" title="Dranleic Haligdrake">
                        <div className="thumb">
                            <img src="/Dranleic-Haligdrake-thumb.jpg" alt="Dranleic Haligdrake" />
                        </div>
                        <div className="gallerytext">
                            <p>Dranleic Haligdrake</p>
                        </div>
                    </Link>
                </li>
                <li>
                    <Link className="gallerybox" to="/Pharis_Ironeye" title="Pharis Ironeye">
                        <div className="thumb">
                            <img src="/Pharis-Ironeye-thumb.jpg" alt="Pharis Ironeye" />
                        </div>
                        <div className="gallerytext">
                            <p>Pharis Ironeye</p>
                        </div>
                    </Link>
                </li>
            </ul>
        </>
    )
}