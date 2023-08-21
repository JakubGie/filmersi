import Image from "next/image"
import Link from "next/link"
import { FaPlay, FaStar } from "react-icons/fa"
import AddToList from "./elements/addToList"

const MovieHeader = (props) => {
    return (
        <div className="flex my-4 lg:my-8 gap-4 lg:gap-10 flex-col lg:flex-row">

            <Link href={`/${props.movieInfo.typ === "Film" ? "film" : "serial"}/${props.movieInfo.url}`} className={`lg:h-[400px] lg:w-[267px] w-full h-[400px] rounded-xl overflow-hidden justify-center relative ${props.fullVersion ? "flex" : "hidden"}  lg:flex shrink-0`}>
                <img
                    alt={`${props.movieInfo.tytul} ${props.movieInfo.typ === "Film" ? "cały film" : "wszystkie odcinki" }`}
                    src={props.movieInfo.plakat.replace('original', 'w342')}
                    layout='fill'
                    objectFit='contain'
                />
            </Link>

            <div className="mt-8 lg:mt-8 flex flex-col gap-3">
                <Link href={`/${props.version === "full-movie" ? "caly-film" : ""}${props.version === "all-parts" ? "wszystkie-odcinki" : ""}${props.version !== "all-parts" & props.version !== 'full-movie' ? props.movieInfo.typ.toLowerCase() : ""}/${props.movieInfo.url}`}>

                    {props.fullVersion ? <h1 className={`text-3xl md:text-5xl font-bold  w-full`}>{props.movieInfo.tytul}{props.version === "full-movie" ? " Cały Film - Oglądaj Online" : ""}{props.version === "all-parts" ? " Wszystkie Odcinki - Oglądaj Online" : ""}</h1> : <h2 className={`text-3xl md:text-5xl font-bold lg:h-14  w-full lg:max-w-[700px] lg:truncate`}>{props.movieInfo.tytul}</h2>}
                    
                </Link>

                <div className="flex gap-2 font-bold">
                    <Link href={`/${props.movieInfo.typ === "Film" ? "filmy" : "seriale"}`} className={`uppercase px-4 h-8 flex items-center rounded-full ${props.movieInfo.typ === "Serial" ? "bg-blue-500" : "bg-brand"}`}>
                        {props.movieInfo.typ}
                    </Link>
                    <Link href={`/${props.movieInfo.typ === "Film" ? "filmy" : "seriale"}/rok/${props.movieInfo.rok_produkcji}`} className="bg-brand uppercase px-4 h-8 flex items-center rounded-full">
                        {props.movieInfo.rok_produkcji}
                    </Link>
                    <div className={`uppercase px-4 h-8 flex items-center rounded-full border-yellow-500 border-2 ${props.movieInfo.ocena_imdb>6.4 ? "text-white bg-yellow-500" : "text-yellow-500"}`}>
                        {props.movieInfo.ocena_imdb}
                    </div>
                </div>

                <p className="w-full lg:max-w-[700px]">
                    {props.fullVersion ? props.movieInfo.opis : <>{
                        props.movieInfo.opis.substring(0, 300)}{props.movieInfo.opis.length > 300 ? "..." : ""
                    }</>}
                   
                </p>
                <div className="mt-4 flex gap-3 flex-col lg:flex-row">
                {props.version !== "full-movie" && props.version !== "all-parts" ? <Link href={`/${props.movieInfo.typ === "Film" ? "caly-film" : "wszystkie-odcinki" }/${props.movieInfo.url}`} className="bg-red-600 px-5 py-2 text-lg inline-block rounded-full font-bold flex gap-2 items-center w-full lg:w-56 justify-center uppercase hover:bg-white hover:text-red-600 transition">
                    <FaPlay/> Oglądaj online
                </Link> : <></>}

                <AddToList stabilneId={props.movieInfo.stabilneId} />
                
                
                </div>
            </div>
        
        </div>
    )
}

export default MovieHeader