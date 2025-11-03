import React from "react";
import Linkedin from "../assets/icons/Linkedin.svg";
import Email from "../assets/icons/email.svg";
import Hash from "../assets/icons/hash.svg";
import Slash from "../assets/icons/slash.svg";
import Figma from "../assets/icons/Figma.svg";
import Github from "../assets/icons/Github.svg";




function Contact() {

  const socials = [
      { id: 3, icon: Figma, url: "https://github.com/KubasuIvanSakwa", alt: "" },
      { id: 1, icon: Github, url: "https://github.com/KubasuIvanSakwa", alt: "" },
      {
        id: 2,
        icon: Linkedin,
        url: "https://github.com/KubasuIvanSakwa",
        alt: "",
      },
      // {id: 4, icon: CV, url: 'https://github.com/KubasuIvanSakwa', alt: ''},
    ];
  return (
    <section>
      <section className="mt-8">
        {/* Header */}
        <div className="flex w-full items-center justify-between gap-4">
          <div className="flex flex-col items-start overflow-hidden">
            <div className="flex flex-shrink-0 gap-[1px] items-center">
              <img src={Slash} alt="" className="w-[1.2rem]" />
              <p className="text-4xl fira-code-bold ">contact</p>
            </div>
            <p className="fira-code-light mt-2 ml-5">get in touch</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-[3rem] gap-8 md:gap-4">
          <div className="w-full md:w-1/2 lg:w-[43rem] fira-code-default text-lg">
            <p>
              I’m interested in freelance opportunities. However, if you have
              other request or question, don’t hesitate to contact me
            </p>
          </div>

          <div className="border p-2 flex flex-col justify-center gap-4 border-darktext h-fit w-full md:w-fit fira-code-default">
            <p>Message me here</p>
            <div className="flex gap-2 items-center pl-1">
              <img src={Email} />
              <p>kubasuivansakwa23@gmail.com</p>
            </div>

            <div className="flex gap-2 items-center">
              <img src={Linkedin} />
              <p>Kubasu Ivan Sakwa</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Contact;
