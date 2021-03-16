import React from 'react';
import './App.css';

const PrimaryButton = props => {
    return (
        <button type={props.type} className={props.className} id={props.id} 
                onClick={() => console.log("cliquei em " + props.name)}> 
            {props.name}
        </button>
    )
};

export default PrimaryButton;