require('normalize.css/normalize.css');
// require('styles/App.css');
// import Header from './Header';
import React from 'react';
import Player from './Player';
// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  componentDidMount(){

  }
  componentWillMount(){
    
  }
  
  render() {
    return (
      <div className="index">
        <Player/>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
