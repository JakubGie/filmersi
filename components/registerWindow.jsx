"use client"

import { useEffect, useState } from "react"
import { FaLock } from "react-icons/fa"



const RegisterWindow = () => {

    const [ shown, setShonw ] = useState(false)

    function showWindow(){
        setShonw(true)
    }

    useEffect(() => {
        setTimeout(showWindow, 15000)
    }, [])

    return (
        <>
        
            {shown ? <>
            
                <div className="fixed left-0 top-0 w-full h-screen z-20 register-window items-center flex justify-center">
                    <div className="w-[300px] sm:w-[350px]">
                        <a href="/rejestracja/find-vod" rel="nofollow" className="bg-black border-2 border-brand flex justify-between text-white font-semibold  rounded-lg items-center px-5 flex-col sm:flex-row py-5 sm:py-0 gap-3 sm:gap-0">
                            <FaLock className="text-[50px] sm:text-[150px]"/>
                            <p className="pl-4">Dostęp do źródeł oglądania tylko dla zarejestrowanych użytkowników Find Vod</p>
                        </a>
                        <a href="/rejestracja/find-vod" className="bg-brand font-bold w-full mt-3 text-center py-2 flex  items-center justify-center rounded-full text-2xl px-4 hover:bg-white hover:text-black transition" rel="nofollow">
                            Zarejestruj się
                        </a>
                    </div>
                </div>
            
            </> : <></>}

        </>
    )
}

export default RegisterWindow