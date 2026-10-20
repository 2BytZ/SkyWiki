import previews from "../config/locales/en/linkPreviews.json"
import "./credits.css"

const IMAGE_LICENSES = {
    bethesda: "Copyright Bethesda Softworks",
    "by-sa": "Composition by UESP (CC BY-SA 2.5); components copyright Bethesda Softworks",
}

function articleTitle(url) {
    return decodeURIComponent(new URL(url).pathname.split("/").pop()).split(":").pop().replaceAll("_", " ")
}

function imageSourceLabel(url) {
    const host = new URL(url).hostname
    if (host.endsWith("uesp.net")) return "UESP file page"
    if (host.endsWith("fandom.com")) return "Elder Scrolls Wiki (Fandom) file page"
    return host
}

export function Credits() {
    const images = Object.entries(previews).filter(([, preview]) => preview.img && preview.imageSource)

    return (
        <div className="credits-page">
            <h1>Credits &amp; Legal</h1>

            <section>
                <h2>Link preview text</h2>
                <p>
                    The text in link previews is taken from articles on the{" "}
                    <a href="https://en.uesp.net/">Unofficial Elder Scrolls Pages (UESP)</a>. Each preview links to
                    its source article and the article's revision history, which lists its authors. This text is
                    available under the{" "}
                    <a href="https://creativecommons.org/licenses/by-sa/2.5/">
                        Creative Commons Attribution-ShareAlike 2.5 License
                    </a>
                    {" "}(CC BY-SA 2.5), as described in UESP's{" "}
                    <a href="https://en.uesp.net/wiki/UESPWiki:Copyright_and_Ownership">copyright policy</a>.
                    Excerpts may be shortened or lightly edited.
                </p>
            </section>

            <section>
                <h2>Images</h2>
                <p>
                    Images in link previews come from UESP or, where noted, the Elder Scrolls Wiki on Fandom. Their
                    rights depend on the image: most show game
                    material, whose copyright belongs to Bethesda Softworks. Where UESP made an image from game
                    components, the composition is licensed by UESP under CC BY-SA 2.5, while the components remain
                    Bethesda's. Each image below links to the page it came from, which states its licensing.
                </p>
                {images.length > 0 && (
                    <table className="credits-table">
                        <thead>
                            <tr>
                                <th>Preview</th>
                                <th>Image</th>
                                <th>Rights</th>
                            </tr>
                        </thead>
                        <tbody>
                            {images.map(([url, preview]) => (
                                <tr key={url}>
                                    <td><a href={url}>{articleTitle(url)}</a></td>
                                    <td><a href={preview.imageSource}>{imageSourceLabel(preview.imageSource)}</a></td>
                                    <td>{IMAGE_LICENSES[preview.imageLicense] ?? IMAGE_LICENSES.bethesda}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </section>

            <section>
                <h2>Other resources</h2>
                <p>Dovahzul translation resources: <a href="https://www.thuum.org/">thuum.org</a>.</p>
            </section>

            <section>
                <h2>Disclaimer</h2>
                <p>
                    This is an unofficial fan-made, non-commercial project. It is not affiliated with, endorsed by,
                    or sponsored by Bethesda Softworks or ZeniMax Media. The Elder Scrolls and related names, logos
                    and game material are trademarks or copyright of their respective owners.
                </p>
            </section>
        </div>
    )
}
