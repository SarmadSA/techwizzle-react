import React, {Component} from 'react';
import CardHeader from './CardHeader';
import GameRenderer from '../utils/GameRenderer'
import '../css/Card.css';
import {Link} from 'react-router-dom';
import InfoBlock from './InfoBlock';

export default class Card extends Component{

    constructor(props){
        super(props);
        this.state={
            infoBlockDisplay : 'none'
        };
    }

    displayBlock = () =>{
        this.setState({infoBlockDisplay:'block'})
    };
    
    displayNone = () =>{
        this.setState({infoBlockDisplay:'none'})
    };

    render(){

        const numberOfGames = 3;
        const { id, imgSrc, title, dateOfRelease, price, productLink, profileLink, benchmarks } = this.props;

        return(
            <div className="card">
                <CardHeader 
                    imgSrc={imgSrc}
                    title={title}
                    dateOfRelease={dateOfRelease}
                    price={price}
                    productLink={productLink}
                    profileLink={profileLink}
                />
                <h4 className="card-content-tittle">
                    Performance in games:
                    <i className="fa fa-exclamation-circle" onMouseOver={this.displayBlock} onMouseOut={this.displayNone}/>
                </h4>
    
                <InfoBlock style={{display: this.state.infoBlockDisplay}}>
                    Framerates depend on several factors. These results are Average, they may not be 100% accurate,
                    it all depend on build components, especially the CPU. Results achieved using high performance CPU.
                </InfoBlock>

                <div className="games-container">
                    <GameRenderer number={numberOfGames} data={benchmarks}/>
                </div>

                <div className="more-gameresults-copy-invis"></div>

                <Link  to={"/profile/" + id} className="more-link">
                    <div className="more-gameresults">
                        More
                    </div>
                </Link>
    
            </div>
        );
    }
}