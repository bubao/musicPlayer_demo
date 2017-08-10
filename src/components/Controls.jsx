import React from 'react';
import '../styles/controls.less';
const Controls= (props)=>{

        let className;
        if(props.isPlay == true){
            className = 'icon-pause';
        }else{
            className = 'icon-play';
        }
        return (
        <div className="controls">
            <div className="play" onClick={props.onPlay}>
                <i className={className}></i>
            </div>
            <div className="previous" onClick={props.onPrevious}>
                <i className="icon-previous"></i>
            </div>
            <div className="next" onClick={props.onNext}>
                <i className="icon-next"></i>
            </div>
        </div>
        )
}
export default  Controls