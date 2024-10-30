import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

const ProjectItem = ({ screenWidth, projectName, projectNum, projectImage, color1, color2, githubLink, siteLink }) => {
    const [active1, setActive1] = useState(false);

    function handleActive1() {
        setActive1(!active1);
    }

    const Active1Hover = () => {
        setActive1(true);
    };

    const Active1Leave = () => {
        setActive1(false);
    };

    const [sect5Ref1, inViewD1] = useInView({
        triggerOnce: true,
        threshold: 0.7,
    });

    const [fontInactive, setFontInactive] = useState('4.5rem');
    const [fontActive, setFontActive] = useState('5.5rem');

    useEffect(() => {
        if (screenWidth <= 450) {
            setFontInactive('3rem');
            setFontActive('3.3rem');
        } else if (screenWidth <= 450) {
            setFontInactive('3rem');
            setFontActive('3.3rem');
        } else if (screenWidth <= 600) {
            setFontInactive('3rem');
            setFontActive('3.7rem');
        } else if (screenWidth <= 1050) {
            setFontInactive('3.5rem');
            setFontActive('4.2rem');
        } else {
            setFontInactive('4.5rem');
            setFontActive('5.5rem');
        }
    }, [screenWidth]);


    return (
        <motion.div
            style={{ marginLeft: "10%" }}
            className="project-item-frame"
            initial={{ filter: "drop-shadow(-10px 10px 0px transparent)" }}
            animate={{ filter: inViewD1 ? "drop-shadow(-10px 10px 0px #3752679c)" : "drop-shadow(0px 0px 0px #3752679c)" }}
            transition={{ duration: 1, delay: inViewD1 ? 0.76 : 0 }}
            ref={sect5Ref1}
            onClick={handleActive1}
            onMouseEnter={Active1Hover}
            onMouseLeave={Active1Leave}
        >
            <div className="project-main" style={{ marginLeft: `${inViewD1 ? "0" : "-150%"}` }}>
                <img className="proj-img" src={projectImage} alt="Project" />
                <div className="whitesheet"></div>
                <div className="col-sheet-1" style={{ width: `${active1 ? "100%" : "0%"}`, backgroundImage: `linear-gradient(to bottom right, ${color1}, ${color2})` }}></div>

                <div className="proj-text-cont" style={{ marginBottom: `${active1 ? "2rem" : "-6.5rem"}` }}>
                    <h2 className="sect-5-proj-text" style={{ fontSize: active1 ? fontActive : fontInactive }}>{projectName}</h2>

                    <div className="proj-buttons" onClick={(e) => { e.stopPropagation(); }}>
                        <button className="proj-button" onClick={(e) => { e.stopPropagation(); window.open(githubLink, '_blank')}}>Github
                            <div className="icon-gh"></div>
                        </button>

                        <button className="proj-button" onClick={(e) => { e.stopPropagation(); window.open(siteLink, '_blank')}}>Live Site
                            <div className="icon-live"></div>
                        </button>
                    </div>
                </div>

                <h2 className="sect-5-proj-num"
                    style={{
                        transform: `scale(${active1 ? 1.2 : 1})`,
                        marginRight: active1 ? '2rem' : (screenWidth <= 600 ? '1rem' : '2rem'),
                        marginTop: active1 ? (screenWidth <= 1050 ? '0rem' : '-1rem') : '0rem'
                    }}>
                    {projectNum}
                </h2>

                <div
                    className="wipe-1"
                    style={{ marginLeft: `${inViewD1 ? "150%" : "-110%"}`, backgroundImage: `linear-gradient(to bottom right, ${color1}, ${color2})` }}
                ></div>
            </div>
        </motion.div>
    );
};

export default ProjectItem;
