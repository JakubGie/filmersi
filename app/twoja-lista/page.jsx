import BgImage from "@/components/bgImage"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import LoginWithGoogle from "@/components/elements/loginWithGoogle"
import FavList from "@/components/favList"
import IsLogged from "@/components/elements/isLogged"

export async function generateMetadata({params}) {
    return {
      title: "Twoja lista filmów - Dodawaj filmy i seriale do Twojej listy na potem",
      description: "Dodawaj filmy i seriale do twojej własnej listy w naszej darmowej Aplikacji Mobilnej.",
      openGraph: {
        images: ['https://filmersi.pl/og.png'],
        title: "Twoja lista filmów - Dodawaj filmy i seriale do Twojej listy na potem",
        description: "Dodawaj filmy i seriale do twojej własnej listy w naszej darmowej Aplikacji Mobilnej."
      },
    }
  }

const YourList = () => {
    return (
        
        <div className="w-full relative">

            <BgImage url="https://www.themoviedb.org/t/p/original/dcvbs8z0GEXslC1kCT77x19XDeR.jpg"  type="hideOnMobile"/>

            <div className="absolute w-full">

                <div className="container mx-auto px-5">

                    <div className="flex gap-3 flex-col lg:w-[1500px] pt-10 lg:pt-20">
                        <h1 className="text-4xl lg:text-5xl uppercase font-semibold">Twoja lista</h1>
                        <IsLogged/>
                    </div>
                      
                    <FavList/>

                    {/*<div className="flex my-10 gap-10 lg:gap-20 flex-col lg:flex-row">
                        <div className="flex gap-3 flex-col lg:w-[1500px] pt-10 lg:pt-20">
                            <h1 className="text-4xl lg:text-5xl uppercase font-semibold">Twoja lista</h1>
                            <p className="text-xl font-light">Dodawaj filmy i seriale do twojej własnej listy w naszej darmowej <Link href="/aplikacja" className="font-semibold">Aplikacji Mobilnej</Link>:</p>
                            <Link href="https://app.filmersi.pl" className="w-[232px] h-[90px] shrink-0  relative content-between bg-none">
                                <Image
                                    alt={`Pobierz aplikację Filmer z Google Play`}
                                    src={'/google-play.png'}
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </Link>
                        </div>
                        <div className="flex justify-center w-full">

                            <Link href="https://app.filmersi.pl" className="w-[296px] h-[600px] shrink-0  relative content-between bg-none">
                                <Image
                                    alt={`Twoja lista filmów w aplikacji Filmer`}
                                    src={'/app2.png'}
                                    layout='fill'
                                    objectFit='contain'
                                />
                            </Link>

                        </div>
                    </div>*/}
                    


                </div>

              

            </div>

        </div>

    )
}

export default YourList