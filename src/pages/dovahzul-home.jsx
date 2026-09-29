import { Link } from "react-router-dom"
import { useOutletContext } from "react-router-dom"
import { getLocalizedPath } from "../localizedPath"
import "./home.css"

export function Home(){
    const { language } = useOutletContext()
    return (
        <>
            <h1 className="dovahzul-header mw-first-header">valok2n w4 kavselok</h1>
            <p className="dovahzul-english mw-first-header">Valokein wah Kavselok</p>
            <div>
                <div className="mw-games-buttons">
                    <nav>
                        <ul className="mw-games-nav">
                            <li>
                                <Link to={getLocalizedPath("/", language)} ><button>Keizaal</button></Link>
                            </li>
                            <li>
                                <Link to="" ><button>Oblivion</button></Link>
                            </li>
                            <li>
                                <Link to="" ><button>Vulsoven</button></Link>            
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className="character-nav">
                <ul className="gallery">
                    <li className="gallerybox">
                        <Link to={getLocalizedPath("/Dranleic_Haligdrake", language)} title="Go to character page for Dranleic Haligdrake">
                            <div className="thumb">
                                <img src="/dranleic-haligdrake-power-stance-swords.jpg" alt="Dranleic Haligdrake" width="480" height="360"/>
                            </div>
                            <div className="gallerytext">
                                <p>Dranleic Haligdrake</p>
                                <span className="dovahzul-smaller">dranl2c revakdov4</span>
                            </div>
                        </Link>
                    </li>
                    <li className="gallerybox">
                        <Link to={getLocalizedPath("/Pharis_Ironeye", language)} title="Go to character page for Pharis Ironeye">
                            <div className="thumb">
                                <img src="/Pharis-Ironeye-sideview-firing-bow.jpg" alt="Pharis Ironeye" width="480" height="360"/>
                            </div>
                            <div className="gallerytext">
                                <p>Pharis Ironeye</p>
                                <span className="dovahzul-smaller">pharis dolm3n</span>
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
                                <span className="dovahzul-smaller">priscilla loksilkun</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}