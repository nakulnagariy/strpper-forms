import React from 'react'
import PropTypes from 'prop-types'

const Modal = (props) => {
    let modalState = props.modalState || false;
    const modalDialog = {
        margin: "5rem auto 0"
    }
    const modalHeader = {
        padding: "1rem 0rem"
    }
    const modalContent = {
        padding: "1rem"
    }
    return (
        <div className="modal" tabIndex="-1" role="dialog" aria-labelledby="callbackModalLabel" aria-hidden={modalState} data-modal="">
            <div className="modal-dialog" role="document" style={modalDialog}>
                <div className="modal-content" style={modalContent}>
                    <button type="button" className="modal-dismiss" aria-label="Close" data-modal-dismiss="" onClick={props.closeModal}>
                        <svg className="icon icon-stroke icon-small" xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
                            <path className="currentColor" vectorEffect="non-scaling-stroke" d="M47.5 12.9l-35 35M12.5 12.9l35 35"></path>
                        </svg>
                    </button>
                    <div className="modal-body">
                        <div className="modal-header" style={modalHeader}>
                            <h4 className="modal-title m-t-0" id="callbackModalLabel">{props.modalTitle}</h4>
                        </div>
                        {props.children}
                    </div>
                </div>
            </div>
            <div className="modal-overlay-dismiss" data-modal-dismiss=""></div>
        </div>
    )
}

Modal.propTypes = {
    modalState: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    modalTitle: PropTypes.string.isRequired
}

export default Modal;