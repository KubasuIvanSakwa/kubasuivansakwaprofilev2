import React, { useCallback, useState, useEffect, useRef } from 'react' // Import Hooks
import { Outlet, useLocation } from 'react-router' // Import useLocation
import Socials from '../components/Socials'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

function Layout() {
  const [dropToggle, setDropToggle] = useState(false)
  
  const scrollRef = useRef(null)
  
  const { pathname } = useLocation()

  const handleToggle = useCallback(() => {
    setDropToggle(prev => !prev)
  },[dropToggle])

  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTo(0, 0)
    }
  }, [pathname])

  return (
 
    <section 
        ref={scrollRef}
        className={`bg-bgdark ${dropToggle && 'overflow-y-hidden'} w-full h-[100vh] text-lighttext overflow-x-hidden overflow-y-auto`} 
    >
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