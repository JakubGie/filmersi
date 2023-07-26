import BgImage from '@/components/bgImage'

import Lists from "@/components/lists"
import Footer from "@/components/footer"

import { FaLock, FaMobileAlt, FaDownload } from "react-icons/fa"
import CheckApp from '@/components/checkApp'
import HeaderWithText from '@/components/headerWithText'

export async function generateMetadata({params}) {
  return {
    title: "Listy tematyczne filmów - Znajdź film o każdym temacie",
    description: "Przejrzyj listy tematyczne filmów i znajdź film do obejrzenia online.",
    openGraph: {
      images: ['https://filmersi.pl/og.png'],
      title: "Listy tematyczne filmów - Znajdź film o każdym temacie",
      description: "Przejrzyj listy tematyczne filmów i znajdź film do obejrzenia online."
    },
  }
}

export default async function ThemedLists() {

  return (

      <div className="w-full relative">

        <BgImage url="https://www.themoviedb.org/t/p/original/46LvLzMD19tzyoPc7HUf4PPvi62.jpg"/>

        <div className="absolute w-full">

            <div className="container mx-auto px-5">

              <HeaderWithText header="Listy tematyczne filmów" description="Nie wiesz co obejrzeć? Przejrzyj nasze listy tematyczne filmów i znajdź film do obejrzenia:" />
              <Lists version="full" />

              <CheckApp version={1} />


            </div>

          <Footer/>

        </div>

      </div>

  )
}
