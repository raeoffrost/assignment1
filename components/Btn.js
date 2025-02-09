import React, { useState } from 'react';

const Btn = ({ text, onClick, btntype = 'default'}) => {
    const [hover, setHover] = useState(false);
    const btnStyle = {
        padding: 10,
        fontFamily: "inherit",
        borderRadius:5,
        border: "1px solid white",
        backgroundColor: hover ? "#1e1e1e" : "transparent",
    }
    const types = {
        default: {},
        delete: {
            backgroundColor: hover ? "#3a0c0f" : "red",
        },
        nav: {
            borderRadius: 0,
            border: "0px solid white",
        }
      };
    return (
        <div>
            <button style={{...btnStyle, ...types[btntype],}} 
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)} onClick={onClick}>
                {text}
            </button> 
        </div>
    );
};

export default Btn;
