"use client"

import BgImage from "@/components/bgImage"
import axios from "axios"
import { useEffect, useRef, useState } from "react"
import MovieWindow from "@/components/movieWindow"
import Image from "next/image"
import Link from "next/link"
import Patrons from "./elements/patrons"




const MatchMovies = () => {
    const [ input1, setInput1 ] = useState("")
    const [ movie1, setMovie1 ] = useState()
    const [ input2, setInput2 ] = useState("")
    const [ movie2, setMovie2 ] = useState()


    const [ loading1, setLoading1 ] = useState(false)
    const [ loading2, setLoading2 ] = useState(false)

    const [ results, setResults ] = useState()

    const ref1 = useRef(null)
    const ref2 = useRef(null)

    const [ searchResult, setSearchResult ] = useState()


    useEffect(() => {
        if(input1 !== "") {
            setLoading1(true)
            setSearchResult(undefined)
            axios.get("https://api.filmer.wkbdhkmuzv.cfolks.pl/search/"+input1).then((res) => {
                setLoading1(false)
                setSearchResult({
                    data: res.data,
                    input: 1
                })
            })
        } else {
            setSearchResult(undefined)
        }
    }, [input1])

    useEffect(() => {
        if(input2 !== "") {
            setLoading1(true)
            axios.get("https://api.filmer.wkbdhkmuzv.cfolks.pl/search/"+input2).then((res) => {
                setLoading1(false)
                setSearchResult({
                    data: res.data,
                    input: 2
                })
            })
        } else {
            setSearchResult(undefined)
        }
    }, [input2])

    function setMovie(whichMovie, data) {
        if(whichMovie === 1) {
            setMovie1(data)
            setInput1("")
        } else {
            setMovie2(data)
            setInput2("")
        }
    }

    useEffect(() => {
        if(typeof movie1 !== 'undefined' && typeof movie2 !== 'undefined') {
            setLoading2(true)
            axios.get("https://api.filmer.wkbdhkmuzv.cfolks.pl/matchMovies/"+movie1.id+"/"+movie2.id).then((res) => {
                setLoading2(false)
                setResults(res.data)
            })
        }
    }, [movie1, movie2])

    return (
        
        <div className="w-full relative">

            <BgImage url="https://www.themoviedb.org/t/p/original/6cuQQpc88L74gpfosjKcPEweuY4.jpg"  type="hideOnMobile"/>

            <div className="absolute w-full">

                <div className="container mx-auto px-5">

                    <div className="grid md:grid-cols-2 items-center gap-7 py-7 sm:py-14">
                        <div className="flex gap-2 flex-col md:w-[400px]">
                            <h1 className="text-2xl sm:text-3xl font-bold pb-2">Co obejrzeć z dziewczyną / chłopakiem?</h1>
                            <p className="text-lg">Wybierzcie po jednym filmie, a my na ich podstawie pokażemy Wam nasze rekomendacje.</p>
                            <Link href="/twoja-lista" className="text-red-400 font-semibold">Stwórz wspólną listę filmów</Link>
                        </div>

                        <div className="flex flex-col text-center">
                            <div className="flex text-center w-full mb-3">
                                <div className="w-[40%] flex justify-center">
                                    <div className="sm:w-[200px] flex flex-col">
                                        <div onClick={() => ref1.current.focus()} className="cursor-pointer bg-zinc-800 rounded-lg h-[180px]  sm:h-[260px] flex items-center justify-center uppercase text-2xl font-bold text-zinc-500 overflow-hidden hover:opacity-80 transition">
                                            
                                            {movie1 === undefined ? <>Film 1</> : <>
                                                <img
                                                    alt={``}
                                                    src={movie1.plakat.replace('original', 'w342')}
                                                    className="w-full"
                                                />
                                            </>}
                                        
                                        </div>
                                        <div className="flex items-center justify-center bg-white rounded-lg text-black mt-4">
                                            <input ref={ref1} className='outline-none px-5 py-2 rounded-full bg-transparent w-full placeholder-gray-500' maxlength="25" onChange={(e) => setInput1(e.target.value)} value={input1} placeholder='Podaj tytuł filmu'/>
                                        
                                        </div>
                                    </div>
                                
                                </div>
                                <div className="w-[20%] text-5xl flex items-center justify-center">
                                    +
                                </div>
                                <div className="w-[40%] flex justify-center">
                                    <div className="sm:w-[200px] flex flex-col">
                                        <div onClick={() => ref2.current.focus()} className="cursor-pointer bg-zinc-800 rounded-lg h-[180px]  sm:h-[260px] flex items-center justify-center uppercase text-2xl font-bold text-zinc-500 overflow-hidden hover:opacity-80 transition">
                                            
                                            {movie2 === undefined ? <>Film 2</> : <>
                                                <img
                                                    alt={``}
                                                    src={movie2.plakat.replace('original', 'w342')}
                                                    className="w-full"
                                                />
                                            </>}
                                        
                                        </div>
                                        <div className="flex items-center justify-center bg-white rounded-lg text-black mt-4">
                                            <input ref={ref2} className='outline-none px-5 py-2 rounded-full bg-transparent w-full placeholder-gray-500' maxlength="25" onChange={(e) => setInput2(e.target.value)} value={input2} placeholder='Podaj tytuł filmu'/>
                                        
                                        </div>
                                    </div>
                                
                                </div>
                            </div>

                            <div className="relative">
                                {typeof searchResult !== 'undefined' ? <>
                                            
                                    <div className="absolute left-0 sm:top-0 bg-white rounded-lg text-black text-left text-lg w-full overflow-hidden z-20">
                                        {searchResult.data.map((movie) => (
                                            <div className="py-3 hover:bg-brand transition px-4 flex gap-3 items-center cursor-pointer" onClick={() => setMovie(searchResult.input, movie)}>
                                                <img src={movie.plakat.replace('original', 'w185')} className="w-[30px]"/>
                                                <div className="flex flex-col justify-center">
                                                    <div>{movie.tytul}</div>
                                                    <div className="text-sm">{movie.rok_produkcji}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {loading1 ? <>
                                    
                                        <div className="absolute left-0 sm:top-0 bg-white rounded-lg text-black text-left text-lg w-full overflow-hidden z-20">
                                            <div className="py-3 hover:bg-brand transition px-4 flex gap-3 items-center cursor-pointer justify-center">
                                                <div className="w-[40px] h-[40px] shrink-0  relative content-between bg-none">
                                                    <Image
                                                        alt={`Ładowanie`}
                                                        src={'/loading.svg'}
                                                        layout='fill'
                                                        objectFit='contain'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </> : <></>}
                                
                                </> : <></>}
                                        </div>
                          
                           
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
                        { typeof results !== 'undefined' ? <>
                        
                            {results.map((movie) => (
                                <> 
                                    <MovieWindow stabilneId={movie.stabilneId} url={movie.url} tytul={movie.tytul} opis={movie.opis} image={movie.plakat} imageBg={movie.plakat2} typ={movie.typ} rok_produkcji={movie.rok_produkcji} ocena_imdb={movie.ocena_imdb} /></>
                                ))}

                           
                            
                        </> : <>
                        
                        
                                            
                        </>} 


                       
                    </div>

                    { loading2 ? <>
                            
                            <div className="w-full flex justify-center">
                                <div className="w-[40px] h-[40px] shrink-0  relative content-between bg-none">
                                    <Image
                                        alt={`Ładowanie`}
                                        src={'/loading.svg'}
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                            </div>
                        
                        </> : <></>}
                      
                 

                        <Patrons/>
                </div>

              

            </div>

        </div>

    )
}

export default MatchMovies