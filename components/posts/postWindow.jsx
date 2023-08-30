"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import axios from "axios"

import { BiSolidCommentDetail } from "react-icons/bi"
import UserWindow from "./elements/user"
import Image from "next/image"
import Likes from "./elements/likes"



const PostWindow = (params) => {
    const [ user, setUser ] = useState()

    const [ howManyComments, setHowManyComments ] = useState()

    useEffect(() => {
        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/getUserInfo/'+params.data.user).then((res) => {
            setUser(res.data)
        })

        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/howManyResponses/'+params.data.id).then((res) => {
            setHowManyComments(res.data)
        })
    }, [])

    return (
        <div className="bg-white text-black px-7 py-5 rounded-lg transition">
            {typeof user !== 'undefined' ? <>

                <div className="flex flex-col justify-between h-full gap-5">
                    <Link href={`/post/${params.data.url}`}>

                        <UserWindow user={user} date={params.data.date}  type="small"/>

                        <div className="font-medium text-xl pt-4">
                            {params.data.title}
                        </div>


                    </Link>    

                    <div>
                      
                        <div className="flex justify-between text-3xl">
                            <div>
                                <Likes id={params.data.id}/>
                            </div>
                            <Link href={`/post/${params.data.url}`} className="flex gap-2 items-center hover:text-brand">
                                {typeof howManyComments !== 'undefined' ? <div className="text-lg">{howManyComments}</div> : <></>} <BiSolidCommentDetail/>
                            </Link>
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

export default PostWindow