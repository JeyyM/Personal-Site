import { Fragment, useState, useEffect, useRef } from "react"
import Head from "next/head"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from 'react-intersection-observer';

let previousScrollPos = 0;

function HomePage() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [isNavbarVisible, setNavbarVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = typeof window !== "undefined" ? window.pageYOffset : 0;
    setNavbarVisible(currentScrollPos < previousScrollPos || currentScrollPos === 0);
    previousScrollPos = currentScrollPos;
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const newScreenWidth = window.innerWidth;
      setScreenWidth(newScreenWidth);
    };

    handleResize()

    if (typeof window !== 'undefined') {
      setScreenWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const [navRef, navView] = useInView({
    threshold: 0,
  });

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

  const [sect5Ref4, inViewD4] = useInView({
    triggerOnce: true,
    threshold: 0.7,
  });

  const [active1, setActive1] = useState(false)
  function handleActive1() {
    setActive1(!active1)
  }

  const Active1Hover = () => {
    setActive1(true);
  };

  const Active1Leave = () => {
    setActive1(false);
  };

  const [active2, setActive2] = useState(false)
  function handleActive2() {
    setActive2(!active2)
  }

  const Active2Hover = () => {
    setActive2(true);
  };

  const Active2Leave = () => {
    setActive2(false);
  };

  const [active3, setActive3] = useState(false)
  function handleActive3() {
    setActive3(!active3)
  }

  const Active3Hover = () => {
    setActive3(true);
  };

  const Active3Leave = () => {
    setActive3(false);
  };

  const [active4, setActive4] = useState(false)
  function handleActive4() {
    setActive4(!active4)
  }

  const Active4Hover = () => {
    setActive4(true);
  };

  const Active4Leave = () => {
    setActive4(false);
  };

  const colorArray = [
    "#00CD7D", "#30CFAE", "#5FD0DF", "#51B9D4",
    "#3D96C4", "#2873B3", "#1450A3", "#503595",
    "#8D1B87", "#C90079"
  ];

  const [storyState, setStoryState] = useState(0)

  const [storyRef, storyView] = useInView({ threshold: 0.09 });
  const [storyRef1, storyView1] = useInView({ threshold: 0.9 });
  const [storyRef2, storyView2] = useInView({ threshold: 0.8 });
  const [storyRef3, storyView3] = useInView({ threshold: 0.8 });
  const [storyRef4, storyView4] = useInView({ threshold: 0.8 });
  const [storyRef5, storyView5] = useInView({ threshold: 0.8 });
  const [storyRef6, storyView6] = useInView({ threshold: 0.8 });
  const [storyRef7, storyView7] = useInView({ threshold: 0.8 });
  const [storyRef8, storyView8] = useInView({ threshold: 0.8 });
  const [storyRef9, storyView9] = useInView({ threshold: 0.8 });
  const [storyRef10, storyView10] = useInView({ threshold: 0.8 });

  const [skillVisRef, visRef] = useInView({ threshold: 0.8 });

  const [skillBottom, setSkillBottom] = useState("-100%");

  useEffect(() => {
    if (storyView1) {
      setStoryState(1);
    } else if (storyView2) {
      setStoryState(2)
    } else if (storyView3) {
      setStoryState(3)
    } else if (storyView4) {
      setStoryState(4)
    } else if (storyView5) {
      setStoryState(5)
    } else if (storyView6) {
      setStoryState(6)
    } else if (storyView7) {
      setStoryState(7)
    } else if (storyView8) {
      setStoryState(8)
    } else if (storyView9) {
      setStoryState(9)
    } else if (storyView10) {
      setStoryState(10)
    } else {
      if (!storyView) { setStoryState(0) }
    }
  }, [storyView, storyView1, storyView2, storyView3, storyView4, storyView5, storyView6, storyView7, storyView8, storyView9, storyView10]);

  useEffect(() => {
    setSkillBottom("-100%");
    setTimeout(() => {
      setSkillBottom("0%");
    }, 300);
  }, [storyState])

  const storyTextList = [
    <p className="about-p">    My journey started on August 2022, I started off with <a href="#" style={{ color: "inherit", fontWeight: "800" }}>Angela Yu's Python course</a> there I learned the basics of programming such as variables, functions, loops, etc. Though I don't use Python at the moment, I'm happy I learned it anyway since it set the foundations of my learning.</p>,
    <p className="about-p">    Along the Python journey I was introduced to web development through Flask. This part made me fall in love with web development when she made a simple blog website. It wasn't much, but the way the problems were solved and how the contents were structured were what gave me the drive to keep learning. Development was like a big and practical Rube Goldberg Machine with a purpose.</p>,
    <p className="about-p">    Since it was a Python course, it didn't teach much CSS or Javascript so I picked up her <a href="#" style={{ color: "inherit", fontWeight: "800" }}>Javascript Course</a> and it gave me the start I needed. It was a bit of a struggle after using Python for so long but eventually I finished it too. Though it would be a lie to say I didn't find Javascript extremely annoying. It showed me the horizons and hinted me to React.</p>,
    <p className="about-p">    Because of how annoying JS was to me with all of the query selector nonsense, I didn't know where to go and what I wanted to do. Then I noticed <a href="#" style={{ color: "inherit", fontWeight: "800" }}>Google's UI/UX Course</a> and it made me interested in web design. It taught me a seemingly common-sense perspective on how apps and sites should be made. The importance of accessibility, empathy, and what it means to make websites for other people. During this time I started to ideate what would become MyMart through Figma.</p>,
    <p className="about-p">    I was eager to just jump in and get started in creating my project. To do so I decided to go with React through <a href="#" style={{ color: "inherit", fontWeight: "800" }}>Academind's React Course</a>. This was a great decision because React to me was much easier, simpler, more fun, and less cumbersome compared to normal JS. I was also introduced to NextJS which made api use and routing straightforward.</p>,
    <p className="about-p">    None of the courses so far focused on CSS, so I decided to try Jonas Schmedtmann's <a href="#" style={{ color: "inherit", fontWeight: "800" }}>Fundamentals</a> and <a href="#" style={{ color: "inherit", fontWeight: "800" }}>Advanced</a> Courses and it reignited my interest and passion for development. I was planning to just bruteforce things with Bootstrap but I'm so glad I didn't. Sky's the limit when you know the tools of the trade. It showed so many tricks and techniques I might have never found.</p>,
    <p className="about-p">    In order to make sure I don't kill myself by accident, I made sure to learn Git and Github to keep saves and checkpoints through <a href="#" style={{ color: "inherit", fontWeight: "800" }}>Colt Steele's Course</a>. It gave me what I needed to learn Git's version control and it has saved me on numerous occasions.</p>,
    <p className="about-p">    Now that my armory is set up, the tools are sharpened and ready, off I went to create MyMart. It was ambitious to try to make a fullstack website as my first project. But I decided that the collection of all the pages and their interactions would best constitute my portfolio.</p>,
    <p className="about-p">    Now that all was said and done, the project was finished and is now live. I applied everything from the ideating, designing, building, responsiveness, etc. all done solo. I got great practice of all the fundamentals and problem solving thought processes needed to succeed. As well as the grit needed to not give up in the face of heavy burnout.</p>,
    <p className="about-p">    However, I did need ChatGPT's help in many parts especially towards API use. But generally I tried to direct it towards my path and used it mainly for debugging help. In total, the duration of the project was From March 1 to August 19, 2023, <span style={{ fontWeight: "800" }}>I wrote XXX lines</span> of (relatively optimized) code per day at final, not including comments and removed code. I want to bring that work ethic to <span style={{ fontWeight: "800" }}>your company</span>. </p>,
  ]

  const iconItems = [["python", "turtle", "tkinter", "soup", "sql", "twilio", "oop"], ["html", "flask", "bootstrap", "jinja", "pandas", "seaborn", "colab",],
  ["js", "jquery", "node", "express", "api", "mongodb"], ["ux", "ui", "responsive", "accessibility", "figma", "design", "wireframe"],
  ["react", "devtools", "firebase", "redux", "next", "vercel", "framer"], ["css", "sass", "vscode"], ["git", "github", "terminal", "gitkraken"]]

  const iconNames = [["Python", "Turtles", "Tkinter", "Beautiful Soup", "SQLite", "Twilio", "Object Oriented Programming"], ["HTML", "Flask", "Bootstrap", "Jinja", "Pandas", "Seaborn", "Colaboratory",],
  ["Javascript", "JQuery", "NodeJS", "Express", "API", "MongoDB"], ["User Experience", "User Interface", "Responsive Design", "Accessibility", "Figma", "Web Design", "Wireframing"],
  ["React", "Developer Tools", "Firebase", "Redux", "NextJS", "Vercel", "Framer Motion"], ["CSS", "Sass", "VSCode"], ["Git", "Github", "Terminal", "Git Kraken"]]

  const mainSkills = ["html", "js", "css", "react", "sass", "framer", "next", "mongodb", "git", "figma", "vscode", "vercel", "github", "ux", "ui", "responsive", "accessibility", "design", "wireframe", "api", "redux", "devtools", "gitkraken", "oop"]
  const subSkills = ["python", "flask", "bootstrap", "jquery", "node", "express", "firebase", "jinja", "terminal"]
  const famSkills = ["sql", "turtle", "tkinter", "soup", "pandas", "seaborn", "colab", "twilio"]

  const mainNames = ["HTML", "Javascript", "CSS", "React", "Sass", "Framer Motion", "NextJS", "MongoDB", "Git", "Figma", "VSCode", "Vercel", "Github", "User Experience", "User Interface", "Responsive Design", "Accessibility", "Web Design", "Wireframing", "API", "Redux", "Developer Tools", "Git Kraken", "Object Oriented Programming"]
  const subNames = ["Python", "Flask", "Bootstrap", "JQuery", "NodeJS", "Express", "Firebase", "Jinja", "Terminal"]
  const famNames = ["SQLite", "Turtles", "Tkinter", "Beautiful Soup", "Pandas", "Seaborn", "Colaboratory", "Twilio"]

  return <Fragment>
    <Head>
      <title>Hello</title>
    </Head>

    {!navView && <nav className={`home-navbar ${isNavbarVisible ? 'nav-visible' : 'nav-hidden'}`}>
      <img className="home-nav-logo" src="/logo1.png"></img>

      <p className="main-nav-text main-nav-col nav-text-1">My Projects</p>
      <p className="main-nav-text main-nav-col nav-text-2">About</p>
      <p className="main-nav-text main-nav-col nav-text-3">My Skills</p>
      <p className="main-nav-text main-nav-col nav-text-1">Resume</p>
      <p className="main-nav-text main-nav-col nav-text-2">Contact</p>

    </nav>}

    {storyView && <div className="section-7-main" style={{ backgroundColor: colorArray[storyState - 1], boxShadow: storyState === 10 ? "inset 0px -20px 30px -10px #18181882" : "inset 0px 0px 0px 0px #18181882" }}>

      <motion.div
        key={storyState}
        className="story-piece"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
      >
        {storyTextList[storyState - 1]}
      </motion.div>

      <div className="story-piece">
        <motion.img className="story-img" src="https://i.imgur.com/9kfJCyT.jpeg"
          key={storyState}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}></motion.img>
      </div>

      <div className="story-skill-list" style={{ transform: `${(storyState > 0 && storyState < 8 ? "translateY(0%)" : "translateY(100%)")}`, marginBottom: skillBottom }} ref={skillVisRef}>
        <h2 className="skills-label" style={{ filter: `drop-shadow(-5px 5px 0px ${colorArray[storyState - 1]})` }}>New Skills</h2>
        <div className="skill-row" style={{ filter: `drop-shadow(-5px 5px 0px ${colorArray[storyState - 1]})` }}>
          {(storyState > 0 && storyState < 8) && iconItems[storyState - 1].map((item, index) => {

            return <motion.div key={index} className="skill-container" initial={{ transform: "scale(0)" }} animate={{ transform: visRef ? "scale(1)" : "scale(0)" }} transition={{ duration: 0.3, delay: 0.1 * index }}>
              <div className="feature-annotation">
                {iconNames[storyState - 1][index]}
              </div>
              <div className={`skill-item-${item}`}>
              </div>
            </motion.div>
          })}

        </div>
      </div>
    </div>}


    <section className="section-1" ref={navRef}>
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

      <h2 className="proj-text">My Projects</h2>

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
      <div style={{ display: "flex" }} ref={sect5Ref}>

        <div className="sect-5-cont">
          <motion.div initial={{ opacity: 0, height: "0%", width: "0%" }} animate={{ opacity: inViewD ? 0 : 1, height: inViewD ? "140%" : "0%", width: inViewD ? "140%" : "0%" }} transition={{ duration: 1.5, delay: inViewD ? 0.5 : 0 }} className="section-5-wave"></motion.div>
          <motion.div className="section-5-circle" initial={{ opacity: 0, transform: "rotate(270deg) scale(50%)" }} animate={{ opacity: inViewD ? [0, 1, 1] : 0, transform: inViewD ? ["rotate(270deg) scale(50%)", "rotate(0deg) scale(130%)", "rotate(0deg) scale(100%)"] : "rotate(270deg) scale(50%)" }}
            transition={{ duration: 1, times: [0, 0.5, 1], ease: "easeInOut" }}>
            <img src="/light-2.png" className="section-5-img"></img>
          </motion.div>
        </div>

        <motion.div className="section-5-desc" initial={{ opacity: "0", width: "0rem", height: "40rem", margin: "0", marginRight: "0" }} animate={{ opacity: inViewD ? 1 : 0, width: inViewD ? "60%" : "0rem", height: inViewD ? "auto" : "40rem", margin: inViewD ? "auto" : "0", marginRight: "0" }} transition={{ duration: 1, delay: inViewD ? 2 : 0 }}>
          {/* <motion.div className="section-5-desc" initial={{opacity:"0"}} animate={{opacity: inViewD ? 1 : 0}} transition={{duration: 1, delay: inViewD ? 2 : 0 }}> */}

          <h2 className="sect-5-heading-text">MyMart</h2>
          <h3 className="sect-5-desc-text" style={{ marginBottom: "2rem" }}>    MyMart is a an instant e-commerce store creator with both an admin and user side. Data is loaded dynamically based on the mart's link, allowing it to scale and create any number of marts and accounts.</h3>
          <div className="sect-5-desc-cols">
            <div className="sect-5-col" style={{ marginLeft: "2rem" }}>
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
        <motion.div style={{ marginLeft: "10%" }} className="project-item-frame" initial={{ filter: "drop-shadow(-10px 10px 0px transparent)" }} animate={{ filter: inViewD1 ? "drop-shadow(-10px 10px 0px #3752679c)" : "drop-shadow(0px 0px 0px #3752679c)" }} transition={{ duration: 1, delay: inViewD1 ? 0.76 : 0 }} ref={sect5Ref1}
          onClick={handleActive1} onMouseEnter={Active1Hover} onMouseLeave={Active1Leave}>
          <div className="project-main" style={{ marginLeft: `${inViewD1 ? "0" : "-150%"}` }}>
            <img className="proj-img" src="https://i.imgur.com/9kfJCyT.jpeg"></img>
            <div className="whitesheet"></div>
            <div className="col-sheet-1" style={{ width: `${active1 ? "100%" : "0%"}` }}></div>

            <div className="proj-text-cont" style={{ marginBottom: `${active1 ? "2rem" : "-6.5rem"}` }}>
              <h2 className="sect-5-proj-text" style={{ fontSize: `${active1 ? "5.5rem" : "4.5rem"}` }}>MyMart Landing Page</h2>

              <div className="proj-buttons" onClick={(e) => { e.stopPropagation() }}>
                <button className="proj-button" onClick={(e) => { e.stopPropagation() }}>Github
                  <div className="icon-gh"></div>
                </button>

                <button className="proj-button">Live Site
                  <div className="icon-live"></div>
                </button>

              </div>
            </div>
            <h2 className="sect-5-proj-num" style={{ fontSize: `${active1 ? "12rem" : "10rem"}`, marginRight: `${active1 ? "1rem" : "2rem"}`, marginTop: `${active1 ? "-1.5rem" : "0rem"}` }}>01</h2>
            <div className="wipe-1" style={{ marginLeft: `${inViewD1 ? "150%" : "-110%"}` }}></div>

          </div>
        </motion.div>

        <motion.div style={{ marginRight: "10%" }} className="project-item-frame" initial={{ filter: "drop-shadow(-10px 10px 0px transparent)" }} animate={{ filter: inViewD2 ? "drop-shadow(-10px 10px 0px #3752679c)" : "drop-shadow(0px 0px 0px #3752679c)" }} transition={{ duration: 1, delay: inViewD2 ? 0.76 : 0 }} ref={sect5Ref2}
          onClick={handleActive2} onMouseEnter={Active2Hover} onMouseLeave={Active2Leave}>
          <div className="project-main" style={{ marginLeft: `${inViewD2 ? "0" : "-150%"}` }}>
            <img className="proj-img" src="https://i.imgur.com/9kfJCyT.jpeg"></img>
            <div className="whitesheet"></div>
            <div className="col-sheet-1" style={{ width: `${active2 ? "100%" : "0%"}`, backgroundImage: "linear-gradient(to bottom right, #5fd0df, #00cd7d)" }}></div>

            <div className="proj-text-cont" style={{ marginBottom: `${active2 ? "2rem" : "-6.5rem"}` }}>
              <h2 className="sect-5-proj-text" style={{ fontSize: `${active2 ? "5.5rem" : "4.5rem"}` }}>MyMart Customer Sites</h2>

              <div className="proj-buttons" onClick={(e) => { e.stopPropagation() }}>
                <button className="proj-button" onClick={(e) => { e.stopPropagation() }}>Github
                  <div className="icon-gh"></div>
                </button>

                <button className="proj-button">Live Site
                  <div className="icon-live"></div>
                </button>

              </div>
            </div>
            <h2 className="sect-5-proj-num" style={{ fontSize: `${active2 ? "12rem" : "10rem"}`, marginRight: `${active2 ? "1rem" : "2rem"}`, marginTop: `${active2 ? "-1.5rem" : "0rem"}` }}>02</h2>
            <div className="wipe-1" style={{ marginLeft: `${inViewD2 ? "150%" : "-110%"}`, backgroundImage: "linear-gradient(to bottom right, #5fd0df, #00cd7d)" }}></div>

          </div>
        </motion.div>

        <motion.div style={{ marginLeft: "10%" }} className="project-item-frame" initial={{ filter: "drop-shadow(-10px 10px 0px transparent)" }} animate={{ filter: inViewD3 ? "drop-shadow(-10px 10px 0px #3752679c)" : "drop-shadow(0px 0px 0px #3752679c)" }} transition={{ duration: 1, delay: inViewD3 ? 0.76 : 0 }} ref={sect5Ref3}
          onClick={handleActive3} onMouseEnter={Active3Hover} onMouseLeave={Active3Leave}>
          <div className="project-main" style={{ marginLeft: `${inViewD3 ? "0" : "-150%"}` }}>
            <img className="proj-img" src="https://i.imgur.com/9kfJCyT.jpeg"></img>
            <div className="whitesheet"></div>
            <div className="col-sheet-1" style={{ width: `${active3 ? "100%" : "0%"}`, backgroundImage: "linear-gradient(to bottom right, #fccf3a, #fe4b09)" }}></div>

            <div className="proj-text-cont" style={{ marginBottom: `${active3 ? "2rem" : "-6.5rem"}` }}>
              <h2 className="sect-5-proj-text" style={{ fontSize: `${active3 ? "5.5rem" : "4.5rem"}` }}>MyMart Admin</h2>

              <div className="proj-buttons" onClick={(e) => { e.stopPropagation() }}>
                <button className="proj-button" onClick={(e) => { e.stopPropagation() }}>Github
                  <div className="icon-gh"></div>
                </button>

                <button className="proj-button">Live Site
                  <div className="icon-live"></div>
                </button>

              </div>
            </div>
            <h2 className="sect-5-proj-num" style={{ fontSize: `${active3 ? "12rem" : "10rem"}`, marginRight: `${active1 ? "1rem" : "2rem"}`, marginTop: `${active1 ? "-1.5rem" : "0rem"}` }}>03</h2>
            <div className="wipe-1" style={{ marginLeft: `${inViewD3 ? "150%" : "-110%"}`, backgroundImage: "linear-gradient(to bottom right, #fccf3a, #fe4b09)" }}></div>

          </div>
        </motion.div>
      </div>
    </section>

    <section className="portfolio-proj">
      <h2 className="port-text" style={{ color: "white", textAlign: "center" }}>Portfolio Website</h2>

      <div className="projects-flex" style={{ margin: "1.5rem 0" }}>
        <motion.div className="project-item-frame" initial={{ filter: "drop-shadow(-10px 10px 0px transparent)" }} animate={{ filter: inViewD4 ? "drop-shadow(-10px 10px 0px #3752679c)" : "drop-shadow(0px 0px 0px #3752679c)" }} transition={{ duration: 1, delay: inViewD4 ? 0.76 : 0 }} ref={sect5Ref4}
          onClick={handleActive4} onMouseEnter={Active4Hover} onMouseLeave={Active4Leave}>
          <div className="project-main" style={{ marginLeft: `${inViewD4 ? "0" : "-150%"}` }}>
            <img className="proj-img" src="https://i.imgur.com/9kfJCyT.jpeg"></img>
            <div className="whitesheet"></div>
            <div className="col-sheet-1" style={{ width: `${active4 ? "100%" : "0%"}` }}></div>

            <div className="proj-text-cont" style={{ marginBottom: `${active4 ? "2rem" : "-6.5rem"}` }}>
              <h2 className="sect-5-proj-text" style={{ fontSize: `${active4 ? "5.5rem" : "4.5rem"}` }}>Personal Site</h2>

              <div className="proj-buttons" onClick={(e) => { e.stopPropagation() }}>
                <button className="proj-button" onClick={(e) => { e.stopPropagation() }}>Github
                  <div className="icon-gh"></div>
                </button>

                <button className="proj-button">Live Site
                  <div className="icon-live"></div>
                </button>

              </div>
            </div>
            <h2 className="sect-5-proj-num" style={{ fontSize: `${active4 ? "12rem" : "10rem"}`, marginRight: `${active4 ? "1rem" : "2rem"}`, marginTop: `${active4 ? "-1.5rem" : "0rem"}` }}>04</h2>
            <div className="wipe-1" style={{ marginLeft: `${inViewD4 ? "150%" : "-110%"}` }}></div>

          </div>
        </motion.div>
      </div>
    </section>

    <div className="more-soon">
      <h2 className="section-2-text-small">More Coming Soon...</h2>
    </div>

    <section className="section-6">
      <div className="about-text">
        <h2 className="about-heading">About Me</h2>
        <p className="about-p">    Hi! I'm JM Miranda, a web developer from the Philippines. I learned to code during my gap year on 2022. Since then I fell in love with the weaving and problem solving that developers do.
          I adore the intricacies and cleverness that we take for granted in the tools and apps in our day to day life as internet users.</p>

        <p className="about-p">    After trying out languages such as Python then being introduced to HTML, CSS, and Javascript, I was intrigued by the horizon of possibilities within.
          Since then, I decided to become a web developer with React. I have spent a few months making my web app to get some experience, escape tutorial hell, and put a big project on my portfolio.
          Now I'm excited to get my first real job and put my experience to work!
        </p>
      </div>
      <div className="about-img">
        <img src="/web.png" className="about-web"></img>
      </div>

      <h2 className="proj-text" style={{ color: "#181818" }}>My Story & Skills</h2>

    </section>

    <section className="section-7" ref={storyRef}>
      <div className="section-7-piece" style={{ backgroundColor: "#00CD7D" }} ref={storyRef1}>
        <motion.div
          key={storyState}
          className="story-piece"
          initial={{ opacity: 1, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          {storyTextList[0]}
        </motion.div>

        <div className="story-piece">
          <motion.img className="story-img" src="https://i.imgur.com/9kfJCyT.jpeg"
            key={storyState}
            initial={{ opacity: 1, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 50 }}
            transition={{ duration: 0.5 }}></motion.img>
        </div>

        <div className="story-skill-list" style={{ transform: `${(storyState > 0 && storyState < 8 ? "translateY(0%)" : "translateY(100%)")}` }}>
          <div className="skill-row" style={{ filter: `drop-shadow(-5px 5px 0px ${colorArray[0]})` }}>
            {(storyState > 0 && storyState < 8) && iconItems[0].map((item, index) => {
              return <div className="skill-container" key={index}>
                <div className="feature-annotation">
                  {iconNames[0][index]}
                </div>
                <div className={`skill-item-${item}`}>
                </div>
              </div>
            })}

          </div>
        </div>
      </div>
      <div className="section-7-piece" style={{ backgroundColor: "#30CFAE" }} ref={storyRef2}>

      </div>
      <div className="section-7-piece" style={{ backgroundColor: "#5FD0DF" }} ref={storyRef3}>

      </div>
      <div className="section-7-piece" style={{ backgroundColor: "#51B9D4" }} ref={storyRef4}>

      </div>

      <div className="section-7-piece" style={{ backgroundColor: "#3D96C4" }} ref={storyRef5}>

      </div>
      <div className="section-7-piece" style={{ backgroundColor: "#2873B3" }} ref={storyRef6}>

      </div>
      <div className="section-7-piece" style={{ backgroundColor: "#1450A3" }} ref={storyRef7}>

      </div>
      <div className="section-7-piece" style={{ backgroundColor: "#503595" }} ref={storyRef8}>

      </div>

      <div className="section-7-piece" style={{ backgroundColor: "#8D1B87" }} ref={storyRef9}>

      </div>
      <div className="section-7-piece" style={{ backgroundColor: "#C90079", boxShadow: "inset 0px -20px 30px -10px #18181882" }} ref={storyRef10}>

        <motion.div
          key={storyState}
          className="story-piece"
          initial={{ opacity: 1, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 1, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          {storyTextList[9]}
        </motion.div>

        <div className="story-piece">
          <motion.img className="story-img" src="https://i.imgur.com/9kfJCyT.jpeg"
            key={storyState}
            initial={{ opacity: 1, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 50 }}
            transition={{ duration: 0.5 }}></motion.img>
        </div>
      </div>
    </section>
    <section className="section-8">

      <div className="skill-half">
        <h2 className="main-skill-text">Main Skillset</h2>

        <div className="main-skillset">

        {mainSkills.map((skill, index) => {
          return <div className="final-container">
            <div className="final-annotation">
              {mainNames[index]}
            </div>
            <div className={`final-item-${skill}`}>
            </div>
          </div>
          })}
          </div>


      </div>

      <div className="skill-half">
        <h2 className="sub-skill-text">Sub Skillset</h2>

        <div className="sub-skillset">
        {subSkills.map((skill, index) => {
          return <div className="final-container-b">
            <div className="final-annotation">
              {subNames[index]}
            </div>
            <div className={`final-item-${skill}`}>
            </div>
          </div>
          })}
        </div>

        <h2 className="fam-skill-text">Familiar With</h2>

<div className="fam-skillset">
{famSkills.map((skill, index) => {
          console.log(famSkills)
          return <div className="final-container-c">
            <div className="final-annotation">
              {famNames[index]}
            </div>
            <div className={`final-item-${skill}`}>
            </div>
          </div>
          })}
</div>
      </div>

    </section>

    <section className="section-9">
        <img src="/sunset.png" className="sect-9-bg"></img>
    </section>
  </Fragment>
}

export default HomePage