import React from "react";
import { NavLink } from "react-router";
import Figma from "../assets/icons/Figma.svg";
import Github from "../assets/icons/Github.svg";
import Linkedin from "../assets/icons/Linkedin.svg";
import Logo from "../assets/icons/logo.svg";

function Footer() {
  const socials = [
      {id: 3, icon: Figma, url: 'https://www.figma.com/@kubasuivan', alt: ''},
      {id: 1, icon: Github, url: 'https://github.com/KubasuIvanSakwa', alt: ''},
      {id: 2, icon: Linkedin, url: 'https://www.linkedin.com/in/kubasuivansakwa/', alt: ''},
      // {id: 4, icon: CV, url: 'https://github.com/KubasuIvanSakwa', alt: ''},
    ]
  

  return (
    <section className="lg:pl-[8rem] md:pl-[8rem] pb-[2rem] pl-[1rem] pr-[1rem] border-t-[0.13rem] border-darktext pt-[2rem]">
      <section className="flex justify-between lg:pr-[4rem] md:pr-[4rem] lg:flex-row md:flex-row flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <NavLink className="flex items-center ">
              <img src={Logo} alt="" className="w-[0.9rem]" />
              <p className="fira-code-default text-2xl">Ivan</p>
            </NavLink>
            <div className="fira-code-light opacity-75">
              kubasuivansakwa23@gmail.com
            </div>
          </div>
          <p className="fira-code-light">
            Mobile developer and Front-end Developer
          </p>
        </div>

        <div className="flex flex-col">
          <p className="text-xl fira-code-bold">Socials</p>
          <div className="flex gap-2">
            {socials.map((item) => (
              <a
                href={item.url}
                key={item.id}
                className="flex justify-center items-center"
                target="_blank"
              >
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="w-[2.3rem] h-[2.3rem]"
                />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section className="flex lg:justify-center md:justify-center items-center lg:mt-[3rem] md:mt-[3rem] mt-[1.4rem] fira-code-light">
        <p>&copy; Copyright 2025. Made By Kubasu Ivan Sakwa</p>
      </section>
    </section>
  );
}

export default Footer;
