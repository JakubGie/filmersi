"use client"

import { useEffect, useState } from "react"
import axios from "axios"
import PostWindow from "./postWindow"
import Image from "next/image"

import { FaHotjar, FaClock } from "react-icons/fa"
import Link from "next/link"

const ForumWindow = () => {

    const [ posts, setPosts ] = useState()
    const [ limit, setLimit ] = useState(9)
    const [ mode, setMode ] = useState("trending")
    const [ loading, setLoading ] = useState(false)
    const [ loading2, setLoading2 ] = useState(false)

    const [ noMore, setNoMore ] = useState(false)

    function loadMore() {
        setLoading2(true)
        
        var newLimit = limit + 9

        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/getPosts/'+mode+'/'+newLimit).then((res) => {
            setPosts(res.data)
            setLoading2(false)
            if(res.data.length < newLimit) {
                setNoMore(true)
            }
            setLimit(newLimit)
        })
    }

    useEffect(() => {
        setLoading(true)
        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/getPosts/'+mode+'/'+limit).then((res) => {
            setPosts(res.data)

            setLoading(false)
        })
    }, [mode])


    function setModeF(mode) {
        setMode(mode)

        
    }

   

    return (
        <>
            <div className="flex gap-3 flex-wrap">
                <div onClick={() => setMode('trending')} className={`${mode === "trending" ? "bg-brand" : "bg-white text-brand"} w-[170px] rounded-full px-4 py-2 flex gap-2 uppercase font-bold items-center justify-center cursor-pointer`}>
                    <FaHotjar/> Popularne
                </div>  
                <div onClick={() => setMode('newest')} className={`${mode === "newest" ? "bg-brand" : "bg-white text-brand"} bg-brand w-[170px] rounded-full px-4 py-2 flex gap-2 uppercase font-bold items-center justify-center cursor-pointer`}>
                    <FaClock/> Najnowsze
                </div>  
                <Link href="/post/dodaj" className={`bg-white text-brand w-[40px] rounded-full px-4 py-2 flex gap-2 uppercase font-bold items-center justify-center cursor-pointer`}>
                    +
                </Link> 
            </div>

            {loading ? <>
            
                <div className="flex w-full items-center justify-center h-[140px]">
                    <div className="w-[40px] h-[40px] shrink-0  relative content-between bg-none">
                        <Image
                            alt={`Ładowanie`}
                            src={'/loading.svg'}
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                </div>
            
            </> : <>
            
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 py-8">
            
                    {typeof posts !== 'undefined' ? <>
                    
                        {posts.map((post) => (
                            <PostWindow data={post}/>
                        ))}
                    
                    </> : <></>}

                </div>

                {loading2 ? <>
                
                    <div className="flex w-full items-center justify-center h-[140px]">
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

                <div onClick={() => loadMore()} className="w-full text-center uppercase sm:hover:text-brand cursor-pointer transition font-semibold pb-10">
                    Załaduj więcej
                </div>

                {noMore ? <>
                
                    <div className="w-full text-center uppercase transition font-semibold pb-10">
                        To już wszystkie posty ;(
                    </div>
                
                </> : <></>}
            
            </>}

          

        
        </>
    )
}

export default ForumWindow