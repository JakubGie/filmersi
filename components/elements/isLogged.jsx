"use client"

import { useSession } from "next-auth/react"
import ConnectedInfo from "./user/connectedInfo"

const IsLogged = () => {
    const { data: session } = useSession()

    if(session && session.user) {
       return (
        <ConnectedInfo email={session.user.email} /> 
       )
    }
}

export default IsLogged