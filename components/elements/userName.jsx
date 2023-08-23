"use client"

import { useState, useEffect } from "react"
import axios from "axios"

const UserName = (params) => {
    const [ userName, setUserName ] = useState()
    
    useEffect(() => {
        console.log(params.email)
        axios.get("https://api.filmer.wkbdhkmuzv.cfolks.pl/checkUsername/"+params.email).then((res) => {
            setUserName(res.data.userName)
        }) 
       
    }, [params.checkNm])
    
    return (
        <>{typeof userName !== undefined ? <>{userName}</> : <></>}</>
    )
}

export default UserName