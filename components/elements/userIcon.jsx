"use client"

import { useSession } from "next-auth/react"
import { FaUserAlt } from "react-icons/fa"
import Link from "next/link"

const UserIcon = (params) => {
    const { data: session } = useSession()

   
      if(session && session.user) {
        if(params.type==="pc") {
            return (
                <Link href="/user" className="h-[28px] rounded-full flex justify-center items-center text-xl"><FaUserAlt/></Link>
            )
        } else {
            return (
                <Link onClick={() => params.setNavShown(false)} href="/user"  className="bg-white text-black  text-xl font-bold rounded flex justify-center py-2 w-full items-center gap-2 transition"><FaUserAlt/> Użytkownik</Link>
            )
        }
       
      }
}

export default UserIcon