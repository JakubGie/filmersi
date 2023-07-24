

import BgImage from '@/components/bgImage'

import Lists from "@/components/lists"
import Footer from "@/components/footer"

import MovieHeader from "@/components/movieHeader"
import MovieWindow from "@/components/movieWindow"
import Link from "next/link"

async function getTrendingMovies() {
  const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/trendingMovies')

  return res.json()
}

async function getTrendingMovie() {
  const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/trendingMovie')

  return res.json()
}


export default async function Home() {
  const trendingMovies = await getTrendingMovies()
  const trendingMovie = await getTrendingMovie()



  return (

      <div className="w-full relative">
        

        <BgImage url={trendingMovie.plakat2}/>

        <div className="absolute w-full">

            <div className="container mx-auto px-5">

              <MovieHeader version="main" movieInfo={trendingMovie} fullVersion={false} />

              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                
                {trendingMovies.map((movie, index) => (
                  <> {
                    index < 9 ? <MovieWindow url={movie.url} tytul={movie.tytul} opis={movie.opis} image={movie.plakat} imageBg={movie.plakat2} typ={movie.typ} rok_produkcji={movie.rok_produkcji} ocena_imdb={movie.ocena_imdb} /> : <></>
                  } </>
                ))}
          
              </div>

              <div className="pb-10 text-xl font-bold flex justify-center uppercase">
                <Link href="/filmy" className="hover:text-brand transition">Zobacz więcej filmów</Link>
              </div>
              

              <Lists version={1} />


            </div>

          <Footer/>

        </div>

      </div>

  )
}
