import BgImage from "@/components/bgImage"
import Link from "next/link"
import Footer from "@/components/footer"


export async function generateMetadata({params}) {
    return {
      title: "Polityka prywatności aplikacji Filmer",
      description: "Zapoznaj się z polityką prywatności aplikacji mobilnej Filmer.",
      openGraph: {
        images: ['https://filmersi.pl/og.png'],
        title: "Polityka prywatności aplikacji Filmer",
        description: "Zapoznaj się z polityką prywatności aplikacji mobilnej Filmer."
      },
    }
  }

const PrivacyPolicy = () => {
    return (
        
        <div className="w-full relative">

            <BgImage url="https://www.themoviedb.org/t/p/original/FzOdq23pNBJBW5zULFzEdjQXZD.jpg" />

            <div className="absolute w-full">

                <div className="container mx-auto px-5">

                    <div className="flex my-10 gap-10 lg:gap-20 flex-col lg:flex-row">
                        <div className="flex gap-3 flex-col lg:w-[1500px] pt-10 lg:pt-20">
                            <h1 className="text-4xl lg:text-5xl uppercase font-semibold">Polityka prywatności aplikacji Filmer</h1>
                            <div className="privacy-policy">
                                <p className="font-light">
                                    Administrator szanuje prawo użytkowników aplikacji przez nią stworzonych do prywatności i oświadcza, że dokłada wszelkich starań, aby nie gromadzić żadnych danych oprócz tych, które są konieczne do prawidłowego funkcjonowania aplikacji lub tych, których gromadzenie ma na celu zwiększenie użyteczności produktów firmy.
                                </p>
                                <ol className="mt-3 flex gap-2 flex-col pl-4">
                                    <li>Wszelkie dane, które mogłyby w jakikolwiek sposób pozwolić na identyfikacje (ustalenie tożsamości) Użytkownika, nie są gromadzone przez aplikację ani udostępniane przez Usługodawcę jakimkolwiek osobom trzecim.</li>
                                    <li>Administrator informuje, iż podczas użytkowania aplikacji zapisywane są tylko tymczasowe dane na urządzeniu klienta.</li>
                                    <li>Aplikacja nie zbiera żadnych danych statystycznych dotyczących użytkowników.</li>
                                    <li>Aplikacja nie wymaga żadnych dodatkowych uprawnień do korzystania z niej.</li>
                                    <li>Prezentowane w aplikacji materiały mają charakter informacyjny.</li>
                                </ol>
                            </div>
                        </div>
                        <div className="flex justify-center w-full">

                            <Link href="https://app.filmersi.pl" className="w-[296px] h-[1px] shrink-0  relative content-between bg-none">
                               
                            </Link>

                        </div>
                    </div>
                    


                </div>

                <Footer/>

            </div>

        </div>

    )
}

export default PrivacyPolicy