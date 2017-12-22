import React from 'react'
import eth from "../images/eth_qr.png"
import linkedin from "../images/linkedin_qr.png"
import logo from "../images/logo.png"

const Header = (props) => (
    <header id="header" style={props.timeout ? { display: 'none' } : {}}>
        <div className="logo">
            <span className="fa fa-terminal"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Damien K. Stanton</h1>
                <h3>Software Engineer · Consultant · Founder</h3>
                <h4>Scan/click for LinkedIn</h4>
                <a href="https://linkedin.com/in/damienstanton"><img src={linkedin}></img></a>
                <p></p>
                <h4>Scan to donate ETH</h4>
                <p>0xac352BAc6a211e4159B9361859040D9542dC2082</p>
                <img src={eth}></img>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('intro') }}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('work') }}>Work</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('about') }}>About</a></li>
                <li><a href="javascript:;" onClick={() => { props.onOpenArticle('contact') }}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: React.PropTypes.func,
    timeout: React.PropTypes.bool
}

export default Header
