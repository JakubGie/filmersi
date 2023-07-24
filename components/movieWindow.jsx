import Link from "next/link"

const MovieWindow = (props) => {
    return (
        <div className="h-[300px] overflow-hidden flex rounded-xl relative overflow-hidden">
            <div className="bg-red w-full h-full">
                {props.imageBg !== "" ?  <img src={props.imageBg.replace('original', 'w300')} alt={`${props.tytul} ${props.typ === "Film" ? "cały film" : "wszystkie odcinki" } (tło)`}  layout="fill" objectFit="cover" className="h-full object-cover"/> : <></>}
            </div>
           
           
            <div class="singleMovie absolute flex w-full shrink-0 h-full p-4 gap-4 md:gap-5">

                <Link href={`/${props.typ === "Film" ? "film" : "serial"}/${props.url}`} className="w-[95px] h-[135px] md:w-[130px] md:h-[195px] rounded-xl overflow-hidden shrink-0  relative content-between bg-none">
                    <img
                        alt={`${props.tytul} ${props.typ === "Film" ? "cały film" : "wszystkie odcinki" }`}
                        src={props.image.replace('original', 'w185')}
                        layout='fill'
                        objectFit='contain'
                    />
                </Link>

                <Link href={`/${props.typ === "Film" ? "film" : "serial"}/${props.url}`} className="w-full flex flex-col min-w-0 gap-2">
                    <div className="lg:mt-2">
                    <h3 className="text-2xl font-bold truncate">{props.number !== undefined ? <>{props.number}. </> : <></>}{props.tytul}</h3>
                    </div>
                    
                    <div className="flex gap-1">
                        <span className={`uppercase font-bold  h-7 px-3 items-center flex text-sm rounded-full ${props.typ === "Serial" ? "bg-blue-500" : "bg-brand"}`}>
                            {props.typ}
                        </span>
                        <span className="uppercase font-bold bg-brand h-7 px-3 items-center flex text-sm rounded-full">
                            {props.rok_produkcji}
                        </span>
                        <span className={`uppercase font-bold h-7 px-3 items-center flex text-sm rounded-full border-2 border-yellow-500 ${props.ocena_imdb>6.4 ? "text-white bg-yellow-500" : "text-yellow-500"}`}>
                            {props.ocena_imdb}
                        </span>
                    </div>
                    <p className="text-sm">{props.opis.substring(0, 200)}{props.opis.length > 200 ? "..." : ""}</p>
                </Link>

            </div>
        </div>
    )
}

export default MovieWindow