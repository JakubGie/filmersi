"use client"

import { useEffect, useState } from "react"
import WatchProviderWindow from "./watchProviderWindow"
import Image from "next/image"
import NotFound from "./elements/notFound"

import { FaPlay } from "react-icons/fa";

const WatchSources = (props) => {

        const [ watchSrcs, setWatchSrcs ] = useState()
        const [ afiSources, setAfiSources ] = useState()

       useEffect(() => {
            if(props.tmdbid===0) {
                setWatchSrcs(undefined)
            } else {
                fetch('https://api.themoviedb.org/3/'+props.typ+'/'+props.tmdbid+'/watch/providers?api_key=87c38cb6617e1d815dae3d418030b236').then((res) => {
                    return res.json()
                }).then((data) => {
                    if(data.results.PL !== undefined) {
                        setWatchSrcs(data.results.PL)
                        if(typeof data.results.PL.flatrate === 'undefined'){
                            setAfiSources('undefined')
                        } else {
                            data.results.PL.flatrate.map((source) => {
                                if(source.provider_name === "HBO Max") {
                                    setAfiSources("https://myclick-5.com/p/EkRa/j3Jq/IFPq")
                                }

                                else if(source.provider_name === "Player") {
                                    setAfiSources("https://wclick.pl/enc/MTc4OTA2LjE0OTQ1ODk%3D")
                                }  
                                
                                else if(source.provider_name === "Amazon Prime Video") {
                                    setAfiSources("https://www.amazon.pl/wyprobujprime?tag=filmer01-21")
                                }

                                  
                                else if(source.provider_name === "Amazon Video") {
                                    setAfiSources("https://www.amazon.pl/wyprobujprime?tag=filmer01-21")
                                }
                            
                                else {
                                    setAfiSources("undefined")
                                }
                        })
                        }
                    } else {
                        setWatchSrcs('undefined')
                        setAfiSources('undefined')
                    }
                   
                })
            }
        
           
        
           
       }, [])
      


    return (
        <>

          
            {watchSrcs !== undefined && afiSources !== undefined ? <>

                {afiSources === "undefined" ? <>
                
                
                <div className="bg-red-600 rounded-lg font-semibold items-center justify-center flex py-1 uppercase">
                    <h2>Stream</h2>
                </div>
            
                { typeof watchSrcs === 'undefined' ? <>

                <NotFound/>
                

                </> : <>

                    {typeof watchSrcs.flatrate === 'undefined' ? <>

                        <NotFound/>

                        <a href="https://redirecting5.eu/p/EkRa/PWNX/9E4j?dl=Ug84kYRa&ld=6323" rel="nofollow" className="bg-green-700 text-white flex justify-center  font-semibold min-h-[65px] rounded-lg items-center px-2 hover:hover:brightness-90">
                            <div className="flex items-center flex-row text-xl justify-center gap-4 px-3">
                                <FaPlay/> Sprawdź w Find Vod
                            </div>
                        </a>

                    </> : <>
                    
                        {watchSrcs.flatrate.map((watchProvider) => (
                            
                            <WatchProviderWindow logo_path={watchProvider.logo_path} provider_name={watchProvider.provider_name}/>
                        ))}
                
                    </>}

                </> }


                <div className="bg-red-600 rounded-lg font-semibold items-center justify-center flex py-1 uppercase">
                    <h2>Wypożycz</h2>
                </div>

                { typeof watchSrcs === 'undefined' ? <>

                <NotFound/>
                

                </> : <>

                    {typeof watchSrcs.rent === 'undefined' ? <>

                        <NotFound/>

                        <a href="https://redirecting5.eu/p/EkRa/PWNX/9E4j?dl=Ug84kYRa&ld=6323" rel="nofollow" className="bg-green-700 text-white flex justify-center  font-semibold min-h-[65px] rounded-lg items-center px-2 hover:hover:brightness-90">
                            <div className="flex items-center flex-row text-xl justify-center gap-4 px-3">
                                <FaPlay/> Sprawdź w Find Vod
                            </div>
                        </a>

                    </> : <>
                    
                        {watchSrcs.rent.map((watchProvider) => (
                            
                            <WatchProviderWindow logo_path={watchProvider.logo_path} provider_name={watchProvider.provider_name}/>
                        ))}
                
                    </>}

                </> }


                <div className="bg-red-600 rounded-lg font-semibold items-center justify-center flex py-1 uppercase">
                    <h2>Kup</h2>
                </div>

                { typeof watchSrcs === 'undefined' ? <>

                <NotFound/>

                </> : <>

                    {typeof watchSrcs.buy === 'undefined' ? <>

                        <NotFound/>

                        <a href="https://redirecting5.eu/p/EkRa/PWNX/9E4j?dl=Ug84kYRa&ld=6323" rel="nofollow" className="bg-green-700 text-white flex justify-center  font-semibold min-h-[65px] rounded-lg items-center px-2 hover:hover:brightness-90">
                            <div className="flex items-center flex-row text-xl justify-center gap-4 px-3">
                                <FaPlay/> Sprawdź w Find Vod
                            </div>
                        </a>

                    </> : <>
                    
                        {watchSrcs.buy.map((watchProvider) => (
                            
                            <WatchProviderWindow logo_path={watchProvider.logo_path} provider_name={watchProvider.provider_name}/>
                        ))}

                    </>}

                </> }


                
                </> : <>
                
                
                    <div className="bg-red-600 rounded-lg font-semibold items-center justify-center flex py-1 uppercase">
                        <h2>Stream</h2>
                    </div>

                    <a href={afiSources} rel="nofollow" className="bg-green-700 text-white flex justify-center  font-semibold min-h-[65px] rounded-lg items-center px-2 hover:hover:brightness-90">
                        <div className="flex items-center flex-row text-xl justify-center gap-4 px-3">
                           <FaPlay/> Zarejestruj się{afiSources==="https://www.amazon.pl/wyprobujprime?tag=filmer01-21" ? " za darmo" : ""},<br/>aby oglądać
                        </div>
                    </a>


                
                </>}

               



            
            </> : <>
            
                    <div className="w-full flex justify-center mt-[10px]">
                        <div className="w-[50px] h-[50px] shrink-0  relative content-between bg-none">
                            <Image
                                alt={`Ładowanie`}
                                src={'/loading.svg'}
                                layout='fill'
                                objectFit='contain'
                            />
                        </div>
                    </div>

            </>}
        </>
    )
}

export default WatchSources