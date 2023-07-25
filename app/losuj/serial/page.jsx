import BgImage from "@/components/bgImage"
import Draw from "@/components/draw"

export async function generateMetadata({params}) {
    return {
      title: "Losowanie serialu - Wylosuj serial do obejrzenia online",
      description: "Wylosuj serial do obejrzenie z naszej bazy seriali. Po wylosowaniu serialu możesz go obejrzeć online.",
      openGraph: {
        images: ['/og.png'],
        title: "Losowanie serialu - Wylosuj serial do obejrzenia online",
        description: "Wylosuj serial do obejrzenie z naszej bazy seriali. Po wylosowaniu serialu możesz go obejrzeć online."
      },
    }
  }

const DrawTv = () => {
    return (
        <div className="w-full relative">

            <BgImage url="https://www.themoviedb.org/t/p/original/xGexTKCJDkl12dTW4YCBDXWb1AD.jpg" />

            <div className="absolute w-full">

                <div className="container mx-auto px-5">

                    <div className="flex mt-10 gap-10 lg:gap-20 flex-col lg:flex-row pt-10 lg:pt-20">
                        <div className="flex gap-3 flex-col lg:w-[370px]">
                            <h1 className="text-4xl lg:text-5xl uppercase font-semibold">Losuj serial</h1>
                            <p className="text-xl font-light">Wylosuj serial do obejrzenia</p>
                        </div>
                    </div>


                    <Draw typ="Serial" />


                </div>

            </div>

        </div>
    )
}

export default DrawTv