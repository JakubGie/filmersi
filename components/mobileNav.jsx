"use client"

import { useState } from "react"
import Link from "next/link"
import { FaVideo, FaListOl, FaGuitar, FaRandom, FaTiktok, FaFacebookSquare, FaMobileAlt, FaStar, FaBars, FaTimes } from "react-icons/fa";


const MobileNav = () => {
    const [ navShown, setNavShown ] = useState(false)

    return (
        <div>
            <div className={` z-50  text-3xl ${navShown ? "fixed top-3 right-6" : "sticky"}`} onClick={() => setNavShown(!navShown)}>
                {navShown ? <FaTimes/> : <FaBars/>}
            </div>
            {navShown ? <>
                <div className="fixed top-0 left-0 w-full h-screen z-10 navMobile flex items-center justify-center">
                    <nav>
                        <ul className='flex flex-col text-2xl gap-3 uppercase px-6'>
                            <li>
                                <Link onClick={() => setNavShown(false)} href="/filmy" className="singleMobileLinkNav flex gap-3"><FaVideo/> Filmy</Link>
                            </li>
                            <li>
                                <Link onClick={() => setNavShown(false)} href="/seriale" className="singleMobileLinkNav flex gap-3"><FaListOl/> Seriale</Link>
                            </li>
                            <li>
                                <Link onClick={() => setNavShown(false)} href="/listy-tematyczne/filmy" className="singleMobileLinkNav flex gap-3"><FaGuitar/> Listy tematyczne</Link>
                            </li>
                            <li>
                                <Link onClick={() => setNavShown(false)} href="/losuj/film" className="singleMobileLinkNav flex gap-3"><FaRandom/> Losuj film</Link>
                            </li>
                            <li>
                                <Link onClick={() => setNavShown(false)} href="/aplikacja" className="singleMobileLinkNav flex gap-3"><FaRandom/> Losuj serial</Link>
                            </li>
                            <div className="bg-brand px-4 py-2 rounded-lg  font-bold mt-3">
                                <li>
                                    <Link onClick={() => setNavShown(false)} href="/aplikacja"  className="singleMobileLinkNav flex gap-2"><FaMobileAlt/> Aplikacja</Link>
                                </li>
                            </div>
                            <div className="bg-white text-brand px-4 py-2 rounded-lg  font-bold">
                                <li>
                                    <Link onClick={() => setNavShown(false)} href="/twoja-lista"  className="singleMobileLinkNav flex gap-2"><FaStar/> Twoja lista</Link>
                                </li>
                            </div>
                            <div className="bg-white text-black px-4 py-2 rounded-lg  font-bold">
                                <li>
                                    <a href="/tiktok" target="_blank" className="singleMobileLinkNav flex gap-2"><FaTiktok/> TikTok</a>
                                </li>
                            </div>
                            <div className="bg-white text-black px-4 py-2 rounded-lg  font-bold">
                                <li className="text-blue-500">
                                    <a href="/facebook" target="_blank" className="singleMobileLinkNav flex gap-2"><FaFacebookSquare/> Facebook</a>
                                </li>
                            </div>
                          
                        </ul>
                    </nav>
                </div>
            
            </> : <></>}
        </div>
    )
}

export default MobileNav