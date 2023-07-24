import BgImage from "@/components/bgImage"
import Link from "next/link"
import MovieWindow from "@/components/movieWindow"
import Footer from "@/components/footer"

async function getMovieInfo(url) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/movieInfoUrl/'+url)
  
    return res.json()
  }
  
async function getSimilarMovies(movieInfo) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/similarMovies/'+movieInfo.id+"/"+movieInfo.rodzaj+"/"+movieInfo.typ+"/"+movieInfo.gatunek+"/"+movieInfo.temat+"/"+27+"/default"+"/"+0)
    
    return res.json()
}


export async function generateMetadata({params}) {
    var movieInfo = await getMovieInfo(params.url)
    movieInfo = movieInfo[0]
    return {
      title: movieInfo.typ==="Film" ? "Filmy podobne do "+movieInfo.tytul+" ("+movieInfo.rok_produkcji+")" : "Seriale podobne do "+movieInfo.tytul,
      description: movieInfo.typ==="Film" ? "Sprawdź pełną listę filmów podobnych do filmu "+movieInfo.tytul+" z "+movieInfo.rok_produkcji+" roku. Lista podobnych filmów została przygotowana biorąc pod uwagę między innymi gatunek oraz temat filmu." : "Sprawdź pełną listę seriali podobnych do serialu "+movieInfo.tytul+". Lista podobnych seriali została przygotowana biorąc pod uwagę między innymi gatunek oraz temat serialu.",
      openGraph: {
        images: [movieInfo.plakat2],
        title: movieInfo.typ==="Film" ? "Filmy podobne do "+movieInfo.tytul+" ("+movieInfo.rok_produkcji+")" : "Seriale podobne do "+movieInfo.tytul,
        description: movieInfo.typ==="Film" ? "Sprawdź pełną listę filmów podobnych do filmu "+movieInfo.tytul+" z "+movieInfo.rok_produkcji+" roku. Lista podobnych filmów została przygotowana biorąc pod uwagę między innymi gatunek oraz temat filmu." : "Sprawdź pełną listę seriali podobnych do serialu "+movieInfo.tytul+". Lista podobnych seriali została przygotowana biorąc pod uwagę między innymi gatunek oraz temat serialu.",
        type:"video.movie"
      },
    }
  }

export default async function SimilarMovies({params}) {
    var movieInfo = await getMovieInfo(params.url)
    movieInfo = movieInfo[0]
    const similarMovies = await getSimilarMovies(movieInfo)

    return (
        <div className="w-full relative">

            <BgImage url={movieInfo.plakat2}/>

            <div className="absolute w-full"> 

                <div className="container mx-auto px-5">

                   

                    <h1 className="text-3xl lg:text-center pt-7 font-semibold"></h1>
                    <div className="flex gap-3 flex-col lg:w-[1500px] pt-10 lg:pt-20 mb-6 lg:mb-12">
                        <h1 className={`uppercase font-semibold text-3xl`}>{movieInfo.typ === "Film" ? "Filmy" : "Seriale"} podobne do <Link className="underline" href={`/${movieInfo.typ === "Film" ? "film" : "serial"}/`+movieInfo.url}>{movieInfo.tytul}{movieInfo.typ === "Film" ? " z "+movieInfo.rok_produkcji+" roku" : ""}</Link>:</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                
                        {similarMovies.map((movie, index) => (
                            <MovieWindow url={movie.url} tytul={movie.tytul} opis={movie.opis} image={movie.plakat} imageBg={movie.plakat2} typ={movie.typ} rok_produkcji={movie.rok_produkcji} ocena_imdb={movie.ocena_imdb} />
                        ))}
                
                    </div>

                </div>

                <Footer/>

            </div>

        </div>
    )
  }