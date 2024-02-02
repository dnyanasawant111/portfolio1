
"use client"

import Home from './Component/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function page() {
  useEffect(() => {
    AOS.init({
    });
  }, []);
  
  return (
    <main >
      <div>
        <Home/>
      </div>
    </main>
  )
}
