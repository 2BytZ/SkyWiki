
import { useEffect, useRef, useState } from "react"
import scrollBarBottom from "../assets/Scroll_Bar_Bottom.png"
import scrollBarMid from "../assets/Scroll_Bar_Mid.png"
import scrollBarTop from "../assets/Scroll_Bar_Top.png"
import "./TableOfContents.css"


export function TableOfContents({ contentRef, language }) {

    const [headings, setHeadings] = useState([]);
    const [scrollbarThumb, setScrollbarThumb] = useState({ height: 0, top: 0 });
    const [hasOverflow, setHasOverflow] = useState(false);
    const scrollContainerRef = useRef(null);
    const scrollbarTrackRef = useRef(null);
    const dragRef = useRef(null);

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

    useEffect(() => {
        const container = scrollContainerRef.current;
        const track = scrollbarTrackRef.current;
        if (!container || !track) return;

        const updateThumb = () => {
            const trackHeight = track.clientHeight;
            const scrollRange = container.scrollHeight - container.clientHeight;
            setHasOverflow(scrollRange > 0);
            const thumbHeight = scrollRange > 0
                ? Math.max(24, trackHeight * container.clientHeight / container.scrollHeight)
                : trackHeight;
            const thumbRange = trackHeight - thumbHeight;

            setScrollbarThumb({
                height: thumbHeight,
                top: scrollRange > 0 ? thumbRange * container.scrollTop / scrollRange : 0,
            });
        };

        updateThumb();
        container.addEventListener("scroll", updateThumb);
        const resizeObserver = new ResizeObserver(updateThumb);
        resizeObserver.observe(container);
        resizeObserver.observe(container.firstElementChild);

        return () => {
            container.removeEventListener("scroll", updateThumb);
            resizeObserver.disconnect();
        };
    }, [headings])

    function scrollByStep(amount) {
        scrollContainerRef.current?.scrollBy({ top: amount, behavior: "smooth" });
    }

    function handleThumbPointerDown(event) {
        event.preventDefault();
        event.currentTarget.setPointerCapture(event.pointerId);
        dragRef.current = { pointerY: event.clientY, scrollTop: scrollContainerRef.current.scrollTop };
    }

    function handleThumbPointerMove(event) {
        if (!dragRef.current) return;

        const container = scrollContainerRef.current;
        const track = scrollbarTrackRef.current;
        const thumbRange = track.clientHeight - scrollbarThumb.height;
        const scrollRange = container.scrollHeight - container.clientHeight;
        if (thumbRange <= 0 || scrollRange <= 0) return;

        const delta = event.clientY - dragRef.current.pointerY;
        container.scrollTop = dragRef.current.scrollTop + delta * scrollRange / thumbRange;
    }

    function handleTrackClick(event) {
        if (event.target !== event.currentTarget) return;

        const container = scrollContainerRef.current;
        const track = scrollbarTrackRef.current;
        const trackBounds = track.getBoundingClientRect();
        const scrollRange = container.scrollHeight - container.clientHeight;
        const thumbRange = track.clientHeight - scrollbarThumb.height;
        if (thumbRange <= 0 || scrollRange <= 0) return;

        const thumbPosition = event.clientY - trackBounds.top - scrollbarThumb.height / 2;
        container.scrollTop = thumbPosition / thumbRange * scrollRange;
    }

    return (
    <>
        <div className={`toc-scroll-shell${hasOverflow ? " is-overflowing" : ""}`}>
            <div className="vector-sticky-container" ref={scrollContainerRef}>
                <nav className="vector-toc">
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
            <div className="toc-scrollbar-skin">
                <button className="toc-scrollbar-arrow toc-scrollbar-arrow-top" aria-label="Scroll table of contents up" onClick={() => scrollByStep(-80)}>
                    <img src={scrollBarTop} alt="" />
                </button>
                <div
                    className="toc-scrollbar-track"
                    ref={scrollbarTrackRef}
                    onClick={handleTrackClick}
                    style={{ backgroundImage: `url(${scrollBarMid})` }}
                >
                    <div
                        className="toc-scrollbar-thumb"
                        style={{ height: `${scrollbarThumb.height}px`, top: `${scrollbarThumb.top}px` }}
                        onPointerDown={handleThumbPointerDown}
                        onPointerMove={handleThumbPointerMove}
                        onPointerUp={() => { dragRef.current = null }}
                        onPointerCancel={() => { dragRef.current = null }}
                    />
                </div>
                <button className="toc-scrollbar-arrow toc-scrollbar-arrow-bottom" aria-label="Scroll table of contents down" onClick={() => scrollByStep(80)}>
                    <img src={scrollBarBottom} alt="" />
                </button>
            </div>
        </div>
    </>
   )
}

function ContentLabel({header, level}) {
    const [expanded, setExpanded] = useState(false);

    return (
        <li className="vector-toc-list-item">
            <div className="vector-toc-text" onClick={() => header.element.scrollIntoView()}>
                <span className={`item-${level}`} >{header.element.textContent}</span>
                {header.subList.length > 1 && (
                    <button aria-controls={`toc-${header.element.id}`} className="toc-collapse-button" aria-expanded={expanded} onClick={(e) => {setExpanded(!expanded)
                        e.stopPropagation();
                    }}>
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