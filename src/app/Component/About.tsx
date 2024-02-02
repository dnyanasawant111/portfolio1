
"use client"

import React from 'react'
import '../Style/About.css'
import { useRouter } from 'next/navigation';
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";

const About: React.FC = () => {
    const router = useRouter();

    const handleButtonClick = () => {
        router.push("/pages/contact");
    };

    const particlesInit = useCallback(async (engine: Engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(
        async (container: Container | undefined) => { },
        []
    );

    return (
        <div className=' about-main p-5 '
            data-aos="zoom-out-right"
            data-aos-duration="1000">
            <Particles
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                }}
                id="Footertsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            value: "none",
                        },
                    },

                    fullScreen: {
                        enable: false,
                    },

                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.1,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: ["#FFA500", "#663399"],
                        },

                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 500,
                            },
                            value: 10,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 1, max: 6 },
                        },
                    },
                    detectRetina: true,
                }}
            />

            <div className="footer-partical-content">
                <div className='about container row d-flex justify-content-around w-100 pt-5'>
                    <div className='col-lg-6 col-md-8 pt-5 pb-5'>
                        <h1 className='About-heading '>I'm a MERN Stack Developer</h1>
                        <p>
                            I like to work on web application using technologies like
                            Html,Css,Javascript,React,<br />Bootstrap,Redux,Ant Design,Node js,Express js and Mongodb.
                        </p>
                        <button onClick={handleButtonClick} className=' contact-btn btn btn-info '>Connect With Me</button>
                    </div>
                    <div className='col-lg-3 col-md-8  pt-5 pb-5'>
                        <img className=' dp-image' src="../Images/dp.jpg" alt="Profile" />

                    </div>
                </div>
                <div className='container about-me' >
                    <h1>About</h1>
                    <p>
                        I am a Full stack developer.Belong from Parbhani, Maharashtra.
                        I am very passionate regarding creating new application and
                        problem solving. I am very positive attitude regarding learning
                        new technology.
                    </p>
                    <p>
                        My objective is i wish to work in organization where organization
                        as well as my carrier can pace growth.
                    </p>
                    <p>
                        Transforming Ideas into Interactive Realities.
                    </p>
                    <h1>Education</h1>
                    <p><strong>SSC: </strong>2012 with 90%</p>
                    <p><strong>HSC: </strong>2014 with 63%</p>
                    <p><strong>Graduation: </strong>BE(CIVIL) in 2019 with cgpa 7.3</p>
                </div>
            </div>


        </div>
    );
}

export default About;