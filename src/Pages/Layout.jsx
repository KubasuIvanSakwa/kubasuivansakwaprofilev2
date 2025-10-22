import React from 'react'
import Socials from '../components/Socials'
import Nav from '../components/Nav'
import { Outlet } from 'react-router'

function Layout() {
  return (
    <section className='bg-bgdark w-full h-[100vh] text-lighttext'>
        <Socials />
        <Nav />
        <section className=''>
            <Outlet />
        </section>
    </section>
  )
}

export default Layout