import BgImage from '@/components/bgImage'


import Footer from "@/components/footer"


import MovieWindow from "@/components/movieWindow"

import CheckApp from "@/components/checkApp"
import HeaderWithText from "@/components/headerWithText"

async function getMovies(theme) {
  const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/decodeMoviesList/' + theme )

  return res.json()
}

export async function generateMetadata({params}) {
    var header = ""
    var image = ""
    var url = params.theme


    switch (params.theme) {
        case 'na-wieczor':
            header = "Na wieczór"
            image = "/lists/na-wieczor.jpg"
            break;
        case 'horrory':
            header = "Horrory"
            image = "/lists/horrory.jpg"
            break;
        case 'stare-horrory':
            header = "Stare Horrory"
            image = "/lists/stare-horrory.jpg"
            break;
        case 'gangsterskie':
            header = "Gangsterskie"
            image = "/lists/gangsterskie.jpg"
            break;
        case 'polskie':
            header = "Polskie"
            image = "/lists/polskie.jpg"
            break;
        case 'polskie-klasyki':
            header = "Polskie klasyki"
            image = "/lists/polskie-klasyki.jpg"
            break;
        case 'pieniadze':
            header = "Pieniądze"
            image = "/lists/pieniadze.jpg"
            break;
        case 'zagadka':
            header = "Zagadka"
            image = "/lists/zagadka.jpg"
            break;
        case 'wojsko':
            header = "Wojsko"
            image = "/lists/wojsko.jpg"
            break;
        case 'wojna':
            header = "Wojna"
            image = "/lists/wojna.jpg"
            break;
        case 'animacje':
            header = "Animacje"
            image = "/lists/animacje.jpg"
            break;
        case 'komediowe':
            header = "Komediowe"
            image = "/lists/komediowe.jpg"
            break;
        case 'na-faktach':
            header = "Na faktach"
            image = "/lists/na-faktach.jpg"
            break;
        case 'kosmos':
            header = "Kosmos"
            image = "/lists/kosmos.jpg"
            break;
        case 'muzyka-hiphop':
            header = "Hip Hop"
            image = "/lists/muzyka-hiphop.jpg"
            url = "muzyka hiphop"
            break;
        case 'bokser':
            header = "Bokserskie"
            image = "/lists/bokser.jpg"
            break;
        case 'wampir':
            header = "Wampir"
            image = "/lists/wampir.jpg"
            break;
        case 'sredniowiecze':
            header = "Średniowiecze"
            image = "/lists/sredniowiecze.jpg"
            break;
        default:
            header = "Filmy"
    }

    return {
      title: "Filmy o temacie "+header+" - Top Lista",
      description: "Sprawdź top listę filmów z o temacie "+header+" i oglądaj filmy online.",
      openGraph: {
        images: [image],
        title:"Filmy o temacie "+header+" - Top Lista",
        description: "Sprawdź top listę filmów z o temacie "+header+" i oglądaj filmy online."
      },
    }
  }

export default async function Theme({params}) {

    var header = ""
    var image = ""
    var url = params.theme


    switch (params.theme) {
        case 'na-wieczor':
            header = "Na wieczór"
            image = "/lists/na-wieczor.jpg"
            break;
        case 'horrory':
            header = "Horrory"
            image = "/lists/horrory.jpg"
            break;
        case 'stare-horrory':
            header = "Stare Horrory"
            image = "/lists/stare-horrory.jpg"
            break;
        case 'gangsterskie':
            header = "Gangsterskie"
            image = "/lists/gangsterskie.jpg"
            break;
        case 'polskie':
            header = "Polskie"
            image = "/lists/polskie.jpg"
            break;
        case 'polskie-klasyki':
            header = "Polskie klasyki"
            image = "/lists/polskie-klasyki.jpg"
            break;
        case 'pieniadze':
            header = "Pieniądze"
            image = "/lists/pieniadze.jpg"
            break;
        case 'zagadka':
            header = "Zagadka"
            image = "/lists/zagadka.jpg"
            break;
        case 'wojsko':
            header = "Wojsko"
            image = "/lists/wojsko.jpg"
            break;
        case 'wojna':
            header = "Wojna"
            image = "/lists/wojna.jpg"
            break;
        case 'animacje':
            header = "Animacje"
            image = "/lists/animacje.jpg"
            break;
        case 'komediowe':
            header = "Komediowe"
            image = "/lists/komediowe.jpg"
            break;
        case 'na-faktach':
            header = "Na faktach"
            image = "/lists/na-faktach.jpg"
            break;
        case 'kosmos':
            header = "Kosmos"
            image = "/lists/kosmos.jpg"
            break;
        case 'muzyka-hiphop':
            header = "Hip Hop"
            image = "/lists/muzyka-hiphop.jpg"
            url = "muzyka hiphop"
            break;
        case 'bokser':
            header = "Bokserskie"
            image = "/lists/bokser.jpg"
            break;
        case 'wampir':
            header = "Wampir"
            image = "/lists/wampir.jpg"
            break;
        case 'sredniowiecze':
            header = "Średniowiecze"
            image = "/lists/sredniowiecze.jpg"
            break;
        default:
            header = "Filmy"
    }


  const movies = await getMovies(url)

  

  return (

      <div className="w-full relative">

        <BgImage url={image}/>

        <div className="absolute w-full">

            <div className="container mx-auto px-5">

                <HeaderWithText header={header} description={`Filmy o temacie ${header}`} />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                    {movies.map((movie, index) => (
                        <MovieWindow url={movie.url} tytul={movie.tytul} opis={movie.opis} image={movie.plakat} imageBg={movie.plakat2} typ={movie.typ} rok_produkcji={movie.rok_produkcji} ocena_imdb={movie.ocena_imdb} />
                        ))}
                </div>

                <CheckApp version={2} />
             


            </div>

          <Footer/>

        </div>

      </div>

  )
}
