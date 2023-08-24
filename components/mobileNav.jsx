"use client"

import { useState } from "react"
import Link from "next/link"
import { FaVideo, FaListOl, FaGuitar, FaRandom, FaTiktok, FaFacebookSquare, FaMobileAlt, FaStar, FaBars, FaTimes, FaFilm, FaParagraph, FaPlay } from "react-icons/fa";
import LoginWithGoogle from "./elements/loginWithGoogle";
import Image from "next/image";
import UserIcon from "./elements/userIcon";


const MobileNav = () => {
    const [ navShown, setNavShown ] = useState(false)

    return (
        <div>
            <div className={`z-50  text-3xl ${navShown ? "fixed top-5 right-6" : "sticky"}`} onClick={() => setNavShown(!navShown)}>
                {navShown ? <FaTimes/> : <FaBars/>}
            </div>
            <div className={`z-50  text-3xl ${navShown ? "fixed top-5 left-5" : "hidden"}`}>
                <Link onClick={() => setNavShown(false)} href="/" className='flex items-center relative h-6 w-36 lg:h-7 lg:w-52'>
                    <Image src="/logo_light.png" alt="Filmersi"  layout="fill"/>
                </Link>
            </div>

            {navShown ? <>
                <div className="fixed top-0 left-0 pt-[70px] w-full h-screen z-10 navMobile flex flex-col">
                    <div className="px-5 pb-5 flex flex-col gap-3">
                        <LoginWithGoogle device="mobile" version={1}/>
                        <Link onClick={() => setNavShown(false)} href="/twoja-lista"  className="bg-brand text-white  text-xl font-bold rounded flex justify-center py-2 w-full items-center gap-2 transition"><FaStar/> Twoja lista</Link>
                        <UserIcon type="mobile" navShown={navShown} />
                    </div>
                 
                    <nav className="bg-white text-black px-5 py-5">
                        <ul className='flex flex-col text-2xl gap-4 uppercase text-base font-semibold'>
                            
                            <li>
                                <Link onClick={() => setNavShown(false)} href="/filmy" className="singleMobileLinkNav flex gap-3">Filmy< FaVideo/></Link>
                            </li>
                            <li>
                                <Link onClick={() => setNavShown(false)} href="/seriale" className="singleMobileLinkNav flex gap-3">Seriale <FaListOl/></Link>
                            </li>
                            <li>
                                <Link onClick={() => setNavShown(false)} href="/cale-filmy-za-darmo-online" className="singleMobileLinkNav flex gap-3 text-green-600">Za darmo <FaPlay/></Link>
                            </li>
                            <li>
                                <Link onClick={() => setNavShown(false)} href="/listy-tematyczne/filmy" className="singleMobileLinkNav flex gap-3">Listy tematyczne <FaGuitar/></Link>
                            </li>
                            <li>
                                <Link onClick={() => setNavShown(false)} href="/losuj/film" className="singleMobileLinkNav flex gap-3">Losuj film <FaRandom/></Link>
                            </li>
                            <li>
                                <Link onClick={() => setNavShown(false)} href="/losuj/serial" className="singleMobileLinkNav flex gap-3">Losuj serial <FaRandom/></Link>
                            </li>
                            <li>
                                <Link onClick={() => setNavShown(false)} href="/co-obejrzec" className="singleMobileLinkNav flex gap-3">Co obejrzeć? <FaFilm/></Link>
                            </li>
                            <li>
                                <Link onClick={() => setNavShown(false)} href="/blog" className="singleMobileLinkNav flex gap-3">Blog <FaParagraph/></Link>
                            </li>
                            <div className="flex flex-col gap-2">
                                <div className="bg-brand px-4 py-2 rounded-lg  font-bold">
                                    <li>
                                        <Link onClick={() => setNavShown(false)} href="/aplikacja"  className="singleMobileLinkNav text-white flex gap-2">Aplikacja <FaMobileAlt/></Link>
                                    </li>
                                </div>
                                <div className="bg-black text-white px-4 py-2 rounded-lg  font-bold">
                                    <li>
                                        <a href="/tiktok" target="_blank" className="singleMobileLinkNav flex gap-2">TikTok <FaTiktok/></a>
                                    </li>
                                </div>
                                <div className="bg-blue-500 text-white px-4 py-2 rounded-lg  font-bold">
                                    <li>
                                        <a href="/facebook" target="_blank" className="singleMobileLinkNav flex gap-2">Facebook <FaFacebookSquare/></a>
                                    </li>
                                </div>
                            </div>
                           
                          
                        </ul>
                    </nav>
                    <div className="flex bg-white h-full">

                    </div>
                </div>
            
            </> : <></>}
        </div>
    )
}

export default MobileNav