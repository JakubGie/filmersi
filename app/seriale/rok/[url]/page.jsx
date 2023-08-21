import BgImage from '@/components/bgImage'


import Footer from "@/components/footer"


import MovieWindow from "@/components/movieWindow"

import HeaderWithText from "@/components/headerWithText"


async function getMovies(id) {
  const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/yearTv/' + id )

  return res.json()
}


export async function generateMetadata({params}) {
  const url = params.url
  const movies = await getMovies(url)
  return {
    title: "Całe seriale "+url+" online - Top Lista",
    description: "Przejrzyj top listę całych seriali z "+url+" roku i wybierz serial do obejrzenia online.",
    openGraph: {
      images: [movies[0].plakat2],
      title: "Popularne seriale z "+url+" roku online - Top Lista",
      description: "Przejrzyj top listę całych seriali z "+url+" roku i wybierz serial do obejrzenia online."
    },
  }
}


export default async function Year({params}) {

    var url = params.url

   
    const movies = await getMovies(url)
    
  

  

  return (

      <div className="w-full relative">

        {<BgImage url={movies[1].plakat2} type="hideOnMobile"/>}

        <div className="absolute w-full">

            <div className="container mx-auto px-5">

                <HeaderWithText header={`Seriale ${url}`} description={`Całe seriale z ${url} roku online`} />

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
