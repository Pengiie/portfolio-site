import type { NextPage } from 'next'
import Image from 'next/image'
import PageLayout from '../components/PageLayout'
import { AiFillGithub, AiOutlineArrowRight, AiOutlineMail } from 'react-icons/ai'
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
      observer.observe(element);
    });
  }, []);
  return (
    <PageLayout className="w-full pb-12">
      <div className="fixed flex flex-col lg:left-5 left-2 bottom-0 z-50">
        <a href="https://github.com/Pengiie" target="_blank" rel="noreferrer"><AiFillGithub className="w-8 h-8 fill-white hover:fill-palette-1 my-1"/></a>
        <a href="mailto:nathan@pengie.dev" target="_blank" rel="noreferrer"><AiOutlineMail className="w-8 h-8 fill-white hover:fill-palette-1 my-1 mb-3"/></a>
        <div className="self-center h-12 w-0.5 bg-white" />
      </div>
      <section className="bg-palette-2 h-screen w-full">
        <div className="lg:mx-72 md:mx-36 mx-14 flex flex-col justify-center lg:items-start items-center h-full">
          <h2 className="text-palette-0 text-2xl transition-all delay-100 duration-100 fade-in">{"Hello I'm"}</h2>
          <h1 className="text-gray-300 text-7xl mb-2 font-bold transition-all delay-200 duration-200 fade-in text-center lg:text-left">Nathan Sanchez.</h1>
          <p className="text-gray-400 text-xl mb-5 transition-all delay-300 duration-200 fade-in lg:text-left text-center">{"I'm a student at ASU studying computer science. I'm interested in graphics development and also fullstack development. Currently I'm looking to expand my knowledge by working on numerous projects and improve."}</p>
          <a href="#projects">
            <div className="border-white border-2 rounded-sm text-white text-2xl p-5 text-center hover:bg-white hover:text-black cursor-pointer flex items-center w-fit transition-fade fade-in transition-opacity">
              <p>See Projects</p>
              <AiOutlineArrowRight className="w-10 ml-2"/>
            </div>
          </a>
        </div>
      </section>
      <section id="about" className="bg-palette-2 pt-12 w-full">
        <div className="lg:mx-72 md:mx-36 mx-12 flex flex-col h-full mt-12 transition-all duration-500 delay-300 fade-in">
          <div className="flex items-center lg:w-1/2 w-full mb-12">
            <div className="lg:w-16 flex-grow bg-white opacity-25 h-0.5 mr-3"/>
            <h1 className="text-gray-300 text-4xl font-thin">About Me</h1>
            <div className="flex-grow bg-white opacity-25 h-0.5 ml-3"/>
          </div>
          <p className="text-gray-400 text-xl mb-5 lg:w-2/3 md:w-full font-thin ld:text-left text-justify">
            {"Hey my name is Nathan and I'm looking to pursue a software developer position in the future and I'm striving to achieve that. I began interested in coding when I learned about Minecraft plugins. Through that time I learned Java slowly and later became interested in graphics with OpenGL and over the years have tried developing multiple small game engines."}
            <br /><br />
            {"Most recently I've worked on a game engine named "}<LinkedText to="#projects">kotaro</LinkedText>{" developed in Kotlin. I've always been passionate about creating full experiences on my own such as the previously mentioned game engine. All key systems in there were written with minimal use of libraries and utilized different sub projects together such as the editor and engine. I also enjoy working on full stack applications, that even though don't get fully finished and polished, provide me a learning experience of managing a project with multiple components that work together while minimizing issues."}
            <br /><br />
            {"Currently I'm pursuing an education in computer science at ASU with a graduation year of 2026. I'm also seeking internship opportunities during the summer to build my skills and prepare for my future."}
          </p>
        </div>
      </section>
      <section id="projects" className="bg-palette-2">
        <div className="lg:mx-72 md:mx-36 mx-12 flex flex-col h-full pt-12">
          <div className="flex items-center lg:w-1/2 w-full mb-12 transition-all duration-500 delay-300 fade-in">
            <div className="lg:w-16 flex-grow bg-white opacity-25 h-0.5 mr-3"/>
            <h1 className="text-gray-300 text-4xl font-thin">Projects</h1>
            <div className="flex-grow bg-white opacity-25 h-0.5 ml-3"/>
          </div>
          <section className="w-full flex transition-all duration-500 delay-300 fade-in md:flex-row flex-col">
            <div className = "overflow-visible z-50 mt-10 md:w-5/12 w-full flex flex-col md:block">
              <div className="text-lg text-palette-1 flex-col font-thin">Game Engine<h2 className="text-gray-300 text-4xl font-semibold">Kotaro</h2></div>
              <div className="flex-grow">
                <div className="mt-4 p-4 bg-slate-800 rounded-md lg:w-[120%] md:w-[140%] w-full z-50 overflow-visible pb-2">
                  <p className="text-gray-200 text-lg mb-5">{'A small game engine written in Kotlin that has basic rendering, asset system, physics, and more. Although the project was never "finished", the engine is still usable for simple games.'}</p>
                </div>
                <div className="mt-4 max-w-[2.25rem]">
                  <a href="https://github.com/Pengiie/kotarOld" target="_blank" rel="noreferrer" className="w-10"><AiFillGithub className="text-white hover:text-palette-1 h-9 w-9" /></a>
                </div>
              </div>
            </div>
            <div className="xl:relative xl:right-0 xl:min-h-full xl:w-7/12 md:absolute lg:right-[-7rem] md:right-[-3rem] min-h-[125%] md:min-h-[115%] lg:mt-5 lg:w-9/12 md:w-8/12 md:mt-16 mt-5 relative w-full">
              <Image src="/kotaro-example.png" className="z-0" alt="" layout="responsive" height="56.25%" width="100%"/>
            </div>
          </section>
          <section className="w-full flex md:flex-row-reverse flex-col mt-20 transition-all duration-500 delay-300 fade-in">
            <div className = "overflow-visible z-50 mt-10 md:w-5/12 w-full flex flex-col md:block">
              <div className="text-lg text-palette-1 flex-col font-thin md:text-right text-left">Programming Language<h2 className="text-gray-300 text-4xl font-semibold">Pengo</h2></div>
              <div className="flex-grow">
                <div className="mt-4 p-4 bg-slate-800 rounded-md lg:w-[120%] md:w-[140%] w-full z-50 overflow-visible pb-2 md:float-right">
                  <p className="text-gray-200 text-lg mb-5">A small programming language created in C++ in ~10 days. This project allowed me to learn how programming languages are parsed and compiled/interpreted.</p>
                </div>
                <div className="mt-4 max-w-[2.25rem] md:float-right">
                  <a href="https://github.com/Pengiie/Pengo" target="_blank" rel="noreferrer" className="w-10"><AiFillGithub className="text-white hover:text-palette-1 h-9 w-9" /></a>
                </div>
              </div>
            </div>
            <div className="xl:relative xl:left-0 xl:min-h-full xl:w-7/12 md:absolute lg:left-[-7rem] md:left-[-3rem] min-h-[125%] md:min-h-[115%] lg:mt-5 lg:w-9/12 md:w-8/12 md:mt-16 mt-5 relative w-full">
              <Image src="/pengo-example.png" className="z-0" alt="" layout="responsive" width="100%" height="56.25%"/>
            </div>
          </section>
          <section className="w-full flex md:flex-row-reverse flex-col mt-20 transition-all duration-500 delay-300 fade-in">
            <div className = "overflow-visible z-50 mt-10 md:w-5/12 w-full flex flex-col md:block">
              <div className="text-lg text-palette-1 flex-col font-thin md:text-right text-left">Spotify Client<h2 className="text-gray-300 text-4xl font-semibold">SpotTag</h2></div>
              <div className="flex-grow">
                <div className="mt-4 p-4 bg-slate-800 rounded-md lg:w-[120%] md:w-[140%] w-full z-50 overflow-visible pb-2 md:float-right">
                  <p className="text-gray-200 text-lg mb-5">A spotify client built for the purpose of collaborative listening sessions and also adding extra tags to songs to enable creating playlists based off of mood, color, or emojis. This project is currently under development but is being worked on open source.</p>
                </div>
                <div className="mt-4 max-w-[2.25rem] md:float-right">
                  <a href="https://github.com/Pengiie/spottag" target="_blank" rel="noreferrer" className="w-10"><AiFillGithub className="text-white hover:text-palette-1 h-9 w-9" /></a>
                </div>
              </div>
            </div>
            <div className="xl:relative xl:left-0 xl:min-h-full xl:w-7/12 md:absolute lg:left-[-7rem] md:left-[-3rem] min-h-[125%] md:min-h-[115%] lg:mt-5 lg:w-9/12 md:w-8/12 md:mt-16 mt-5 relative w-full">
              <Image src="/spottag-example.png" className="z-0" alt="" layout="responsive" width="100%" height="56.25%"/>
            </div>
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
