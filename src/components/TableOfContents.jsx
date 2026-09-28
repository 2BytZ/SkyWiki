
import { useEffect, useState } from "react"
import "./TableOfContents.css"

function scrollToTarget(event, id) {
    event.preventDefault()

    if (id === "top") {
        document.querySelector(".mw-content-container h1")?.scrollIntoView({ behavior: "smooth" })
        return
    }

    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" })
}

export function TableOfContents({ contentRef }) {
    const [headings, setHeadings] = useState([])

    useEffect(() => {
        const content = contentRef.current
        if (!content) return

        const headingElements = Array.from(content.querySelectorAll("h2, h3, h4, h5, h6"))
        const reservedIds = new Set([
            "top",
            ...headingElements.map((heading) => heading.id).filter(Boolean)
        ])
        const usedIds = new Set(["top"])
        const items = headingElements.map((heading) => {
            const title = heading.textContent.trim()
            const slug = title
                .toLowerCase()
                .normalize("NFKD")
                .replace(/[\u0300-\u036f]/g, "")
                .replace(/[^\p{L}\p{N}\s-]/gu, "")
                .trim()
                .replace(/\s+/g, "-")
                .replace(/-+/g, "-") || "section"
            const baseId = heading.id || slug
            let id = baseId
            let suffix = 2

            while (usedIds.has(id) || (!heading.id && reservedIds.has(id))) {
                id = `${baseId}-${suffix}`
                suffix += 1
            }

            heading.id = id
            usedIds.add(id)
            return { id, title, level: Number(heading.tagName.slice(1)) }
        })

        setHeadings(items)
    }, [contentRef])

    return (
        <nav className="vector-toc" aria-label="Contents">
            <ul className="vector-toc-contents">
                <li><a href="#top" onClick={(event) => scrollToTarget(event, "top")}>Back to top</a></li>
                {headings.map(({ id, title, level }) => (
                    <li className={`vector-toc-level-${level}`} key={id}>
                        <a href={`#${id}`} onClick={(event) => scrollToTarget(event, id)}>{title}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}