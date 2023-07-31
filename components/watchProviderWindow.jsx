import Link from "next/link"
import Image from "next/image"

import { FaPlay } from "react-icons/fa"

const WatchProviderWindow = (props) => {
    var link = ""

    switch (props.provider_name) {
        case 'Netflix':
            link = "https://www.netflix.com"
            break;
        case 'Apple TV':
            link = "https://www.apple.com/pl/apple-tv-plus"
            break;
        case 'Google Play Movies':
            link = "https://play.google.com/movies"
            break;
        case 'Horizon':
            link = "https://www.upctv.pl/pl"
            break;    
        case 'YouTube':
            link = "https://www.youtube.com/movies"
            break;
        case 'Amazon Prime Video':
            link = "http://www.amazon.pl/wyprobujprime?tag=filmer01-21"
            break;
        case 'Amazon Video':
            link = "https://www.amazon.pl/wyprobujprime?tag=filmer01-21"
            break;
        case 'Player':
            link = "https://wclick.pl/enc/MTc4OTA2LjE0OTQ1ODk%3D"
            break;
        case 'Viaplay':
            link = "https://viaplay.pl/pl-pl"
            break;
        case 'HBO Max':
            link = "https://myclick-5.com/p/EkRa/j3Jq/IFPq"
            break;
        case 'Disney Plus':
            link = 'https://www.disneyplus.com/pl-pl'
            break;
        case 'Chili':
            link = 'https://pl.chili.com'
            break;
        case 'SkyShowtime':
            link = 'https://www.skyshowtime.com/pl'
            break;
        default:
            link = "https://www.google.com/search?q="+props.provider_name
    }

    return (
        <a href={link} target="_blank" rel="nofollow" className="bg-white flex justify-between text-black font-semibold h-[65px] rounded-lg items-center px-2 hover:hover:brightness-90">
            <div className="flex items-center gap-3 text-xl">
                <div className="w-[50px] h-[50px] shrink-0  relative content-between bg-none rounded-lg overflow-hidden">
                    <img
                        alt={`Logo serwisu ${props.provider_name}`}
                        src={'https://www.themoviedb.org/t/p/original'+props.logo_path}
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
                <div className="flex flex-col">
                    <div>{props.provider_name}</div>
                    {props.provider_name === "Amazon Prime Video" || props.provider_name === "Amazon Video" ? <div className="text-sm font-normal text-green-600">
                    Darmowy okres próbny
                    </div> : <></>}
                </div>
            </div>
            <div className={` text-white text-xl flex justify-center items-center w-[50px] h-[50px] rounded-full ${props.provider_name === "Amazon Prime Video" || props.provider_name === "Amazon Video" ? "bg-green-600" : "bg-red-600"}`}>
                <FaPlay/>
            </div>
        </a>
    )
}

export default WatchProviderWindow