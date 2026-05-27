"use client";

import  Magnetic from "../ui/Magnetic";

export default function Header() {
    return (
        <header className="fixed top-0 left-0 w-full z-30 flex justify-between items-center px-8 md:px-16 py-8">
            <div className="font-display text-md text-(--background) font-light tracking-widest  select-none bg-(--accent-peach)">
                LET'S CONNECT
            </div>

            <nav className="hidden md:flex gap-12 items-center text-xs tracking-[0.2em]">

                <Magnetic>
                    <a href="#skills" className="hover:text-(--accent-blue) transition-colors"> SKILLS</a>
                </Magnetic>

                <Magnetic>
                    <a href="#work" className="hover:text-(--accent-blue) transition-colors"> CASE STUDIES</a>
                </Magnetic>

                <Magnetic>
                    <a href="#about" className="hover:text-(--accent-blue) transition-colors"> ABOUT</a>
                </Magnetic>
                
            </nav>

            <Magnetic>
                <button className="text-(--foreground) hover:text-(--background)  text-sm font-bold uppercase tracking-wider cursor-pointer transition-colors duration-300 ">
                    
                </button>
            </Magnetic>

        </header>
    )
}