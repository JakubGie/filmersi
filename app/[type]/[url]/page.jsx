import BgImage from "@/components/bgImage"
import MovieHeader from "@/components/movieHeader"

import SimilarButton from "@/components/elements/similarButton"
import DataWindow from "@/components/dataWindow"
import Trailer from "@/components/trailer"
import Footer from "@/components/footer"
import BgVideo from "@/components/bgVideo"
import MovieWindow from "@/components/movieWindow"
import Link from "next/link"


async function getMovieInfo(url) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/movieInfoUrl/'+url)

    return  res.json()
  }

async function getGenres(genres) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/decodeGenres/'+genres)

    
    return res.json()
  }

async function getCountries(countries) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/decodeCountries/'+countries)
  
    return res.json()
  }


  async function getSeriesInfo(id) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/getSeriesInfo/' + id )
  
    return res.json()
  }
  
  async function getSeriesParts(id) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/getSeriesParts/' + id )
  
    return res.json()
  }


  export async function generateMetadata({params}) {
    var movieInfo = await getMovieInfo(params.url)
    movieInfo = movieInfo[0]
    return {
      title: movieInfo.typ === "Film" ? movieInfo.tytul+" ("+movieInfo.rok_produkcji+") - Filmersi" : movieInfo.tytul+" (Serial TV "+movieInfo.rok_produkcji+"r.-) - Filmersi",
      description: movieInfo.opis,
      openGraph: {
        images: [movieInfo.plakat2],
        title: movieInfo.typ === "Film" ? movieInfo.tytul+" ("+movieInfo.rok_produkcji+")" : movieInfo.tytul+" (Serial TV "+movieInfo.rok_produkcji+"r.-)",
        description: movieInfo.opis,
        type:"video.movie"
      },
    }
  }


export default async function Movie({params}) {
    var movieInfo = await getMovieInfo(params.url)
    movieInfo = movieInfo[0]

   

    const genres = await getGenres(movieInfo.gatunek)
    const countries = await getCountries(movieInfo.kraj)

   
    
    var seriesInfo = await getSeriesInfo(movieInfo.seria)
    var seriesInfo = seriesInfo[0]

    if(movieInfo.seria===0) {
        seriesInfo={
            id: 1
        }
    }

    var seriesParts = await getSeriesParts(seriesInfo.id)
   
 
    
    
   

    return (
        <div className="w-full relative">
            {movieInfo.zwiastun === "" ? <BgImage url={movieInfo.plakat2}/> : <BgVideo url={movieInfo.zwiastun}/>}

            <div className="absolute w-full"> 

                <div className="container mx-auto px-5">

                    <MovieHeader version="movie" movieInfo={movieInfo} fullVersion={true} />

                    <div className="flex flex-col gap-7 py-6">
                        <SimilarButton typ={movieInfo.typ} url={movieInfo.url} tytul={movieInfo.tytul} rok_produkcji={movieInfo.rok_produkcji} />

                        <div className="grid lg:grid-cols-2 gap-7">
                                
                            <DataWindow name="Gatunek" data={genres} show="nazwa" typ={movieInfo.typ} />
                            
                            <DataWindow name="Kraj produkcji" data={countries} show="nazwa" typ={movieInfo.typ} />
                      
                        </div>

                        {movieInfo.zwiastun !== "" ? <>

                            <div className="lg:hidden  w-full">
                                <Trailer id={movieInfo.zwiastun}/>
                            </div>
                          

                        </> : <>
                        </>}

                        {movieInfo.seria!==0 ? <>
                            
                            <h2 className="text-2xl pt-4">Zobacz też pozostałe części <Link className="text-brand font-bold" href={`/czesci/${seriesInfo.url}`}>serii filmowej {seriesInfo.nazwa}</Link>:</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-2">
                                {seriesParts.map((movie, index) => (
                                    <MovieWindow url={movie.url} number={index+1} tytul={movie.tytul} opis={movie.opis} image={movie.plakat} imageBg={movie.plakat2} typ={movie.typ} rok_produkcji={movie.rok_produkcji} ocena_imdb={movie.ocena_imdb} />
                                ))}
                            </div>

                        </> : <></>}
                       

                    </div>
                  
                   

                </div>

                <Footer/>

            </div>

        </div>
    )
  }