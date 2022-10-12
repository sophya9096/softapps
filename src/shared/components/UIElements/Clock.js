import React, { useRef } from "react";
import "./Clock.css";

const Clock = (props) => {
    const { title, pakistan, canada, usa, width, height } = props;

    const hourRef = useRef();
    const minRef = useRef();
    const secRef = useRef();

    const deg = 6;

    setInterval(() => {
        let estTime = new Date();
        let currentDateTimeCentralTimeZone = pakistan
            ? new Date(estTime.toLocaleString("en-US", { timeZone: "Asia/Karachi" }))
            : usa
            ? new Date(estTime.toLocaleString("en-US", { timeZone: "America/Chicago" }))
            : canada && new Date(estTime.toLocaleString("en-US", { timeZone: "Canada/Eastern" }));

        let hh = currentDateTimeCentralTimeZone.getHours() * 30;
        let mm = currentDateTimeCentralTimeZone.getMinutes() * deg;
        let ss = currentDateTimeCentralTimeZone.getSeconds() * deg;

        if (hourRef.current || minRef.current || secRef.current) {
            hourRef.current.style.transform = `rotateZ(${hh + mm / 12}deg)`;
            minRef.current.style.transform = `rotateZ(${mm}deg)`;
            secRef.current.style.transform = `rotateZ(${ss}deg)`;
        }
    });
    return (
        <div className="box">
            <div className="container">
                <div className="clock" style={{ width, height }}>
                    <div className="hour">
                        <div ref={hourRef} id="hr" className="hr"></div>
                    </div>
                    <div className="min">
                        <div ref={minRef} id="mn" className="mn"></div>
                    </div>
                    <div className="sec">
                        <div ref={secRef} id="sc" className="sc"></div>
                    </div>
                </div>
            </div>
            <h2>{title}</h2>
        </div>
    );
};

export default Clock;
