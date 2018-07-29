import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import '../css/Card.css';

export default class NotFoundPage extends React.Component{

    constructor(props){
        super(props);
        
        this.state = {
            timedOut : false
        };
    }

    setTimeOut = (time) =>{
        window.setTimeout(this.timeOut, time);
    };

    timeOut = () =>{
        this.setState({timedOut : true});
    };

    render(){

        if(this.state.timedOut){
            return <Redirect to="/"/>
        }

        const style = {
            textAlign: 'center',
            fontSize: '24px',
        };

        const pStyle = {
            fontSize: '34px',
            fontWeight: 'bold'
        };

        return(
            <div style={style}>
                <p style={pStyle}> Page not found! <i className="far fa-frown"/> </p> <br/>
                Please make sure you typed the right URL. <br/>
                You will be redirected to <Link to="/" className="custom-link"> home </Link> page in 10 seconds...
                {this.setTimeOut(10000)}
            </div>
        );
    }
}