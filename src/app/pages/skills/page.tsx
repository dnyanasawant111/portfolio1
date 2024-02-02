import Skills from '@/app/Component/Skills'
import React from 'react'
import '../../Style/Skills.css'
import Header from '@/app/Component/Header'
import Footer from '@/app/Component/Footer'

const page = () => {
  return (
    <div className='pt-5 '>
      <div className="pt-4">
        <Skills />
        <Footer />
      </div>

    </div>
  )
}

export default page
