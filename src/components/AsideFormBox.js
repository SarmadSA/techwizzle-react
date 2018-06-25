import React from 'react';
import '../css/AsideFormBox.css';


const AsideFormBox = (props) =>{
    return (
        <aside className="aside-box">
            <h2>{props.title}</h2>
            <br/>
            <form action="" method="post">
                <p>Enter your email address:</p>
                <input className="email-input focus-style" type="email" placeholder="Email.."/>
                <input className="submit-btn" type="submit" value="Subscribe"/>
            </form>
        </aside>
    );
};

export default AsideFormBox;