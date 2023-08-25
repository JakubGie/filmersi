import Image from 'next/image'
import { FaMobileAlt, FaStar } from "react-icons/fa"
import Link from 'next/link'
import Input from './elements/input'
import { FaFacebook, FaTiktok, FaHeart } from "react-icons/fa"
import MobileNav from './mobileNav'
import LoginWithGoogle from './elements/loginWithGoogle'
import UserIcon from './elements/userIcon'


const Header = () => {
   

    return (
        <header>
            <div className="container mx-auto px-5">
                <div className='py-5 lg:py-7'>
                    <div className='flex gap-4 justify-between'>
                        <Link href="/" className='flex items-center relative h-6 w-36 lg:h-7 lg:w-52'>
                            <Image src="/logo_light.png" alt="Filmersi"  layout="fill"/>
                        </Link>
                        <div className='hidden lg:flex w-full gap-4'>
                            <Input/>
                            <LoginWithGoogle device="pc" version={1} />
                            <Link href="/aplikacja" className='justify-center flex items-center bg-brand font-bold gap-2 px-5 rounded-full uppercase hover:bg-white hover:text-brand transition'>
                                <FaMobileAlt/> Aplikacja
                            </Link>
                            <Link href="/twoja-lista" className='justify-center flex items-center bg-white text-brand font-bold gap-2 px-5 rounded-full uppercase hover:bg-brand hover:text-white transition'>
                                <FaStar/><span className='whitespace-nowrap'>Twoja lista</span>
                            </Link>
                            <UserIcon type="pc"/>
                        </div>
                        <div className='lg:hidden'>
                            <MobileNav/>
                        </div>
                    
                    </div>
                    <div className='lg:hidden mt-4'>
                        <Input tall={true} />
                    </div>
                    <div className="mt-2 pt-2 justify-between hidden lg:flex">
                        <nav className='flex w-full'>
                            <ul className='flex justify-between xl:gap-10 xl:justify-normal w-full font-semibold items-end'>
                                <li>
                                    <Link href="/filmy" className='single-link'>Filmy</Link>
                                </li>
                                <li>
                                    <Link href="/seriale" className='single-link'>Seriale</Link>
                                </li>
                                <li>
                                    <Link href="/cale-filmy-za-darmo-online" className='single-link text-green-600 hover:text-white'>Za darmo</Link>
                                </li>
                                <li>
                                    <Link href="/co-obejrzec-z-dziewczyna-chlopakiem" className='single-link text-red-600 hover:text-white flex gap-1 items-center'><FaHeart/> Dobierz</Link>
                                </li>
                                <li>
                                    <Link href="/listy-tematyczne/filmy" className='single-link'>Listy temat.</Link>
                                </li>
                                <li>
                                    <Link href="/losuj/film" className='single-link'>Losuj film</Link>
                                </li>
                                <li>
                                    <Link href="/losuj/serial" className='single-link'>Losuj serial</Link>
                                </li>
                                <li>
                                    <Link href="/co-obejrzec" className='single-link'>Co obejrzeć?</Link>
                                </li>
                                <li>
                                    <Link href="/blog" className='single-link'>Blog</Link>
                                </li>
                            </ul>
                        </nav>
                        <div className='w-32 text-2xl flex justify-end'>
                            <ul className='flex gap-2 items-end'>
                                <li className='bg-white p-1 rounded-full'>
                                    <a href="/facebook" target='_blank' className='text-blue-500'>
                                        <FaFacebook/>
                                    </a>
                                </li>
                                <li className='bg-gray-950 p-1 rounded-full'>
                                    <a href="/tiktok" target="_blank" className='text-white'>
                                        <FaTiktok/>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
            </div>
        </header>
    )
}

export default Header