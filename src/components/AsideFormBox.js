import React from 'react';
import '../css/AsideFormBox.css';


const AsideFormBox = (props) =>{
    // TODO remove disabled styling when done with form
    const disabledButton={
        backgroundColor: 'gray'
    };
    const disabledForm={
        opacity: '0.5',
    };
    return (
        <aside className="aside-box" style={disabledForm}>
            <h2>{props.title}</h2>
            <br/>
            <form action="" method="post">
                <p>Enter your email address:</p>
                <input className="email-input focus-style" type="email" placeholder="Email.." disabled/>
                <input className="submit-btn" type="submit" value="Subscribe" disabled style={disabledButton}/>
            </form>
        </aside>
    );
};

export default AsideFormBox;