import React from 'react';
import './Button.css';

function Button(props){
    function handelClick(){
        props.onClick(props.value);
    }
    
    return <button className={`Button Button--${props.type}`}
    onClick={handelClick}>
        {props.value}
    </button>;
}



export default Button;