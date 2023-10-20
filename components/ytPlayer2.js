"use client"

import { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import { FaLock, FaPlay } from "react-icons/fa"
import Loading from './loading'
import Image from "next/image"
import { useRef } from 'react'
import { BsFullscreen } from "react-icons/bs"

const YtPlayer2 = (params) => {

    const windowSize = useRef([window.innerWidth, window.innerHeight])

    const [ isPlaying, setIsPlaying ] = useState(true)
    const [ isLoading, setIsLoading ] = useState(true)
    const [ posterHidden, setPosterHidden ] = useState(false)
    const [ videoLoaded, setVideoLoaded ] = useState(false)

    const [ playerWidth, setPlayerWidth ] = useState(300)
    const [ playerHeight, setPlayerHeight ] = useState(170)

    const [ cropSize, setCropSize ] = useState(20)

    const [ playerLoading, setPlayerLoading ] = useState(true)

    const [ shown, setShonw ] = useState(false)

    const [ videoElement, setVideoElement ] = useState({})

   useEffect(() => {
    if(windowSize.current[0]>1400) {
        setPlayerWidth(1200)
        setPlayerHeight(600)

        setCropSize(75)
    } else if(windowSize.current[0]>1000) {
        setPlayerWidth(900)
        setPlayerHeight(450)
        setCropSize(60)
    }
    else if(windowSize.current[0]>350) {
        setPlayerWidth("100%")
        setPlayerHeight(270)
        setCropSize(60)
    }
    else {
        setPlayerWidth("100%")
        setPlayerHeight(250)
        setCropSize(60)
    }
    setPlayerLoading(false)
   }, )


  


    if(params.id==="") {
         var time = 4000
    } else {
        var time = 10000
    }

    const opts = {
        height: playerHeight,
        width: playerWidth,
        playerVars: {
          autoplay: 0,
          controls: 0,
          autohide: 1,
          showinfo: 0,
          wmode: 'opaque',
          rel: 0,
          start: 5
        }
    }
   
    const _onReady = (event) => {
        setVideoElement(event)
        setIsLoading(false)
        setIsPlaying(false)

        
      }

      function showWindow() {
        videoElement.target.stopVideo()
        setPosterHidden(false)
        setShonw(true)
       }

       function showWindow2() {
        videoElement.target.stopVideo()
        setPosterHidden(false)
        setShonw(true)
       }

      function hidePlayIcon() {
        setIsLoading(false)
        setPosterHidden(true)
      }

      function playVideo() {
        videoElement.target.playVideo()
        
        setIsPlaying(true)
        setIsLoading(true)

        
        setTimeout(hidePlayIcon, 200)
        setTimeout(showWindow, time)
        
      }

 

    return (
        <>
            
            {playerLoading ? <>
            
            
                <img src="https://filmersi.pl/loading.svg" className='w-[75px]'/>
            
            
            
            </> : <>
            
            
            <div className="flex relative w-full sm:w-auto rounded-2xl overflow-hidden bg-[#000]">
                    <YouTube videoId={params.id !== "" ? params.id : "eOrNdBpGMv8"} onReady={_onReady} opts={opts} className={`rounded-2xl ${playerWidth === "100%" ? `w-full` : `w-[${playerWidth}px]`} lg:h-[${playerHeight}px] "`}/>
                    <div className={`bg-[#000] absolute top-0 left-0 w-full h-[${cropSize}px] z-[3]`}>

                    </div>
                    <div className={`bg-[#000] absolute bottom-0 left-0 w-full h-[${cropSize}px] z-[3]`}>

                    </div>
                    {posterHidden ? <>
                    
                        <div className={`bg-brand h-[30px] absolute bottom-0 left-0 w-full flex justify-center items-center z-[3]`}>
                            <div onClick={() => showWindow2()} className='h-[6px] bg-[#dbdbdb] mx-[20px] w-full rounded-full cursor-pointer hover:bg-[#c4c4c4] transition'>

                            </div>
                            <div onClick={() => showWindow2()} className='mr-[25px] cursor-pointer hover:opacity-50 transition'>
                                <BsFullscreen/>
                            </div>
                        </div>
                    
                    </> : <></>}

                 
                   
                    {!posterHidden && params.plakat2!=="" ? <img src={params.plakat2} className='h-full object-cover md:w-[100%] absolute bottom-0 left-0'/> : <></>}
                    <div className='w-full h-full absolute bottom-0 left-0'>
                        <div className='flex w-full h-full items-center justify-center text-4xl'>
                            {isPlaying ? <>
                                
                            
                            </> : <>
                                <div onClick={() => playVideo()} className='bg-black w-[75px] h-[75px] rounded-full flex justify-center cursor-pointer items-center hover:bg-brand transition'>
                                    <FaPlay className='ml-2'/>
                                </div>
                            </>}
                            {isLoading ? <>
                                 <div className='bg-black w-[75px] h-[75px] rounded-full flex justify-center cursor-pointer items-center'>
                                        <img src="https://filmersi.pl/loading.svg" className='w-[75px]'/>
                                    </div>
                            
                                </> : <>
                                 
                                </>}
                        </div>
                    </div>
                </div>

            
            
            
            
            </>}


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
          
          
          
        
        </>
    )
}

export default YtPlayer2