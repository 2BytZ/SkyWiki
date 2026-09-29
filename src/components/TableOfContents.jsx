
import { useEffect, useState } from "react"
import "./TableOfContents.css"


export function TableOfContents({ contentRef }) {

    const [headings, setHeadings] = useState([]);

   useEffect(() => {
    const content = contentRef.current;
    if (!content) return;
    setHeadings(Array.from(content.querySelectorAll("h2, h3, h4, h5")));
   }, [contentRef])
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
                            {headings.map((heading, index) => {
                                return (
                                    <li className="vector-toc-list-item" key={index} onClick={() => {
                                        heading.scrollIntoView();
                                    }}>
                                        {heading.innerHTML}
                                    </li>
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