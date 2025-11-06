import React, { useCallback, useState } from 'react'
import Socials from '../components/Socials'
import Nav from '../components/Nav'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

function Layout() {

  const [dropToggle, setDropToggle] = useState(false)

  const handleToggle = useCallback(() => {
    setDropToggle(prev => !prev)
  },[dropToggle])

  return (
    <section className={`bg-bgdark ${dropToggle && 'overflow-y-hidden'} w-full h-[100vh] text-lighttext overflow-x-hidden`}>
        <Socials />
        <Nav handleToggle={handleToggle} dropToggle={dropToggle}/>
        <section className={`${dropToggle && 'hidden'} w-full min-h-fit lg:pl-[8rem] md:pl-[8rem] pb-[2rem] pl-[1rem] pr-[1rem] fira-code-default`}>
            <Outlet />
        </section>
        <Footer />
    </section>
  )
}

export default Layout