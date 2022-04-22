import React from "react";
import './progressBar.css';

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;

    const fillerStyles = {
        height: '100%',
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right',
        justifyContent: 'center'
    }

    // console.log(typeof completed)

    return (
        <div className="containerStyles">
            {/* <div style={fillerStyles}>
                {
                    (typeof completed != Array) ?
                        <span className="labelStyles">{`${completed}`}</span>
                        :
                        completed.map((e) =>
                            <span className="labelStyles" id="line-progress">{e}</span>
                        )
                }

            </div> */}
            {
                (typeof completed != 'object') ?
                    <div style={fillerStyles}>
                        <span className="labelStyles">{`${completed}`}</span>
                    </div>
                    :
                    <div className="label-line">
                        {completed.map((e) =>
                            <span style={{left:`${e}%`}} className="labelStyles" id="line-progress">{e}</span>
                        )}
                    </div>
            }

        </div>
    );
}

export default ProgressBar;