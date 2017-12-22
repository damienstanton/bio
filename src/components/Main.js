import React from 'react'
import Link from 'gatsby-link'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => { this.props.onCloseArticle() }}></div>

    return (
      <div id="main" style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}>

        <article id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>I am a programmer and musician who loves to talk about tech, and loves to learn even more.</p>
          <p>I've been programming and building systems for ~ 10 years now. Starting from sysadmin jobs in college through founding my own consultancy in 2014, it continues to be a breathtaking and interesting ride.</p>
          <p>My particular penchant is distributed (concurrent or parallel) systems, reinforcement learning and generally anything that aggregates and engineers database architectures, APIs and other backend joys. In general I tend to prefer microservices and strongly typed functional paradigm.</p>
          <p>On the theoretical side, I have an intense interest in deep RL, probabilistic graphical models and logic, category theory, and homotopy type theory. If something type-checks -- I might drop the mic and walk away.</p>
          <p>My tools of choice include Go, Rust, TypeScript and C++. I try to read a fair bit of Haskell, and would love to work with it professionally but have not had the chance. I will read and write any code. It's all wonderful and terrible; code is code is code as far as I am concerned.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <a href="https://github.com/damienstanton"><span className="fa fa-github"> Much of my work is on GitHub</span></a>
          <p>In brief summary, I have always been a back-end systems guy. My first programming language was VB.net, followed by C and Java. My main language for the first five years of my career was C#, and I spent a lot of time automating enterprise systems in Java, C#, Python and Powershell</p>
          <p>Since 2013, my favorite language has been Go. I've written nearly all Go services since 2014 (along with the odd Java project here and there).</p>
          <p>Some of my interest in deep RL and markov logic requires C++ and/or Octave so I have been known to use those ecosystems.</p>
          <p>As of the last couple of years I have also done an increasing amount of work in TypeScript/ES6. Although perhaps not up to my lofty functional standards, the Node world has come quite a long way and is a perfectly viable platform for big, complex distributed systems.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>I am a native of the Washington, D.C. Metro Area. Outside of tech, I've played guitar for almost 20 years, and am currently in a band called <a href="https://mirrorfactorydc.com/">Mirror Factory</a>.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <a href="https://twitter.com/damienstanton"><span className="fa fa-twitter"> Tweets I've twote.</span></a>
          <p></p>
          <a href="mailto:info@damien.codes"><span className="fa fa-envelope"> Send me an electronic letter.</span></a>
          {close}
        </article >

      </div >
    )
  }
}

Main.propTypes = {
  route: React.PropTypes.object,
  article: React.PropTypes.string,
  articleTimeout: React.PropTypes.bool,
  onCloseArticle: React.PropTypes.func,
  timeout: React.PropTypes.bool
}

export default Main