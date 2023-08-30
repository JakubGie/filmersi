"use client"

import { FaReply } from "react-icons/fa"
import { useSession } from "next-auth/react"
import { useEffect, useState } from "react"
import LoginWithGoogle from "../elements/loginWithGoogle"
import axios from "axios"
import Image from "next/image"

const Reply = (params) => {
    
    const { data: session } = useSession()

    const [ clearTextArea, setClearTextArea ] = useState(false)

    const [ loginShowned, setLoginShowned ] = useState(false)

    useEffect(() => {
        document.getElementById("textarea").value = ""

    }, [clearTextArea])

    function refreshInput() {
        params.setAlert(undefined)
        params.setSuccess(undefined)
    }

    function reply(email) {
        params.setAlert(undefined)
        params.setSuccess(undefined)


        if(params.input === "") {
            params.setAlert("Odpowiedź nie może być pusta")
        } else {

            params.setLoading(true)

            axios({
                method: 'post',
                url: 'https://api.filmer.wkbdhkmuzv.cfolks.pl/reply',
                data: {
                  postId: params.id,
                  content: params.input,
                  userEmail: email

                }
              }).then((res) => {
                    if(res.data.success) {
                        params.setSuccess(res.data.alert)
                        params.setInput("")
                        setClearTextArea(!clearTextArea)
                        params.setCheckReplies(!params.checkReplies)
                    } else {
                        params.setAlert(res.data.alert)
                    }

                    params.setLoading(false)
              })

        }
    }



    if(session && session.user) {
        return (
            <div className="mb-4 px-4 py-4 bg-zinc-800  rounded-lg">
                <textarea id="textarea" onChange={(e) => params.setInput(e.target.value)} className="w-full bg-transparent outline-none bg-zinc-700 rounded-xl px-4 py-4" placeholder="Napisz coś">{params.input}</textarea>
             
                {params.loading ? <>
                
                    <div className="bg-white text-black w-full py-2 mt-2 font-bold rounded-full flex items-center justify-center transition gap-1">
                        <div className="w-[25px] h-[25px] shrink-0  relative content-between bg-none">
                            <Image
                                alt={`Ładowanie`}
                                src={'/loading.svg'}
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                    </div>
                
                </> : <>
                
                    {typeof params.success === 'undefined' ? <>

                        <div onClick={() => reply(session.user.email)} className="bg-brand text-white w-full py-2 mt-2 font-bold rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition gap-1">
                            <FaReply/> Odpowiedz
                        </div>
                    
                    </> : <>
                    
                        <div onClick={() => refreshInput()} className="bg-green-500 text-white w-full py-2 mt-2 font-bold rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition gap-1">
                            {params.success}
                        </div>

                    </>}

                    {typeof params.alert !== 'undefined' ? <>
                    
                    <div className="px-6 py-2 rounded-full mt-4 font-bold uppercase  bg-red-500 w-full flex justify-center items-center">
                        {params.alert}
                    </div>

                    </> : <></>}

                  

                </>}
            </div>
        )
    } else {
        return (
            <>
            
                {loginShowned ? <>
                
                    <div className="mb-4 px-4 py-4 bg-zinc-800 h-[167px] flex items-center justify-center rounded-lg flex-col gap-3">
                        <div className="text-base">
                            Zaloguj się, aby odpowiedzieć
                        </div>
                        <LoginWithGoogle/>
                    </div>

                </> : <>
                
                <div className="mb-4 px-4 py-4 bg-zinc-800  rounded-lg">
                    <textarea id="textarea" onChange={(e) => params.setInput(e.target.value)} className="w-full bg-transparent outline-none bg-zinc-700 rounded-xl px-4 py-4" placeholder="Napisz coś">{params.input}</textarea>
                    <div onClick={() => setLoginShowned(true)} className="bg-brand text-white w-full py-2 mt-2 font-bold rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition gap-1">
                        <FaReply/> Odpowiedz
                    </div>
                </div>
                
                </>}
            
            </>
        )
    }

    
}

export default Reply