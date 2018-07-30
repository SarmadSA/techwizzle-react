import React, {Component} from 'react';
import Slider from 'rc-slider';
import Tooltip from 'rc-tooltip';
import '../css/FiltererOptions.css';
import 'rc-slider/assets/index.css';

// It is also possible to import { Range } from 'rc-slider' and
// Delete the code under, but then the Range will not have a tooltip
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

export default class FiltererOptions extends Component{

    constructor(props){
        super(props);
        this.state={
            fps: [30,300],
            maxPrice: 900
        }
    }
    
    onSliderChange = (value) => {
        this.setState({ maxPrice: value });
    };

    onRangeChange = (value) => {
        this.setState({ fps: value });
    };

    render(){
        const Handle = Slider.Handle;
        const fps = this.state.fps;
        const maxPrice = this.state.maxPrice;
        // const settings={
        //     dots: false,
        //     infinite: true,
        //     speed: 500,
        //     slidesToShow: 1,
        //     slidesToScroll: 1
        // };

        const handle = (props) => {
            const { value, dragging, index, ...restProps } = props;
            return (
            <Tooltip
                prefixCls="rc-slider-tooltip"
                overlay={value}
                visible={dragging}
                placement="top"
                key={index}
            >
                <Handle value={value} {...restProps} />
            </Tooltip>
            );
        };

        return(
            <div>
                <div className="fps-filterer">
                    <p className="filterer-options-text">FPS Range </p>
                    <div className="fps-display">
                        {fps[0]} - {fps[1]}
                    </div>
                    <Range
                        min={0}
                        max={400}
                        defaultValue={fps}
                        pushable={30}
                        step={10}
                        trackStyle={[{ backgroundColor: '#04b849' }]}
                        handleStyle={[{ backgroundColor: 'white', borderColor: 'lightgreen' },{ backgroundColor: 'white', borderColor: 'lightgreen' }]}
                        railStyle={{ backgroundColor: 'lightgray' }}
                        onChange={ this.onRangeChange }
                    />
                </div>

                <div className="price-filterer">
                    <p className="filterer-options-text">Max Price</p>
                    <div className="price-display">
                        {maxPrice} USD
                    </div>
                    <Slider 
                        min={0} 
                        max={1000} 
                        value={maxPrice}
                        handle={handle}
                        trackStyle={[{ backgroundColor: '#04b849' }]}
                        handleStyle={[{ backgroundColor: 'white', borderColor: 'lightgreen' }]}
                        railStyle={{ backgroundColor: 'lightgray' }}
                        onChange={ this.onSliderChange }
                        //remove the '()=>' if you want the function to fire onchange (then the cards will be filtered while you are dragging the slider)
                        onAfterChange={ () => this.props.handlePriceChange(this.state.maxPrice) }
                    />
                </div>
                {/* 
                    // Game
                    // date of release 
                    // game setting 
                    // game resolution 
                */}
                

            </div>
        );
    }
}