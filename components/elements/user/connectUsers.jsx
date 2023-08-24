"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { useSession } from "next-auth/react"
import Image from "next/image"

const ConnectUsers = (params) => {
    const [ isConnected, setIsConnected ] = useState()

    const [ userField, setUserField ] = useState("")

    const [ loading, setLoading ] = useState(false)

    const [ changeConnectionError, setChangeConnectionError ] = useState("")

    const [ success, setSuccess ] = useState(false)

    const [ check, setCheck ] = useState(false)

    const { data: session } = useSession()

    useEffect(() => {
        axios.get("https://api.filmer.wkbdhkmuzv.cfolks.pl/checkIfConnectionExists/"+params.email).then((res) => {
            setIsConnected(res.data.isconnection)
            setUserField(res.data.user)
        }) 
    }, [check])

    function connectDisconnect(isConnected) {

        setChangeConnectionError("")
        setSuccess(false)
     
        if(isConnected) {
            axios.get("https://api.filmer.wkbdhkmuzv.cfolks.pl/removeListConnection/"+params.email).then((res) => {
                setCheck(!check)
                setUserField("")
            }) 
        } else {
            if(userField === "" || userField === undefined) {
                setChangeConnectionError("Podaj email konta do powiązania")
            } else if(userField === params.email) {
                setChangeConnectionError("Podaj email konta które chcesz powiązać z Twoim kontem")
            } else {
                axios.get("https://api.filmer.wkbdhkmuzv.cfolks.pl/connectListWith/"+params.email+"/"+userField).then((res) => {
                    if(res.data.success === true) {
                        setSuccess(res.data.message)
                        setCheck(!check)
                    } else {
                        setChangeConnectionError(res.data.message)
                    }
                }) 
            }

           

        }
        
        
    } 


    return (
        <>
        
            {typeof isConnected !== 'undefined' ? <>
                                    
                <h2 className="font-bold uppercase text-center">Powiązane konto</h2>
                <input className='outline-none px-5 py-2 rounded-full w-full mt-2 placeholder-gray-500 placeholder:text-sm ' maxlength="25" onChange={(e) => setUserField(e.target.value)} value={userField} placeholder='Podaj email konta, które chcesz powiązać'/>
                <div className="bg-brand text-white py-2 px-4 rounded-full mt-2 uppercase cursor-pointer text-center sm:hover:opacity-90 w-full font-bold" onClick={() => connectDisconnect(isConnected)}>
                    {isConnected ? "Rozwiąż" : "Powiąż"}
                </div>
                <div className="h-[40px] pt-3 flex justify-center items-center">
                    {loading ? <>
                    
                        <div className="w-[30px] h-[30px] shrink-0  relative content-between bg-none">
                            <Image
                                alt={`Ładowanie`}
                                src={'/loading.svg'}
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                    
                    </> : <></>}
                    <div className="text-lg text-red-600 font-semibold">
                        {changeConnectionError}
                    </div>
                    {success !== false ? <>
                    
                        <div className="text-lg text-green-600 font-semibold">
                            {success}
                        </div>
                    
                    </> : <></>}
                </div>
            
            
            </> : <>
                <div className="flex justify-center items-center w-full h-full">
                    <div className="w-[50px] h-[50px] shrink-0  relative content-between bg-none">
                        <Image
                            alt={`Ładowanie`}
                            src={'/loading.svg'}
                            layout='fill'
                            objectFit='contain'
                        />
                    </div>
                </div>
               
            </>}

        </>
    )
}

export default ConnectUsers