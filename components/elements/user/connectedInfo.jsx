"use client"

import { useState } from "react"
import axios from "axios"
import Link from "next/link"

import { FaHeart } from "react-icons/fa"


const ConnectedInfo = (params) => {

    const [ isConnected, setIsConnected ] = useState()

    axios.get("https://api.filmer.wkbdhkmuzv.cfolks.pl/checkIfConnectionExists/"+params.email).then((res) => {
            setIsConnected(res.data)
        }) 

    return (
        <>
        
            {typeof isConnected !== 'undefined' ? <>
            
            
                {isConnected.isconnection === true ? <>
                
                <div className="flex gap-2  flex-col justify-start  sm:flex-row  items-start">
                    Lista powiązana z <span className="flex gap-2 items-center"><b className="text-red-400"><Link href="/user" >{isConnected.username === "" ? isConnected.user : isConnected.username}</Link></b> <FaHeart/></span>
                </div>
                   
                
                </> : <>
                
                <div className="flex gap-2 items-center text-red-400">
                    <b className="text-red-400"><Link href="/user" >Dziel listę z innym użytkownikiem</Link></b>
                </div>
                
                </>}
            
            
            </> : <>

            
            </>}
        
        </>
    )

}

export default ConnectedInfo