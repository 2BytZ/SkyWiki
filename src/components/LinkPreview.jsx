import { useState } from "react";
import {
    arrow,
    FloatingPortal,
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
import { Link, useLocation } from "react-router-dom";
import previewArrow from "../assets/Down_Arrow-More_Settings.png";
import previewFrameBottom from "../assets/Info_Card_Small_Bottom_Preview.png"
import previewFrameTop from "../assets/Info_Card_Small_Top_Preview.png"
import "./LinkPreview.css";

function renderInlineMarkdown(text) {
    const parts = [];
    const emphasisPattern = /(\*\*\*|\*\*|\*)(.+?)\1/g;
    let lastIndex = 0;
    let match;

    while ((match = emphasisPattern.exec(text)) !== null) {
        parts.push(text.slice(lastIndex, match.index));

        const content = renderInlineMarkdown(match[2]);
        const key = `${match.index}-${emphasisPattern.lastIndex}`;

        if (match[1] === "***") {
            parts.push(
                <strong key={key}>
                    <em>{content}</em>
                </strong>,
            );
        } else if (match[1] === "**") {
            parts.push(<strong key={key}>{content}</strong>);
        } else {
            parts.push(<em key={key}>{content}</em>);
        }

        lastIndex = emphasisPattern.lastIndex;
    }

    parts.push(text.slice(lastIndex));
    return parts;
}

export function LinkPreview({ url, children, className }) {
    const { i18n } = useTranslation("linkPreviews");
    const { search } = useLocation();
    const [arrowElement, setArrowElement] = useState(null);
    const language = i18n.resolvedLanguage || i18n.language;
    const linkUrl = typeof url === "string" ? url : "";
    const preview = linkUrl
        ? i18n.getResource(language, "linkPreviews", linkUrl)
        : undefined;
    const previewPlacement = preview?.placement === "vertical" ? "vertical" : "horizontal";
    const sourceUrl = linkUrl.startsWith("http://") || linkUrl.startsWith("https://")
        ? new URL(linkUrl)
        : null;
    const isUespSource = sourceUrl?.hostname === "uesp.net"
        || sourceUrl?.hostname.endsWith(".uesp.net");
    const historyUrl = isUespSource ? new URL(sourceUrl) : null;
    historyUrl?.searchParams.set("action", "history");
    const sourceArticleTitle = isUespSource
        ? decodeURIComponent(sourceUrl.pathname.split("/").pop()).split(":").pop().replaceAll("_", " ")
        : null;
    const [isOpen, setIsOpen] = useState(false);
    const pinnedPreviewUrl = import.meta.env.DEV
        ? new URLSearchParams(search).get("preview")
        : null;
    const isPreviewOpen = isOpen || pinnedPreviewUrl === linkUrl;

    const {
        refs: { setReference, setFloating },
        floatingStyles,
        middlewareData,
        placement,
        context,
    } = useFloating({
        open: isPreviewOpen,
        onOpenChange: setIsOpen,
        placement: "top",
        middleware: [
            offset({ mainAxis: 8, crossAxis: 100 }),
            flip({
                fallbackPlacements: ["bottom"],
                crossAxis: false,
                fallbackStrategy: "bestFit",
            }),
            shift({
                mainAxis: true,
                crossAxis: false,
                padding: 8,
            }),
            arrow({ element: arrowElement, padding: 5 }),
        ],
    });

    const hover = useHover(context, {
        delay: { open: 450, close: 250 },
        handleClose: safePolygon(),
    });
    const role = useRole(context, { role: "tooltip" });
    const { getReferenceProps, getFloatingProps } = useInteractions([hover, role]);
    const linkText = children ?? preview?.title ?? linkUrl;
    const arrowSide = placement.split("-")[0];
    const staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right",
    }[arrowSide];

    return (
        <span className="link-preview">
            {linkUrl ? (
                <a
                    ref={setReference}
                    href={linkUrl}
                    {...getReferenceProps()}
                    className={["wiki-anchor-text", className].filter(Boolean).join(" ")}
                >
                    {linkText}
                </a>
            ) : (
                <span className={["wiki-anchor-text", className].filter(Boolean).join(" ")}>
                    {linkText}
                </span>
            )}

            {preview && isPreviewOpen && (
                <FloatingPortal>
                <div
                    ref={setFloating}
                    style={floatingStyles}
                    {...getFloatingProps()}
                    className={`link-preview__card wiki-preview-card wiki-preview-card--${previewPlacement}${preview.img ? "" : " wiki-preview-card--no-image"}${isUespSource ? "" : " wiki-preview-card--no-legal-link"}`}
                >
                    <img
                        ref={setArrowElement}
                        className="wiki-preview-arrow"
                        src={previewArrow}
                        alt=""
                        aria-hidden="true"
                        style={{
                            left: middlewareData.arrow?.x,
                            top: middlewareData.arrow?.y,
                            [staticSide]: "-12px",
                            transform: arrowSide === "bottom" ? "rotate(180deg)" : undefined,
                        }}
                    />
                    <div className="wiki-preview-frame" aria-hidden="true">
                        <div className="wiki-preview-frame__middle" />
                        <img
                            className="wiki-preview-frame__top"
                            src={previewFrameTop}
                            alt=""
                        />
                        <img
                            className="wiki-preview-frame__bottom"
                            src={previewFrameBottom}
                            alt=""
                        />
                    </div>
                    {preview.img && (
                        <img
                            src={preview.img}
                            alt={preview.title || ""}
                            className={`wiki-preview-thumb${preview.invert === true || preview.invert === "true" ? " wiki-preview-thumb--inverted" : ""}`}
                        />
                    )}
                    <div className="wiki-preview-body">
                        <strong>{renderInlineMarkdown(preview.title || "")}</strong>
                        {preview.summary && (
                            <p className={`preview-text preview-text--${previewPlacement}`}>
                                {renderInlineMarkdown(preview.summary)}
                            </p>
                        )}
                    </div>
                    {isUespSource && (
                        <p className="copyright-and-legal-text">
                            Source:{" "}
                            <a href={linkUrl}>{sourceArticleTitle}</a>
                            {" "}(
                            <a href={historyUrl.href}>history</a>
                            )
                            {preview.img && (
                                <>
                                    {" · "}
                                    <Link to="/Credits">Image credits</Link>
                                </>
                            )}
                        </p>
                    )}
                </div>
                </FloatingPortal>
            )}
        </span>
    );
}
