import React from 'react';
import '.././styles/progress.less';
// import Time from './Time';
class Progress extends React.Component{
	constructor(){
		super()
		this.changeProgressBar = this.changeProgressBar.bind(this);
		this.mouseState = {
 			press: false
		};
	}
	_handleMouseUp(e) {
		if (!this.mouseState.press) {
			return;
		}
		this.mouseState.press = false;
		let p = (e.pageX - this.progressBar.getBoundingClientRect().left) / this.progressBar.offsetWidth;
		if (p>1|| p<=0) {
			return;
		}
		this.props.clicked & this.props.clicked(p);
	}

	_handleMouseMove(e) {
		if (!this.mouseState.press) {
			return;
		}
		let p = (e.pageX - this.progressBar.getBoundingClientRect().left) / this.progressBar.offsetWidth;
		if (p>1|| p<=0) {
			return;
		}
		this.props.clicked & this.props.clicked(p);
	}
	 changeProgressBar(event){
		this.mouseState.press = true;
		window.addEventListener('mouseup', this._handleMouseUp.bind(this));
		window.addEventListener('mousemove', this._handleMouseMove.bind(this));
	}
	render(){
		return (<div className="component-progressbar">
			{/*<Time
                    currentTime={this.props.currentTime}
                    currentTotalTime={this.props.currentTotalTime}/>*/}
		<div /*onClick={this.changeProgressBar}*/
			onMouseDown={this.changeProgressBar}
	        className="progressbar"
			ref={(e)=>{this.progressBar=e}}>
	        <div
		        className="progress"
		        style={{'width':this.props.progress}}
	        >
	        	<span className="progress-button"></span>
	        </div>
		</div>
        </div>);
	}
}


export default Progress;
/**
 * 参考源码
 * https://github.com/disoul/electron-cloud-music/blob/0336c509f44cdc88882a32f2f15938ff3f5b0161/app/components/Player.jsx
 */