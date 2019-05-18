import React from "react";

const Nudge = () => (
    <div className="nudge nudge-signpost nudge-billboard bg-highlight-1 text-white">
        <div className="container">
            <div className="row nudge-content">
                <div className="col-12 col-md-7 nudge-body">
                    <h1 className="nudge-title">Health insurance, on demand</h1>
                    <p className="lead">Our Medibank app and 24/7 Help on Hand services.</p>
                    <p>Our Medibank app and 24/7 Help on Hand services, put health insurance in your hands.</p>
                    <div className="nudge-actions">
                        <button className="btn btn-lg btn-primary">Get a quote</button>
                        <button className="btn btn-lg btn-white-ghost">Find out more</button>
                    </div>
                </div>
            </div>
            
            <div className="col-12 col-md-5 nudge-image nudge-image-bottom nudge-image-crop">
                <img src="https://s3-ap-southeast-2.amazonaws.com/medikit-me/1.0/images/demo-nudge-woman1.png" alt="" />
            </div>
        </div>
    </div>
);


export default Nudge;