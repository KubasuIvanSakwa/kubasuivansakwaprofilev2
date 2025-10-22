import React from 'react'
import hash from '../assets/icons/hash.svg'
import Logo from '../assets/icons/logo.svg'
import Hum from '../assets/icons/hum.svg'
import { NavLink } from 'react-router'

function Nav() {
    const links = [
        {id: 0, title: 'home', url: '/'},
        {id: 1, title: 'works', url: '/projects'},
        {id: 2, title: 'about-me', url: '/meet-ivan'},
        {id: 3, title: 'contact', url: '/contact'},
    ]

  return (
    <nav className='lg:w-[80%] md:w-[80%] h-[5rem] relative lg:-right-30 md:-right-30 flex lg:justify-around md:justify-around justify-between p-4 items-center'>
        <NavLink className="flex items-center">
            <img src={Logo} alt="" className='w-[0.9rem]'/>
            <p className='fira-code-default text-2xl'>Ivan</p>
        </NavLink>
        <ul className='lg:flex md:flex gap-3 hidden'>
            {links.map((item) => (
                <li>
                    <NavLink 
                        to={item.url} 
                        className={({isActive}) => isActive ? "flex gap-[0.01rem] items-center text-white" : "flex gap-[0.01rem] items-center text-inactive opacity-80"}
                    >
                        <img src={hash} alt="" className='w-[0.9rem]'/>
                        <p className='text-xl fira-code-default'>{item.title}</p>
                    </NavLink>
                </li>
            ))}
        </ul>

        <div className='lg:hidden md:hidden flex'>
            <img src={Hum} alt="" className='w-[2rem]'/>
        </div>
    </nav>
  )
}

export default Nav