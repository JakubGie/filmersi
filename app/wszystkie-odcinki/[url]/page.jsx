import BgImage from "@/components/bgImage"
import MovieHeader from "@/components/movieHeader"
import SimilarButton from "@/components/elements/similarButton"
import DataWindow from "@/components/dataWindow"
import Image from "next/image"
import WatchSources from "@/components/watchSources"


import Footer from "@/components/footer"

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

    const res = await fetch('https://api.themoviedb.org/3/tv/'+tmdbId+'/watch/providers?api_key=87c38cb6617e1d815dae3d418030b236')
  
    return res.json()
  }

export async function generateMetadata({params}) {
    var movieInfo = await getMovieInfo(params.url)
    movieInfo = movieInfo[0]
    return {
      title: movieInfo.tytul+" Wszystkie Odcinki - Oglądaj cały serial Online",
      description: movieInfo.kraj.includes("|3|") ? "Obejrzyj wszystkie odcinki całego serialu "+movieInfo.tytul+" online bez wychodzenia z domu." : "Obejrzyj wszystkie odcinki całego serialu "+movieInfo.tytul+" (Lektor PL, dubbing) online bez wychodzenia z domu.",
      openGraph: {
        images: [movieInfo.plakat2],
        title: movieInfo.tytul+" Wszystkie Odcinki - Oglądaj cały serial Online",
        description: movieInfo.kraj.includes("|3|") ? "Obejrzyj wszystkie odcinki całego serialu "+movieInfo.tytul+" online bez wychodzenia z domu." : "Obejrzyj wszystkie odcinki całego serialu "+movieInfo.tytul+" (Lektor PL, dubbing) online bez wychodzenia z domu.",
        type:"video.movie"
      },
    }
  }

export default async function AllParts({params}) {
    var movieInfo = await getMovieInfo(params.url)
    movieInfo = movieInfo[0]
    const genres = await getGenres(movieInfo.gatunek)
    const countries = await getCountries(movieInfo.kraj)

    var watchSources = await getWatchSources(movieInfo.tmdbid)
    watchSources = watchSources.results.PL

   

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
                                        alt={`JustWatch logo`}
                                        src={'/justwatch.png'}
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                            </div>
                            <div className="font-semibold justify-center flex">
                                <p>Oglądaj {movieInfo.tytul} Wszystkie Odcinki Online na:</p>
                            </div>
                            <WatchSources tmdbid={movieInfo.tmdbid} typ="tv" />
                        </div>
                        <div className="w-full flex justify-center pt-10">
                          
                            { movieInfo.zwiastun !== "" ? <>
                                <div className="hidden lg:flex">
                                    <iframe src={`https://www.youtube.com/embed/${movieInfo.zwiastun}?showinfo=0&controls=0&autoplay=1&start=20`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" className="rounded-2xl w-[600px] h-[250px] lg:h-[300px]" allowfullscreen></iframe>
                                </div>
                                <div className="lg:hidden w-full">
                                    <iframe src={`https://www.youtube.com/embed/${movieInfo.zwiastun}&start=20`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" className="rounded-2xl w-full h-[250px]" allowfullscreen></iframe>
                                </div>
                               

                            </> : <></> }

                        </div>
                    </div>

                    <MovieHeader version="all-parts" movieInfo={movieInfo} fullVersion={true} />

                    <div className="flex flex-col gap-7 py-6">
                        <SimilarButton typ={movieInfo.typ} url={movieInfo.url} tytul={movieInfo.tytul} rok_produkcji={movieInfo.rok_produkcji} />

                        <div className="grid lg:grid-cols-2 gap-7">
                                
                            <DataWindow name="Gatunek" data={genres} show="nazwa" typ={movieInfo.typ} />
                            
                            <DataWindow name="Kraj produkcji" data={countries} show="nazwa" typ={movieInfo.typ} />
                      
                        </div>

                    </div>
                  
                   

                </div>

                <Footer/>

            </div>

        </div>
    )
  }