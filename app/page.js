

import BgImage from '@/components/bgImage'

import Lists from "@/components/lists"
import Footer from "@/components/footer"

import MovieHeader from "@/components/movieHeader"
import MovieWindow from "@/components/movieWindow"
import Link from "next/link"
import PostWindow from '@/components/posts/postWindow'

async function getTrendingMovies() {
  const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/trendingMovies', { cache: 'no-store' })

  return res.json()
}

async function getTrendingMovie() {
  const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/trendingMovie', { cache: 'no-store' })

  return res.json()
}

async function getLatestPosts() {
  const res = await fetch('https://api.filmer.wkbdhkmuzv.cfolks.pl/getPosts/trending/5', { cache: 'no-store' })

  return res.json()
}

export async function generateMetadata({params}) {
  return {
    title: "Filmersi - Najlepsza usługa rekomendacji filmów i seriali online",
    description: "Dzięki stronie Filmersi znajdziesz film lub serial do obejrzenia oraz sprawdzisz gdzie obejrzeć go online.",
    openGraph: {
      images: ['https://filmersi.pl/og.png'],
      title: "Filmersi - Najlepsza usługa rekomendacji filmów i seriali online",
      description: "Dzięki stronie Filmersi znajdziesz film lub serial do obejrzenia oraz sprawdzisz gdzie obejrzeć go online."
    },
  }
}


export default async function Home() {
  const trendingMovies = await getTrendingMovies()
  const trendingMovie = await getTrendingMovie()
  const latestPosts = await getLatestPosts()




  return (

      <div className="w-full relative">
        

        <BgImage url={trendingMovie.plakat2}/>

        <div className="absolute w-full">

            <div className="container mx-auto px-5">

              <MovieHeader version="main" movieInfo={trendingMovie} fullVersion={false} />

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 py-8">
                
                {latestPosts.map((post, index) => (
                  <PostWindow data={post} />
                ))}

                  <Link href={`/post/dodaj`} className="bg-white text-black flex text-xl font-bold items-center justify-center px-7 py-5 rounded-lg hover:opacity-90 transition">
                      <div>
                          + Dodaj post
                      </div>
                  </Link>
          
              </div>

              <div className="pb-10 text-xl font-bold flex justify-center uppercase">
                <Link href="/forum" className="hover:text-brand transition">Zobacz więcej postów</Link>
              </div>

              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                
                {trendingMovies.map((movie, index) => (
                  <> {
                    index < 9 ? <MovieWindow stabilneId={movie.stabilneId} url={movie.url} tytul={movie.tytul} opis={movie.opis} image={movie.plakat} imageBg={movie.plakat2} typ={movie.typ} rok_produkcji={movie.rok_produkcji} ocena_imdb={movie.ocena_imdb} /> : <></>
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
