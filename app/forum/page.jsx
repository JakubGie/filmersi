import BgImage from "@/components/bgImage"
import ForumWindow from "@/components/posts/forum"

export async function generateMetadata({params}) {
    return {
      title: "Forum o Filmach i Serialach - Filmersi",
      description: "Przejrzyj nasze forum o filmach i serialach i znajdź coś ciekawego do obejrzenia online.",
      openGraph: {
        images: ['https://filmersi.pl/og.png'],
        title: "Forum o Filmach i Serialach",
        description: "Przejrzyj nasze forum o filmach i serialach i znajdź coś ciekawego do obejrzenia online."
      },
    }
  }

const Forum = () => {
    return (
        <div className="w-full relative">

            <BgImage url="https://www.themoviedb.org/t/p/original/vbpD32PkAVXFnl5GiNlT0gvi4gX.jpg" />

            <div className="absolute w-full">

                <div className="container mx-auto px-5">

                    <div className="flex mt-10 gap-10 lg:gap-20 flex-col lg:flex-row sm:pt-6 pb-4 ">
                        <div className="flex gap-3 flex-col lg:w-[370px]">
                            <h1 className="text-xl lg:text-xl uppercase font-semibold">Forum o filmach i serialach</h1>
                        </div>
                    </div>

                    <ForumWindow/>

                </div>

            </div>

        </div>
    )
}

export default Forum