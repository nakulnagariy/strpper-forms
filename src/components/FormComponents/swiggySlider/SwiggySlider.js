import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './SwiggySlider.scss';
// import SampleTrading from './SampleTrading.json'
import moment from 'moment';
class SwiggySlider extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true,
            sliderPosition: 0,
            data: [{name:"asda"}, {name:"asda"}],   
            sliderImages: [],         
            error: null
        }
    }

    async fetchSampleTradingContent() {
        try {
            let res = await fetch('http://127.0.0.1:5500/src/components/FormComponents/swiggySlider/SampleTrading.json');
            let jsonData = await res.json();
            // wait 3 seconds and show spinnner or something
            // Async Await good documentation https://javascript.info/async-await
            await new Promise((resolve, reject) => setTimeout(resolve, 3000));
            if(jsonData) {
                this.setState({
                    data: jsonData,
                    isLoading: false,
                })
            } else {
                this.setState({ isLoading: true })
            }
        } catch (err) {
            console.log(err)
            this.setState({ isLoading: true })
        }

        // fetch('http://127.0.0.1:5500/stepper-form/src/components/FormComponents/swiggySlider/SliderItem.json')
        //     .then(res => res.json())
        //     .then(json => this.setState({
        //             data: json,
        //             isLoading: false,
        //         }))
        //     .catch(error => this.setState({ error, isLoading: false }));
    }

    async fetchSliderContent() {
        try{
            let res = await fetch(`http://127.0.0.1:5500/src/components/FormComponents/swiggySlider/sliderImages.json`);
            let jsonData = await res.json();
            await new Promise((resolve, reject) => setTimeout(resolve, 3000));
            if(jsonData) {
                this.setState({
                    sliderImages: jsonData,
                    isLoading: false,
                })
            }
        }catch(err) {
            console.log(err);
            this.setState({ isLoading: true })
        }
    }


    componentDidMount() {
        this.fetchSampleTradingContent();
        this.fetchSliderContent();
    }

    handleLeftSlider = () => {    
        this.setState((nextState, props) => {
            return {
                sliderPosition: nextState.sliderPosition + 310,
            }
        }, () => {
            let moveLeft = this.state.sliderPosition;
            this.refs.sliderRefs.style.transform = `translateX(${moveLeft}px)`; 
        })
        console.log(this.state)
    }

    handleRightSlider = () => {
        this.setState((nextState, props) => {
            return{
                sliderPosition : nextState.sliderPosition - 310
            }  
        }, ()=> {
            let moveRight = this.state.sliderPosition;
            this.refs.sliderRefs.style.transform = `translateX(${moveRight}px)`;
        })
        
    }



    render() {
        const { isLoading, sliderPosition, error, data, sliderImages } = this.state;
        return (
            <React.Fragment>
                { error ? <p>{error.message}</p> : null}
                { !isLoading ? (
                    <div className="sliderWrapper">
                        <div className="slider-container container">
                            <div className="items-wrapper">
                                <div className="items" ref="sliderRefs">
                                    {sliderImages.map((item, index) => {
                                        return(
                                            <React.Fragment key={`slider_${index}`}>
                                                <div className="item">
                                                    <a href={`${item.link}`}>
                                                        <img src={`${item.image}`} alt=""/>
                                                    </a>
                                                </div>
                                            </React.Fragment>
                                        )
                                    })}             
                                </div>                                                      
                            </div>                                           
                                <div className="sliderBtnWrapper">
                                    { sliderPosition < 0 && (<button className="sliderBtn btn-sliderLeftBtn" onClick={this.handleLeftSlider}>&lt;</button>) }
                                    <button className="sliderBtn btn-sliderRightBtn" onClick={this.handleRightSlider}>&gt;</button>
                                </div>                       
                        </div> 
                    </div>
                    ) : (
                        <div className="container text-center">
                            <h3>Loading...</h3>
                        </div>
                )}
                <div className="container m-y-4">
                    <table className="table table-bordered table-responsive">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Symbol</th>
                                <th>Rank</th>
                                <th>Price USD</th>
                                <th>Price BTC</th>
                                <th>24h Volume USD</th>
                                <th>Market Cap USD</th>
                                <th>Available Supply</th>
                                <th>Total Supply</th>
                                <th>Max Supply</th>
                                <th>Percent Change 1H</th>
                                <th>Percent Change 24H</th>
                                <th>Percent Change 7D</th>
                                <th>Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>                            
                                {data.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{item.id}</td>
                                            <td>{item.name}</td>
                                            <td>{item.symbol}</td>
                                            <td>{item.rank}</td>
                                            <td>{Number(item.price_usd).toFixed(2)}</td>
                                            <td>{Number(item.price_btc).toFixed(2)}</td>
                                            <td>{Number(item._24h_volume_usd).toFixed(2)}</td>
                                            <td>{Number(item.market_cap_usd).toFixed(2)}</td>
                                            <td>{Number(item.available_supply).toFixed(2)}</td>
                                            <td>{Number(item.total_supply).toFixed(2)}</td>
                                            <td>{Number(item.max_supply).toFixed(2)}</td>
                                            <td>{`${Number(item.percent_change_1h).toFixed(2)} %`}</td>
                                            <td>{`${Number(item.percent_change_24h).toFixed(2)} %`}</td>
                                            <td>{`${Number(item.percent_change_7d).toFixed(2)} %`}</td>
                                            <td>{moment(item.last_updated, "x").format("DD - MM - YYYY")}</td>
                                        </tr>
                                    )                                    
                                })}
                                
                        </tbody>
                    </table>
                </div>
            
            </React.Fragment>
        );
    }
}



export default SwiggySlider;