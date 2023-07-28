import BgImage from '@/components/bgImage'

import Lists from "@/components/lists"
import Footer from "@/components/footer"


import Link from 'next/link'
import Image from 'next/image'

import { FaDownload } from "react-icons/fa"

export async function generateMetadata({params}) {
  return {
    title: "Co obejrzeć? Znajdź film lub serial do obejrzenia online",
    description: "Nie wiesz co obejrzeć? Pomożemy Ci znaleźć film lub serial do obejrzenia online. Sprawdź nasze funkcje szukania filmów i seriali.",
    openGraph: {
      images: ['https://filmersi.pl/og.png'],
      title: "Co obejrzeć? Znajdź film lub serial do obejrzenia online",
      description: "Nie wiesz co obejrzeć? Pomożemy Ci znaleźć film lub serial do obejrzenia online. Sprawdź nasze funkcje szukania filmów i seriali."
    },
  }
}

export default async function whatToWatch() {

  return (

      <div className="w-full relative">

        <BgImage url="https://www.themoviedb.org/t/p/original/d7V2s3Xj49GdKgbQ714KGQy6eN3.jpg"/>

        <div className="absolute w-full">

            <div className="container mx-auto px-5 ">

                <div className="flex gap-3 flex-col lg:w-[1500px] pt-10 lg:pt-20">
                    <h1 className="text-4xl lg:text-5xl uppercase font-semibold">Co obejrzeć?</h1>
                    <p className="text-xl font-light max-w-[600px]">Nie wiesz co obejrzeć? Skorzytaj z poniższych porad, aby znaleźć film lub serial do obejrzenia. Wszystkie funkcje są dostępne w naszej aplikacji.</p>
                    <Link href="https://app.filmersi.pl" className="w-[232px] h-[90px] shrink-0  relative content-between bg-none">
                        <Image
                            alt={`Pobierz aplikację Filmer z Google Play`}
                            src={'/google-play.png'}
                            layout='fill'
                            objectFit='contain'
                        />
                    </Link>
                </div>
                <div className='bg-white px-5 py-4 lg:px-10 lg:py-10 rounded-xl mt-14 text-black'>
                  <h2 className='text-3xl lg:text-4xl font-semibold'>1. Skorzystaj z wyszukiwarki</h2>
                  <p className='mt-3'>Filtruj rodzaj, ocenę, gatunek, kraj produkcji oraz rok produkcji:</p>
                  <div className='mt-6 font-semibold flex flex-col md:flex-row gap-3 text-center'>
                      <Link href="/filmy" className='bg-brand text-white uppercase px-6 py-2 inline-block rounded-full hover:bg-black hover:text-white transition'>
                          Szukaj filmu
                      </Link>
                      <Link href="/seriale" className='bg-blue-500 text-white uppercase px-6 py-2 inline-block rounded-full hover:bg-black hover:text-white transition'>
                          Szukaj serialu
                      </Link>
                  </div>

                </div>
               
                <div className='bg-white px-5 py-4 lg:px-10 lg:py-10 rounded-xl mt-8 text-black'>
                  <h2 className='text-3xl lg:text-4xl font-semibold'>2. Sprawdź listy tematyczne</h2>
                  <div className='mt-6 text-white'>
                      <Lists version={1} />
                  </div>
                </div>
              

                <div className='bg-white px-5 py-4 lg:px-10 lg:py-10 rounded-xl mt-8 text-black'>
                  <h2 className='text-3xl lg:text-4xl font-semibold'>3. Znajdź podobny film/serial</h2>
                  <p className='mt-3'>Znajdź podobny film lub serial korzystając z wyszukiwarki na naszej stronie.</p>
                </div>
              
                <div className='bg-white px-5 py-4 lg:px-10 lg:py-10 rounded-xl mt-8 text-black'>
                  <h2 className='text-3xl lg:text-4xl font-semibold'>4. Wylosuj film/serial</h2>
                  <div className='mt-6 font-semibold flex flex-col md:flex-row gap-3 text-center'>
                      <Link href="/losuj/film" className='bg-brand text-white uppercase px-6 py-2 inline-block rounded-full hover:bg-black  transition'>
                          Losuj film
                      </Link>
                      <Link href="/losuj/serial" className='bg-blue-500 text-white uppercase px-6 py-2 inline-block rounded-full hover:bg-black transition'>
                          Losuj serial
                      </Link>
                  </div>
                </div>

                <div className='bg-white px-5 py-4 lg:px-10 lg:py-10 rounded-xl mt-8 text-black'>
                  <h2 className='text-3xl lg:text-4xl font-semibold'>5. Sprawdź nasz blog</h2>
                  <a href="/blog" className='border-2 mt-3 mb-10 border-black uppercase px-6 py-2 inline-block rounded-full hover:bg-black hover:text-white font-bold flex gap-3 w-[179px] transition'>
                      Sprawdź blog
                  </a>
                </div>
             

                <div className='bg-white px-5 py-4 lg:px-10 lg:py-10 rounded-xl mt-8 text-black'>
                  <h2 className='text-3xl lg:text-4xl font-semibold'>6. Skorzystaj z naszej aplikacji</h2>
                  <p className='mt-3'>Nasza darmowa aplikacja pomoże Ci znaleźć film lub serial do obejrzenia. Będziesz go mógł dodać do swojej listy "na potem".</p>
                  <a href="https://app.filmersi.pl" target="_blank" className='border-2 mt-3 mb-10 border-black uppercase px-6 py-2 inline-block rounded-full hover:bg-black hover:text-white font-bold flex gap-3 w-[240px] transition'>
                      <FaDownload/> Pobierz za darmo
                  </a>
                </div>
               


            </div>

          <Footer/>

        </div>

      </div>

  )
}
