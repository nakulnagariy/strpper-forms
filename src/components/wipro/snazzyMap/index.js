import React, { Component } from 'react'
import MapStyle from './mapStyle'
// import GoogleMapReact from 'google-map-react';

class SnazzyMap extends Component {
    static defaultProps = {
        center: {
          lat: 51.5124319, 
          lng: -0.1290983
        },
        zoom: 11
      };
    componentDidMount() {
        
    }

    render() {
        return (
            <React.Fragment>
                <div className="mapWrapper">
                        <div className="googleMap" style={{ height: '100vh', width: '100%', MapStyle}}>
                            <div className="address">
                                <h1>LOCATION</h1>
                                <p>12 Upper St. Martin’s Lane<br />
                                WC2H 9FB, London</p>
                            </div>
                            {/*<GoogleMapReact
                            bootstrapURLKeys={{ key: "AIzaSyCtHQiqb07wyoN1hwo9bGXuVKn7aexzFe8"}}
                            defaultCenter={this.props.center}
                            defaultZoom={this.props.zoom}
                            />*/}
                        </div>
                </div>
            </React.Fragment>
        )
    }
}

export default SnazzyMap;