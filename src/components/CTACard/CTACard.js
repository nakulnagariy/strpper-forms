import React from 'react'
import PropTypes from 'prop-types'

const CTACard = (props) => {
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1">
                    <h2 className="text-center">{props.ctaMainHeading}</h2>
                    <div className="content-tiles-wrapper m-t-4">
                        {props.opts.map((opt) => (
                            <a href={opt.ctaLink} key={opt.id} className="bg-highlight-2 content-tile">
                                <div className="content-tile-icon">
                                    {opt.icon}
                                </div>
                                <div className="content-tile-link">
                                    <p className="link-cheveron">{opt.ctaTitle}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

CTACard.propTypes = {
    opts: PropTypes.array.isRequired,
    ctaMainHeading: PropTypes.string.isRequired
}

export default CTACard;