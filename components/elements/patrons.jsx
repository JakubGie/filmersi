"use client"


import { FaHeart, FaCrown } from "react-icons/fa"
import axios from "axios"
import { useEffect, useState } from "react"

const Patron = (params) => {
    return (
        <div className="bg-white text-black rounded-full flex sm:justify-center items-center font-bold px-5 gap-2 py-2 w-full sm:w-auto justify-between sm:justify-center">
            <div className="flex gap-2">
                {params.index<4 ? <><FaCrown className={`text-2xl ${params.index === 1 ? "text-amber-500" : ""} ${params.index === 2 ? "text-zinc-500" : ""} ${params.index === 3 ? "text-orange-900" : ""}`}/></> : <></>}{params.name}
            </div>
            <div className="bg-green-700 text-white px-3 py-1 rounded-full">
                {params.amount}zł<span className="text-sm font-medium">/msc</span>
            </div>
        </div>
    )
}

const Patrons = () => {

    const [ patreons, setPatreons ] = useState()
    const [ isFull, setIsFull ] = useState(false)

   /* useEffect(() => {
        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/getPatrons').then((res) => {
            setPatreons(res.data)
        })
    }, [])*/

    return null

    /*return (
        <>
        
            <div className="flex pt-5 gap-3 flex-wrap">
                <div className="bg-red-600 font-bold w-full sm:w-auto text-white px-5 py-2 text-lg rounded-full flex gap-2 items-center">
                    <FaHeart/> Nasi patroni:
                </div>
                {typeof patreons !== 'undefined' ? <>

                {patreons.length <= 3 ? <>
                        
                        {patreons.map((patron, index) => (
                            <Patron name={patron.name} index={index+1} amount={patron.amount} />
                        ))}
                        
                        </> : <>
                        

                        {isFull ? <>
                        
                            {patreons.map((patron, index) => (
                                <Patron name={patron.name} index={index+1} amount={patron.amount} />
                            ))}
                        
                        </> : <>
                        
                            {patreons.map((patron, index) => (
                                <>

                                    
                                    
                                    {index <=2 ? <Patron name={patron.name} index={index+1} amount={patron.amount} /> : <></>}
                                    {index === 3 ? <>
                                    
                                        <div onClick={() => setIsFull(!isFull)} className="bg-black font-bold text-white px-2 py-2 text-lg rounded-full flex gap-2 items-center cursor-pointer uppercase hover:text-brand transition">
                                            Rozwiń
                                        </div>

                                    </> : <></>}
                                </>
                            ))}
                        
                        
                        </>}
                        
                       
                        
                        
                        
                        </>}
                
               
                
                </> : <></>}
            </div>
            <a href="/patronite" target="_blank" className="mb-5 text-red-600 bg-white text-lg px-5 py-2 rounded-full mt-3 flex items-center justify-center gap-2 font-bold hover:bg-red-600 hover:text-white transition">
                <FaHeart/> Zostań patronem
            </a>
        
        </>
    )*/
}

export default Patrons