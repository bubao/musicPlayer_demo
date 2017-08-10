import React from 'react';
import '../styles/trackInfo.less';

const TrackInfo = (props)=>{
    return(
        <div className='component-trackInfo'>
            <div className="albumPic" style={{'backgroundImage':'url('+ props.track.album.picUrl +')'}}></div>
            <div className='trackInfo'>
                <div className="name">{props.track.name}</div>
                <div className="artist">{props.track.artists[0].name}</div>
                <div className="album">{props.track.album.name}</div>
            </div>
        </div>
    )
};
export default TrackInfo