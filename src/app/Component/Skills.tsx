"use client"

import React from 'react';
import '../Style/Skills.css';

const Skills: React.FC = () => {
    return (
        <div className='main-skills '
            data-aos="fade-up"
            data-aos-duration="1000">
            <div className='container p-4 my-skills'>
                <h1 className='pt-5'>My Skills</h1>
                <p className='p-2'>These are the technologies I've worked with</p>
                <div className='row d-flex justify-content-around w-100'>
                    <div className=' skill-details col-lg-4 text-center p-4'
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <div><img className='skill-img' src="../Images/html.png" /></div>
                        <p className='mb-0'>HTML</p>
                    </div>
                    <div className=' skill-details col-lg-4 text-center p-4'
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <div><img className='skill-img' src="../Images/css.png" /></div>
                        <p className='mb-0'>CSS</p>
                    </div>
                    <div className=' skill-details col-lg-4 text-center p-4'
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <div><img className='skill-img' src="../Images/js.png" /></div>
                        <p className='mb-0'>JavaScript</p>
                    </div>
                    <div className=' skill-details col-lg-4 text-center p-4'
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <div><img className='skill-img' src="../Images/react.png" /></div>
                        <p className='mb-0'>React</p>
                    </div>
                    <div className='skill-details col-lg-4 text-center p-4'
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <div><img className='skill-img' src="../Images/bootstrap.png" /></div>
                        <p className='mb-0'>Bootstrap</p>
                    </div>
                    <div className='skill-details col-lg-4 text-center p-4'
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <div><img className='skill-img' src="../Images/redux.png" /></div>
                        <p className='mb-0'>Redux</p>
                    </div>
                    <div className='skill-details col-lg-4 text-center p-4'
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                    >
                        <div><img className='skill-img' src="../Images/ant.png" /></div>
                        <p className='mb-0'>Ant Design</p>
                    </div>
                    <div className='skill-details col-lg-4 text-center p-4'
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <div><img className='skill-img' src="../Images/node.png" /></div>
                        <p className='mb-0'>Node js</p>
                    </div>
                    <div className='skill-details col-lg-4 text-center p-4'
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <div><img className='skill-img' src="../Images/express.png" /></div>
                        <p className='mb-0'>Express js</p>
                    </div>
                    <div className='skill-details col-lg-4 text-center p-4'
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <div><img className='skill-img' src="../Images/mongo.png" /></div>
                        <p className='mb-0'>MongoDb</p>
                    </div>
                    <div className='skill-details col-lg-4 text-center p-4'
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <div><img className='skill-img' src="../Images/native.png" /></div>
                        <p className='mb-0'>React native</p>
                    </div>
                    <div className='skill-details col-lg-4 text-center p-4'
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <div><img className='skill-img' src="../Images/github.png" /></div>
                        <p className='mb-0'>Github</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Skills;