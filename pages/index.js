import React, { useState } from "react"
import dynamic from "next/dynamic";

import { Navbar, Hero, Contact, Projects, Skills, About, Footer, PDFViewer } from '../components'



export default function Home() {


  const [showResume, setShowResume] = useState(false)



  return (
    <div className="w-full h-full">
      <header>
        <title>Yair | Full-Stack Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </header>
      {showResume ? <PDFViewer setShowResume={setShowResume}/> :
        <>
          <Navbar setShowResume={setShowResume} />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </>}

    </div>
  )
}
