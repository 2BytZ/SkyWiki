import { useState } from "react";
import {
    arrow,
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
import { useLocation } from "react-router-dom";
import previewArrow from "../assets/Down_Arrow-More_Settings.png";
import previewFrameBottom from "../assets/Info_Card_Small_Bottom.png";
import previewFrameTop from "../assets/Info_Card_Small_Top.png";
import "./LinkPreview.css";

export function LinkPreview({ url, children }) {
    const { i18n } = useTranslation("linkPreviews");
    const { search } = useLocation();
    const [arrowElement, setArrowElement] = useState(null);
    const language = i18n.resolvedLanguage || i18n.language;
    const preview = i18n.getResource(language, "linkPreviews", url);
    const previewPlacement = preview?.placement === "vertical" ? "vertical" : "horizontal";
    const [isOpen, setIsOpen] = useState(false);
    const pinnedPreviewUrl = import.meta.env.DEV
        ? new URLSearchParams(search).get("preview")
        : null;
    const isPreviewOpen = isOpen || pinnedPreviewUrl === url;

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
    const linkText = children ?? preview?.title ?? url;
    const arrowSide = placement.split("-")[0];
    const staticSide = {
        top: "bottom",
        right: "left",
        bottom: "top",
        left: "right",
    }[arrowSide];

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

            {preview && isPreviewOpen && (
                <div
                    ref={setFloating}
                    style={floatingStyles}
                    {...getFloatingProps()}
                    className={`link-preview__card wiki-preview-card wiki-preview-card--${previewPlacement}${preview.img ? "" : " wiki-preview-card--no-image"}`}
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
