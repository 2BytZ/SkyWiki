import "./Footer.css";
import { PageFooter } from "./PageFooter";

export function Footer() {
    return (
        <footer className="site-footer">
            <PageFooter outer/>
            <div className="footer-bottom-wrapper">
                <div className="footer-copyright">
                    <p>
                        &copy; {new Date().getFullYear()} Tobias R. aka. BytZ{" · "}Unofficial fan project, not affiliated with or endorsed by Bethesda Softworks or ZeniMax Media. The Elder Scrolls and related names and materials belong to their respective owners.
                    </p>
                </div>
            </div>
        </footer>
    )
}
