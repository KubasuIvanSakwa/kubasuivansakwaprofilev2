import React from 'react'
import hash from '../assets/icons/hash.svg'
import Logo from '../assets/icons/logo.svg'
import Hum from '../assets/icons/hum.svg'
import Close from '../assets/icons/close.svg'
import CV from "../assets/icons/cv.svg";
import Figma from "../assets/icons/Figma.svg";
import Github from "../assets/icons/Github.svg";
import Linkedin from "../assets/icons/Linkedin.svg";
import { NavLink } from 'react-router'

function Nav({ handleToggle, dropToggle }) {

     const socials = [
        {id: 3, icon: Figma, url: 'https://github.com/KubasuIvanSakwa', alt: ''},
        {id: 1, icon: Github, url: 'https://github.com/KubasuIvanSakwa', alt: ''},
        {id: 2, icon: Linkedin, url: 'https://github.com/KubasuIvanSakwa', alt: ''},
        // {id: 4, icon: CV, url: 'https://github.com/KubasuIvanSakwa', alt: ''},
      ]
    const links = [
        {id: 0, title: 'home', url: '/'},
        {id: 1, title: 'works', url: '/projects'},
        {id: 2, title: 'about-me', url: '/meet-ivan'},
        {id: 2, title: 'blog', url: '/blog'},
        {id: 3, title: 'contact', url: '/contact'},
    ]


  return (
    <nav className='lg:w-[80%] md:w-[80%] h-[5rem] relative lg:-right-30 md:-right-30 flex lg:justify-between md:justify-between justify-between p-4 items-center'>
        <NavLink className="flex items-center ">
            <img src={Logo} alt="" className='w-[0.9rem]'/>
            <p className='fira-code-default text-2xl'>Ivan</p>
        </NavLink>
        <ul className='lg:flex md:flex gap-3 hidden'>
            {links.map((item, index) => (
                <li key={index}>
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

        <div
            className='lg:hidden md:hidden flex'
            onClick={() => handleToggle()}
        >
            {!dropToggle && <img src={Hum} alt="" className='w-[2rem]'/>}
            {dropToggle && <img src={Close} alt="" className='w-[2rem]'/>}
        </div>
        {dropToggle &&
         <div className='lg:hidden md:hidden flex flex-col absolute h-[88.9vh] z-[100] w-full top-[4.8rem] left-0 p-2 bg-bgdark'>
            <ul className='flex flex-col gap-[3rem] pt-[3rem]'>
            {links.map((item, index) => (
                <li key={index}>
                    <NavLink 
                        to={item.url} 
                        onClick={() => handleToggle()}
                        className={({isActive}) => isActive ? "flex gap-[0.01rem] items-center text-white" : "flex gap-[0.01rem] items-center text-inactive opacity-80"}
                    >
                        <img src={hash} alt="" className='w-[1.5rem]'/>
                        <p className='text-4xl fira-code-default'>{item.title}</p>
                    </NavLink>
                </li>
            ))}
            </ul>
            <div className='flex mt-[3.5rem] w-full items-center justify-center'>   
                {socials.map((item) => (
                    <a href={item.url} key={item.id} className="flex justify-center items-center">
                        <img src={item.icon} alt={item.alt} className="w-[4rem] h-[4rem]" />
                    </a>
                ))}
            </div>
        </div>}
    </nav>
  )
}

export default Nav