import React from 'react'

const ContentCard = (props) => {
    return (
        <div className="container my-4">
            <div className="row">
                <div className="col-12 col-lg-10 offset-lg-1">
                    <div className="row m-t-2">
                        {props.opts.map((opt, index) => (
                            <div className={`col-12 col-md-6 ${index > 1 ? 'm-t-4-lg' : ''}`} key={opt.id} data-test={index}>
                                <div className="tile tile-basic">
                                    {opt.icon}
                                    <div className="tile-body-container"><h4 className="tile-title">{opt.tileTitle}</h4>
                                        <p className="tile-body">{opt.tileBody}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ContentCard;