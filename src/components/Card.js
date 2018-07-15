import React, {Component} from 'react';
import CardHeader from './CardHeader';
import GameRenderer from '../jobs/GameRenderer'
import '../css/Card.css';
import {Link} from 'react-router-dom';
import InfoBlock from './InfoBlock';

export default class Card extends Component{

    constructor(props){
        super(props)
        this.state={
            display : 'none'
        }
        this.displayBlock = this.displayBlock.bind(this);
        this.displayNone = this.displayNone.bind(this);
    }

    displayBlock(){
        this.setState({display:'block'})
    }
    
    displayNone(){
        this.setState({display:'none'})
    }

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
                    Preformance in games: 
                    <i class="fa fa-exclamation-circle" onMouseOver={this.displayBlock} onMouseOut={this.displayNone}></i>
                </h4>
    
                <InfoBlock style={{display: this.state.display}}> 
                    Game result are avrage result, they may not be 100% accruate, it will always depend on build components, specialy the CPU. Results achieved using a hight prefomance CPU that does not battleneck. Click for more info.
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