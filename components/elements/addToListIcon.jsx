"use client"

import { useSession } from "next-auth/react"
import { FaStar } from "react-icons/fa"
import axios from "axios"
import { useEffect, useState } from "react"
import { FaRegStar } from "react-icons/fa"
import Image from "next/image"

const AddToListIcon = (params) => {
    const { data: session } = useSession()

    const [ check, setCheck ] = useState(false)

    const [ isOnList, setIsOnList ] = useState()

    useEffect(() => {


        if(session && session.user) {
            setIsOnList(false)
            console.log('https://api.filmer.wkbdhkmuzv.cfolks.pl/checkIfOnList/'+params.stabilneId+'/'+session.user.email)
            axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/checkIfOnList/'+params.stabilneId+'/'+session.user.email).then((res) => {
                console.log(res.data)
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
                
                    <div className="flex justify-center">
                        <div className="h-[55px] w-[55px] bg-white rounded-full mt-5 flex items-center justify-center  text-3xl cursor-pointer">
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
                
                    {isOnList ? <>
                    
                        <div className="flex justify-center">
                            <button onClick={() => removeFromList(params.stabilneId)} className="h-[55px] w-[55px] bg-brand rounded-full mt-5 flex items-center justify-center text-white text-3xl cursor-pointer">
                                <FaStar/>
                            </button>
                        </div>
                    
                    </> : <>
                    
                        <div className="flex justify-center">
                            <button onClick={() => addToList(params.stabilneId)} className="transition h-[55px] w-[55px] bg-white rounded-full mt-5 flex items-center justify-center sm:hover:bg-brand sm:hover:text-white text-brand text-3xl cursor-pointer">
                                <FaRegStar/>
                            </button>
                        </div>

                    </>}
                
                </>}
            
            
            </>
        )
    } else {
        return (
            <div className="flex justify-center">
                <a href="/twoja-lista" className="h-[55px] w-[55px] bg-white rounded-full mt-5 flex items-center justify-center text-brand text-3xl cursor-pointer sm:hover:bg-brand sm:hover:text-white transition">
                    <FaRegStar/>
                </a>
            </div>
        )
    }
}

export default AddToListIcon