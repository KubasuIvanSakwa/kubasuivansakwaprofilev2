import React from 'react'
import { Link } from 'react-router'
import heroImage from '../assets/images/hero.png'
import logoImage from '../assets/icons/logo.svg'
import Dots from '../assets/icons/Dots.svg'
import Quote from '../assets/icons/quote.svg'

function Home() {
  return (
    <section className='relative'>
      <section className='mt-[5rem] flex'>
        <section className='w-[40rem]'>
          <p className='text-3xl fira-code-bold'>
            Kubasu Ivan is a <span className='text-darktext'>Mobile developer</span> and <span className='text-darktext'>Front-end Developer</span>.
          </p>
          <p className='fira-code-light text-lg mt-3'>
            He crafts responsive and visually engaging websites and mobile apps where technology meets creativity.
          </p>

          <Link className='border border-darktext w-[10rem] p-1 flex justify-center items-center mt-5'>
            <p className='fira-code-light text-lg'>Contact Me !!</p>
          </Link>
        </section>
        <section className='-mt-[3rem] w-auto flex flex-col justify-center items-center relative z-20'>
          <img src={heroImage} alt="" className='grayscale w-[70%]'/>
          <img src={logoImage} alt="" className='grayscale absolute -z-10 left-[6rem] bottom-[4rem] w-[30%]'/>
          <img src={Dots} alt="" className='grayscale absolute z-10 right-[3rem] top-[2rem] w-[20%]'/>
          <Link className='border border-darktext w-fit p-1 flex justify-center items-center gap-2'>
            <div className='w-[1.5rem] h-[1.5rem] bg-darktext'/>
            <p className='fira-code-light text-lg'><span className='text-darktext'>Currently Working on </span>Mobile apps</p>
          </Link>
        </section>
      </section>

      <section className='w-full flex justify-center items-center mt-[5rem] relative flex-col'>
        <section className='border border-darktext p-4 relative w-[37.3rem]'>
          <div className='bg-bgdark absolute left-[1.4rem] -top-[1rem]'>
            <img src={Quote} alt=""/>
          </div>

          <div className='text-2xl'>With great design comes great caffeine consumption</div>

          <div className='bg-bgdark absolute right-[1.4rem] -bottom-[1rem] rotate-180'>
           <img src={Quote} alt=""/>
        </div>
        </section>
        <section className='w-[37.3rem] flex justify-end'>
          <section className='w-[8rem] h-[3rem] border-b border-l border-r border-darktext relative flex justify-center items-center'>
            <p>- Kubasu</p>
          </section>
        </section>
      <div className='border border-darktext w-[10rem] h-[4rem] absolute -right-[7rem]'/>
      </section>

    </section>

  )
}

export default Home