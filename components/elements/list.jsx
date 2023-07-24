import Image from "next/image"
import { FaLock, FaMobileAlt } from "react-icons/fa"
import Link from "next/link"

const List = (params) => {
    return (
        <Link href={ params.locked ? "/aplikacja" : "/filmy/temat/"+params.href } className="bg-white h-16 rounded-xl relative overflow-hidden flex hover:brightness-75 transition">
            <Image src={params.image} alt={`Filmy o temacie ${params.nazwa}`}  layout="fill" objectFit="cover"/>
            <div class="singleList absolute flex w-full h-full justify-center items-center flex-col gap-1">
                <p className="uppercase leading-3 text-sm">{params.type}</p>
                <h3 className="font-bold text-2xl uppercase leading-5">{params.nazwa}</h3>
            </div>
            {params.locked ? <div className="lockedList absolute flex w-full h-full text-3xl items-center pl-5">
                <FaLock className="text-brand"/> <FaMobileAlt/>
            </div> : <></>}
        </Link>
    )
}

export default List