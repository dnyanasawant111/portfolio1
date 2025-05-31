"use client"

import Link from 'next/link'
import React from 'react'
import '../Style/Footer.css';
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { FaFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";

const Footer: React.FC = () => {

    const handleDownload = () => {
        const downloadLink = document.createElement('a');
        downloadLink.href = '../resume.pdf';
        downloadLink.download = 'resume.pdf';
        downloadLink.click();
    };

    return (
        <div className='text-white'>
            <footer className='footer-main pt-5'>
                <div className="container">
                    <div className='row justify-content-between'>
                        <div className='col-lg-3 '>
                            <ul>
                                <li>
                                    <Link className="nav-links1" href="/" >
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-links1" href="/pages/about" >
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-links1" href="/pages/project">
                                        Projects
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-links1" href="/pages/skills" >
                                        Skills
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-links1" href="/pages/contact" >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className='col-lg-3'>
                            <ul>
                                <li><BsTelephoneFill /> : +91 7767936454</li>
                                <li><HiOutlineMail /> : dnyanasawant111@gmail.com</li>
                                <li><FaLinkedinIn /> : <a className='linkdin' href="https://www.linkedin.com/in/dnyaneshwar-sawant-5b634b24b/" target="_blank" rel="noopener noreferrer"><FaArrowRightToBracket /></a></li>
                                <li><FaFileAlt /> :<button className='resume-download' onClick={handleDownload}><MdFileDownload /></button></li>
                            </ul>
                        </div>
                    </div>
                    <p className='text-center'>
                        &copy; 2025 Dnyaneshwar Sawant. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
