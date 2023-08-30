"use client"

import LoginWithGoogle from "@/components/elements/loginWithGoogle"
import { useSession } from "next-auth/react"
import { useState } from "react"
import AddPostInput from "@/components/posts/addPost"

const AddPost = () => {

    const { data: session } = useSession()

  

    if(session && session.user) {
        return (
            <div className="w-full relative">

                <div className="absolute w-full">

                    <div className="container mx-auto px-5 mt-5">
                        <div className="text-2xl font-bold uppercase">
                            Dodaj post
                        </div>
                        <AddPostInput email={session.user.email} />

                    </div>

                </div>

            </div>

        )} else {

            return (
                <div className="w-full relative">

                    <div className="absolute w-full">

                        <div className="container mx-auto px-5">
                        
                            <div className="my-16 text-xl uppercase flex gap-4 flex-col items-center justify-center">
                                <div className="font-semibold">Zaloguj się, aby dodać post</div>
                                <LoginWithGoogle/>
                            </div>

                        </div>

                    </div>

                </div>
            )

        }
}

export default AddPost