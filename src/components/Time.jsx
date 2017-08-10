import React from 'react';
import '../styles/time.less';
function timeConvert(timestamp){
    var minutes = Math.floor(timestamp / 60);
    var seconds = Math.floor(timestamp - (minutes * 60));

    if (seconds < 10) {
        seconds = '0' + seconds;
    }

    timestamp = minutes + ':' + seconds;
    return timestamp;
}

const Time = (props) => {

    return (
        <div className="time">
            <div className="current">{timeConvert(props.currentTime)}</div>
            <div className="total">{timeConvert(props.currentTotalTime)}</div>
        </div>
    )
}
export default Time