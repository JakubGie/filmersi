import BgImage from "@/components/bgImage"
import Draw from "@/components/draw"

export async function generateMetadata({params}) {
    return {
      title: "Losowanie filmu - Wylosuj film do obejrzenia online",
      description: "Wylosuj film do obejrzenie z naszej bazy filmów. Po wylosowaniu filmu możesz go obejrzeć online.",
      openGraph: {
        images: ['/og.png'],
        title: "Losowanie filmu - Wylosuj film do obejrzenia online",
        description: "Wylosuj film do obejrzenie z naszej bazy filmów. Po wylosowaniu filmu możesz go obejrzeć online."
      },
    }
  }

const DrawMovie = () => {
    return (
        <div className="w-full relative">

            <BgImage url="https://www.themoviedb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg" />

            <div className="absolute w-full">

                <div className="container mx-auto px-5">

                    <div className="flex mt-10 gap-10 lg:gap-20 flex-col lg:flex-row pt-10 lg:pt-20">
                        <div className="flex gap-3 flex-col lg:w-[370px]">
                            <h1 className="text-4xl lg:text-5xl uppercase font-semibold">Losuj film</h1>
                            <p className="text-xl font-light">Wylosuj film do obejrzenia</p>
                        </div>
                    </div>


                    <Draw typ="Film"/>


                </div>

            </div>

        </div>
    )
}

export default DrawMovie