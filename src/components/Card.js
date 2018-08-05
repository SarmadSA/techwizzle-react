import React, {Component} from 'react';
import CardHeader from './CardHeader';
import GameRenderer from '../jobs/GameRenderer'
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
        const { id, imgSrc, title, dateOfRelease, price, productLink, profileLink, gamesData } = this.props;

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
                    Game results are average results, they may not be 100% accurate. FPS will always depend on build components as a whole,
                    specially the CPU. Results achieved using high performance CPU that does not bottleneck the GPU.
                </InfoBlock>
                
                <GameRenderer number={numberOfGames} data={gamesData}/>
    
                <Link  to={"/profile/" + id} className="more-link">
                    <div className="more-gameresults">
                        More
                    </div>
                </Link>
    
            </div>
        );
    }
}