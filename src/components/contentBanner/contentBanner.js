import React from 'react'
import PropTypes from 'prop-types'
import './contentBanner.css'

const ContentBanner = (props) => {
    let heading = props.heading.toUpperCase();
    return (
        <div className="content-banner  bg-highlight-2-dark text-white">
            <div className="container ">
                <div className="row content-banner-content">
                    <div className="col-12 col-md-8 col-lg-7">
                        <h1 className="h2">{heading}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

ContentBanner.propTypes = {
    heading: PropTypes.string.isRequired
}

export default ContentBanner;
