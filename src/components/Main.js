import React from 'react';
import Card from './Card';
import '../css/Main.css';

const Main = () =>{
    return (
        <main className="main">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <br className="clear"/>
        </main>
    );
};

export default Main;