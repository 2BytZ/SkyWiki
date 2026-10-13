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
                    1 + Math.max(0, screenWidth - 1280) * 0.00015,
                )
                wrapper.style.setProperty(
                    "--infobox-title-ornament-scale",
                    ornamentScale,
                )

                const ornamentStyle = getComputedStyle(title, "::before")
                const leftInset = Math.abs(
                    Number.parseFloat(ornamentStyle.insetInlineStart) || 0,
                )
                const rightInset = Math.abs(
                    Number.parseFloat(ornamentStyle.insetInlineEnd) || 0,
                )
                const ornamentWidth =
                    titleBounds.width + leftInset + rightInset
                const ornamentOutset =
                    (ornamentWidth * ornamentScale - titleBounds.width) / 2
                const hasRoom =
                    titleBounds.left >= ornamentOutset &&
                    screenWidth - titleBounds.right >= ornamentOutset

                wrapper.classList.toggle(
                    "infobox-wrapper--ornaments-visible",
                    hasRoom,
                )
            }

            resizeObserver = new ResizeObserver(updateOrnamentOverflow)
            resizeObserver.observe(wrapper)
            resizeObserver.observe(title)
            window.addEventListener("resize", updateOrnamentOverflow)
            updateOrnamentOverflow()
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
            resizeObserver?.disconnect()
            if (updateOrnamentOverflow) {
                window.removeEventListener("resize", updateOrnamentOverflow)
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
