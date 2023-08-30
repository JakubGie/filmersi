"use client"

import { useState } from "react"

import axios from "axios"

import { redirect } from 'next/navigation'
import Link from "next/link"

const AddPostInput = (params) => {

    const [ input, setInput ] = useState("")

    const [ input2, setInput2 ] = useState("")

    const [ alert, setAlert ] = useState()

    const [ success, setSuccess ] = useState()

    const [ loading, setLoading ] = useState(false)

    const [ link, setLink] = useState("/")

   

    function addPst(email) {
        setAlert(undefined)
        setSuccess(undefined)
        if(input === "" || input2 === "") {
            setAlert("Wypełnij wszystkie pola")
        } else {
            setLoading(true)
            axios({
                method: 'post',
                url: 'https://api.filmer.wkbdhkmuzv.cfolks.pl/addPost',
                data: {
                  title: input,
                  content: input2,
                  userEmail: email

                }
              }).then((res) => {
                    if(res.data.success) {
                        setSuccess(res.data.alert)
                        setInput("")
                        setInput2("")
                        setLink('/post/'+res.data.url)
                        
                    } else {
                        setAlert(res.data.alert)
                    }

                    setLoading(false)
              })

        }
    }

    return (
        <div className="mb-4 px-4 py-4 bg-zinc-800  rounded-lg mt-5">
            <input onChange={(e) => setInput(e.target.value)} type="text" value={input} placeholder="Nagłówek" className="w-full bg-transparent outline-none bg-zinc-700 rounded-xl px-4 py-4"/>
            <textarea id="textarea" onChange={(e) => setInput2(e.target.value)} className="w-full bg-transparent outline-none bg-zinc-700 rounded-xl px-4 py-4 mt-4" placeholder="Napisz coś">{input2}</textarea>
            
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
            
             

                {typeof success === 'undefined' ? <>

                    <div onClick={() => addPst(params.email)} className="bg-brand text-white w-full py-2 mt-2 font-bold rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition gap-1">
                        + Dodaj
                    </div>

                    </> : <>

                    <Link href={link} className="bg-green-500 text-white w-full py-2 mt-2 font-bold rounded-full flex items-center justify-center cursor-pointer hover:opacity-90 transition gap-1">
                        Zobacz dodany post
                    </Link>

                </>}

                {typeof alert !== 'undefined' ? <>
                    
                    <div className="px-6 py-2 rounded-full mt-4 font-bold uppercase  bg-red-500 w-full flex justify-center items-center">
                        {alert}
                    </div>

                    </> : <></>}
            
            </>}
          
        </div>
    )
}

export default AddPostInput