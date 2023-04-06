import React, { useState, useEffect } from "react"

import { Navbar, Hero, Contact, Projects, Skills, About, Footer, PDFViewer } from '../components'

import Head from "next/head"


export default function Home() {


  const [showResume, setShowResume] = useState(false)
  const [dark, setDark] = useState(true)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    let theme = sessionStorage.getItem('theme')
    if (('theme' in sessionStorage) && theme === 'light') {
      document.documentElement.classList.remove('dark')
      setDark(false)
    }
    setLoaded(true)

  }, [])


  useEffect(() => {
    if (dark) {
      sessionStorage.setItem(`theme`, 'dark')
    }
    else {
      sessionStorage.setItem(`theme`, 'light')
    }
    if (sessionStorage.theme === 'dark' || (!('theme' in sessionStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }

  }, [dark])




  const body = () => {
    if (showResume) {
      return <PDFViewer setShowResume={setShowResume} />
    }
    return (
      <div >
        <Head>
          <title>Yair Full-Stack </title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <Navbar setShowResume={setShowResume} theme={dark} setDark={setDark} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    )
  }
  if (!loaded)
    return (
      <></>
    )

  return (
    <div className="w-full h-full text-gray-600 bg-[#ecf0f3] dark:bg-gray-900 dark:text-gray-300">

      {body()}

    </div>
  )
}
