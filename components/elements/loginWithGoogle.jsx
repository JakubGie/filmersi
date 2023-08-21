'use client'

import { signIn, signOut, useSession } from "next-auth/react"

const LoginWithGoogle = (params) => {
    const { data: session } = useSession();

    if(session && session.user) {
        return (
            <>
                {params.device === "pc" ? <>
                
                <button onClick={() => signOut()} className="bg-white text-black w-[520px] xl:w-[480px] text-sm rounded flex justify-center items-center gap-2 hover:opacity-[80%] transition">
                    <img src="/google-logo.png" className="w-[17px]" alt="Zaloguj się przez Google"/> Wyloguj się
                </button>

                </> : <>
                    <button onClick={() => signOut()} className="bg-white text-black  text-xl text rounded flex justify-center py-3 items-center gap-2 transition">
                        <img src="/google-logo.png" className="w-[20px]" alt="Zaloguj się przez Google"/> Wyloguj się
                    </button>
                </>}
            </>
        )
    } else {
        return (
            <>
                {params.version === 1 ? <>
                
                
                    {params.device === "pc" ? <>
                
                        <button onClick={() => signIn('google')} className="bg-white text-black w-[520px] xl:w-[480px] text-sm rounded flex justify-center items-center gap-2 hover:opacity-[80%] transition">
                            <img src="/google-logo.png" className="w-[17px]" alt="Zaloguj się przez Google"/> Zaloguj się przez Google
                        </button>
                        
                        </> : <>
                        
                        <button onClick={() => signIn('google')} className="bg-white text-black  text-xl text rounded flex justify-center py-3 items-center gap-2 transition">
                            <img src="/google-logo.png" className="w-[25px]" alt="Zaloguj się przez Google"/> Zaloguj się
                        </button>
                        
                        </>}
                
                </> : <>
                
                    <button onClick={() => signIn('google')} className="bg-white text-black w-[260px] sm:w-[330px] text-sm sm:text-xl py-3 sm:py-2 rounded flex justify-center items-center gap-3 hover:opacity-[80%] transition">
                        <img src="/google-logo.png" className="w-[25px] sm:w-[30px]" alt="Zaloguj się przez Google"/> Zaloguj się przez Google
                    </button>
                    
                </>}
              
            </>
        )
       
    }
}

export default LoginWithGoogle