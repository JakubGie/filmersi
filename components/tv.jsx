"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import MovieWindow from "./movieWindow"
import Image from "next/image"
import NotFound from "./elements/notFound"
import { IoMdRefresh } from "react-icons/io"

export default function Tv() {


    
    const selectType = {
        Nieanimowane: 'nieanimowany',
        Animowane: 'animowany'
    }

    
    const selectGoodRate = {
        'Wszystkie seriale': false,
        'Tylko dobrze oceniane': true
    }

    const selectGenre = {
        'Każdy gatunek': 'all',
        'Akcji': 2,
        'Przygodowy': 3,
        'Horror': 20,
        'Science Fiction': 4,
        'Dreszczowiec': 18,
        'Romans': 13,
        'Dokumentalny': 5,
        'Dramat': 6,
        'Komedia': 7,
        'Sensacyjny': 8,
        'Biograficzny': 9,
        'Familijny': 10,
        'Fantasy': 11,
        'Musical': 12,
        'Wojenny': 14,
        'Sportowy': 15,
        'Kryminał': 16,
        'Muzyczny': 17,
        'Obyczajowy': 19,
        'Western': 21,
        'Erotyczny': 22
    }

    const selectCountry = {
        'Każdy kraj': 'all',
        'Polska': 3,
        'Stany Zjednoczone': 4,
        'Niemcy': 5,
        'Francja': 6,
        'Austria': 7,
        'Włochy': 8,
        'Kanada': 9,
        'Wielka Brytania': 10,
        'Chiny': 11,
        'Japonia': 12,
        'Hiszpania': 18,
        'Holandia': 19,
        'Belgia': 26,
        'Czechy': 28,
        'Korea Południowa': 30
    }

    const selectYear = {
        'Każdy rok produkcji': 1,
        '< 1980r.': 2,
        '1980r. - 1990r.': 3,
        '1990r. - 2000r.': 4,
        '2000r. - 2010r.': 5,
        '2010r. - 2020r.': 6,
        '2020r. <': 7
    }

    const [ movieOrTv, setMovieOrTv ] = useState('Serial')
    const [ type, setType ] = useState("nieanimowany")

    const [ goodRate, setGoodRate ] = useState("false")
    const [ genre, setGenre ] = useState("all")
    const [ country, setCountry ] = useState("all")
    const [ year, setYear] = useState(1)

    const [results, setResults ] = useState()

    const [ isLoading, setIsLoading ] = useState(false)


      const [search, setSearch] = useState(0)

    

    useEffect(() => {
        setIsLoading(true)
        setResults(undefined)
        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/search2/'+movieOrTv+'/'+type+'/'+goodRate+'/'+genre+'/'+country+'/'+year).then((res) => {
            setResults(res.data)
            setIsLoading(false)
        })
    }, [search])


    return (
        <>
        <div className="bg-white mt-4 py-4 rounded-xl px-4 flex items-center text-black justify-between flex-col lg:flex-row">
            <div className="flex gap-2 flex-wrap">
                <select className="select" value={type} onChange={e => setType(e.target.value)}>
                    {Object.entries(selectType).map(c => (
                    <option className="option" value={c[1]}>{c[0]}</option>
                    ))}
                </select>
                <select className="select" value={goodRate} onChange={e => setGoodRate(e.target.value)}>
                    {Object.entries(selectGoodRate).map(c => (
                    <option className="option" value={c[1]}>{c[0]}</option>
                    ))}
                </select>
                <select className="select" value={genre} onChange={e => setGenre(e.target.value)}>
                    {Object.entries(selectGenre).map(c => (
                    <option className="option" value={c[1]}>{c[0]}</option>
                    ))}
                </select>
                <select className="select" value={country} onChange={e => setCountry(e.target.value)}>
                    {Object.entries(selectCountry).map(c => (
                    <option className="option" value={c[1]}>{c[0]}</option>
                    ))}
                </select>
                <select className="select" value={year} onChange={e => setYear(e.target.value)}>
                    {Object.entries(selectYear).map(c => (
                    <option className="option" value={c[1]}>{c[0]}</option>
                    ))}
                </select>
            </div>
            <div onClick={() => setSearch(search+1)} className="bg-brand text-xl px-4 py-2 lg:py-1 text-white rounded-full font-bold cursor-pointer hover:bg-black w-full lg:w-auto text-center lg:text-left mt-2 lg:mt-0">
                Szukaj
            </div>
        </div>
        {year === 1 && genre === "all" && country === "all" ? <>
        
            <div className="mt-5 flex justify-center md:justify-start">
                <div onClick={() => setSearch(search+1)} className="flex text-lg  cursor-pointer transition h-[38px] items-center gap-1 hover w-[125px]  active:text-brand md:bg-black md:hover:bg-zinc-900 text-white justify-center rounded-full  select-none">
                    <IoMdRefresh className="text-2xl"/> odśwież
                </div>
            </div>

        </> : <></>}
        {isLoading ? <>
            <div className="py-8 mt-6">
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
        </> : <></>}
            {results !== undefined ? <>
            
                {results.length === 0 ? <div className="mt-4">
                
                    <NotFound/>

                </div> : <></>}

            </> : <></>}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
               
                {results !== undefined ? <>
                    {results.map((movie, index) => (
                        <MovieWindow url={movie.url} tytul={movie.tytul} opis={movie.opis} image={movie.plakat} imageBg={movie.plakat2} typ={movie.typ} rok_produkcji={movie.rok_produkcji} ocena_imdb={movie.ocena_imdb} />
                    ))}
                </> : <></>}

               
        
            </div>
        </>
    )
}