import BgImage from "@/components/bgImage"
import MovieWindow from "@/components/movieWindow"
import NotFound from "@/components/elements/notFound"

export async function generateMetadata({params}) {
    var q = params.query

    q = q.replaceAll('%20', ' ')
    const replaceArray = [
        { original: "%C4%85", changeTo: "ą" },
        { original: "%C4%84", changeTo: "Ą" },
        { original: "%C4%87", changeTo: "ć" },
        { original: "%C4%86", changeTo: "Ć" },
        { original: "%C4%99", changeTo: "ę" },
        { original: "%C4%98", changeTo: "Ę" },
        { original: "%C5%82", changeTo: "ł" },
        { original: "%C5%81", changeTo: "Ł" },
        { original: "%C5%84", changeTo: "ń" },
        { original: "%C5%83", changeTo: "Ń" },
        { original: "%C3%B3", changeTo: "ó" },
        { original: "%C3%93", changeTo: "Ó" },
        { original: "%C5%9B", changeTo: "ś" },
        { original: "%C5%9A", changeTo: "Ś" },
        { original: "%C5%BA", changeTo: "ź" },
        { original: "%C5%B9", changeTo: "Ź" },
        { original: "%C5%BC", changeTo: "ż" },
        { original: "%C5%BB", changeTo: "Ż" }
    ]

    replaceArray.map((single) => {
        q = q.replaceAll(single.original, single.changeTo)
    })

    return {
      title: "Wyniki wyszukiwania dla "+q+" - Filmersi",
      description: "Sprawdź wyniki wyszukiwania dla frazy "+q,
      openGraph: {
        images: ['/og.png'],
        title: "Wyniki wyszukiwania dla "+q+" - Filmersi",
        description: "Sprawdź wyniki wyszukiwania dla frazy "+q
      },
    }
  }

async function search(q) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/search/'+q)
  
    return res.json()
  }

export default async function Search({ params }) {
    var q = params.query

    q = q.replaceAll('%20', ' ')
    const replaceArray = [
        { original: "%C4%85", changeTo: "ą" },
        { original: "%C4%84", changeTo: "Ą" },
        { original: "%C4%87", changeTo: "ć" },
        { original: "%C4%86", changeTo: "Ć" },
        { original: "%C4%99", changeTo: "ę" },
        { original: "%C4%98", changeTo: "Ę" },
        { original: "%C5%82", changeTo: "ł" },
        { original: "%C5%81", changeTo: "Ł" },
        { original: "%C5%84", changeTo: "ń" },
        { original: "%C5%83", changeTo: "Ń" },
        { original: "%C3%B3", changeTo: "ó" },
        { original: "%C3%93", changeTo: "Ó" },
        { original: "%C5%9B", changeTo: "ś" },
        { original: "%C5%9A", changeTo: "Ś" },
        { original: "%C5%BA", changeTo: "ź" },
        { original: "%C5%B9", changeTo: "Ź" },
        { original: "%C5%BC", changeTo: "ż" },
        { original: "%C5%BB", changeTo: "Ż" }
    ]

    replaceArray.map((single) => {
        q = q.replaceAll(single.original, single.changeTo)
    })

    const results = await search(q)

    console.log(results)

    return (
        <div className="w-full relative">

            <BgImage url=""/>

            <div className="absolute w-full">

                <div className="container mx-auto px-5">

                    <h1 className="text-2xl text-center py-7">Wyniki wyszukiwania dla <b className="font-bold text-brand">{q}</b></h1>

                    {results.length === 0 ? <div className="flex justify-center">
                            <NotFound/>
                        </div> : <></>}

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">

                      

                        {results.map((movie, index) => (
                       <MovieWindow url={movie.url} tytul={movie.tytul} opis={movie.opis} image={movie.plakat} imageBg={movie.plakat2} typ={movie.typ} rok_produkcji={movie.rok_produkcji} ocena_imdb={movie.ocena_imdb} />
                        ))}
                    
                    </div>

                </div>

            </div>

        </div>
    )
  }