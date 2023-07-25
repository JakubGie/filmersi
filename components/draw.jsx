"use client"

import { useState } from "react"
import axios from "axios"
import MovieWindow from "./movieWindow"
import Link from "next/link"
import Image from "next/image"

const Draw = (params) => {

    const [ result, setResult ] = useState()
    const [ loading, setLoading ] = useState()

    function drawMovie() {
        setResult(undefined)
        setLoading(true)
        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/randomMovie/'+params.typ+'/nieanimowany/1/true/all/all/0/1/0').then((res) => {
            setResult(res.data[0])
            setLoading(false)
        })
    }

    return (
        <>
            <div className="flex mt-7 gap-3">
                <div onClick={() => drawMovie()} className="bg-brand text-3xl w-[200px] flex justify-center py-2 rounded-full uppercase font-bold cursor-pointer hover:brightness-125 active:bg-white active:text-brand transition select-none">
                    Losuj
                </div>
                <Link href="/aplikacja" className="bg-white text-brand text-3xl w-[200px] flex justify-center py-2 rounded-full uppercase font-bold cursor-pointer hover:brightness-125 transition select-none">
                    Filtry
                </Link>
            </div>
            
           

            { loading ? <>
            
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

            </> : <> </> }

            { result !== undefined ? <>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 mt-6">
            
                    <MovieWindow url={result.url} tytul={result.tytul} opis={result.opis} image={result.plakat} imageBg={result.plakat2} typ={result.typ} rok_produkcji={result.rok_produkcji} ocena_imdb={result.ocena_imdb} />
            
                </div>

            </> : <></> }

            
        </>
       

          
    )
}

export default Draw