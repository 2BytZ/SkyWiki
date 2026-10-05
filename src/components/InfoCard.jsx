import i18next from "i18next"
import { LinkPreview } from "./LinkPreview"


export function InfoCard({info}) {
    const description = Array.isArray(info.desc) ? info.desc : [{text: info.desc}]

    return (
        <tr>
            <td>
                <span className={i18next.resolvedLanguage=="dov" && "dovahzul-smaller"}>{info.title}</span>
                <p hidden={i18next.resolvedLanguage!="dov"} class="dovahzul-english">({info.dovah_english})</p>
            </td>
            <td >
                {description.map((part, index) => (
                    <>
                        {part.href ? (
                            <LinkPreview key={index} url={part.href}>{part.text}</LinkPreview>
                        ) : (
                            <span key={index}>{part.text}</span>
                        )}
                        {description.length-1!=index && (part.separator || ", ")}
                    </>
                ))}
            </td>
        </tr>
    )
}