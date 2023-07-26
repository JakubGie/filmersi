import BgImage from "@/components/bgImage"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"


export async function generateMetadata({params}) {
    return {
      title: "Filmer - Aplikacja rekomendująca filmy i seriale",
      description: "Nie wiesz co obejrzeć? Pobierz aplikację Filmer, która pomoże Ci znaleźć idealny film lub serial do obejrzenia. Podobne filmy, losowanie, chronologia oglądania.",
      openGraph: {
        images: ['https://filmersi.pl/og.png'],
        title: "Filmer - Aplikacja rekomendująca filmy i seriale",
        description: "Nie wiesz co obejrzeć? Pobierz aplikację Filmer, która pomoże Ci znaleźć idealny film lub serial do obejrzenia. Podobne filmy, losowanie, chronologia oglądania."
      },
    }
  }

const App = () => {
    return (
        
        <div className="w-full relative">

            <BgImage url="https://www.themoviedb.org/t/p/original/FzOdq23pNBJBW5zULFzEdjQXZD.jpg" />

            <div className="absolute w-full">

                <div className="container mx-auto px-5">

                    <div className="flex my-10 gap-10 lg:gap-20 flex-col lg:flex-row">
                        <div className="flex gap-3 flex-col lg:w-[1500px] pt-10 lg:pt-20">
                            <h1 className="text-4xl lg:text-5xl uppercase font-semibold">Filmer</h1>
                            <p className="text-xl font-light">Dzięki naszej aplikacji, nie będziesz już miał problemu ze znalezieniem filmu lub serialu do obejrzenia.</p>
                            <Link href="https://app.filmersi.pl" className="w-[232px] h-[90px] shrink-0  relative content-between bg-none">
                                <Image
                                    alt={`Pobierz aplikację Filmer z Google Play`}
                                    src={'/google-play.png'}
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </Link>
                            <div className="bg-white text-black lg:w-[400px] px-5 py-4 rounded-lg mt-2">
                                <h2 className="text-2xl font-bold">Co w aplikacji?</h2>
                                <ul className="text-xl mt-2 flex flex-col gap-1 list-disc pl-6">
                                    <li>Listy tematyczne</li>
                                    <li>Losuj filmy i seriale</li>
                                    <li>Znajdź podobny film/serial</li>
                                    <li>Sprawdź chronologię oglądania</li>
                                    <li>Dodaj do swojej listy</li>
                                </ul>
                            </div>
                           
                        </div>
                        <div className="flex justify-center w-full">

                            <a href="https://app.filmersi.pl" target="_blank" className="w-[296px] h-[600px] shrink-0  relative content-between bg-none">
                                <Image
                                    alt={`Aplikacja Filmer`}
                                    src={'/app.png'}
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </a>

                        </div>
                    </div>
                    


                </div>

                <Footer/>

            </div>

        </div>

    )
}

export default App