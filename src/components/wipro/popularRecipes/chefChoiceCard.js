import React from 'react'

const ChefChoiceCard = () => (
    <React.Fragment>
    <div className="container">
        <div className="row my-5">
            <div className="col-6">
                <div className="sectionsHeading">
                    <p className="popularHeading"> POPULAR </p>
                    <p className="stripeText"><span> RECIPES </span> </p>
                    <button className="btn btn-fancy"><strong>SEE ALL</strong></button>
                </div>
            </div>
            <div className="col-6 align-self-center">
                <div className="sectionsHeading text-right">
                    <p className="popularHeading">DO YOU WANT TO SHARE YOUR OWN RECIPE?</p>
                    <button className="btn btn-fancy"><strong>SEND IT NOW</strong></button>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-12">
                <div className="chefCardDeck my-5">   

                    <div className="chefChoiceCardWrapper">
                        <div className="recipeImgWrapper">
                            <div className="serviceRating">4<br />Serving</div>
                            <div className="membersLogo"><img src="./assets/chef-stamp@2x.png" title="members logo" className="membersLogo" alt=""/></div>
                            <img src="./assets/img/rosted_pizza.jpg" alt="" title="recipe photo"  className="recipePhoto"/>
                            <div className="recipeAction"><img src="./assets/go-btn@2x.png" alt="" title="right arrow btn" className="recipeActionBtn" /></div>
                        </div>
                        <div className="recipeDesWrapper">
                            <div className="difficulty">DIFFICULTY</div>
                            <div className="recipeDesHeading"><h4>CHARRED BROCCOLI &amp; CHEAT’S VEGGIE
                            ROMESCO TOAST</h4></div>
                            <div className="recipeDescription"><p>Make a speedy version of romesco sauce with its
                            famous almond and red pepper flavours. Serve on
                            sourdough and add broccoli for a colourful, veget…</p></div>                
                        </div>
                        <div className="userFullName"></div>
                    </div>

                    <div className="chefChoiceCardWrapper">
                        <div className="recipeImgWrapper">
                            <div className="serviceRating">4<br />Serving</div>
                            <div className="membersLogo"><img src="./assets/chef-stamp@2x.png" title="members logo" className="membersLogo" alt=""/></div>
                            <img src="./assets/img/rosted_pizza.jpg" title="recipe photo" alt="" className="recipePhoto"/>
                            <div className="recipeAction"><img src="./assets/go-btn@2x.png" alt="" title="right arrow btn" className="recipeActionBtn" /></div>
                        </div>
                        <div className="recipeDesWrapper">
                            <div className="difficulty">DIFFICULTY</div>
                            <div className="recipeDesHeading"><h4>CHARRED BROCCOLI &amp; CHEAT’S VEGGIE
                            ROMESCO TOAST</h4></div>
                            <div className="recipeDescription"><p>Make a speedy version of romesco sauce with its
                            famous almond and red pepper flavours. Serve on
                            sourdough and add broccoli for a colourful, veget…</p></div>                
                        </div>
                        <div className="userFullName"></div>
                    </div>

                    <div className="chefChoiceCardWrapper">
                        <div className="recipeImgWrapper">
                            <div className="serviceRating">4<br />Serving</div>
                            <div className="membersLogo"><img src="./assets/chef-stamp@2x.png" title="members logo" className="membersLogo" alt=""/></div>
                            <img src="./assets/img/rosted_pizza.jpg" title="recipe photo" alt="" className="recipePhoto"/>
                            <div className="recipeAction"><img src="./assets/go-btn@2x.png" title="right arrow btn" className="recipeActionBtn" alt=""/></div>
                        </div>
                        <div className="recipeDesWrapper">
                            <div className="difficulty">DIFFICULTY</div>
                            <div className="recipeDesHeading"><h4>CHARRED BROCCOLI &amp; CHEAT’S VEGGIE
                            ROMESCO TOAST</h4></div>
                            <div className="recipeDescription"><p>Make a speedy version of romesco sauce with its
                            famous almond and red pepper flavours. Serve on
                            sourdough and add broccoli for a colourful, veget…</p></div>                
                        </div>
                        <div className="userFullName"></div>
                    </div>

                </div>
            </div>
        </div>
    </div>
    </React.Fragment>
)

export default ChefChoiceCard;