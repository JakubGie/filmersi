"use client"

import { useSession } from "next-auth/react"
import LoginWithGoogle from "./elements/loginWithGoogle"
import axios from "axios";
import { useEffect, useState } from "react"
import MovieWindow from "./movieWindow";
import NotFound from "./elements/notFound";
import Loading from "./loading";
import Image from "next/image";

const FavList = () => {
    const { data: session } = useSession()

    const [ movies, setMovies ] = useState()
      
    useEffect(() => {
        if(session && session.user) {

            setMovies(undefined)
            axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/favourtieMovies/'+session.user.email).then((res) => {
                setMovies(res.data)
            })

        }
       
    }, [session])

   

    if(session && session.user) {

       

        return (
            <>
            
                {movies === undefined  ? <>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 mt-6">
                    <div className="w-full flex justify-center mt-[100px]">
                        <div className="w-[50px] h-[50px] shrink-0  relative content-between bg-none">
                            <Image
                                alt={`Ładowanie`}
                                src={'/loading.svg'}
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                    </div>
                   
                </div>
                
                </> : <>
                
                {movies.length === 0 ? <>
                
                    <div className="mt-5 text-xl mb-10">
                        Brak filmów na liście. Dodaj jakieś ;)
                    </div>
                
                </> : <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 mt-6">
                        {movies.map((movie, index) => (
                            <MovieWindow stabilneId={movie.stabilneId} url={movie.url} tytul={movie.tytul} opis={movie.opis} image={movie.plakat} imageBg={movie.plakat2} typ={movie.typ} rok_produkcji={movie.rok_produkcji} ocena_imdb={movie.ocena_imdb} />
                        ))}
                    </div>
                
                </>}
                
                
                </>}
            
            </>
        )
    } else {
      
       

        return (
            <div className="flex gap-4 mt-2 flex-col pb-10">
                <p className="text-xl font-light">Zaloguj się, aby dodawać filmy do Twojej listy i dzielić listę z innym użytkownikiem:</p>
                <LoginWithGoogle version={2}/>

            </div>
           
        )
    }
}

export default FavList