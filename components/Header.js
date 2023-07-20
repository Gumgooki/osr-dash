"use client"

import React, {useState} from 'react'
import Image from 'next/image'

export default function Header(){
    const [isNavOpen, setIsNavOpen] = useState(false)

    return (
        <div className="flex flex-row sm:px-5 lg:px-40 justify-between bg-wedgewood sticky top-0 h-20 items-center">
            <div>
                <Image 
                    src="/dolemnwood-logo.png"
                    width={180}
                    height={37}
                    alt="Dolemnwood Logo"
                />
            </div>
            <nav className="flex items-end h-full">
                <section className="mobile-menu flex lg-hidden sm:flex md:hidden pb-7">
                    <div className="hamburger-menu space-y-2" onClick={() => {
                        setIsNavOpen((prev) => !prev)
                    }}>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                    </div>
                    
                    <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                        <div className="cross-icon absolute top-0 right-0 px-8 py-9" onClick={() => {setIsNavOpen(false)}}>
                            <svg
                                className="h-8 w-8 text-gray-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="18" y1="6" x2="6" y2="18" />
                                <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                        </div>
                        <ul className="menu-link-mobile-open flex flex-col items-center justify-between min-h-[250px] z-30">
                            <div className="border-b-2 border-transparent hover:cursor-pointer hover:border-teal-200 pb-6"><li>Home</li></div>
                            <div className="border-b-2 border-transparent hover:cursor-pointer hover:border-teal-200 pb-6"><li>Characters</li></div>
                            <div className="border-b-2 border-transparent hover:cursor-pointer hover:border-teal-200 pb-6"><li>Campaign</li></div>
                            <div className="border-b-2 border-transparent hover:cursor-pointer hover:border-teal-200 pb-6"><li>Generators</li></div>
                            <div className="border-b-2 border-transparent hover:cursor-pointer hover:border-teal-200 pb-6"><li>Account</li></div>
                        </ul>
                    </div>
                </section>



                <ul className="desktop-menu flex flex-row space-x-6 text-white sm:hidden md:flex">
                    <div className="border-b-2 border-transparent hover:cursor-pointer hover:border-teal-200 pb-6"><li>Home</li></div>
                    <div className="border-b-2 border-transparent hover:cursor-pointer hover:border-teal-200 pb-6"><li>Characters</li></div>
                    <div className="border-b-2 border-transparent hover:cursor-pointer hover:border-teal-200 pb-6"><li>Campaign</li></div>
                    <div className="border-b-2 border-transparent hover:cursor-pointer hover:border-teal-200 pb-6"><li>Generators</li></div>
                    <div className="border-b-2 border-transparent hover:cursor-pointer hover:border-teal-200 pb-6"><li>Account</li></div>
                </ul>
            </nav>

            <style>
                {`
            .hideMenuNav {
                display: none;
            }
            .showMenuNav {
                display: block;
                position: absolute;
                width: 100%;
                height: 100vh;
                top: 0;
                left: 0;
                background: white;
                z-index: 10;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
            }
                `}
            </style>
        </div>
    )
}