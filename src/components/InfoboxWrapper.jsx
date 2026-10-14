import { useLayoutEffect, useRef } from "react"

export function InfoboxWrapper({ children, style }) {
    const wrapperRef = useRef(null)

    useLayoutEffect(() => {
        const wrapper = wrapperRef.current

        if (!wrapper) {
            return
        }

        let resizeObserver
        let mutationObserver
        let titleMutationObserver
        let title
        let updateOrnamentOverflow

        const initializeOrnaments = () => {
            title = wrapper.querySelector(".infobox-title")
            if (!title) {
                return false
            }

            updateOrnamentOverflow = () => {
                const titleBounds = title.getBoundingClientRect()
                const screenWidth = document.documentElement.clientWidth
                const ornamentScale = Math.min(
                    1.2,
                    1 + Math.max(0, screenWidth - 1920) * 0.00015,
                )
                const ornamentSize = Number.parseFloat(
                    getComputedStyle(title).getPropertyValue(
                        "--infobox-title-ornament-size",
                    ),
                ) / 100
                const textRange = document.createRange()
                textRange.selectNodeContents(title)
                const textBounds = textRange.getBoundingClientRect()
                const textGap = 1
                const requestedWidth =
                    titleBounds.width * ornamentSize * ornamentScale
                const ornamentArtworkExtent = requestedWidth * 0.6
                const availableWidth = Math.max(
                    0,
                    Math.min(
                        textBounds.left - textGap,
                        screenWidth - textBounds.right - textGap,
                    ),
                )
                const ornamentWidth = requestedWidth

                title.style.setProperty(
                    "--infobox-title-text-inset-left",
                    `${textBounds.left - titleBounds.left}px`,
                )
                title.style.setProperty(
                    "--infobox-title-text-inset-right",
                    `${titleBounds.right - textBounds.right}px`,
                )
                title.style.setProperty(
                    "--infobox-title-ornament-width",
                    `${ornamentWidth}px`,
                )
                title.style.setProperty(
                    "--infobox-title-ornament-shift",
                    `${ornamentWidth * 0.4}px`,
                )

                const hasRoom =
                    availableWidth >= ornamentArtworkExtent

                wrapper.classList.toggle(
                    "infobox-wrapper--ornaments-visible",
                    hasRoom,
                )
            }

            resizeObserver = new ResizeObserver(updateOrnamentOverflow)
            resizeObserver.observe(wrapper)
            resizeObserver.observe(title)
            titleMutationObserver = new MutationObserver(updateOrnamentOverflow)
            titleMutationObserver.observe(title, {
                characterData: true,
                childList: true,
                subtree: true,
            })
            window.addEventListener("resize", updateOrnamentOverflow)
            window.visualViewport?.addEventListener(
                "resize",
                updateOrnamentOverflow,
            )
            document.fonts.addEventListener(
                "loadingdone",
                updateOrnamentOverflow,
            )
            updateOrnamentOverflow()
            document.fonts.ready.then(updateOrnamentOverflow)
            return true
        }

        if (!initializeOrnaments()) {
            mutationObserver = new MutationObserver(() => {
                if (initializeOrnaments()) {
                    mutationObserver.disconnect()
                }
            })
            mutationObserver.observe(wrapper, { childList: true, subtree: true })
            return () => mutationObserver.disconnect()
        }

        return () => {
            mutationObserver?.disconnect()
            titleMutationObserver?.disconnect()
            resizeObserver?.disconnect()
            if (updateOrnamentOverflow) {
                window.removeEventListener("resize", updateOrnamentOverflow)
                window.visualViewport?.removeEventListener(
                    "resize",
                    updateOrnamentOverflow,
                )
                document.fonts.removeEventListener(
                    "loadingdone",
                    updateOrnamentOverflow,
                )
            }
        }
    }, [])

    return (
        <div
            ref={wrapperRef}
            className="infobox-wrapper infobox-wrapper--background"
            style={style}
        >
            {children}
        </div>
    )
}
