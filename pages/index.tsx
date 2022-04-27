import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PageLayout from '../components/PageLayout'
import styles from '../styles/Home.module.css'
import { AiFillGithub, AiOutlineArrowRight, AiOutlineMail } from 'react-icons/ai'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

const Home: NextPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.remove("fade-in")
          entry.target.classList.add("fade-in-done");
          observer.unobserve(entry.target);
        }
      });
    });
    document.querySelectorAll(".fade-in").forEach(element => {
      console.log("observing")
      observer.observe(element);
    });
  }, []);
  return (
    <PageLayout className="w-full absolute pb-12">
      <div className="fixed flex flex-col left-5 bottom-0">
        <a href="https://github.com/Pengiie" target="_blank" rel="noreferrer"><AiFillGithub className="w-8 h-8 fill-white hover:fill-palette-1 my-1"/></a>
        <a href="mailto:nathan@pengie.dev" target="_blank" rel="noreferrer"><AiOutlineMail className="w-8 h-8 fill-white hover:fill-palette-1 my-1 mb-3"/></a>
        <div className="self-center h-12 w-0.5 bg-white" />
      </div>
      <section className="bg-palette-2 h-screen">
        <div className="mx-72 flex flex-col justify-center w-1/2 h-full">
          <h2 className="text-palette-0 text-2xl transition-all delay-100 duration-100 fade-in">Hello I'm</h2>
          <h1 className="text-gray-300 text-7xl mb-2 font-bold transition-all delay-200 duration-200 fade-in">Nathan Sanchez.</h1>
          <p className="text-gray-400 text-xl mb-5 transition-all delay-300 duration-200 fade-in">I'm a student at ASU studying computer science. I'm interested in graphics development and also fullstack development. Currently I'm looking to expand my knowledge by working on numerous projects and improve.</p>
          <a href="#projects">
            <div className="border-white border-2 rounded-sm text-white text-2xl p-5 text-center hover:bg-white hover:text-black cursor-pointer flex items-center w-fit transition-all delay-500 duration-200 fade-in">
              <p>See Projects</p>
              <AiOutlineArrowRight className="w-10 ml-2"/>
              </div>
          </a>
        </div>
      </section>
      <section id="about" className="bg-palette-2 h-screen pt-12">
        <div className="mx-72 flex flex-col w-1/2 h-full mt-12 transition-all duration-500 delay-300 fade-in">
          <div className="flex items-center w-1/2 mb-12">
            <div className="w-16 bg-white opacity-25 h-0.5 mr-3"/>
            <h1 className="text-gray-300 text-4xl font-thin">About Me</h1>
            <div className="flex-grow bg-white opacity-25 h-0.5 ml-3"/>
          </div>
          <p className="text-gray-400 text-xl mb-5 w-2/3 font-thin">
            Hey my name is Nathan and I'm looking to pursue a software developer position in the future and I'm striving to achieve that. I began interested in coding when I learned about Minecraft plugins. Through that time I learned Java slowly and later became interested in graphics with OpenGL and over the years have tried developing multiple small game engines.
            <br /><br />
            Most recently I've worked on a game engine named <LinkedText to="#projects">kotaro</LinkedText> developed in Kotlin. Right now I'm working on a software as a service webapp that manages fitness studio requirements such as memberships, billing, students, and more. This project is being developed in Typescript and leads me to an interest in full-stack development.
            <br /><br />
            Currently I'm pursuing an education in computer science at ASU. I'm also seeking internship opportunities during the summer to build my skills and prepare for my future.
          </p>
        </div>
      </section>
      <section id="projects" className="bg-palette-2">
        <div className="mx-80 flex flex-col h-full pt-12">
          <div className="flex items-center w-1/2 mb-12 transition-all duration-500 delay-300 fade-in">
            <div className="w-16 bg-white opacity-25 h-0.5 mr-3"/>
            <h1 className="text-gray-300 text-4xl font-thin">Projects</h1>
            <div className="flex-grow bg-white opacity-25 h-0.5 ml-3"/>
          </div>
          <section className="w-full flex transition-all duration-500 delay-300 fade-in">
            <div className = "overflow-visible z-50 mt-10 flex-grow">
              <div className="text-lg text-palette-1 flex-col font-thin">Game Engine<h2 className="text-gray-300 text-4xl font-semibold">Kotaro</h2></div>
              <div className="mt-4 p-4 bg-slate-800 rounded-md w-[120%] z-50 overflow-visible pb-2">
                <p className="text-gray-200 text-lg mb-5">A small game engine written in Kotlin that has basic rendering, asset system, physics, and more. Although the project was never "finished", the engine is still usable for simple games.</p>
              </div>
              <div className="mt-4 max-w-[2.25rem]">
                <a href="https://github.com/Pengiie/kotarOld" target="_blank" rel="noreferrer" className="w-10"><AiFillGithub className="text-white hover:text-palette-1 h-9 w-9" /></a>
              </div>
            </div>
            <img src="kotaro-example.png" className="z-0 w-7/12"/>
          </section>
          <section className="w-full flex flex-row-reverse mt-20 transition-all duration-500 delay-300 fade-in">
            <div className = "overflow-visible z-50 mt-10 flex-grow">
              <div className="text-lg text-palette-1 flex-col font-thin text-right">Programming Language<h2 className="text-gray-300 text-4xl font-semibold">Pengo</h2></div>
              <div className="mt-6 p-4 bg-slate-800 rounded-md w-[120%] z-50 overflow-visible pb-2 right-0 float-right">
                <p className="text-gray-200 text-lg mb-5">A small programming language created in C++ in ~10 days. This project allowed me to learn how programming languages are parsed and compiled/interpreted.</p>
              </div>
              <div className="mt-4 max-w-[2.25rem] float-right">
                <a href="https://github.com/Pengiie/Pengo" target="_blank" rel="noreferrer" className="w-10"><AiFillGithub className="text-white hover:text-palette-1 h-9 w-9" /></a>
              </div>
            </div>
            <img src="pengo-example.png" className="w-7/12 z-0"/>
          </section>
        </div>
      </section>
    </PageLayout>
  )
}

interface LinkedTextProps {
  to: string,
  className?: string,
  children?: React.ReactNode;
}

const LinkedText: React.FC<LinkedTextProps> = ({ to, className, children }: LinkedTextProps) => {
  return (
    <a className={"inline-block relative after:absolute after:left-0 after:bottom-0 after:bg-palette-1 after:h-0.5 after:w-full after:scale-0 after:transition-transform after:hover:scale-100 text-palette-1 "+className} href={to}>{children}</a>
  );
}

export default Home
