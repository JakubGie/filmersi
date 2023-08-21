"use client"

import { useSession } from "next-auth/react"
import Link from "next/link"
import { FaStar } from "react-icons/fa"
import axios from "axios"
import { useEffect, useState } from "react"

const AddToList = (params) => {
    const { data: session } = useSession()

    const [ check, setCheck ] = useState(false)

    const [ isOnList, setIsOnList ] = useState()

    useEffect(() => {


        if(session && session.user) {
            axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/checkIfOnList/'+params.stabilneId+'/'+session.user.email).then((res) => {
               setIsOnList(res.data)
            })
         }

    

    }, [session, check])

    function addToList(stabilneId) {
        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/addToList/'+params.stabilneId+'/'+session.user.email).then((res) => {
               setCheck(!check)
            })
    }

    function removeFromList(stabilneId) {
        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/removeFromList/'+params.stabilneId+'/'+session.user.email).then((res) => {
               setCheck(!check)
            })
    }

    if(session && session.user) {
        return (
            <>
            
                {typeof isOnList === undefined ? <>
                
                ładowanie...
                
                </> : <>
                
                    {isOnList ? <>
                    
                        <button onClick={() => removeFromList(params.stabilneId)} className="text-white px-5 py-2 text-lg inline-block bg-brand rounded-full font-bold flex gap-2 items-center w-full lg:w-56 justify-center uppercase hover:text-brand hover:bg-white transition">
                            <FaStar/> Usuń z listy
                        </button>
                    
                    </> : <>
                    
                    <button onClick={() => addToList(params.stabilneId)} className="bg-white px-5 py-2 text-lg inline-block text-brand rounded-full font-bold flex gap-2 items-center w-full lg:w-56 justify-center uppercase hover:bg-brand hover:text-white transition">
                        <FaStar/> Dodaj do listy
                    </button>

                    </>}
                
                </>}
            
            
            </>
        )
    } else {
        return (
            <Link href="/twoja-lista" className="bg-white px-5 py-2 text-lg inline-block text-brand rounded-full font-bold flex gap-2 items-center w-full lg:w-56 justify-center uppercase hover:bg-brand hover:text-white transition">
                <FaStar/> Dodaj do listy
            </Link>
        )
    }
}

export default AddToList