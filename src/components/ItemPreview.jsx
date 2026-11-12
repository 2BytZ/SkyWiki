import { useEffect, useMemo, useState } from "react";
import {
    arrow,
    FloatingPortal,
    flip,
    offset,
    safePolygon,
    shift,
    useClick,
    useDismiss,
    useFloating,
    useFocus,
    useHover,
    useInteractions,
    useRole,
} from "@floating-ui/react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import previewArrow from "../assets/Down_Arrow-More_Settings.png";
import previewFrameBottom from "../assets/Info_Card_Small_Bottom_Preview.png";
import previewFrameTop from "../assets/Info_Card_Small_Top_Preview.png";
import { resolveItemEnchantments } from "./itemEnchantments";
import "./LinkPreview.css";
import "./ItemPreview.css";

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

export function ItemPreview({ name, children, className }) {
    const { t, i18n } = useTranslation(["itemPreviews", "enchantments"]);
    const { search } = useLocation();
    const language = i18n.resolvedLanguage || i18n.language;
    const items = i18n.getResource(language, "itemPreviews", "items");
    const fallbackItems = i18n.getResource("en", "itemPreviews", "items");
    const item = items?.[name] ?? fallbackItems?.[name];
    const catalog = i18n.getResourceBundle("en", "enchantments");
    const translatedCatalog = i18n.getResourceBundle(language, "enchantments");
    const resolved = useMemo(
        () => item ? resolveItemEnchantments(item, catalog, translatedCatalog) : { enchantments: [], errors: [] },
        [item, catalog, translatedCatalog],
    );
    const [isOpen, setIsOpen] = useState(false);
    const [arrowElement, setArrowElement] = useState(null);
    const pinnedName = import.meta.env.DEV
        ? new URLSearchParams(search).get("preview")
        : null;
    const isPreviewOpen = Boolean(item) && (isOpen || pinnedName === name);

    useEffect(() => {
        if (!item) {
            console.warn(`ItemPreview: no item found for "${name}".`);
        }
    }, [item, name]);

    useEffect(() => {
        resolved.errors.forEach((error) => console.error(`ItemPreview "${name}": ${error}`));
    }, [name, resolved]);

    useEffect(() => {
        if (item?.img) {
            const image = new Image();
            image.src = item.img;
        }
    }, [item?.img])
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
            shift({ mainAxis: true, crossAxis: false, padding: 8 }),
            arrow({ element: arrowElement, padding: 5 }),
        ],
    });

    const hover = useHover(context, {
        delay: { open: 450, close: 250 },
        handleClose: safePolygon(),
    });
    const focus = useFocus(context);
    const click = useClick(context, { enabled: !item?.link });
    const dismiss = useDismiss(context);
    const role = useRole(context, { role: "tooltip" });
    const { getReferenceProps, getFloatingProps } = useInteractions([
        hover, focus, click, dismiss, role,
    ]);
    const text = children ?? item?.title ?? name;
    const referenceClass = ["wiki-anchor-text", "item-preview__reference", className]
        .filter(Boolean).join(" ");
    const arrowSide = placement.split("-")[0];
    const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[arrowSide];

    return (
        <span className="link-preview">
            {item?.link ? (
                <a ref={setReference} href={item.link} className={referenceClass} {...getReferenceProps()}>
                    {text}
                </a>
            ) : item ? (
                <button ref={setReference} type="button" className={referenceClass} {...getReferenceProps()}>
                    {text}
                </button>
            ) : (
                <span className={referenceClass}>{text}</span>
            )}

            {isPreviewOpen && (
                <FloatingPortal>
                    <div
                        ref={setFloating}
                        style={floatingStyles}
                        {...getFloatingProps()}
                        className={`link-preview__card wiki-preview-card item-preview__card${item.img ? "" : " item-preview__card--no-image"}`}
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
                            <img className="wiki-preview-frame__top" src={previewFrameTop} alt="" />
                            <img className="wiki-preview-frame__bottom" src={previewFrameBottom} alt="" />
                        </div>
                        <div className="wiki-preview-body item-preview__body">
                            <strong>{item.title || name}</strong>
                            {item.type === "weapon" && item.baseDamage != null && (
                                <p><b>{t("labels.baseDamage")}:</b> {item.baseDamage}</p>
                            )}
                            {item.type === "armor" && item.armorRating != null && (
                                <p><b>{t("labels.armorRating")}:</b> {item.armorRating}</p>
                            )}
                            {resolved.enchantments.length > 0 && (
                                <p>
                                    <b>{t("labels.enchantment")}:</b>
                                    {resolved.enchantments.map((enchantment, index) => (
                                        <span
                                            key={`${enchantment.id}-${index}`}
                                            className={enchantment.error ? "item-preview__enchantment--invalid" : undefined}
                                        >
                                            <br />{enchantment.text}
                                            {enchantment.error && <> ({enchantment.error})</>}
                                        </span>
                                    ))}
                                </p>
                            )}
                            {resolved.errors.filter((error) => !resolved.enchantments.some(
                                (enchantment) => enchantment.error === error,
                            )).map((error) => (
                                <p className="item-preview__error" key={error}>
                                    <b>{t("labels.configurationError")}:</b> {error}
                                </p>
                            ))}
                            {item.description && (
                                <p><b>{t("labels.description")}:</b><br />{renderInlineMarkdown(item.description)}</p>
                            )}
                        </div>
                        {item.img && (
                            <img className="item-preview__image" src={item.img} alt={item.title || name} />
                        )}
                    </div>
                </FloatingPortal>
            )}
        </span>
    );
}
