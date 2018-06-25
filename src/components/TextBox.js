import React from 'react';
import '../css/TextBox.css';


const TextBox = (props) =>{
    return (
        <section className="text-box">
            <h1>{props.title}</h1>
            <br/>
            <p>{props.children}</p>
		</section>
    );
};

export default TextBox;