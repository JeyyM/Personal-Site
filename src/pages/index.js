import { Fragment, useState, useEffect, useRef } from "react"
import Head from "next/head"
import Link from "next/link"
import { motion } from "framer-motion";

function HomePage() {
  return <Fragment>
    <Head>
      <title>Hello</title>
    </Head>

    <section className="section-1">
      <div className="sect-1-socials">
      <div className="social-item-mailbox"></div>
        <div className="social-item-github"></div>
        <div className="social-item-linkedin"></div>
      </div>

      <img src="/logo1.png" className="sect-1-logo">
      </img>

      <div className="sect-1-nav">
        <p className="sect-1-nav-text nav-text-1">My Projects</p>
        <p className="sect-1-nav-text nav-text-2">About</p>
        <p className="sect-1-nav-text nav-text-3">My Skills</p>
      </div>
      
      <div className="sect-1-hero">
      <div className="sect-1-text">
      <h1 className="sect-1-main-text">JM Miranda</h1>
      <h1 className="sect-1-sub-text">Frontend Web Developer</h1>
      <h3 className="sect-1-par-text" style={{marginRight:"2rem"}}>Creating fully scaling web apps with React and NextJS.</h3>


      <div className="sect-1-buttons">
        <button className="sect-1-button-1">Contact Me
        <div className="icon-mail"></div>
        </button>
        <button className="sect-1-button-2">Resume
        <div className="icon-resume"></div>
        </button>
      </div>
      </div>

      <div className="hero-img">
      <motion.div style={{position: "relative", zIndex:"3"}} initial={{ y: 0 }} animate={{ y: [0, 50, 0] }} transition={{duration: 8, repeat: Infinity, ease: "easeInOut"}}>
      <div class="hero-rotate">
  <div class="moving-hero">A</div>
</div>
</motion.div>

<motion.div style={{position: "relative", zIndex:"2"}} initial={{ y: 0 }} animate={{ y: [0, 30, 0] }} transition={{duration: 5, repeat: Infinity, ease: "easeInOut"}}>
<div class="hero-rotate-2">
  <div class="moving-hero-2"></div>
</div>
</motion.div>

<motion.div style={{position: "relative", zIndex:"1"}} initial={{ y: 0 }} animate={{ y: [0, 10, 0] }} transition={{duration: 3, repeat: Infinity, ease: "easeInOut"}}>
<div class="hero-rotate-3">
  <div class="moving-hero-3"></div>
</div>
</motion.div>

      </div>
      </div>

    </section>

    <section className="section-2">
    <div className="section-2-item" style={{zIndex:"5"}}></div>
    <div className="section-2-item" style={{zIndex:"4"}}></div>
    <div className="section-2-item" style={{zIndex:"3"}}></div>
    <div className="section-2-item" style={{zIndex:"2"}}></div>
    <div className="section-2-item" style={{zIndex:"1"}}></div>
    </section>

    <section className="section-3">
    </section>

  </Fragment>
}

export default HomePage



