import React from 'react'
import ReactDOM from 'react-dom'

const portalElement = document.getElementById("overlays")

const ModalOverlay = (props) => {
    return (
        <div className='model'>
            <div className='content'>{props.children}</div>
        </div>
    )
}

// const portalElement = document.getElementById("overlays")

const Model = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </>
    )
}

export default Model