"use client"

import { useEffect, useState } from "react"
import { FaSearch } from "react-icons/fa"
import { useRouter, usePathname } from 'next/navigation'


const Input = (params) => {
    const router = useRouter()
    const pathname = usePathname()
    const [ search, setSearch ] = useState()

    useEffect(() => {
        if(pathname.includes("/szukaj/")) {
            var newSearch = pathname.replace('/szukaj/', '')
            newSearch = newSearch.replaceAll('%20', ' ')

            const replaceArray = [
                { original: "%C4%85", changeTo: "ą" },
                { original: "%C4%84", changeTo: "Ą" },
                { original: "%C4%87", changeTo: "ć" },
                { original: "%C4%86", changeTo: "Ć" },
                { original: "%C4%99", changeTo: "ę" },
                { original: "%C4%98", changeTo: "Ę" },
                { original: "%C5%82", changeTo: "ł" },
                { original: "%C5%81", changeTo: "Ł" },
                { original: "%C5%84", changeTo: "ń" },
                { original: "%C5%83", changeTo: "Ń" },
                { original: "%C3%B3", changeTo: "ó" },
                { original: "%C3%93", changeTo: "Ó" },
                { original: "%C5%9B", changeTo: "ś" },
                { original: "%C5%9A", changeTo: "Ś" },
                { original: "%C5%BA", changeTo: "ź" },
                { original: "%C5%B9", changeTo: "Ź" },
                { original: "%C5%BC", changeTo: "ż" },
                { original: "%C5%BB", changeTo: "Ż" }
            ]

            replaceArray.map((single) => {
                newSearch = newSearch.replaceAll(single.original, single.changeTo)
            })

           setSearch(newSearch)
        }
    }, [pathname])

    function searchQuery(e) {
        console.log(search)
        e.preventDefault()
        if(search!==undefined) {
            router.push('/szukaj/'+search)
        }
    }


    return (
        <form onSubmit={searchQuery} className='bg-white text-black w-full rounded-full flex items-center'>
     
                <div className={`w-12 flex justify-center cursor-pointer ${params.tall ? "h-[35px] flex items-center" : ""}`} onClick={searchQuery}>
                    <FaSearch/>
                </div>
                <input className='outline-none w-3/4 bg-white placeholder-gray-500' onChange={(e) => setSearch(e.target.value)} value={search} placeholder='Szukaj filmów i seriali'/>
          
            
        </form>
    )
    
    
    
}

export default Input