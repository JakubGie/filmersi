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
                
                <div className="flex gap-2 items-center">
                    Lista powiązana z <b className="text-red-400"><Link href="/user" >{isConnected.username === "" ? isConnected.user : isConnected.username}</Link></b> <FaHeart/>
                </div>
                   
                
                </> : <>
                
                <div className="flex gap-2 items-center text-red-400">
                    <b className="text-red-400"><Link href="/user" >Dziel listę z innym kontem</Link></b>
                </div>
                
                </>}
            
            
            </> : <>

            
            </>}
        
        </>
    )

}

export default ConnectedInfo