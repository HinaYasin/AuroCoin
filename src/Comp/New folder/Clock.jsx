import React, { useState } from "react";
import './Clock.css';

const Clock = () => {
    const [days, setDays] = useState();
    const [minutes, setMinutes] = useState();
    const [hours, setHours] = useState();
    const [seconds, setSeconds] = useState();

    let dest = new Date("dec 30, 2024 10:00:00").getTime();

    const x = setInterval(function() {

    let now = new Date().getTime();
    let diff = dest - now;
    let days = Math.floor(diff /  (1000* 60 * 60 *24 ));
     setDays(days);
    let hour = Math.floor((diff %  (1000* 60 * 60 *24 )) /  (1000* 60 * 60  ));
     setHours(hour)
    let min = Math.floor((diff %  (1000* 60 * 60 )) /  (1000* 60 ));
     setMinutes(min);
    let sec = Math.floor((diff %  (1000* 60 )) /  1000 );
     setSeconds(sec)

    }, 1000 );


    

    return(
        <>
            <div className="clock">
                <div className="clock-div">
                    <div  className="clock-div1">{days}</div>
                    <div>days</div>
                </div>
                <div className="clock-div">
                    <div  className="clock-div1">{hours}</div>
                    <div>hours</div>
                </div>
                <div className="clock-div">
                    <div  className="clock-div1">{minutes}</div>
                    <div>minutes</div>
                </div>
                <div className="clock-div">
                    <div  className="clock-div1">{seconds}</div>
                    <div>seconds</div>
                </div>
            </div>
        </>
    );
}

export default Clock;

