import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
    return (
        <footer className="site-footer">
            <p>
                &copy; {new Date().getFullYear()} Tobias R. aka. BytZ &mdash; Original content on this site.
                {" · "}
                <Link to="/Credits">Credits &amp; Legal</Link>
            </p>
            <p>
                Unofficial fan project, not affiliated with or endorsed by Bethesda Softworks or ZeniMax Media.
                The Elder Scrolls and related names and materials belong to their respective owners.
            </p>
        </footer>
    )
}