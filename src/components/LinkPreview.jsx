import { useState } from "react";
import {
    flip,
    offset,
    safePolygon,
    shift,
    useFloating,
    useHover,
    useInteractions,
    useRole,
} from "@floating-ui/react";
import { useTranslation } from "react-i18next";
import "./LinkPreview.css";

export function LinkPreview({ url, children }) {
    const { i18n } = useTranslation("linkPreviews");
    const language = i18n.resolvedLanguage || i18n.language;
    const preview = i18n.getResource(language, "linkPreviews", url);
    const previewPlacement = preview?.placement === "vertical" ? "vertical" : "horizontal";
    const [isOpen, setIsOpen] = useState(false);

    const {
        refs: { setReference, setFloating },
        floatingStyles,
        context,
    } = useFloating({
        open: isOpen,
        onOpenChange: setIsOpen,
        placement: "top-start",
        middleware: [
            offset(10),
            flip({
                fallbackPlacements: ["bottom-start"],
                crossAxis: false,
                fallbackStrategy: "bestFit",
            }),
            shift({
                mainAxis: true,
                crossAxis: false,
                padding: { top: 8, right: 128, bottom: 8, left: 8 },
            }),
        ],
    });

    const hover = useHover(context, {
        delay: { open: 450, close: 250 },
        handleClose: safePolygon(),
    });
    const role = useRole(context, { role: "tooltip" });
    const { getReferenceProps, getFloatingProps } = useInteractions([hover, role]);
    const linkText = children ?? preview?.title ?? url;

    return (
        <span className="link-preview">
            <a
                ref={setReference}
                href={url}
                {...getReferenceProps()}
                className="wiki-anchor-text"
            >
                {linkText}
            </a>

            {preview && isOpen && (
                <div
                    ref={setFloating}
                    style={floatingStyles}
                    {...getFloatingProps()}
                    className={`link-preview__card wiki-preview-card wiki-preview-card--${previewPlacement}`}
                >
                    {preview.img && (
                        <img
                            src={preview.img}
                            alt={preview.title || ""}
                            className="wiki-preview-thumb"
                        />
                    )}
                    <div className="wiki-preview-body">
                        <strong>{preview.title}</strong>
                        {preview.summary && (
                            <p className={`preview-text preview-text--${previewPlacement}`}>
                                {preview.summary}
                            </p>
                        )}
                    </div>
                </div>
            )}
        </span>
    );
}
