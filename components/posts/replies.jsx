"use client"

import axios from "axios"
import { useEffect, useState } from "react"
import WidePostWindow from "./widePostWindow"
import Image from "next/image"
import Reply from "./reply"
import Likes from "./elements/likes"

const Replies = (params) => {

    const [ replies, setReplies ] = useState()

    const [ input, setInput ] = useState("")

    const [ checkReplies, setCheckReplies ] = useState(true)

    const [ limit, setLimit ] = useState(10)

    useEffect(() => {
        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/postResponses/'+params.id+'/'+limit).then((res) => {
            setReplies(res.data)
        })
    }, [checkReplies])

    const [ alert, setAlert ] = useState()
    const [ success, setSuccess ] = useState()
    const [ loading, setLoading ] = useState(false)

    const [ userEmail, setUserEmail ] = useState()

    const [ loading2, setLoading2 ] = useState(false)
    const [ noMore, setNoMore ] = useState(false)

    function loadMore() {
        setLoading2(true)
        
        var newLimit = limit + 10

        axios.get('https://api.filmer.wkbdhkmuzv.cfolks.pl/postResponses/'+params.id+'/'+newLimit).then((res) => {
            setReplies(res.data)
            setLoading2(false)
            if(res.data.length < newLimit) {
                setNoMore(true)
            }
            setLimit(newLimit)
        })
    }

 

   


    return (
        <>
            <div className="py-4">
                <div className="mb-4 px-4 py-3 sm:w-[250px] flex items-center justify-center rounded-full bg-white text-black">
                    <Likes id={params.id}/>
                </div>
                
                <Reply input={input} setInput={setInput} alert={alert} setAlert={setAlert} success={success} setSuccess={setSuccess} loading={loading} setLoading={setLoading} id={params.id} setCheckReplies={setCheckReplies} checkReplies={checkReplies} />

                {typeof replies === 'undefined' ? <>
                    <div className="py-3 flex items-center justify-center">
                        <div className="w-[40px] h-[40px] shrink-0  relative content-between bg-none">
                            <Image
                                alt={`Ładowanie`}
                                src={'/loading.svg'}
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                    </div>
                   
                </> : <>
                
                    {replies.length === 0 ? <>
                    
                    Brak komentarzy
                    
                    </> : <>
                        
                        <div className="flex flex-col gap-4">
                            {replies.map((reply) => (
                                <WidePostWindow data={reply} />
                            ))}
                        </div>

                        {loading2 ? <>
                
                            <div className="flex w-full items-center justify-center h-[140px]">
                                <div className="w-[40px] h-[40px] shrink-0  relative content-between bg-none">
                                    <Image
                                        alt={`Ładowanie`}
                                        src={'/loading.svg'}
                                        layout='fill'
                                        objectFit='contain'
                                    />
                                </div>
                            </div>
                        
                        </> : <></>}

                        <div onClick={() => loadMore()} className="w-full text-center uppercase sm:hover:text-brand cursor-pointer transition font-semibold pt-5 pb-10">
                            Załaduj więcej
                        </div>

                        {noMore ? <>
                        
                            <div className="w-full text-center uppercase transition font-semibold pb-10">
                                To już wszystkie odpowiedzi ;(
                            </div>
                        
                        </> : <></>}
                       

                    </>}

                   
                

                </>}


            </div>
        </>
    )
}

export default Replies