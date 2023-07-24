import BgImage from '@/components/bgImage'


import Footer from "@/components/footer"


import MovieWindow from "@/components/movieWindow"

import HeaderWithText from "@/components/headerWithText"

async function getCountryInfo(url) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/countryInfo/' + url )
  
    return res.json()
  }

async function getMovies(id) {
  const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/countryMovies/' + id )

  return res.json()
}

export async function generateMetadata({params}) {
  var countryInfo = await getCountryInfo(params.url)
    countryInfo = countryInfo[0]
  const movies = await getMovies(countryInfo.id)
  return {
    title: "Popularne filmy z kraju "+countryInfo.nazwa+" - Top Lista",
    description: "Sprawdź top listę popularnych filmów z kraju "+countryInfo.nazwa+" i oglądaj filmy online.",
    openGraph: {
      images: [movies[0].plakat2],
      title: "Popularne filmy z kraju "+countryInfo.nazwa+" - Top Lista",
      description: "Sprawdź top listę popularnych filmów z kraju "+countryInfo.nazwa+" i oglądaj filmy online."
    },
  }
}



export default async function Country({params}) {

    var url = params.url

    var countryInfo = await getCountryInfo(url)
    countryInfo = countryInfo[0]
   
    const movies = await getMovies(countryInfo.id)
    
  

  

  return (

      <div className="w-full relative">

        {<BgImage url={movies[0].plakat2}/>}

        <div className="absolute w-full">

            <div className="container mx-auto px-5">

                <HeaderWithText header={countryInfo.nazwa} description={`FILMY`} />

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
