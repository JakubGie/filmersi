import BgImage from "@/components/bgImage"
import MovieHeader from "@/components/movieHeader"
import Link from "next/link"
import SimilarButton from "@/components/elements/similarButton"
import DataWindow from "@/components/dataWindow"
import Image from "next/image"
import NotFound from "@/components/elements/notFound"
import MovieWindow from "@/components/movieWindow"


import WatchProviderWindow from "@/components/watchProviderWindow"
import Footer from "@/components/footer"
import WatchSources from "@/components/watchSources"
import YtPlayer from "@/components/ytPlayer"

async function getMovieInfo(url) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/movieInfoUrl/'+url)
  
    return res.json()
  }

async function getGenres(genres) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/decodeGenres/'+genres)
  
    return res.json()
  }

async function getCountries(countries) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/decodeCountries/'+countries)
  
    return res.json()
  }

  async function getWatchSources(tmdbId) {
    if(tmdbId===0) {
        return undefined
    }

    const res = await fetch('https://api.themoviedb.org/3/movie/'+tmdbId+'/watch/providers?api_key=87c38cb6617e1d815dae3d418030b236')
  
    return res.json()
  }



  export async function generateMetadata({params}) {
    var movieInfo = await getMovieInfo(params.url)
    movieInfo = movieInfo[0]
    return {
      title: movieInfo.tytul+" Cały Film - Oglądaj Online",
      description: movieInfo.kraj.includes("|3|") ? "Obejrzyj cały film "+movieInfo.tytul+" z "+movieInfo.rok_produkcji+" roku online bez wychodzenia z domu." : "Obejrzyj cały film "+movieInfo.tytul+" z "+movieInfo.rok_produkcji+" (Lektor PL, Dubbing) roku online bez wychodzenia z domu.",
      openGraph: {
        images: [movieInfo.plakat2],
        title: movieInfo.tytul+" ("+movieInfo.rok_produkcji+") - Oglądaj Online",
        description: movieInfo.kraj.includes("|3|") ? "Obejrzyj cały film "+movieInfo.tytul+" z "+movieInfo.rok_produkcji+" roku online bez wychodzenia z domu." : "Obejrzyj cały film "+movieInfo.tytul+" z "+movieInfo.rok_produkcji+" (Lektor PL, Dubbing) roku online bez wychodzenia z domu.",
        type:"video.movie"
      },
    }
  }

  async function getSeriesInfo(id) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/getSeriesInfo/' + id )
  
    return res.json()
  }
  
  async function getSeriesParts(id) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/getSeriesParts/' + id )
  
    return res.json()
  }


export default async function FullMovie({params}) {
    var movieInfo = await getMovieInfo(params.url)
    movieInfo = movieInfo[0]


    const genres = await getGenres(movieInfo.gatunek)
    const countries = await getCountries(movieInfo.kraj)

    var watchSources = await getWatchSources(movieInfo.tmdbid)
    watchSources = watchSources.results.PL

  

   
  
    var seriesInfo = await getSeriesInfo(movieInfo.seria)
    seriesInfo = seriesInfo[0]

    if(movieInfo.seria===0) {
        seriesInfo={
            id: 1
        }
    }

    var seriesParts = await getSeriesParts(seriesInfo.id)
   
 

    return (
        <div className="w-full relative">

            <BgImage url={movieInfo.plakat2}/>

            <div className="absolute w-full"> 

                <div className="container mx-auto px-5">

                    <div className="flex pt-8 lg:py-8 gap-3 flex-col lg:flex-row">
                        <div className="lg:w-[550px] text-lg flex gap-3 justify-start uppercase font-light flex-col pt-6">
                            <div className="flex gap-2 justify-center text-sm lg:text-lg items-center">
                                Dostępne dzięki 
                                <div className="w-[160px] h-[23px] shrink-0  relative content-between bg-none">
                                    <Image
                                        alt={`JustWatch Logo`}
                                        src={'/justwatch.png'}
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                            </div>
                            <div className="font-semibold justify-center flex">
                                <p>Oglądaj {movieInfo.tytul} Cały Film Online na:</p>
                            </div>
                            <WatchSources tmdbid={movieInfo.tmdbid} typ="movie" />
                        </div>
                        <div className="w-full flex justify-center pt-10">
                          
                            { movieInfo.zwiastun !== "" ? <>
                                <YtPlayer id={movieInfo.zwiastun} />
                            </> : <></> }

                        </div>
                    </div>

                    <MovieHeader version="full-movie" movieInfo={movieInfo} fullVersion={true} />

                    <div className="flex flex-col gap-7 py-6">
                        <SimilarButton typ={movieInfo.typ} url={movieInfo.url} tytul={movieInfo.tytul} rok_produkcji={movieInfo.rok_produkcji} />

                        <div className="grid lg:grid-cols-2 gap-7">
                                
                            <DataWindow name="Gatunek" data={genres} show="nazwa" typ={movieInfo.typ} />
                            
                            <DataWindow name="Kraj produkcji" data={countries} show="nazwa" typ={movieInfo.typ} />
                      
                        </div>

                    </div>

                   
                    {movieInfo.ai !== "" ? <>
                        <div className="additional-info bg-white rounded-lg text-black px-5 py-5" dangerouslySetInnerHTML={{ __html: movieInfo.ai }}>
                            
                        </div>
                    </> : <></>}

                    {movieInfo.seria!==0 ? <>
                            
                            <h2 className="text-2xl pt-4 mt-7 mb-4">Zobacz też pozostałe części <Link className="text-brand font-bold" href={`/czesci/${seriesInfo.url}`}>serii filmowej {seriesInfo.nazwa}</Link>:</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-2">
                                {seriesParts.map((movie, index) => (
                                    <MovieWindow url={movie.url} number={index+1} tytul={movie.tytul} opis={movie.opis} image={movie.plakat} imageBg={movie.plakat2} typ={movie.typ} rok_produkcji={movie.rok_produkcji} ocena_imdb={movie.ocena_imdb} />
                                ))}
                            </div>

                        </> : <></>}
                 
                  
                   

                </div>

                <Footer/>

            </div>

        </div>
    )
  }