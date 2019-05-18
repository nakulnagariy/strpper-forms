import React from 'react'
import Background from '../../../assets/detail01@2x.png';
import Stripe from '../../../assets/detail02.png';

var sectionStyle = {
    height: "",
    backgroundImage: `url(${Background})`,
    backgroundSize: "fit",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right"
  };

  var cardBG = {
    height: "",
    backgroundImage: `url(${Stripe})`,
    backgroundSize: "fit",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom right"
  };

const MeetOurCommunity = () => (
    <React.Fragment>
        <div className="MenuSectionWrapper my-5">
            <div className="container">
                <div className="row">
                    <div className="col-3 mt-0 m-none"></div>

                    <div className="col-3">
                        <div className="meetOurHeading">
                            <div className="sectionsHeading">
                                <p className="popularHeading">MEET OUR</p>
                                <p className="stripeText"><span>COMMUNITY</span> </p>
                                <button className="btn btn-fancy my-2"><strong>KNOW MORE</strong></button>

                                <div className="mt-4"><strong>Sea bass ceviche with aji limo
                                tiger’s milk, sweet potato
                                purée, choclo corn, red onion,
                                coriander & plantain (gf)</strong></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-3" style={cardBG}>
                        <div className="meetCommunityCard bg-white mt-5">
                            <div className="cardImg">
                                <div className="instaLogo"><img src="./assets/instagram-btn@2x.png" title="insta logo" className="" alt="insta logo"/></div>
                                <img src="./assets/img/tooped_toast.jpg" alt="" title="recipe photo" className="communityRecipePhoto"/>                              
                            </div>
                        </div>                        
                    </div>

                    <div className="col-3" style={sectionStyle}>
                        <div className="meetCommunityBuzzCard bg-white mt-5">
                            <div className="cardBody">
                                <h5>@buzzfeedfood</h5>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error magnam quae consectetur</p>
                            </div>
                            <div className="text-right mr-4">
                                <span role="img" aria-label="emoji">&#9829;&nbsp;23</span> <span aria-label="emoji" role="img">&nbsp; &#9899; 12</span>
                            </div>
                        </div> 
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-3" style={sectionStyle}>
                        <div className="meetCommunityBuzzCard bg-white mt-5">
                            <div className="cardBody">
                                <h5>@buzzfeedfood</h5>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error magnam quae consectetur</p>
                            </div>
                            <div className="text-right mr-4">
                                <span role="img" aria-label="emoji">&#9829;&nbsp;23</span> <span aria-label="emoji" role="img">&nbsp; &#9899; 12</span>
                            </div>
                        </div> 
                    </div>

                    <div className="col-3" style={cardBG}>
                        <div className="meetCommunityCard bg-white mt-5">
                            <div className="cardImg">
                                <div className="instaLogo"><img src="./assets/instagram-btn@2x.png" title="insta logo" className="" alt="insta logo"/></div>
                                <img src="./assets/img/tooped_toast.jpg" alt="" title="recipe photo"  className="communityRecipePhoto"/>                              
                            </div>
                        </div>                        
                    </div>

                    <div className="col-3">
                        <div className="meetCommunityNormalCard bg-white mt-5">
                            <div className="cardBody">
                                <h5>@buzzfeedfood</h5>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit. Provident error magnam quae consectetur</p>
                            </div>
                        </div> 
                    </div>

                    <div className="col-3 mt-0 m-none"></div>

                </div>
                <div className="row mt-4">
                    <div className="col-3">
                    <div className="meetCommunityNormalCard bg-white mt-5">
                        <div className="cardBody">
                            <h5>@buzzfeedfood</h5>
                            <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elitLorem ipsum dolor sit amet consectetur adipisicing elit. Provident error magnam quae consectetur</p>
                        </div>
                    </div> 
                </div>
                    <div className="col-3 mt-0 m-none"></div>
                    <div className="col-3" style={sectionStyle}>
                        <div className="meetCommunityBuzzCard bg-white mt-5">
                            <div className="cardBody">
                                <h5>@buzzfeedfood</h5>
                                <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident error magnam quae consectetur</p>
                            </div>
                            <div className="text-right mr-4">
                                <span role="img" aria-label="emoji">&#9829;&nbsp;23</span> <span aria-label="emoji" role="img">&nbsp; &#9899; 12</span>
                            </div>
                        </div> 
                    </div>
                
                    <div className="col-3" style={cardBG}>
                        <div className="meetCommunityCard bg-white mt-5">
                            <div className="cardImg">
                                <div className="instaLogo"><img src="./assets/instagram-btn@2x.png" title="insta logo" className="" alt="insta logo"/></div>
                                <img src="./assets/img/tooped_toast.jpg" title="recipe photo" alt="" className="communityRecipePhoto"/>                              
                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </React.Fragment>
)

export default MeetOurCommunity;