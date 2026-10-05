
import { useTranslation } from "react-i18next";
import "./LinkPreview.css";

export function LinkPreview({ url, children }) {
    const { i18n } = useTranslation("linkPreviews");
    const language = i18n.resolvedLanguage || i18n.language;
    const preview = i18n.getResource(language, "linkPreviews", url);


    return (
        <span className="link-preview">
            <a href={url}>
                <a href={url}>{children}</a>

                {preview && (
                <span className="link-preview__card">
                    {preview.img && <img src={preview.img}/>}
                    <strong>{preview.title}</strong>
                    <span className="preview-text">{preview.summary}</span>
                </span> 
                )}
            </a>
        </span>
    )
}