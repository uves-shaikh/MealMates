import React from 'react'
import ReactDOM from 'react-dom'
import './model.css'

const portalElement = document.getElementById("overlays")

const ModalOverlay = (props) => {
    return (
        <div className='modal'>
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