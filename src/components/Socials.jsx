import React from "react";
import CV from "../assets/icons/cv.svg";
import Figma from "../assets/icons/Figma.svg";
import Github from "../assets/icons/Github.svg";
import Linkedin from "../assets/icons/Linkedin.svg";

function Socials() {
  const socials = [
    {id: 3, icon: Figma, url: 'https://www.figma.com/@kubasuivan', alt: ''},
    {id: 1, icon: Github, url: 'https://github.com/KubasuIvanSakwa', alt: ''},
    {id: 2, icon: Linkedin, url: 'https://www.linkedin.com/in/kubasuivansakwa/', alt: ''},
    // {id: 4, icon: CV, url: 'https://github.com/KubasuIvanSakwa', alt: ''},
  ]


  return (
    <section className="w-[3rem] h-[20rem] absolute lg:flex md:flex hidden z-[100]">
      <div className="h-full w-full flex flex-col items-center">
        <div className="bg-icondark w-[0.01rem] h-[7rem]" />
        <div className="backdrop-blur-[2px]">
            {socials.map((item) => (
            <a href={item.url} key={item.id} target="_blank" className="flex justify-center items-center">
                <img src={item.icon} alt={item.alt} className="w-[2rem] h-[2rem]" />
            </a>
            ))}
        </div>
      </div>
    </section>
  );
}

export default Socials;
