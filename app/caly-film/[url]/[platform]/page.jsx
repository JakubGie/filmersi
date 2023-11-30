import BgImage from "@/components/bgImage"
import MovieHeader from "@/components/movieHeader"
import Link from "next/link"
import SimilarButton from "@/components/elements/similarButton"
import DataWindow from "@/components/dataWindow"
import MovieWindow from "@/components/movieWindow"


import Footer from "@/components/footer"
import YtPlayer2 from "@/components/ytPlayer2"

async function getMovieInfo(url) {
    const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/movieInfoUrl/'+url, { cache: 'no-store' })
  
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


  async function getPlatform(urlPlatform, movieInfo) {
    switch (urlPlatform) {
        case 'cda':
          var platform = "CDA"

          break;
        case 'vider':
            var platform = "Vider"
          break;
        case 'filman':
            var platform = "Filman"
          break;
        case 'zalukaj':
            var platform = "Zalukaj"
            break;
        case 'vod':
            var platform = "VOD"
            break;
    }

    if(movieInfo[0].seotytul!=="") {
        var tytul2 = movieInfo[0].seotytul
    } else {
        var tytul2 = movieInfo[0].tytul
    }

    var desc = "<p>W dzisiejszych czasach miłośnicy kinematografii mają niepowtarzalną możliwość korzystania z różnorodnych platform streamingowych oferujących szeroki zakres filmów na wyciągnięcie ręki. Dzięki źródłom, takim jak <b>"+movieInfo[0].tytul+" "+platform+"</b>, możesz cieszyć się filmowymi produkcjami bez wychodzenia z domu, z zachowaniem najwyższych standardów jakości HD (720p), Full HD (1080p) i bezpieczeństwa.</p><p>Cyfrowa rewolucja zmieniła sposób oglądania filmów. "+platform+" to przykład serwisu, który umożliwia dostęp do filmów bez ograniczeń czasowych i terytorialnych. Znaczenie elastyczności w dzisiejszych czasach jest nieocenione – wybierając "+tytul2+" "+platform+" Cały Film, wybieramy jakość i komfort.</p><p>Z usług, takich jak <b>"+platform+"</b>, korzystają szczególnie ci, którzy chcą być na bieżąco z produkcjami filmowymi. Premierowe tytuły dostępne zaledwie po kilku tygodniach od oficjalnego wydania to standard, do którego użytkownicy są już przyzwyczajeni. Jakość obrazu i dźwięku dorównuje tym z tradycyjnych kin, a często jest nawet lepsza dzięki zaawansowanej technologii streamingowej.</p><h2>Dlaczego warto obejrzeć film "+tytul2+" na platformie "+platform+"?</h2><p>Oglądając "+movieInfo[0].tytul+" z "+movieInfo[0].rok_produkcji+" roku na legalnej platformie, możemy być spokojni o aspekty prawne i bezpieczeństwo naszych danych. Legalne serwisy dbają o ochronę praw autorskich oraz prywatność swoich użytkowników.</p><p>Wybierając serwis do oglądania filmów online, liczy się różnorodność. Platformy takie jak "+platform+" często aktualizują swoją ofertę filmową, zapewniając użytkownikom dostęp do najnowszych hitów oraz klasyków kinematografii.</p><p>Dostępność funkcji takich jak wyszukiwanie, filtrowanie zawartości czy kategorie filmów znacznie ułatwia korzystanie z platformy. Prostota w nawigacji jest kluczowa dla pozytywnego doświadczenia online.</p>"

    return {name: platform, desc: desc}
  }

  export async function generateMetadata({params}) {
    var movieInfo = await getMovieInfo(params.url)
    var platform = await getPlatform(params.platform, movieInfo)
    movieInfo = movieInfo[0]

   

    
    

    
    return {
      title: movieInfo.tytul+" "+platform.name+" - Obejrzyj Cały Film Online",
      description: movieInfo.kraj.includes("|3|") ? "Obejrzyj cały film "+movieInfo.tytul+" na platformie "+platform.name+", online bez wychodzenia z domu." : "Obejrzyj cały film "+movieInfo.tytul+" "+platform.name+" (Lektor PL, Dubbing) online bez wychodzenia z domu.",
      openGraph: {
        images: [movieInfo.plakat2],
        title: movieInfo.tytul+" ("+movieInfo.rok_produkcji+") - Obejrzyj Cały Film Online",
        description: movieInfo.kraj.includes("|3|") ? "Obejrzyj cały film "+movieInfo.tytul+" na platformie "+platform.name+", online bez wychodzenia z domu." : "Obejrzyj cały film "+movieInfo.tytul+" "+platform.name+" (Lektor PL, Dubbing) online bez wychodzenia z domu.",
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
    var platform = await getPlatform(params.platform, movieInfo)
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

                    <div className="flex lg:pb-8 gap-3 flex-col lg:flex-row">
                       
                        <div className="w-full flex justify-center pt-5 sm:pt-10">
                          
                                <YtPlayer2 id={movieInfo.zwiastun} plakat2={movieInfo.plakat2} />

                        </div>
                    </div>
                    
                    <div className="flex items-center justify-center">
                        <div className="lg:w-[550px] text-lg flex gap-3 justify-start uppercase font-light flex-col pt-6">
                            
                            <div className="font-semibold justify-center flex">
                                <p>Obejrzyj {movieInfo.tytul} {platform.name}  Cały Film Online po obejrzeniu traileru</p>
                            </div>
                          
                        </div>
                    </div>

                    <div className="additional-info bg-white rounded-lg text-black mt-8 px-5 py-5" dangerouslySetInnerHTML={{ __html: platform.desc }}>
                        
                    </div>

                    <MovieHeader version="full-movie" platform={platform.name} movieInfo={movieInfo} fullVersion={true} />

                    <div className="flex flex-col gap-7 py-6">
                        <SimilarButton typ={movieInfo.typ} url={movieInfo.url} tytul={movieInfo.tytul} rok_produkcji={movieInfo.rok_produkcji} />

                        <div className="grid lg:grid-cols-2 gap-7">
                                
                            <DataWindow name="Gatunek" data={genres} show="nazwa" typ={movieInfo.typ} />
                            
                            <DataWindow name="Kraj produkcji" data={countries} show="nazwa" typ={movieInfo.typ} />

                            <div className="rounded-xl overflow-hidden">
                                <div className="uppercase bg-brand px-4 py-2 text-2xl font-bold">
                                    <h2>Platformy</h2>
                                </div>
                                <div className="bg-white px-4 py-2 flex gap-3 flex-wrap">
                                    <Link href={`/caly-film/${movieInfo.url}/cda`} className="bg-black px-4 py-1 text-lg font-bold uppercase rounded-full">
                                    CDA
                                    </Link>
                                    <Link href={`/caly-film/${movieInfo.url}/vider`} className="bg-black px-4 py-1 text-lg font-bold uppercase rounded-full">
                                    Vider
                                    </Link>
                                    <Link href={`/caly-film/${movieInfo.url}/filman`} className="bg-black px-4 py-1 text-lg font-bold uppercase rounded-full">
                                    Filman
                                    </Link>
                                    <Link href={`/caly-film/${movieInfo.url}/zalukaj`} className="bg-black px-4 py-1 text-lg font-bold uppercase rounded-full">
                                    Zalukaj
                                    </Link>
                                    <Link href={`/caly-film/${movieInfo.url}/vod`} className="bg-black px-4 py-1 text-lg font-bold uppercase rounded-full">
                                    VOD
                                    </Link>
                                </div>
                            </div>
                      
                        </div>

                    </div>

                   
                  

                    {movieInfo.seria!==0 ? <>
                            
                            <h2 className="text-2xl pt-4 mt-7 mb-4">Zobacz też pozostałe części <Link className="text-brand font-bold" href={`/czesci/${seriesInfo.url}`}>serii filmowej {seriesInfo.nazwa}</Link>:</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-2">
                                {seriesParts.map((movie, index) => (
                                    <MovieWindow stabilneId={movie.stabilneId} url={movie.url} number={index+1} tytul={movie.tytul} opis={movie.opis} image={movie.plakat} imageBg={movie.plakat2} typ={movie.typ} rok_produkcji={movie.rok_produkcji} ocena_imdb={movie.ocena_imdb} />
                                ))}
                            </div>

                        </> : <></>}
                 
                  
                   

                </div>

                <Footer/>

            </div>

        </div>
    )
  }