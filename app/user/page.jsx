"use client"

import axios from "axios"
import { useSession } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react"
import Image from "next/image"
import UserName from "@/components/elements/userName"
import ConnectUsers from "@/components/elements/user/connectUsers"
import LoginWithGoogle from "@/components/elements/loginWithGoogle"

const User = () => {

    const router = useRouter()

    const [ newUserName, setNewUserName ] = useState("")

    const { data: session } = useSession()

    const [ changeNameError, setChangeNameError ] = useState()

    const [ loading, setLoading ] = useState(false)

    const [ success, setSuccess ] = useState(false)

    

    const [ checkUsername, setCheckUsername ] = useState("1")

    const [ checkNm, setcheckNm] = useState(1)

    function changeUserName() {
        setSuccess(false)
        if(newUserName==="") {
            setChangeNameError("Nazwa nie może być pusta")
        } else {
            setChangeNameError()
            setLoading(true)
            axios.get("https://api.filmer.wkbdhkmuzv.cfolks.pl/changeUserName/"+session.user.email+"/"+newUserName).then((res) => {
                setLoading(false)
                if(res.data.success === false) {
                    setChangeNameError(res.data.error)
                } else {
                    setSuccess(true)
                    setcheckNm(checkNm+1)
                }
            }) 
        }
    }



   

    if(session && session.user) {
        return (
            <div className="w-full relative">

                <div className="absolute w-full">

                    <div className="container mx-auto px-5 text-black">

                        <div className="bg-white  w-full px-7 py-5 text-3xl font-bold rounded-lg mt-4 overflow-hidden">
                            Witaj <UserName email={session.user.email} checkUsername={checkUsername} checkNm={checkNm} />!
                            <p className="text-lg font-normal">{session.user.email}</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-9 mt-4 mb-9">
                            <div className="bg-white  w-full px-5 py-6 text-xl rounded-lg mt-4">
                                <h2 className="font-bold uppercase text-center">Zmień nazwę</h2>
                                <input className='outline-none px-5 py-2 rounded-full w-full mt-2 placeholder-gray-500' maxlength="25" onChange={(e) => setNewUserName(e.target.value)} value={newUserName} placeholder='Podaj nową nazwę'/>
                                <div className="bg-brand text-white py-2 px-4 rounded-full mt-2 uppercase cursor-pointer text-center sm:hover:opacity-90 font-bold" onClick={() => changeUserName()}>
                                    Zapisz
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
                                        {changeNameError}
                                    </div>
                                    {success ? <>
                                    
                                        <div className="text-lg text-green-600 font-semibold">
                                            Zaaktualizowano nazwę
                                        </div>
                                    
                                    </> : <></>}
                                </div>
                                
                            </div>
                            <div className={`bg-white col-span-2 h-full  w-full  flex-col px-5 py-6 text-xl rounded-lg mt-4 ${typeof isConnected === 'undefined' ? 'flex justify-center items-center' : ''}`}>
                                <div className="grid gap-3 md:grid-cols-2  w-full h-full">
                                    <div className="w-full h-full">
                                        <ConnectUsers email={session.user.email}/>
                                    </div>
                                    <div className="text-sm px-3 w-full flex h-full flex-col pt-3">
                                        <h2 className="font-bold text-xl pb-3">Jak to działa?</h2>
                                        Wpisz email użytkownika z którym chcesz się połączyć, a on niech wpisze Twój. Będziecie mieli wspólną listę filmów.
                                    </div>
                                </div>
                                
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        )
    } else {

        return (
            <div className="w-full relative">

                <div className="absolute w-full">

                    <div className="container mx-auto px-5">

                        <div className="flex mt-10 gap-10 lg:gap-20 flex-col lg:flex-row pt-10 lg:pt-20">
                            <div className="flex gap-3 flex-col lg:w-[370px]">
                                <h1 className="text-4xl lg:text-3xl uppercase font-semibold">Zaloguj się, aby uzyskać dostęp do panelu użytkownika</h1>
                                <div className="py-3">
                                    <LoginWithGoogle/>
                                </div>
                                <a href="/" className="underline">Wróć na stronę główną</a>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        )
    }
   
}

export default User