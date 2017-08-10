import React from 'react'
import '../styles/header.less'

const Header = ()=>{
    return (
        <div className="components-header">
            <img className="header-logo" src="../images/yeoman.png" alt=""/>
            <span className="header-title">React Player</span>
        </div>
    )
}
export default Header;