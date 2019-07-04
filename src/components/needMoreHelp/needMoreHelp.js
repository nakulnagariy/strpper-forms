import React from 'react'
import PropTypes from 'prop-types'

const NeedMoreHelp = (props) => {
    return (
        <div className="nudge nudge-concierge nudge-billboard bg-neutral-2 m-t-4 m-t-6-lg">
            <div className="container nudge-container">
                <div className="row nudge-content">
                    <div className="col-12 nudge-body order-first text-center"><h2 className="nudge-title">{props.nudgeTitle}</h2>
                    </div>
                    <div className="nudge-image nudge-image-left nudge-image-bottom col-12 order-12 col-md-5 offset-md-1 order-md-1">
                        <img src={props.img} alt={props.imgAlt} /></div>
                    <div className="nudge-list col-12 order-1 col-md-6 order-md-12 offset-md-6 col-lg-5">
                        <div className="btn-group btn-group-list">
                            {props.helpOpt.map((opt) => (
                                <a key={opt.id} href={opt.helpLink} className="btn btn-dark btn-text-left btn-lg btn-arrow">{opt.helpTitle}</a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

NeedMoreHelp.propTypes = {
    helpOpt: PropTypes.array.isRequired,
    img: PropTypes.string.isRequired,
    imgAlt: PropTypes.string.isRequired,
    nudgeTitle: PropTypes.string.isRequired
}

export default NeedMoreHelp;