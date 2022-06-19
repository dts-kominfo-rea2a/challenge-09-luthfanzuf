// Kalian bisa menambahkan CSS di src/components/Header.css
import React from 'react';
import "./Header.css";
import parse from 'html-react-parser'

const createLine = (times) => {
    const dot = '&#8226;' 
    return dot.repeat(times)
}


const Header = () => {
    return (
        <>
            <div>
                <div className="title"><h2>Call a friend</h2></div>
                <div className="subtitle"><h5>Your friendly contact app</h5></div>
                <div className="line">{parse(createLine(80))}</div>
            </div>
        </>
    )
}

export default Header;