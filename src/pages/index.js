import { Fragment, useState, useEffect, useRef } from "react"
import Head from "next/head"
import Link from "next/link"
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

function HomePage() {
  const [sect2Ref1, inView1] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [sect2Ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [sect2Ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [sect2Ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const word1 = "FULLSTACK";
  const letters1 = word1.split("");

  const word2 = "FULLY-SCALING";
  const letters2 = word2.split("");

  const word3 = "RESPONSIVE";
  const letters3 = word3.split("");

  const word4 = "ACCESSIBLE";
  const letters4 = word4.split("");

  const word5 = "FULLY ORIGINAL";
  const letters5 = word5.split("");

  const word6 = "MADE SOLO";
  const letters6 = word6.split("");

  const [sect3Ref, inViewB] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const [sect4Ref, inViewC] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const [sect5Ref, inViewD] = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  const [sect5Ref1, inViewD1] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const [sect5Ref2, inViewD2] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const [sect5Ref3, inViewD3] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const [active1, setActive1] = useState(false)
  function handleActive1(){
    setActive1(!active1)
  }

  const Active1Hover = () => {
    setActive1(true);
  };

  const Active1Leave = () => {
    setActive1(false);
  };

  const [active2, setActive2] = useState(false)
  function handleActive2(){
    setActive2(!active2)
  }

  const Active2Hover = () => {
    setActive2(true);
  };

  const Active2Leave = () => {
    setActive2(false);
  };

  const [active3, setActive3] = useState(false)
  function handleActive3(){
    setActive3(!active3)
  }

  const Active3Hover = () => {
    setActive3(true);
  };

  const Active3Leave = () => {
    setActive3(false);
  };

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
          <h1 className="sect-1-sub-text">Fullstack Web Developer</h1>
          <h3 className="sect-1-par-text" style={{ marginRight: "2rem" }}>Creating fully scaling web apps with React & NextJS.</h3>


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
          <motion.div style={{ position: "relative", zIndex: "3" }} initial={{ y: 0 }} animate={{ y: [0, 50, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}>
            <div className="hero-rotate">
              <div className="moving-hero">A</div>
            </div>
          </motion.div>

          <motion.div style={{ position: "relative", zIndex: "2" }} initial={{ y: 0 }} animate={{ y: [0, 30, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
            <div className="hero-rotate-2">
              <div className="moving-hero-2"></div>
            </div>
          </motion.div>

          <motion.div style={{ position: "relative", zIndex: "1" }} initial={{ y: 0 }} animate={{ y: [0, 10, 0] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}>
            <div className="hero-rotate-3">
              <div className="moving-hero-3"></div>
            </div>
          </motion.div>

        </div>
      </div>

    </section>

    <section className="section-2">
      <div className="section-2-piece" ref={sect2Ref1}></div>
      <div className="section-2-piece" ref={sect2Ref2}></div>
      <div className="section-2-piece" ref={sect2Ref3}></div>
      <div className="section-2-piece-last" ref={sect2Ref4}></div>

      <div className="section-2-item" style={{ zIndex: "4", marginTop: `${inView1 ? "0vh" : "-30vh"}` }}>
        <div className="section-2-a" style={{ backgroundColor: "#FFB238" }}>
          {letters1.map((letter, index) => (
            <p key={index} className="section-2-text">
              {letter}
            </p>
          ))}
        </div>
        <div className="section-2-b" style={{ backgroundColor: "#4FD0CF", transform: `${inView1 ? "translateY(0rem)" : "translateY(-100rem)"}` }}>
          {letters2.map((letter, index) => (
            <p key={index} className="section-2-text">
              {letter}
            </p>
          ))}
        </div>
      </div>
      <div className="section-2-item" style={{ zIndex: "3", marginTop: `${inView2 ? "25vh" : "-30vh"}` }}>
        <div className="section-2-a" style={{ backgroundColor: "#FF7F21" }}>
          {letters3.map((letter, index) => (
            <p key={index} className="section-2-text">
              {letter}
            </p>
          ))}
        </div>
        <div className="section-2-b" style={{ backgroundColor: "#30CFAE", transform: `${inView2 ? "translateY(0rem)" : "translateY(-100rem)"}` }}>
          {letters4.map((letter, index) => (
            <p key={index} className="section-2-text">
              {letter}
            </p>
          ))}
        </div>
      </div>
      <div className="section-2-item" style={{ zIndex: "2", marginTop: `${inView3 ? "50vh" : "-30vh"}` }}>
        <div className="section-2-a" style={{ backgroundColor: "#FE5C11" }}>
          {letters5.map((letter, index) => (
            <p key={index} className="section-2-text">
              {letter}
            </p>
          ))}
        </div>
        <div className="section-2-b" style={{ backgroundColor: "#10CE8D", transform: `${inView3 ? "translateY(0rem)" : "translateY(-100rem)"}` }}>
          {letters6.map((letter, index) => (
            <p key={index} className="section-2-text">
              {letter}
            </p>
          ))}
        </div>
      </div>
      <div className="section-2-item-last" style={{ zIndex: "1", marginTop: `${inView4 ? "75vh" : "-50vh"}` }}>
        <h2 className="section-2-text-small">MADE WITH:</h2>
        <div className="made-row">

          <div className="made-container">
            <div className="feature-annotation">
              HTML 5
            </div>
            <div className="feature-item-html">
            </div>
          </div>

          <div className="made-container">
            <div className="feature-annotation">
              CSS 3
            </div>
            <div className="feature-item-css">
            </div>
          </div>

          <div className="made-container">
            <div className="feature-annotation">
              Javascript
            </div>
            <div className="feature-item-js">
            </div>
          </div>

          <div className="made-container">
            <div className="feature-annotation">
              Sass
            </div>
            <div className="feature-item-sass">
            </div>
          </div>

          <div className="made-container">
            <div className="feature-annotation">
              NextJS
            </div>
            <div className="feature-item-next">
            </div>
          </div>

          <div className="made-container">
            <div className="feature-annotation">
              Vercel
            </div>
            <div className="feature-item-vercel">
            </div>
          </div>

          <div className="made-container">
            <div className="feature-annotation">
              MongoDB
            </div>
            <div className="feature-item-mongodb">
            </div>
          </div>

          <div className="made-container">
            <div className="feature-annotation">
              Framer Motion
            </div>
            <div className="feature-item-framer">
            </div>
          </div>

          <div className="made-container">
            <div className="feature-annotation">
              Figma
            </div>
            <div className="feature-item-figma">
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-3" ref={sect3Ref}>

      <img src="https://picsum.photos/200/300" className="section-3-a" style={{ marginTop: `${inViewB ? "0rem" : "-60vh"}` }}></img>
      <img src="https://picsum.photos/200/301" className="section-3-b" style={{ marginBottom: `${inViewB ? "0rem" : "-60vh"}` }}></img>
      <img src="https://picsum.photos/400/500" className="section-3-c" style={{ marginRight: `${inViewB ? "0rem" : "-60vw"}` }}></img>


      <motion.h2 className="section-3-text" initial={{ textShadow: "0px 0px 0px transparent" }} animate={{ textShadow: inViewB ? "-15px 15px 0px #4a5c6e77" : "0px 0px 0px transparent" }} transition={{ duration: 0.8, ease: "easeInOut", delay: inViewB ? 0.8 : 0 }}>Website</motion.h2>
      <motion.h2 className="section-3-text-x" initial={{ transform: "scale(1)", textShadow: "0px 0px 0px transparent" }} animate={{ transform: inViewB ? "scale(1.5) rotate(45deg)" : "scale(1)", textShadow: inViewB ? "10px 15px 0px #4a5c6e77" : "0px 0px 0px transparent" }} transition={{ duration: 0.8, ease: "easeInOut", delay: inViewB ? 0.8 : 0 }}>+</motion.h2>
      <motion.h2 className="section-3-text" initial={{ textShadow: "0px 0px 0px transparent" }} animate={{ textShadow: inViewB ? "-15px 15px 0px #4a5c6e77" : "0px 0px 0px transparent" }} transition={{ duration: 0.8, ease: "easeInOut", delay: inViewB ? 0.8 : 0 }}>Web App</motion.h2>
    </section>

    <section className="section-4" ref={sect4Ref}>
      <div className="section-4-set">
        <img className="section-4-img" src="https://picsum.photos/400/1000" style={{ marginTop: `${inViewC ? "0%" : "200%"}` }}></img>
        <img className="section-4-img-b" src="https://picsum.photos/400/1001" style={{ marginTop: `${inViewC ? "0%" : "-200%"}` }}></img>
        <img className="section-4-img" src="https://picsum.photos/400/1002" style={{ marginTop: `${inViewC ? "0%" : "200%"}` }}></img>
        <img className="section-4-img-b" src="https://picsum.photos/400/1003" style={{ marginTop: `${inViewC ? "0%" : "-200%"}` }}></img>
      </div>

      <div style={{ zIndex: "4", width: "100%", display: "flex", flexDirection: "column" }}>
        <motion.h2
          className="section-4-text"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: inViewC ? [0, 50, 0] : 0,
            y: inViewC ? [0, -50, 0] : 0,
            opacity: inViewC ? [0, 1, 1] : 0,
            textShadow: inViewC ? ["0px 0px 0px #4a5c6e77", "-40px 60px 0px #4a5c6e77", "-5px 5px 0px #4a5c6e77"] : "0px 0px 0px #4a5c6e77"
          }}
          transition={{
            delay: inViewC ? 1 : 0,
            duration: 0.7,
            times: [0, 0.5, 1],
          }}
        >
          20 + 15 Unique Pages
        </motion.h2>

        <motion.h2
          className="section-4-text"
          initial={{ x: 0, y: 0, opacity: 0 }}
          animate={{
            x: inViewC ? [0, 50, 0] : 0,
            y: inViewC ? [0, -50, 0] : 0,
            opacity: inViewC ? [0, 1, 1] : 0,
            textShadow: inViewC ? ["0px 0px 0px #4a5c6e77", "-40px 60px 0px #4a5c6e77", "-5px 5px 0px #4a5c6e77"] : "0px 0px 0px #4a5c6e77"
          }}
          transition={{
            delay: inViewC ? 2 : 0,
            duration: 0.7,
            times: [0, 0.5, 1],
          }}
        >
          With Dynamic Data!
        </motion.h2>
      </div>
    </section>

    <section className="section-5">
    <div style={{display:"flex"}} ref={sect5Ref}>

    <div className="sect-5-cont">
                <motion.div initial={{ opacity: 0, height:"0%", width: "0%"}} animate={{opacity: inViewD ? 0 : 1, height: inViewD ? "140%" : "0%", width: inViewD ? "140%" : "0%"}} transition={{duration: 1.5, delay: inViewD ? 0.5 : 0}} className="section-5-wave"></motion.div>
      <motion.div className="section-5-circle" initial={{ opacity: 0, transform: "rotate(270deg) scale(50%)"}} animate={{opacity: inViewD ? [0, 1, 1] : 0, transform: inViewD ? ["rotate(270deg) scale(50%)", "rotate(0deg) scale(130%)", "rotate(0deg) scale(100%)"]: "rotate(270deg) scale(50%)"}}
      transition={{duration: 1, times: [0, 0.5, 1], ease: "easeInOut" }}>
        <img src="/light-2.png" className="section-5-img"></img>
      </motion.div>
      </div>

      <motion.div className="section-5-desc" initial={{opacity:"0", width:"0rem", height:"40rem", margin:"0", marginRight:"0"}} animate={{opacity: inViewD ? 1 : 0, width: inViewD ? "60%" : "0rem", height: inViewD ? "auto" : "40rem", margin: inViewD ? "auto" : "0", marginRight:"0"}} transition={{duration: 1, delay: inViewD ? 2 : 0 }}>
        <h2 className="sect-5-heading-text">MyMart</h2>
        <h3 className="sect-5-desc-text" style={{ marginBottom: "2rem" }}>    MyMart is a an instant e-commerce store creator with both an admin and user side. Data is loaded dynamically based on the mart's link, allowing it to scale and create any number of marts and accounts.</h3>
        <div className="sect-5-desc-cols">
          <div className="sect-5-col" style={{marginLeft:"2rem"}}>
            <h3 className="sect-5-col-heading">Admin Side</h3>
            <ul>
            <li className="sect-5-col-p">Create categories & products</li>
            <li className="sect-5-col-p">Manage products' variations, stock, price, & profits</li>
            <li className="sect-5-col-p">Customize details, colors, & fonts of your mart</li>
            <li className="sect-5-col-p">Manage, deliver, & finish orders</li>
            <li className="sect-5-col-p">View your mart's statistics in category & product performance as well as user data, & many more!</li>
            </ul>
          </div>
          <div className="sect-5-col">
            <h3 className="sect-5-col-heading">User Side</h3>
            <ul>
            <li className="sect-5-col-p">Persisting cart system</li>
            <li className="sect-5-col-p">Signups & authentication</li>
            <li className="sect-5-col-p">Checkout & payment handling</li>
            <li className="sect-5-col-p">Order history, updates, and editing</li>
            <li className="sect-5-col-p">Product stock updates</li>
            <li className="sect-5-col-p">Product searching</li>
            </ul>
          </div>
        </div>
        </motion.div>

      </div>

      <div className="projects-flex">
          <motion.div style={{marginLeft:"10%"}} className="project-item-frame" initial={{filter: "drop-shadow(-10px 10px 0px transparent)"}} animate={{filter: inViewD1 ? "drop-shadow(-10px 10px 0px #3752679c)" : "drop-shadow(0px 0px 0px #3752679c)"}} transition={{duration: 1, delay: inViewD1 ? 0.76 : 0}} ref={sect5Ref1}
          onClick={handleActive1} onMouseEnter={Active1Hover} onMouseLeave={Active1Leave}>
            <div className="project-main" style={{marginLeft:`${inViewD1 ? "0" : "-150%"}`}}>
              <img className="proj-img" src="https://i.imgur.com/9kfJCyT.jpeg"></img>
              <div className="whitesheet"></div>
              <div className="col-sheet-1" style={{width:`${active1 ? "100%" : "0%"}`}}></div>

              <div className="proj-text-cont" style={{marginBottom:`${active1 ? "2rem" : "-6.5rem"}`}}>
              <h2 className="sect-5-proj-text" style={{fontSize:`${active1 ? "5.5rem" : "4.5rem"}`}}>MyMart Landing Page</h2>

              <div className="proj-buttons" onClick={(e) => {e.stopPropagation()}}>
              <button className="proj-button" onClick={(e) => {e.stopPropagation()}}>Github
              <div className="icon-gh"></div>
            </button>

            <button className="proj-button">Live Site
              <div className="icon-live"></div>
            </button>

              </div>
              </div>
              <h2 className="sect-5-proj-num" style={{fontSize:`${active1 ? "12rem" : "10rem"}`, marginRight:`${active1 ? "1rem" : "2rem"}`, marginTop:`${active1 ? "-1.5rem" : "0rem"}`}}>01</h2>
              <div className="wipe-1" style={{marginLeft:`${inViewD1 ? "150%" : "-110%"}`}}></div>

            </div>
          </motion.div>

          <motion.div style={{marginRight:"10%"}} className="project-item-frame" initial={{filter: "drop-shadow(-10px 10px 0px transparent)"}} animate={{filter: inViewD2 ? "drop-shadow(-10px 10px 0px #3752679c)" : "drop-shadow(0px 0px 0px #3752679c)"}} transition={{duration: 1, delay: inViewD2 ? 0.76 : 0}} ref={sect5Ref2}
          onClick={handleActive2} onMouseEnter={Active2Hover} onMouseLeave={Active2Leave}>
            <div className="project-main" style={{marginLeft:`${inViewD2 ? "0" : "-150%"}`}}>
              <img className="proj-img" src="https://i.imgur.com/9kfJCyT.jpeg"></img>
              <div className="whitesheet"></div>
              <div className="col-sheet-1" style={{width:`${active2 ? "100%" : "0%"}`, backgroundImage: "linear-gradient(to bottom right, #5fd0df, #00cd7d)"}}></div>

              <div className="proj-text-cont" style={{marginBottom:`${active2 ? "2rem" : "-6.5rem"}`}}>
              <h2 className="sect-5-proj-text" style={{fontSize:`${active2 ? "5.5rem" : "4.5rem"}`}}>MyMart Customer Sites</h2>

              <div className="proj-buttons" onClick={(e) => {e.stopPropagation()}}>
              <button className="proj-button" onClick={(e) => {e.stopPropagation()}}>Github
              <div className="icon-gh"></div>
            </button>

            <button className="proj-button">Live Site
              <div className="icon-live"></div>
            </button>

              </div>
              </div>
              <h2 className="sect-5-proj-num" style={{fontSize:`${active2 ? "12rem" : "10rem"}`, marginRight:`${active2 ? "1rem" : "2rem"}`, marginTop:`${active2 ? "-1.5rem" : "0rem"}`}}>02</h2>
              <div className="wipe-1" style={{marginLeft:`${inViewD2 ? "150%" : "-110%"}`, backgroundImage: "linear-gradient(to bottom right, #5fd0df, #00cd7d)"}}></div>

            </div>
          </motion.div>

          <motion.div style={{marginLeft:"10%"}} className="project-item-frame" initial={{filter: "drop-shadow(-10px 10px 0px transparent)"}} animate={{filter: inViewD3 ? "drop-shadow(-10px 10px 0px #3752679c)" : "drop-shadow(0px 0px 0px #3752679c)"}} transition={{duration: 1, delay: inViewD3 ? 0.76 : 0}} ref={sect5Ref3}
          onClick={handleActive3} onMouseEnter={Active3Hover} onMouseLeave={Active3Leave}>
            <div className="project-main" style={{marginLeft:`${inViewD3 ? "0" : "-150%"}`}}>
              <img className="proj-img" src="https://i.imgur.com/9kfJCyT.jpeg"></img>
              <div className="whitesheet"></div>
              <div className="col-sheet-1" style={{width:`${active3 ? "100%" : "0%"}`, backgroundImage: "linear-gradient(to bottom right, #fccf3a, #fe4b09)"}}></div>

              <div className="proj-text-cont" style={{marginBottom:`${active3 ? "2rem" : "-6.5rem"}`}}>
              <h2 className="sect-5-proj-text" style={{fontSize:`${active3 ? "5.5rem" : "4.5rem"}`}}>MyMart Admin</h2>

              <div className="proj-buttons" onClick={(e) => {e.stopPropagation()}}>
              <button className="proj-button" onClick={(e) => {e.stopPropagation()}}>Github
              <div className="icon-gh"></div>
            </button>

            <button className="proj-button">Live Site
              <div className="icon-live"></div>
            </button>

              </div>
              </div>
              <h2 className="sect-5-proj-num" style={{fontSize:`${active3 ? "12rem" : "10rem"}`, marginRight:`${active1 ? "1rem" : "2rem"}`, marginTop:`${active1 ? "-1.5rem" : "0rem"}`}}>03</h2>
              <div className="wipe-1" style={{marginLeft:`${inViewD3 ? "150%" : "-110%"}`, backgroundImage: "linear-gradient(to bottom right, #fccf3a, #fe4b09)"}}></div>

            </div>
          </motion.div>
      </div>
    </section>
  </Fragment>
}

export default HomePage