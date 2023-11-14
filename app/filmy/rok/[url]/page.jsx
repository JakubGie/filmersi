import BgImage from '@/components/bgImage'


import Footer from "@/components/footer"


import MovieWindow from "@/components/movieWindow"

import HeaderWithText from "@/components/headerWithText"


async function getMovies(id) {
  const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/yearMovies/' + id )

  return res.json()
}


export async function generateMetadata({params}) {
  const url = params.url
  const movies = await getMovies(url)
  return {
    title: "Całe filmy "+url+" online - Oglądaj",
    description: "Oglądaj całe filmy "+url+" online już teraz bez wychodzenia z domu.",
    openGraph: {
      images: [movies[0].plakat2],
      title: "Całe filmy "+url+" online - Oglądaj",
      description: "Oglądaj całe filmy "+url+" online już teraz bez wychodzenia z domu."
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

                <HeaderWithText header={`Całe Filmy ${url} Online - Oglądaj`} description={`Oglądaj całe filmy ${url} online już teraz bez wychodzenia z domu.`} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                    {movies.map((movie, index) => (
                        <>
                            {index > 38 ? <></> : <>
                            
                            <MovieWindow stabilneId={movie.stabilneId} url={movie.url} tytul={movie.tytul} opis={movie.opis} image={movie.plakat} imageBg={movie.plakat2} typ={movie.typ} rok_produkcji={movie.rok_produkcji} ocena_imdb={movie.ocena_imdb} />
                            </>}
                        </>
                    ))}
                </div>


                <div className='flex gap-4 flex-col my-4 text-lg'>
                  <p>
                  Odkrywanie świata filmu to dla wielu pasja, która nieustannie nas zaskakuje. Rok {url} był dla kinematografii czasem niespotykanych wyzwań, ale również bogactwa form i treści, które teraz można odkrywać przez platformy oferujące filmy online. Miłośnicy wielkiego ekranu, którzy poszukują produkcji, odnajdą w internecie skarbnicę: <b>całe filmy {url}</b> do oglądania w zaciszu własnego domu.
                  </p>
                  <p>
                  <b>Cale filmy {url}</b> online to nie tylko wygoda, ale też szansa na zapoznanie się z kulturą, która nieustannie się rozwija. Większość platform streamingowych zaoferowała swoim użytkownikom szeroki wybór, umożliwiając im odkrywanie, ocenianie i dzielenie się opiniami o filmach z różnych stron świata.
                  </p>
                  <p>Wśród pełnych wersji filmów z {url} roku, znajdujemy odwieczne walki dobra ze złem, poruszające historie miłosne, trzymające w napięciu kryminały oraz inspirujące biografie. Z każdym rokiem kinematografia rośnie w siłę, podnosząc wyniosłe poprzeczki technologii filmowej, narracji i głębi postaci, a całe filmy {url} są tego najlepszym przykładem.</p>

                  <h2 className='text-2xl font-semibold'>Jak oglądać całe filmy {url} online?</h2>
                  <ol className='pl-5'>
                    <li>Wyszukaj film po tytule</li>
                    <li><a href="/rejestracja/find-vod" className='underline'>Zarejestruj się</a></li>
                    <li>Wybierz źródło oglądania całego filmu z {url} roku</li>
                  </ol>
                </div>
             


            </div>

          <Footer/>

        </div>

      </div>

  )
}
