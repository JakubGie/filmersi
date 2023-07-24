import BgImage from '@/components/bgImage'


import Footer from "@/components/footer"


import MovieWindow from "@/components/movieWindow"

import HeaderWithText from "@/components/headerWithText"

async function getGenreInfo(url) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/genreInfo/' + url )
  
    return res.json()
  }

async function getMovies(id) {
  const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/genreTv/' + id )

  return res.json()
}

export async function generateMetadata({params}) {
  var genreInfo = await getGenreInfo(params.url)
  genreInfo = genreInfo[0]
  const movies = await getMovies(genreInfo.id)
  return {
    title: "Popularne seriale z gatunku "+genreInfo.nazwa+" - Top Lista",
    description: "Sprawdź top listę popularnych seriali z gatunku "+genreInfo.nazwa+" i oglądaj seriale online.",
    openGraph: {
      images: [movies[0].plakat2],
      title: "Popularne seriale z gatunku "+genreInfo.nazwa+" - Top Lista",
      description: "Sprawdź top listę popularnych seriali z gatunku "+genreInfo.nazwa+" i oglądaj seriale online."
    },
  }
}

export default async function Genre({params}) {

    var url = params.url

    var genreInfo = await getGenreInfo(url)
    genreInfo = genreInfo[0]

   
    const movies = await getMovies(genreInfo.id)
    
  

  

  return (

      <div className="w-full relative">

        {<BgImage url={movies[0].plakat2}/>}

        <div className="absolute w-full">

            <div className="container mx-auto px-5">

                <HeaderWithText header={genreInfo.nazwa} description={`Seriale z gatunku ${genreInfo.nazwa}`} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                    {movies.map((movie, index) => (
                        <>
                            {index > 38 ? <></> : <>
                            
                            <MovieWindow url={movie.url} tytul={movie.tytul} opis={movie.opis} image={movie.plakat} imageBg={movie.plakat2} typ={movie.typ} rok_produkcji={movie.rok_produkcji} ocena_imdb={movie.ocena_imdb} />
                            </>}
                        </>
                    ))}
                </div>
             


            </div>

          <Footer/>

        </div>

      </div>

  )
}
