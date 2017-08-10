import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import data from '../sources/data.json';
import Progress from './Progress';
import TrackInfo from './TrackInfo';
import Controls from './Controls';
import Header from './Header';
import Time from './Time';
import '../styles/index.min.css';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentTrackLen: data.tracks.length, //歌单歌曲数
            currentTrackIndex: 0, //当前播放的歌曲索引，默认加载第一首歌
            currentTime: 0, //当前歌曲播放的时间
            currentTotalTime: 0, //当前歌曲的总时间
            volume: 1,
            playStatus: true //true 为播放状态， false 为暂停状态
        };
        this.updatePlayStatus = this
            .updatePlayStatus
            .bind(this);
        this.play = this
            .play
            .bind(this);
        this.previous = this
            .previous
            .bind(this);
        this.next = this
            .next
            .bind(this);
        this.seek = this
            .seek
            .bind(this);
        this.muted = this
            .muted
            .bind(this);
    }
    updatePlayStatus() {
        if (this.state.playStatus) {
            audio.play();
            // console.log(audio.play(), 'play');
        } else {
            audio.pause();
            // console.log(audio.pause(), 'pause');
        }

        //更新当前歌曲总时间
        this.setState({
            currentTotalTime: data.tracks[this.state.currentTrackIndex].duration / 1000
        });
    }
    muted(volume) {
        audio.volume = volume;
        // console.log("444", audio.currentTime)
        console.log(volume)
        this.setState({volume: audio.volume})
    }
    seek(progress) {
        // const progressBar = document.querySelector('.progressbar')
        audio.currentTime = progress * audio.duration;
        // console.log("444", audio.currentTime)
        this.setState({currentTime: audio.currentTime})
        // progressBar.addEventListener('click', (event) => {     let coordStart =
        // progressBar         .getBoundingClientRect()         .left;     let coordEnd
        // = event.pageX     let p = (coordEnd - coordStart) / progressBar.offsetWidth
        //   audio.currentTime = p * audio.duration     this.setState({
        // currentTime: audio.currentTime     }) });

    }
    //播放事件处理
    play() {
        //这里有setState是异步的，需要在回调中执行 console.log(this.state.playStatus)
        this.setState({
            playStatus: !this.state.playStatus
        }, () => {
            this.updatePlayStatus();
        });

    }

    //上一曲事件处理
    previous() {
        // if (this.state.currentTrackIndex - 1 < 0) {
        //     alert('已经没有上一首了');
        // } else {
            this.setState({
                currentTrackIndex: (this.state.currentTrackLen + this.state.currentTrackIndex   - 1) % this.state.currentTrackLen
            }, () => {
                this.updatePlayStatus()
            });

        // }
    }

    //下一曲事件处理
    next() {
        // if (this.state.currentTrackIndex + 1 >= this.state.currentTrackLen) {
        //     alert('已经没有下一首了');
        // } else {
            this.setState({
                currentTrackIndex: ((this.state.currentTrackLen + this.state.currentTrackIndex   + 1) % this.state.currentTrackLen)
            }, () => {
                this.updatePlayStatus()
            });
        // }
    }

    //DOM加载完
    componentDidMount() {
        this.updatePlayStatus();
        let audio = document.getElementById('audio');
        setInterval(() => {
            // this.seek()
            this.setState({
                currentTime: audio.currentTime
            }, () => {
                if (~~ this.state.currentTime >= ~~ this.state.currentTotalTime) {
                    // this.next();
                    audio.loop = true;
                    return audio.loop
                    // l++ console.log()
                }

            });
        }, 100);
    }

    render() {
        return (
            <div className="player">
                {/* 音乐信息 <div className="header">音乐播放器.React版</div> */}
                <Header/>
                <TrackInfo track={data.tracks[this.state.currentTrackIndex]}/> {/* 进度条 */}
                <Progress
                    clicked={this.seek}
                    progress={this.state.currentTime / this.state.currentTotalTime * 100 + '%'}/>
                <Progress clicked={this.muted} progress={this.state.volume / 1 * 100 + '%'}/> {/* 播放时间   */}
                <Time
                    currentTime={this.state.currentTime}
                    currentTotalTime={this.state.currentTotalTime}/> {/* 播放控制  */}
                <Controls
                    isPlay={this.state.playStatus}
                    onPlay={this.play}
                    onPrevious={this.previous}
                    onNext={this.next}/> {/* 音频控件  */}
                <audio id="audio" src={data.tracks[this.state.currentTrackIndex].mp3Url}></audio>

            </div>
        );
    }
}

export default Player;