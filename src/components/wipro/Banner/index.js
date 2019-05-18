import React from 'react'
import Background from '../../../assets/bg-pic.png';

var sectionStyle = {
    height: "100vh",
    backgroundImage: `url(${Background})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 75%"
  };

const Banner = (props) => (
    <React.Fragment>
    <div className="bannerBg" style={ sectionStyle }>
        <div className="gourmentLogo">
            <img src="./assets/chef-stamp@2x.png" title="members logo" className="membersLogo" alt="members logo"/>
        </div>
        <div className="baanerText">
            <p className="first">THE BEST FOODIE</p>
            <p className="strech">EXPERIENCE</p>
            <p className="third">NOW IN LONDON</p>
        </div>        
    </div>
    </React.Fragment>
)

export default Banner;