import React from "react";

import "./LoadingSpinner.scss";

const LoadingSpinner = (props) => {
    const size = props.size ? props.size : "46px";
    const border = props.border ? props.border : "5px";
    const color = props.color ? props.color : "#ed1b24";
    return (
        <div
            style={{ "--size": size, "--border": border, "--color": color }}
            className={`${props.asOverlay && "loading-spinner__overlay"}`}
        >
            <div style={{ "--color": color }} className="lds-dual-ring"></div>
        </div>
    );
};

export default LoadingSpinner;
