import BgImage from "@/components/bgImage"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"

export async function generateMetadata({params}) {
    return {
      title: "Całe filmy za darmo online - Oglądaj bez wychodzenia z domu",
      description: "Oglądaj całe filmy i seriale za darmo, korzystając z darmowego okresu próbnego Amazon Prime.",
      openGraph: {
        images: ['https://filmersi.pl/og.png'],
        title: "Całe filmy za darmo online - Oglądaj bez wychodzenia z domu",
        description: "Oglądaj całe filmy i seriale za darmo, korzystając z darmowego okresu próbnego Amazon Prime."
      },
    }
  }

const FullForFree = () => {
    return (
        
        <div className="w-full relative">

            <BgImage url="https://www.themoviedb.org/t/p/original/4704PDuWDDZSpkA4UslA0ulvdll.jpg" />

            <div className="absolute w-full">

                <div className="container mx-auto px-5">

                    <div className="flex my-10 gap-10 lg:gap-20 flex-col lg:flex-row">
                        <div className="flex gap-3 flex-col lg:w-[1500px] pt-10 lg:pt-20">
                            <h1 className="text-4xl lg:text-5xl uppercase font-semibold">Całe filmy za darmo online</h1>
                            <p className="text-xl font-light">Oglądaj <b className="font-semibold">całe filmy za darmo online</b> z darmowym okresem próbnym w <a href="https://www.amazon.pl/wyprobujprime?tag=filmer01-21" rel="nofollow" className="font-semibold">Amazon Prime</a>.</p>
                           <div>
                            <a href="https://www.amazon.pl/wyprobujprime?tag=filmer01-21" rel="nofollow" className="bg-green-600 hover:text-green-600 hover:bg-white text-2xl transition font-bold uppercase px-6 py-2 inline-block text-white rounded-full">
                                    Sprawdź
                                </a>
                           </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-3 pt-7">
                        <h2 className="text-2xl font-semibold">Co to jest Amazon Prime?</h2>
                        <p><b>Amazon Prime</b> to usługa subskrypcji, która oferuje nie tylko dostęp do filmów i seriali, ale także szereg innych korzyści. W ramach subskrypcji możesz cieszyć się darmową dostawą wielu produktów, korzystać z gier, odbierać e-booki i wiele więcej! Jednak najbardziej pożądanym elementem dla wielu jest dostęp do najnowszych i najbardziej wciągających filmów, które możesz oglądać z każdego miejsca online.</p>
                        <h2 className="text-2xl font-semibold">Całe filmy za darmo online</h2>
                        <p>Dzięki darmowemu okresowi próbnemu Amazon Prime możesz teraz zanurzyć się w pełnometrażowych filmach zupełnie <b>za darmo</b>. Nie musisz już przeglądać licznych serwisów w poszukiwaniu interesujących produkcji. Amazon Prime przynosi je prosto do Ciebie, na ekran twojego urządzenia. Od najnowszych hitów kinowych po klasyczne arcydzieła filmowe, wybór jest ogromny!</p>
                        <h2 className="text-2xl font-semibold">Wysoka jakość i wygoda oglądania</h2>
                        <p>Ciesz się filmami w najwyższej jakości, dzięki której przeżyjesz każdy moment z pełnymi detalami. Nie musisz rezygnować z komfortu oglądania na małym ekranie smartfona, bo Amazon Prime dostosuje się do Twoich potrzeb. Oglądaj na telewizorze, tablecie czy nawet na smartfonie - wybór należy do Ciebie!</p>
                    </div>
                 


                </div>

                <Footer/>

            </div>

        </div>

    )
}

export default FullForFree