import { createContext, useContext, useEffect, useRef, useState } from "react"
import "./Footnotes.css"

const FootnoteCtx = createContext(null);

// Turns "[label](url)" into links and "*text*" into italics; links may sit inside italics
const INLINE_SOURCE = "\\*((?:\\[[^\\]]+\\]\\([^)\\s]+\\)|[^*])+)\\*|\\[([^\\]]+)\\]\\(([^)\\s]+)\\)";

function renderInline(text) {
    const out = [];
    let last = 0;
    let m;
    // Fresh regex per call: recursion would otherwise clobber a shared lastIndex
    const INLINE = new RegExp(INLINE_SOURCE, "g");
    while ((m = INLINE.exec(text)) !== null) {
        if (m.index > last) out.push(text.slice(last, m.index));
        if (m[1] !== undefined) {
            out.push(<i key={m.index}>{renderInline(m[1])}</i>);
        } else {
            out.push(<a key={m.index} href={m[3]} target="_blank" rel="noreferrer">{m[2]}</a>);
        }
        last = INLINE.lastIndex;
    }
    if (last < text.length) out.push(text.slice(last));
    return out;
}

export function FootnoteProvider({ sources = [], children }) {
    // Ids in order of first use; numbering follows this order
    const used = useRef([]);
    const [, setVersion] = useState(0);
    // Source id of the note to highlight in the list (scrollIntoView doesn't trigger :target)
    const [activeId, setActiveId] = useState(null);

    const register = (id) => {
        let i = used.current.indexOf(id);
        if (i < 0) i = used.current.push(id) - 1;
        return i + 1;
    };

    // The list renders after the Cites, so force one extra render to show the collected notes
    useEffect(() => { setVersion(v => v + 1); }, []);

    const sourceById = (id) => sources.find(s => s.id === id);

    return (
        <FootnoteCtx.Provider value={{ register, used, sourceById, activeId, setActiveId }}>
            {children}
        </FootnoteCtx.Provider>
    );
}

export function Cite({ id }) {
    const { register, sourceById, setActiveId } = useContext(FootnoteCtx);
    if (!sourceById(id)) {
        console.warn(`Footnote source "${id}" not found`);
        return <sup style={{ color: "red" }}>[?]</sup>;
    }
    const n = register(id);

    return (
        <sup id={`cite_ref-${n}`} style={{ fontFamily: "skyrim" }}>
            <a onClick={() => {
                setActiveId(id);
                document.getElementById(`cite_note-${n}`)?.scrollIntoView();
            }}>
                [{n}]
            </a>
        </sup>
    );
}

export function FootnoteList() {
    const { used, sourceById, activeId, setActiveId } = useContext(FootnoteCtx);
    return (
        <ol>
            {used.current.map((id, i) => (
                <li key={id} id={`cite_note-${i + 1}`}                 className={`footnote-item${activeId === id ? " footnote-active" : ""}`}>
                    <a className="footnote-back" onClick={() => {
                                        setActiveId(null);
                                        document.getElementById(`cite_ref-${i + 1}`)?.scrollIntoView();
                    }}>
                        &uarr;
                    </a>{" "}
                    <span className="footnote-text">{renderInline(sourceById(id).text)}</span>
                </li>
            ))}
        </ol>
    );
}
