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
          <p>I've been writing code and building computer systems for ~ 10 years now. Starting from sysadmin jobs in college through founding my own consultancy in 2014, it continues to be a breathtaking and interesting ride.</p>
          <p>My particular penchant is distributed (concurrent or parallel) systems, reinforcement learning and generally anything that aggregates and engineers big data, APIs and other backend joys. In general I tend to prefer microservices and strongly typed languages, leaning more towards the functional paradigm than anything else.</p>
          <p>In the field, I have a few varied interests. On the practical side I would mention <a href="https://www.youtube.com/playlist?list=PLWU0iAMOPgpqeph3680L4jBslXVLzFbw3">deep reinforcement learning</a>, <a href="https://mitpress.mit.edu/books/probabilistic-graphical-models">probabilistic graphical models</a> and <a href="http://alchemy.cs.washington.edu/">markov logic</a>.On the theoretical side: <a href="https://github.com/hmemcpy/milewski-ctfp-pdf">category theory</a>, and <a href="https://homotopytypetheory.org/book/">homotopy type theory</a> are my favorite things to explore.</p>
          <p>My tools of choice include <a href="https://golang.org">Go</a>, <a href="https://www.rust-lang.org">Rust</a>, <a href="https://www.typescriptlang.org/">TypeScript</a> and <a href="http://www.cplusplus.com">C++</a>, along with <a href="https://python.org">Python</a> and <a href="https://www.tensorflow.org/">TensorFlow</a> for data science/modeling. I try to read a fair bit of <a href="https://haskell.org">Haskell</a>, and would love to work with it professionally but have not had the chance. I will read and write any code.</p>
          {close}
        </article>

        <article id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Work</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <a href="https://github.com/damienstanton"><span className="fa fa-github"> View my free and open-source work on GitHub.</span></a>
          <br></br>
          <br></br>
          <p>In my day job at <a href="https://wirelessregistry.com">Wireless Registry</a>, I build concurrent Go microservices and tools that help process IoT data at big-data scale.</p>
          <p>Some of my personal projects have included building a winning NCAA "march madness" prediction algorithm, building voice user interfaces for the web, dabbles in cryptocurrency mining/smart-contracts, and exploring how to turn my own car self-driving via <a href="https://comma.ai">Comma.ai</a>'s revolutionary hardware &amp; software.</p>
          {close}
        </article>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>I am a native of the Washington, D.C. Metro Area.</p>
          <p>Outside of tech, I've played guitar for almost 20 years, and am currently in a band called <a href="https://mirrorfactorydc.com/">Mirror Factory</a>.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{ display: 'none' }}>
          <h2 className="major">Contact</h2>
          <a href="https://twitter.com/damienstanton"><span className="fa fa-twitter">  Follow me on Twitter.</span></a>
          <p></p>
          <a href="mailto:info@damien.codes"><span className="fa fa-envelope"> Send me an email.</span></a>
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