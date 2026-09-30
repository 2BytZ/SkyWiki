
import { useEffect, useState } from "react"
import "./TableOfContents.css"


export function TableOfContents({ contentRef, language }) {

    const [headings, setHeadings] = useState([]);

   useEffect(() => {
        const content = contentRef.current;
        if (!content) return;
        const headersList = Array.from(content.querySelectorAll("h2, h3, h4, h5"));
        let headerStack = [];
        let rootHeadings = [];

        for(let element of headersList) {
            let header = {element,subList:[]}

            while (headerStack.length && headerStack[headerStack.length - 1].element.nodeName >= element.nodeName) {
                headerStack.pop()
            }

            if (headerStack.length) {
                headerStack[headerStack.length - 1].subList.push(header)
            }
            else {
                rootHeadings.push(header)
            }
            headerStack.push(header)
        }
        setHeadings(rootHeadings)
    }, [contentRef, language])
    return (
    <>
        <div className="vector-sticky-container">
            <nav id="vector-toc">
                <div className="vector-container">
                    <div className="vector-toc-element">
                        <ul className="vector-toc-contents">
                            <li className="top-heading" onClick={() => window.scrollTo({top: 78, behavior: "smooth"})}>
                                <b>Back to top</b>
                            </li>
                            {headings.map((header) => {
                                return (
                                    <ContentLabel header={header} level={1}/>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
   )
}

function ContentLabel({header, level}) {
    const [expanded, setExpanded] = useState(false);

    return (
        <li className="vector-toc-list-item">
            <div className="vector-toc-text">
                <span className={`item-${level}`}>{header.element.textContent}</span>
                {header.subList.length > 1 && (
                    <button aria-controls={`toc-${header.element.id}`} className="toc-collapse-button" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>
                        <img src="src/assets/Arrows_Selected.png" width={10} height={10} />
                    </button>
                )}
            </div>
            <ul id={`toc-${header.element.id}`} className="vector-toc-contents" hidden={!expanded}>
                {header.subList.length > 0 && header.subList.map((header) => {
                    return (
                        <ContentLabel header={header} level={level+1} />
                    )
                })}
            </ul>
        </li>
    )
}