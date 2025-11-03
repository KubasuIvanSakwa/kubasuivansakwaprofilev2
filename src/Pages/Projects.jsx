import React, { useState, useEffect, useRef } from "react";
import Live from "../assets/icons/live.svg";
import Slash from "../assets/icons/slash.svg";
import Hash from "../assets/icons/hash.svg";
import useFetch from "../../api/useFetch";
import { fetchProjects } from "../../api/api";
import github from "../assets/icons/Github.svg";




function Projects() {

  const ProjectSkeletonCard = () => (
    <div className="w-full h-fit border border-gray-700 animate-pulse break-inside-avoid mb-4">
      <div className="w-full h-48 bg-gray-700"></div>
      <div className="p-1 border-t border-b border-gray-700">
        <div className="h-4 bg-gray-700 rounded w-3/4"></div>
      </div>
      <div className="p-2">
        <div className="h-6 bg-gray-700 rounded w-1/2 mb-2"></div>
        <div className="h-4 bg-gray-700 rounded w-full mb-4"></div>
        <div className="flex gap-4 mt-[0.5rem] mb-[0.3rem]">
          <div className="h-10 bg-gray-700 rounded w-[6.5rem]"></div>
          <div className="h-10 bg-gray-700 rounded w-[6.5rem]"></div>
        </div>
      </div>
    </div>
  );

  const { data: projects, loading, error } = useFetch(fetchProjects);

  return (
    <section className="mt-10">
      {/* main Header */}
      <div className="flex w-full items-center justify-between gap-4">
        <div className="flex flex-col items-center overflow-hidden">
          <div className="flex flex-shrink-0 gap-[1px] items-center">
            <img src={Slash} alt="" className="w-[1.2rem] mb-[0.5rem]" />
            <p className="text-4xl fira-code-bold">Projects</p>
          </div>
          <p className="fira-code-light">List of my projects</p>
        </div>
      </div>

      {/* header */}
      <div className="flex w-full items-center justify-between gap-4 mt-10 mb-10">
        <div className="flex flex-1 items-center gap-4 overflow-hidden">
          <div className="flex flex-shrink-0 items-center">
            <img src={Hash} alt="" className="w-[1rem] mt-[0.3rem]" />
            <p className="text-3xl fira-code-bold">completed apps</p>
          </div>
        </div>
      </div>

      {/* complete projects */}
      <section className="mt-[2rem] columns-1 md:columns-2 lg:columns-3 gap-4">
        {/* loader */}
        {loading &&
          [...Array(3)].map((_, index) => <ProjectSkeletonCard key={index} />)}

        {/* error */}
        {error && (
          <div className="col-span-full text-center fira-code-bold text-lg text-red-500">
            Error: {error.message}
          </div>
        )}

        {/* projects */}
        {projects &&
          projects.filter((item) => item.Tag === "complete").map((item) => (
            <div
              key={item.Title}
              className="w-full h-fit border border-darktext break-inside-avoid mb-4"
            >
              <img
                src={
                  item.Image ||
                  "https://placehold.co/600x400/000000/FFF?text=No+Image"
                }
                className="w-full"
                alt={item.Title}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/600x400/000000/FFF?text=Failed+to+Load";
                }}
              />
              <div className="flex flex-wrap gap-1 border-t border-b border-darktext p-1">
                {item.Languages.map((lang) => (
                  <p key={lang} className="fira-code-light opacity-75">
                    {lang}
                  </p>
                ))}
              </div>
              <div className="p-2 ">
                <h4 className="fira-code-bold text-xl">{item.Title}</h4>
                <p className="fira-code-light mt-[0.5rem]">
                  {item.Description}
                </p>
                <div className="flex gap-4 mt-[0.5rem] mb-[0.3rem]">
                  {item.Demo && (
                    <a
                      href={item.Demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center overflow-hidden border border-darktext p-1 w-[6.5rem] h-[2.5rem] justify-around hover:bg-darktext/40 cursor-pointer"
                    >
                      <p className="fira-code-default">Live</p>
                      <img src={Live} alt="" className="w-[3rem] mb-[0.2rem]" />
                    </a>
                  )}

                  {item.Github && (
                    <a
                      href={item.Github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center border border-darktext overflow-hidden p-1 w-[6.5rem] h-[2.5rem] justify-around hover:bg-darktext/40 cursor-pointer"
                    >
                      <p className="fira-code-default">github</p>
                      <img src={github} alt="" className="w-[2.5rem]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
      </section>

      {/* header */}
      <div className="flex w-full items-center justify-between gap-4 mt-10 mb-10">
        <div className="flex flex-1 items-center gap-4 overflow-hidden">
          <div className="flex flex-shrink-0 items-center">
            <img src={Hash} alt="" className="w-[1rem] mt-[0.3rem]" />
            <p className="text-3xl fira-code-bold">small-projects</p>
          </div>
        </div>
      </div>

      {/* small projects */}
      <section className="mt-[2rem] columns-1 md:columns-2 lg:columns-3 gap-4">
        {/* loader */}
        {loading &&
          [...Array(3)].map((_, index) => <ProjectSkeletonCard key={index} />)}

        {/* error */}
        {error && (
          <div className="col-span-full text-center fira-code-bold text-lg text-red-500">
            Error: {error.message}
          </div>
        )}

        {/* projects */}
        {projects &&
          projects.filter((item) => item.Tag === "small").map((item) => (
            <div
              key={item.Title}
              className="w-full h-fit border border-darktext break-inside-avoid mb-4"
            >
              <div className="flex flex-wrap gap-1 border-t border-b border-darktext p-1">
                {item.Languages.map((lang) => (
                  <p key={lang} className="fira-code-light opacity-75">
                    {lang}
                  </p>
                ))}
              </div>
              <div className="p-2 ">
                <h4 className="fira-code-bold text-xl">{item.Title}</h4>
                <p className="fira-code-light mt-[0.5rem]">
                  {item.Description}
                </p>
                <div className="flex gap-4 mt-[0.5rem] mb-[0.3rem]">
                  {item.Demo && (
                    <a
                      href={item.Demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center overflow-hidden border border-darktext p-1 w-[6.5rem] h-[2.5rem] justify-around hover:bg-darktext/40 cursor-pointer"
                    >
                      <p className="fira-code-default">Live</p>
                      <img src={Live} alt="" className="w-[3rem] mb-[0.2rem]" />
                    </a>
                  )}

                  {item.Github && (
                    <a
                      href={item.Github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center border border-darktext overflow-hidden p-1 w-[6.5rem] h-[2.5rem] justify-around hover:bg-darktext/40 cursor-pointer"
                    >
                      <p className="fira-code-default">github</p>
                      <img src={github} alt="" className="w-[2.5rem]" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
      </section>
    </section>
  );
}

export default Projects;

