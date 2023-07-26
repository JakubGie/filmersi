import BgImage from "@/components/bgImage"
import Movies from "@/components/movies"
import Tv from "@/components/tv"

export async function generateMetadata({params}) {
    return {
      title: "Co obejrzeć? - Znajdź serial do obejrzenia online",
      description: "Filtruj rodzaj, gatunek, kraj produkcji, rok produkcji i inne, aby znaleźć dla siebie serial do obejrzenia online.",
      openGraph: {
        images: ['https://filmersi.pl/og.png'],
        title: "Co obejrzeć? - Znajdź serial do obejrzenia online",
        description: "Filtruj rodzaj, gatunek, kraj produkcji, rok produkcji i inne, aby znaleźć dla siebie serial do obejrzenia online."
      },
    }
  }

const DrawMovie = () => {
    return (
        <div className="w-full relative">

            <BgImage url="https://www.themoviedb.org/t/p/original/2meX1nMdScFOoV4370rqHWKmXhY.jpg" />

            <div className="absolute w-full">

                <div className="container mx-auto px-5">

                    <div className="flex mt-10 gap-10 lg:gap-20 flex-col lg:flex-row pt-6 ">
                        <div className="flex gap-3 flex-col lg:w-[370px]">
                            <h1 className="text-4xl lg:text-5xl uppercase font-semibold">Seriale online</h1>
                            <p className="text-xl font-light">Znajdź serial do obejrzenia online</p>
                        </div>
                    </div>

                    <Tv/>

                </div>

            </div>

        </div>
    )
}

export default DrawMovie