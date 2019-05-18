import React, { Component } from "react";
import PopularRecipes from '../wipro/popularRecipes'
import SnazzyMap from '../wipro/snazzyMap'
import Banner from '../wipro/Banner'
import Collabrote from '../wipro/collaborate'
import MenuSection from '../wipro/Menu'
import MeetOurCommunity from '../wipro/meetOurCommunity'

export default class Home extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <React.Fragment>
          <Banner />
          <MeetOurCommunity />
          <SnazzyMap />
          <MenuSection />     
          <PopularRecipes />          
          <Collabrote />
      </React.Fragment>
    );
  }
}
