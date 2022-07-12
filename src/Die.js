import React from "react";

export default function Die(props) {

    const style = props.held ? { backgroundColor: '#59E391' } : { backgroundColor: 'white' }

    return (
        <div className="die-face" style={style} onClick={props.handleClick}>
            <h2 className="die-num">
                {props.value}
            </h2>
        </div>
    )
}