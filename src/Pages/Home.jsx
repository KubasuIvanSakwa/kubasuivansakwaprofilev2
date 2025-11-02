import React from "react";
import { Link } from "react-router";
import heroImage from "../assets/images/sitting.png";
import StandingImage from "../assets/images/standing2.png";
import logoImage from "../assets/icons/logo.svg";
import Dots from "../assets/icons/Dots.svg";
import Quote from "../assets/icons/quote.svg";
import Next from "../assets/icons/next.svg";
import Hash from "../assets/icons/hash.svg";
import Live from "../assets/icons/live.svg";
// import Play from '../assets/icons/play.svg'
import github from "../assets/icons/Github.svg";

function Home() {
  const projects = [
    {
      id: 0,
      title: "ProjectX",
      image: "https://placehold.co/600x400/000000/FFF",
      langs: ["React", "Nodejs", "Tailwindcss"],
      desc: "Discord anti-crash bot",
      liveurl: "",
      github: "",
    },
    {
      id: 2,
      title: "ProjectX",
      image: "https://placehold.co/600x400/000000/FFF",
      langs: ["React", "Nodejs", "Tailwindcss", "express", "Nodejs", "express"],
      desc: "Discord anti-crash bot",
      liveurl: "",
      github: "",
    },
    {
      id: 3,
      title: "ProjectX",
      image: "https://placehold.co/600x400/000000/FFF",
      langs: ["React", "Nodejs", "Tailwindcss"],
      desc: "Discord anti-crash bot",
      liveurl: "",
      github: "",
    },
  ];

  const skillsData = {
    languages: {
      title: "Languages",
      items: ["TypeScript", "Javascript", "Python"],
    },
    databases: {
      title: "Databases",
      items: ["SQLite", "PostgreSQL", "MongoDB"],
    },
    tools: {
      title: "Tools",
      items: ["VSCode", "Neovim", "Linux", "Figma", "Github", "Git"],
    },
    other: { title: "Other", items: ["HTML", "CSS", "PHP", "REST"] },
    frameworks: {
      title: "Frameworks",
      items: [
        "React",
        "Flutter",
        "Node.js",
        "Tailwind",
        "React-Native",
        "Next.js",
        "Laravel",
      ],
    },
  };

  const SkillBox = ({ title, items }) => (
    <div className="border border-darktext w-full h-fit fira-code-default flex flex-col">
      <div className="border-b border-darktext p-2">
        <h3 className="font-bol fira-code-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-x-4 gap-y-1 p-2 fira-code-light">
        {items.map((item) => (
          <p key={item} className="opacity-80">
            {item}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative">
      {/* Hero */}
      <section className="lg:mt-[5rem] md:mt-[5rem] mt-[1rem] flex lg:flex-row md:flex-row flex-col">
        <section className="lg:w-[40rem] md:w-[25rem]">
          <p className="lg:text-3xl md:text-2xl fira-code-bold text-2xl">
            Kubasu Ivan is a{" "}
            <span className="text-darktext">Mobile developer</span> and{" "}
            <span className="text-darktext">Front-end Developer</span>.
          </p>
          <p className="fira-code-light lg:text-lg mt-3">
            He crafts responsive and visually engaging websites and mobile apps
            where technology meets creativity.
          </p>

          <Link className="border border-darktext w-[10rem] p-1 flex justify-center items-center mt-5">
            <p className="fira-code-light text-lg">Contact Me !!</p>
          </Link>
        </section>
        <section className="lg:-mt-[3rem] md:-mt-[3rem] mt-[1.4rem] w-auto flex flex-col justify-center items-center relative z-20">
          <img src={heroImage} alt="" className="grayscale w-[70%]" />
          <img
            src={logoImage}
            alt=""
            className="grayscale absolute -z-10 left-[6rem] bottom-[4rem] w-[30%]"
          />
          <img
            src={Dots}
            alt=""
            className="grayscale absolute z-10 right-[3rem] top-[2rem] w-[20%]"
          />
          <Link className="border border-darktext w-fit p-1 flex justify-center items-center gap-2">
            <div className="lg:w-[1.5rem] lg:h-[1.5rem] md:w-[1.5rem]  md:h-[1.5rem] w-[1rem] h-[1rem] bg-darktext" />
            <p className="fira-code-light lg:text-lg text-sm">
              <span className="text-darktext">Currently Working on </span>Mobile
              apps
            </p>
          </Link>
        </section>
      </section>

      {/* quote */}
      <section className="w-full flex items-center lg:mt-[5rem] mt-[5rem] relative flex-col ">
        <section className="border border-darktext lg:p-4 md:p-4 pt-3 pb-3 pl-[0.4rem] pr-[0.4rem] relative lg:w-[37.3rem] md:w-[30rem] w-fit mt-[1rem]">
          <div className="bg-bgdark absolute left-[1.4rem] -top-[1rem]">
            <img src={Quote} alt="" />
          </div>

          <div className="lg:text-2xl md:text-lg text-[0.8rem]">
            With great design comes great caffeine consumption
          </div>

          <div className="bg-bgdark absolute right-[1.4rem] -bottom-[1rem] rotate-180">
            <img src={Quote} alt="" />
          </div>
        </section>
        <section className="lg:w-[37.3rem] md:w-[30rem] w-[19.6rem] flex justify-end">
          <section className="lg:w-[8rem] lg:h-[3rem] md:w-[8rem] md:h-[3rem] w-[6rem] h-[3rem] border-b border-l border-r border-darktext relative flex justify-center items-center">
            <p>- Kubasu</p>
          </section>
        </section>
        <div className="border border-darktext w-[10rem] h-[4rem] absolute -right-[8rem] -top-[4rem]" />
      </section>

      {/* projects */}
      <section className="relative w-full p-1 mt-[4rem] lg:pr-[3rem] md:pr-[2rem]">
        <img
          src={Dots}
          alt=""
          className="grayscale absolute z-10 -left-[11rem] top-[5rem] w-[5rem]"
        />
        {/* header */}
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-4 overflow-hidden">
            <div className="flex flex-shrink-0 items-center">
              <img src={Hash} alt="" className="w-[1rem] mt-[0.3rem]" />
              <p className="text-3xl fira-code-bold">projects</p>
            </div>

            <hr className="hidden lg:w-[40rem] md:w-[20rem] border-darktext sm:block" />
          </div>

          <div className="flex flex-shrink-0 items-center cursor-pointer">
            <p className="hidden sm:block">View All</p>
            <img
              src={Next}
              alt="View all projects"
              className="w-[3rem] mb-[0.4rem]"
            />
          </div>
        </div>

        {/* content */}
        <section className="mt-[2rem] grid grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-4 justify-items-center">
          {projects.map((item, index) => (
            <div
              key={index}
              className="w-full h-fit border border-darktext"
            >
              <img src={item.image} className="w-full" />
              <div className="flex flex-wrap gap-1 border-t border-b border-darktext p-1">
                {item.langs.map((lang, index) => (
                  <p key={index} className="fira-code-light opacity-75">
                    {lang}
                  </p>
                ))}
              </div>
              <div className="p-2 ">
                <h4 className="fira-code-bold text-xl">{item.title}</h4>
                <p className="fira-code-light mt-[0.5rem]">{item.desc}</p>
                <div className="flex gap-4 mt-[0.5rem] mb-[0.3rem]">
                  <div className="flex items-center overflow-hidden border border-darktext p-1 w-[6.5rem] h-[2.5rem] justify-around hover:bg-darktext/40 cursor-pointer">
                    <p className="fira-code-default">Live</p>
                    <img src={Live} alt="" className="w-[3rem] mb-[0.2rem]" />
                  </div>
                  <div className="flex items-center border border-darktext overflow-hidden p-1 w-[6.5rem] h-[2.5rem] justify-around hover:bg-darktext/40 cursor-pointer">
                    <p className="fira-code-default">github</p>
                    <img src={github} alt="" className="w-[2.5rem]" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      </section>

      {/* skills */}
      <section className="mt-[4rem]">
        {/* Header */}
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex flex-1 items-center gap-4 overflow-hidden">
            <div className="flex flex-shrink-0 items-center">
              <img src={Hash} alt="" className="w-[1rem] mt-[0.3rem]" />
              <p className="text-3xl fira-code-bold">skills</p>
            </div>

            <hr className="hidden lg:w-[20rem] md:w-[20rem] border-darktext sm:block" />
          </div>
        </div>

        <section className="flex flex-col lg:flex-row w-full p-4 lg:p-8 gap-16">
          {/* Left Decorative Column */}
          <div className="hidden md:flex gap-10 w-full md:w-full lg:w-2/5 mt-[3rem]">
            <div className="flex flex-col items-center pt-8">
              <img src={Dots} className="w-[6rem]" alt="Dots pattern" />
              <img
                src={logoImage}
                className="w-[4rem] mt-12"
                alt="Abstract logo"
              />
            </div>
            <div className="w-full relative">
              <div className="w-24 h-24 border border-darktext absolute lg:-right-4 md:right-13 -top-8" />
              <img
                src={Dots}
                className="absolute lg:left-[8rem] right-[13rem] top-[8rem] w-16"
                alt="Dots pattern"
              />
              <div className="w-16 h-16 border border-darktext absolute lg:-right-8 md:right-6 bottom-0" />
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 text-white md:flex-row lg:w-3/5">
            <div className="flex w-full md:w-1/3">
              <SkillBox
                title={skillsData.languages.title}
                items={skillsData.languages.items}
              />
            </div>

            <div className="flex w-full flex-col gap-4 md:w-1/3">
              <SkillBox
                title={skillsData.databases.title}
                items={skillsData.databases.items}
              />
              <SkillBox
                title={skillsData.other.title}
                items={skillsData.other.items}
              />
            </div>

            <div className="flex w-full flex-col gap-4 md:w-1/3">
              <SkillBox
                title={skillsData.tools.title}
                items={skillsData.tools.items}
              />
              <SkillBox
                title={skillsData.frameworks.title}
                items={skillsData.frameworks.items}
              />
            </div>
          </div>
        </section>
      </section>

      {/* About me Intro */}
      <section>
        {/* Header */}
        <div className="flex w-full items-center justify-between gap-4 mt-3">
          <div className="flex flex-1 items-center gap-4 overflow-hidden">
            <div className="flex flex-shrink-0 items-center">
              <img src={Hash} alt="" className="w-[1rem] mt-[0.3rem]" />
              <p className="text-3xl fira-code-bold">about-me</p>
            </div>
            <hr className="hidden lg:w-[20rem] md:w-[20rem] border-darktext sm:block" />
          </div>
        </div>

        <section className="mt-5">
          <div className="flow-root fira-code-light text-lg">
            
            <section className="relative w-full md:w-1/3 lg:-mt-[3rem] md:float-right md:ml-6 mb-4 md:mb-0">
              
              <img 
                src={StandingImage} 
                alt="" 
                className="grayscale w-full md:[shape-outside:var(--standing-image-url)] [shape-margin:_1rem]"
                style={{ '--standing-image-url': `url(${StandingImage})` }}
              />
              <img
                src={Dots}
                alt=""
                className="grayscale absolute z-10 left-[3rem] top-[2rem] w-[20%]"
              />
              <img
                src={Dots}
                alt=""
                className="grayscale absolute z-10 right-[5rem] bottom-[1rem] w-[20%]"
              />
            </section>
            
            <div>
              <h4 className="mb-3 opacity-85">Hello, I’m Kubasu!</h4>
              <p className="mb-3 opacity-85">
                I'm a software developer who builds things on a
                deadline, often for fun. No, really, I willingly sign up for 24-hour
                hackathons  which means I'm great at building entire apps while running on 0% sleep and 100% caffeine.
              </p>
              <p className="opacity-85">
                My weapons of choice are <span className="text-darktext fira-code-bold">React</span>, <span className="text-darktext fira-code-bold">Tailwind CSS</span>, and <span className="text-darktext fira-code-bold">Firebase</span>, and I use
                them to build responsive websites that look good on any screen (even
                that weird one your uncle still has). When I'm not coding for glory
                (or a free t-shirt), I'm brainstorming the next big thing, like a
                dating app for Kenya that actually works. I’m always looking for the
                next challenge to tackle.
              </p>
            </div>
            <div className="flex items-center overflow-hidden border mt-5 border-darktext gap-2 p-1 w-fit h-[2.5rem] justify-around hover:bg-darktext/40 cursor-pointer">
              <p className="fira-code-default">Read More</p>
              <img src={Next} alt="" className="w-[3rem] mb-[0.2rem]" />
            </div>

          </div>
        </section>
      </section>
    </section>
  );
}

export default Home;
