import React from "react";
import './progressBar.css';

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const fillerStyles = {
        height: '100%',
        width: `${completed}px`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        justifyContent: 'center'
    }

    return (
        <div className="containerStyles">
            <div style={fillerStyles}>
                <span className="labelStyles">{`${completed}`}</span>
            </div>
        </div>
    );
}

export default ProgressBar;