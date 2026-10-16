
import { useState } from "react"
import { createPortal } from "react-dom"
import "./ImageModal.css"

export function ImageModal({ children }) {
    const [open, setOpen] = useState(false)
    const source = children?.props?.src;
    const imageHeight = children?.props?.src?.height;
    return (
        <>
            <div className="image-inner" onClick={() => setOpen(true)}>
                {children}
            </div>

            {open &&
                createPortal(
                    <div className="lightbox-container">
                        <div className="modal-content-and-placement-divider">
                            <div className="modal-wrapper lightbox-modal image-lightbox">
                                <button type="button" className="lightbox-button" onClick={() => setOpen(false)}>X</button>
                                <div className="modal-content">
                                    <div className="lightbox">
                                        <div className="media">
                                            <img src={source} height={imageHeight} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blackout" onClick={() => setOpen(false)}></div>
                    </div>,
                    document.body,
                )}
        </>
    )
}