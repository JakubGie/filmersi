"use client"

import LoginWithGoogle from "@/components/elements/loginWithGoogle"
import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"

import { BiSolidLike, BiSolidDislike } from "react-icons/bi"
import LikeUnlike from "./likeUnlike"
import axios from "axios"

const Likes = (params) => {

    const { data: session } = useSession()

    const [ loginWindow, setLoginWindow ] = useState(false)

    const [ likes, setLikes ] = useState()
    const [ unLikes, setUnLikes ] = useState()

    const [ likesCount, setLikesCount ] = useState()
    const [ unlikesCount, setUnlikesCount ] = useState()

    useEffect(() => {
            
        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/getLikesUnlikes/'+params.id).then((res) => {
            setLikes(res.data.likes)
            setUnLikes(res.data.unlikes)

            if(res.data.likes !== "") {
                var likresArray = res.data.likes.replaceAll(' ', '')
                likresArray = likresArray .split(',')
                setLikesCount(likresArray.length)
            } else {
                setLikesCount(0)
            }

            if(res.data.unlikes !== "") {
                var unlikresArray = res.data.unlikes.replaceAll(' ', '')
                unlikresArray = unlikresArray .split(',')
                setUnlikesCount(unlikresArray.length)
            } else {
                setUnlikesCount(0)
            }
        })

       
    }, [])

    if(session && session.user) { 

        return (
            <LikeUnlike email={session.user.email} id={params.id} />
        )

    } else {
        return (
            <>
            
                <div className="flex gap-3 text-2xl">
                    {loginWindow ? <>
                        <LoginWithGoogle device="mobile" version={1} />
                    </> : <>
                    
                        <div onClick={() => setLoginWindow(!loginWindow)} className="flex items-center gap-1 cursor-pointer hover:text-brand">
                            <BiSolidLike/> <div className="text-base">{likesCount}</div>
                        </div>
                        <div onClick={() => setLoginWindow(!loginWindow)} className="flex items-center gap-1 cursor-pointer hover:text-brand">
                            <BiSolidDislike/> <div className="text-base">{unlikesCount}</div>
                        </div>
                    
                    </>}
                </div>
            
            </>
        )
    }
   
}

export default Likes