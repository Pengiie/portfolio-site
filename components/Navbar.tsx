import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

interface NavButtonProps {
    title: string,
    to: string,
}

const NavButton: React.FC<NavButtonProps> = (props: NavButtonProps) => {
    return (
        <a href={props.to}>
            <div className="text-xl cursor-pointer mx-5 inline-block relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:hover:scale-x-100 after:scale-x-0 after:transition-transform after:content-[''] after:bg-white">
                {props.title}
            </div>
        </a>
    );
}

const Navbar = () => {
    useEffect(() => {
        let prevScroll = window.scrollY;
        document.onscroll = () => {
            const navbar = document.querySelector("nav");
            if(window.scrollY > 100) {
                navbar?.classList.add("shadow-xl");
                if(window.scrollY < prevScroll) {
                    navbar?.classList.remove("-top-52");
                    navbar?.classList.add("top-0");
                } else {
                    navbar?.classList.add("-top-52");
                    navbar?.classList.remove("top-0");
                }
            } else {
                navbar?.classList.remove("shadow-xl", "-top-52");
            }
            prevScroll = window.scrollY;
        }
    }, []);
    return (
    <nav className="w-screen flex md:pl-12 pl-7 lg:pr-48 pr-12 py-6 bg-palette-2 text-white items-center fixed top-0 transition-[top shadow] duration-300 z-50">
        <h1 className="text-3xl flex-grow font-proxima-nova-condensed">NS</h1>
        <NavButton title="Projects" to="#projects"/>
        <NavButton title="About" to="#about"/>
    </nav>
    );
};

export default Navbar;