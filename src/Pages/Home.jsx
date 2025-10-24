import React from 'react'
import { Link } from 'react-router'
import heroImage from '../assets/images/hero.png'
import logoImage from '../assets/icons/logo.svg'
import Dots from '../assets/icons/Dots.svg'
import Quote from '../assets/icons/quote.svg'
import Next from '../assets/icons/next.svg'
import Hash from '../assets/icons/hash.svg'

function Home() {
  return (
    <section className='relative'>
      {/* Hero */}
      <section className='lg:mt-[5rem] md:mt-[5rem] mt-[1rem] flex lg:flex-row md:flex-row flex-col'>
        <section className='lg:w-[40rem] md:w-[25rem]'>
          <p className='lg:text-3xl md:text-2xl fira-code-bold text-2xl'>
            Kubasu Ivan is a <span className='text-darktext'>Mobile developer</span> and <span className='text-darktext'>Front-end Developer</span>.
          </p>
          <p className='fira-code-light lg:text-lg mt-3'>
            He crafts responsive and visually engaging websites and mobile apps where technology meets creativity.
          </p>

          <Link className='border border-darktext w-[10rem] p-1 flex justify-center items-center mt-5'>
            <p className='fira-code-light text-lg'>Contact Me !!</p>
          </Link>
        </section>
        <section className='lg:-mt-[3rem] md:-mt-[3rem] mt-[1.4rem] w-auto flex flex-col justify-center items-center relative z-20'>
          <img src={heroImage} alt="" className='grayscale w-[70%]'/>
          <img src={logoImage} alt="" className='grayscale absolute -z-10 left-[6rem] bottom-[4rem] w-[30%]'/>
          <img src={Dots} alt="" className='grayscale absolute z-10 right-[3rem] top-[2rem] w-[20%]'/>
          <Link className='border border-darktext w-fit p-1 flex justify-center items-center gap-2'>
            <div className='lg:w-[1.5rem] lg:h-[1.5rem] md:w-[1.5rem]  md:h-[1.5rem] w-[1rem] h-[1rem] bg-darktext'/>
            <p className='fira-code-light lg:text-lg text-sm'><span className='text-darktext'>Currently Working on </span>Mobile apps</p>
          </Link>
        </section>
      </section>

      {/* quote */}
      <section className='w-full flex items-center lg:mt-[5rem] mt-[5rem] relative flex-col '>
        <section className='border border-darktext lg:p-4 md:p-4 pt-3 pb-3 pl-[0.4rem] pr-[0.4rem] relative lg:w-[37.3rem] md:w-[30rem] w-fit mt-[1rem]'>
          <div className='bg-bgdark absolute left-[1.4rem] -top-[1rem]'>
            <img src={Quote} alt=""/>
          </div>

          <div className='lg:text-2xl md:text-lg text-[0.8rem]'>With great design comes great caffeine consumption</div>

          <div className='bg-bgdark absolute right-[1.4rem] -bottom-[1rem] rotate-180'>
           <img src={Quote} alt=""/>
        </div>
        </section>
        <section className='lg:w-[37.3rem] md:w-[30rem] w-[19.6rem] flex justify-end'>
          <section className='lg:w-[8rem] lg:h-[3rem] md:w-[8rem] md:h-[3rem] w-[6rem] h-[3rem] border-b border-l border-r border-darktext relative flex justify-center items-center'>
            <p>- Kubasu</p>
          </section>
        </section>
      <div className='border border-darktext w-[10rem] h-[4rem] absolute -right-[8rem] -top-[4rem]'/>
      </section>

      {/* projects */}
      <section className='relative w-full p-1 mt-[4rem] pr-[3rem] bg-red-500'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center'>
            <div className='flex items-center'>
              <img src={Hash} alt="" className='w-[1rem] mt-[0.3rem]'/>
              <p className='text-3xl fira-code-bold'>projects</p>
            </div>
            <hr className='w-[30rem] mt-[0.4rem] ml-[0.4rem] border-darktext'/>
          </div>
          <div className='flex items-center'>
            <p>View All</p>
            <img src={Next} alt="" className='w-[3rem] mb-[0.4rem]'/>
          </div>
        </div>
      </section>

    </section>

  )
}

export default Home