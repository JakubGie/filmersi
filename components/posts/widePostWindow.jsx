"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"

import { BiSolidCommentDetail } from "react-icons/bi"
import UserWindow from "./elements/user"
import Image from "next/image"
import Likes from "./elements/likes"



const WidePostWindow = (params) => {
    const [ user, setUser ] = useState()

    useEffect(() => {
        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/getUserInfo/'+params.data.user).then((res) => {
            setUser(res.data)
        })
    }, [])

    return (
        <div className="bg-white text-black px-7 py-6 rounded-lg">
            {typeof user !== 'undefined' ? <>

                <div className="flex flex-col justify-between h-full gap-2">
                    <div>

                        <UserWindow user={user} date={params.data.date} type="small"/>

                        <div className="font-normal text-base pt-5">
                            {params.data.content}
                        </div>

                        <div className="mt-3">
                            <Likes id={params.data.id}/>
                        </div>


                    </div>    
                </div>


                

            

            </> : <>
            
                <div className="w-full flex items-center justify-center h-[140px]">
                    <div className="w-[40px] h-[40px] shrink-0  relative content-between bg-none">
                        <Image
                            alt={`Ładowanie`}
                            src={'/loading.svg'}
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                </div>
                
            </>}

          
        </div>
    )
}

export default WidePostWindow