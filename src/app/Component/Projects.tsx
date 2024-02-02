"use client"

import React from 'react'
import '../Style/Project.css';
import Link from 'next/link';

const Projects: React.FC = () => {
    return (
        <div className='p-5  text-white main-project'
            data-aos="fade-up"
            data-aos-duration="1000">
            <div className="container">
                <h1>Projects</h1>
                <p>Check out some of my work right here</p>
                <div className="row  d-flex  gap-4 justify-content-around w-100 pt-5 pb-5 text-center ">
                    <div className="col-lg-3 project-details"
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <Link target='_blank' href="https://s-group.vercel.app/">
                            <div> <img className='project-img' src="../Images/s-group.png" /></div>
                        </Link>
                        <h3>S-group</h3>

                    </div>
                    <div className="col-lg-3 project-details"
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <Link target='_blank' href="https://brainverse.vercel.app/">
                            <div> <img className='project-img' src="../Images/brainverse.png" /></div>
                        </Link>
                        <h3>Brainverse</h3>

                    </div>
                    <div className="col-lg-3 project-details"
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <div> <img className='project-img' src="../Images/admin.png" /></div>
                        <h3>Admin Dashboard</h3>

                    </div>
                    <div className="col-lg-3 project-details"
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <Link target='_blank' href="https://dswetherapp.netlify.app/">
                            <div> <img className='project-img' src="../Images/WetherApp.png" /></div>
                        </Link>
                        <h3>Wether App</h3>

                    </div>
                    <div className="col-lg-3 project-details"
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <Link target='_blank' href="https://dsimagesearch.netlify.app/" >
                            <div> <img className='project-img' src="../Images/imgSearch.png" /></div>
                        </Link>
                        <h3>Image Search</h3>

                    </div>
                    <div className="col-lg-3 project-details"
                        data-aos="zoom-in"
                        data-aos-duration="1000">
                        <Link target='_blank' href="https://dsslack.netlify.app/">
                            <div> <img className='project-img' src="../Images/Slack.png" /></div>
                        </Link>
                        <h3>Slack Clone</h3>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Projects
