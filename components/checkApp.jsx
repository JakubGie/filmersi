import Link from 'next/link'

import { FaLock, FaMobileAlt, FaDownload } from "react-icons/fa"

const CheckApp = (params) => {
    return (
        <div className="flex flex-col items-center justify-center uppercase py-10 gap-4">
            <div className="flex gap-2 align-center justify-center text-xl">
                <div className="flex gap-1 text-2xl">
                    <FaLock className="text-brand"/> <FaMobileAlt/>
                </div>
                <div>
                    {params.version === 1 ? <>
                        <b>Wszystkie listy</b> są dostępne w naszej <Link href="/aplikacja" className="font-bold">darmowej aplikacj</Link>:
                    </> : <></>}

                    {params.version === 2 ? <>
                        <b>Pełne listy</b> są dostępne w naszej <Link href="/aplikacja" className="font-bold">darmowej aplikacj</Link>:
                    </> : <></>}

                </div>
            </div>
            <Link href="/aplikacja" className='bg-white text-brand flex gap-3 px-6 rounded-full font-bold h-12 text-xl items-center hover:bg-brand hover:text-white transition'>
                <FaDownload/> Pobierz aplikację
            </Link>
            
        </div>
    )
}

export default CheckApp