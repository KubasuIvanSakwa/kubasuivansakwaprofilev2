import React from 'react'
import Socials from '../components/Socials'
import Nav from '../components/Nav'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <section className='bg-bgdark w-full h-[100vh] text-lighttext overflow-x-hidden'>
        <Socials />
        <Nav />
        <section className='w-full min-h-fit lg:pl-[8rem] md:pl-[8rem] pb-[2rem] pl-[1rem] pr-[1rem]'>
            <Outlet />
        </section>
    </section>
  )
}

export default Layout