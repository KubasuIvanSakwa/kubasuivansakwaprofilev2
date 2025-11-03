import React from "react";
import Slash from "../assets/icons/slash.svg";
import Hash from "../assets/icons/hash.svg";
import StandingImage from "../assets/images/standing2.png";
import Dots from "../assets/icons/Dots.svg";
import logoImage from "../assets/icons/logo.svg";

function About() {
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

  const hobbieList = [
    { id: 0, text: "I like coding" },
    { id: 1, text: "I like playing basketball" },
    { id: 2, text: "I like watching anime" },
    { id: 3, text: "I like gaming" },
    { id: 4, text: "I like reading books" },
    { id: 5, text: "I like listening to music" },
    { id: 6, text: "I like taking walks" },
    { id: 7, text: "My favorite food is chapati and beef" },
  ];

  return (
    <section className="mt-10">
      {/* main Header */}
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex flex-col items-start overflow-hidden">
          <div className="flex flex-shrink-0 gap-[1px] items-center">
            <img src={Slash} alt="" className="w-[1.2rem]" />
            <p className="text-4xl fira-code-bold ">about-me</p>
          </div>
          <p className="fira-code-light mt-2 ml-5">who am I?</p>
        </div>
      </div>

      {/* About me */}
      <section className="mt-10">
        <section className="mt-5">
          <div className="flow-root fira-code-light text-lg">
            <section className="relative w-full lg:w-1/3 lg:-mt-[3rem] lg:float-right lg:ml-6 mb-4 md:mb-0">
              <img
                src={StandingImage}
                alt=""
                className="grayscale w-full lg:[shape-outside:var(--standing-image-url)] [shape-margin:_1rem]"
                style={{ "--standing-image-url": `url(${StandingImage})` }}
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
                I'm a software developer who builds things on a deadline, often
                for fun. No, really, I willingly sign up for 24-hour hackathons
                which means I'm great at building entire apps while running on
                0% sleep and 100% caffeine.
              </p>
              <p className="opacity-85">
                My weapons of choice are{" "}
                <span className="text-darktext fira-code-bold">React</span>,{" "}
                <span className="text-darktext fira-code-bold">
                  Tailwind CSS
                </span>
                , and{" "}
                <span className="text-darktext fira-code-bold">Firebase</span>,
                and I use them to build responsive websites that look good on
                any screen (even that weird one your uncle still has). When I'm
                not coding for glory (or a free t-shirt), I'm brainstorming the
                next big thing, like a dating app for Kenya that actually works.
                I’m always looking for the next challenge to tackle.
              </p>
            </div>
          </div>
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

            <hr className="hidden sm:block flex-1 border-darktext" />
          </div>
        </div>

        <section className="flex flex-col lg:flex-row w-full p-4 lg:p-8 gap-16">
          {/* Left Decorative Column */}
          <div className="hidden md:flex gap-10 w-full md:w-full lg:w-2/5 mt-[3rem]">
            <div className="flex flex-col items-center pt-8">
              <img src={Dots} className="w-[6rem]" alt="Dots pattern" />
              <img
                src={logoImage}
                className="w-[4em] mt-12"
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

      {/* header */}
      <div className="flex w-full items-center justify-between gap-4 mt-10 mb-10">
        <div className="flex flex-1 items-center gap-4 overflow-hidden">
          <div className="flex flex-shrink-0 items-center">
            <img src={Hash} alt="" className="w-[1rem] mt-[0.3rem]" />
            <p className="text-3xl fira-code-bold">my-fun-facts</p>
          </div>
        </div>
      </div>

      {/* hobbies */}
      <div className="flex flex-col lg:flex-row mb-[4rem]">
        <div className="flex gap-2 flex-wrap w-full lg:w-3/5 p-2">
          {hobbieList.map((hobbie) => (
            <div key={hobbie.id} className="border w-fit p-2 border-darktext">
              <p className="text-lg fira-code-default">{hobbie.text}</p>
            </div>
          ))}
        </div>

        <div className="hidden relative lg:flex gap-10 w-full lg:w-2/5 pl-[6rem]">
          <div className="flex flex-col items-center pt-2">
            <img src={Dots} className="w-[6rem] mb-[5rem]" alt="Dots pattern" />
            <img
              src={logoImage}
              className="w-[4rem] mt-12 absolute top-15 left-[10rem]"
              alt="Abstract logo"
            />
          </div>
          <div className="w-full relative">
            <img
              src={Dots}
              className="absolute right-[1rem] top-[8rem] w-20"
              alt="Dots pattern"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
