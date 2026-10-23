import { Link } from "react-router-dom";
import "./PageFooter.css";

export function PageFooter({ outer = false }) {
    return (
        <section className={`page-footer ${outer ? "page-footer--outer" : "page-footer--inline"}`}>
            <div className="wrapper w-footer">
                <div className="footer-inner">
                    <div className="footer-flex-left">
                        <img src="/Shadowmarks_Thieves_Guild_Sign_darkmode.png" className="light-mode-invert" width={50} height={50} />
                        <div className="footer-brand-heading">
                            <strong style={{color: "var(--text-h)"}}>Himmeloften</strong>
                            <p>A personal character lore archive</p>
                        </div>
                    </div>
                    <div className="footer-flex-right">
                        <h5 style={{letterSpacing: 2, padding: 0}}>EXPLORE</h5>
                        <ul className="footer-explore-links">
                            <Link to="/wiki">Home</Link>
                            <Link to="/wiki/Credits">Credits &amp; Legal</Link>
                            <a href="mailto:bytzwastaken@protonmail.com&subject=Suggestion%20for%20an%20improvement%20on%20Himmeloften">Suggest improvements</a>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
