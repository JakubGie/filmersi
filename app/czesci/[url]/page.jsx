import BgImage from '@/components/bgImage'


import Footer from "@/components/footer"


import MovieWindow from "@/components/movieWindow"

import HeaderWithText from "@/components/headerWithText"

async function getSeriesInfo(url) {
  const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/getSeriesInfoByUrl/' + url )

  return res.json()
}

async function getSeriesParts(id) {
  const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/getSeriesParts/' + id )

  return res.json()
}

export async function generateMetadata({params}) {
  var seriesInfo = await getSeriesInfo(params.url)
  seriesInfo = seriesInfo[0]
  const seriesParts = await getSeriesParts(seriesInfo.id)
  return {
    title: seriesInfo.nazwa+" - Wszystkie części po kolei (chronologicznie)",
    description: "Sprawdź chronologię i kolejność oglądania filmów z serii "+seriesInfo.nazwa+". Wszystskie części zostały poukładane według kolejności chronologicznej od początku do końca, żebyś wiedział, jak je oglądać.",
    openGraph: {
      images: [seriesParts[0].plakat2],
      title: seriesInfo.nazwa+" - Wszystkie części po kolei (chronologicznie)",
      description: "Sprawdź chronologię i kolejność oglądania filmów z serii "+seriesInfo.nazwa+". Wszystskie części zostały poukładane według kolejności chronologicznej od początku do końca, żebyś wiedział, jak je oglądać.",
    },
  }
}

export default async function Parts({params}) {

    var url = params.url


  var seriesInfo = await getSeriesInfo(url)
  seriesInfo = seriesInfo[0]
  const seriesParts = await getSeriesParts(seriesInfo.id)


  return (

      <div className="w-full relative">

        <BgImage url={seriesParts[0].plakat2}/>

        <div className="absolute w-full">

            <div className="container mx-auto px-5">

                <HeaderWithText header={`${seriesInfo.nazwa} - Wszystkie części po kolei`} description={`Zobacz chornologiczną kolejność oglądania filmów z serii ${seriesInfo.nazwa}:`} small={true} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                    {seriesParts.map((movie, index) => (
                        <MovieWindow stabilneId={movie.stabilneId} url={movie.url} number={index+1} tytul={movie.tytul} opis={movie.opis} image={movie.plakat} imageBg={movie.plakat2} typ={movie.typ} rok_produkcji={movie.rok_produkcji} ocena_imdb={movie.ocena_imdb} />
                    ))}
                </div>

             <h2 className='text-3xl font-semibold mt-3'>Ile jest części {seriesInfo.nazwa}?</h2>
             <p className='text-xl mt-2 mb-4'>Seria filmowa {seriesInfo.nazwa} składa się z {seriesParts.length} części.</p>


            </div>

          <Footer/>

        </div>

      </div>

  )
}
