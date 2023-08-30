"use client"

import { useEffect, useState } from "react"
import { BiSolidLike, BiSolidDislike } from "react-icons/bi"
import axios from "axios"
import Image from "next/image"

const LikeUnlike = (params) => {

    const [ likes, setLikes ] = useState()
    const [ unLikes, setUnLikes ] = useState()

    const [ isLiked, setIsLiked ] = useState()
    const [ isUnLiked, setIsUnLiked ] = useState()

    const [ likesCount, setLikesCount ] = useState()
    const [ unlikesCount, setUnlikesCount ] = useState()

    const [ userId, setUserId ] = useState()

    const [ checkLikes, setCheckLikes ] = useState(false)

    useEffect(() => {
        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/getUserId/'+params.email).then((res) => {
            
            setUserId(res.data)
            console.log(res.data)
        
        })
    }, [])

    useEffect(() => {
        if(typeof userId !== 'undefined') {
            
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
    
                
               
    
                var useridContainer = "|"+userId+"|"
    
                if(res.data.likes.includes(useridContainer)) {
                    setIsLiked(true)
                } else {
                    setIsLiked(false)
                }

                if(res.data.unlikes.includes(useridContainer)) {
                    setIsUnLiked(true)
                } else {
                    setIsUnLiked(false)
                }
    
            })


        }

       
    }, [userId, checkLikes])

    function addLike() {
        setLikes(undefined)
        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/like/addLike/'+userId+"/"+params.id).then((res) => {
            setCheckLikes(!checkLikes)
        })
    }

    function removeLike() {
        setLikes(undefined)
        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/like/removeLike/'+userId+"/"+params.id).then((res) => {
            setCheckLikes(!checkLikes)
        })
    }

    function addUnlike() {
        setLikes(undefined)
        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/like/addUnlike/'+userId+"/"+params.id).then((res) => {
            setCheckLikes(!checkLikes)
        })
    }

    function removeUnlike() {
        setLikes(undefined)
        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/like/removeUnlike/'+userId+"/"+params.id).then((res) => {
            setCheckLikes(!checkLikes)
        })
    }

    return (
        <>
            {typeof likes === 'undefined' || typeof unLikes === 'undefined' ? <>
            
                <div className="w-[24px] h-[24px] shrink-0  relative content-between bg-none ml-5">
                    <Image
                        alt={`Ładowanie`}
                        src={'/loading.svg'}
                        layout='fill'
                        objectFit='contain'
                    />
                </div>
            
            </> : <>
            
                <div className="flex gap-3 text-2xl">
                    {isLiked ? <>
                    
                        <div onClick={() => removeLike()} className="flex items-center gap-1 cursor-pointer text-brand">
                            <BiSolidLike/> <div className="text-base">{likesCount}</div>
                        </div>
                    
                    </> : <>
                    
                        <div onClick={() => addLike()} className="flex items-center gap-1 cursor-pointer hover:text-brand">
                            <BiSolidLike/> <div className="text-base">{likesCount}</div>
                        </div>
                    
                    </>}

                    {isUnLiked ? <>
                    
                    <div onClick={() => removeUnlike()} className="flex items-center gap-1 cursor-pointer text-brand">
                        <BiSolidDislike/> <div className="text-base">{unlikesCount}</div>
                    </div>
                    
                    </> : <>

                    <div onClick={() => addUnlike()} className="flex items-center gap-1 cursor-pointer hover:text-brand">
                        <BiSolidDislike/> <div className="text-base">{unlikesCount}</div>
                    </div>
                    
                    </>}
                    
                   
                </div>
            
            </>}
            
        </>
    )
}

export default LikeUnlike