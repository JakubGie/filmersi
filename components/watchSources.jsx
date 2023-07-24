"use client"

import { useEffect, useState } from "react"
import WatchProviderWindow from "./watchProviderWindow"
import Image from "next/image"
import NotFound from "./elements/notFound"

const WatchSources = (props) => {

        const [ watchSrcs, setWatchSrcs ] = useState()

       useEffect(() => {
            if(props.tmdbid===0) {
                setWatchSrcs(undefined)
            } else {
                fetch('https://api.themoviedb.org/3/'+props.typ+'/'+props.tmdbid+'/watch/providers?api_key=87c38cb6617e1d815dae3d418030b236').then((res) => {
                    return res.json()
                }).then((data) => {
                    if(data.results.PL !== undefined) {
                        setWatchSrcs(data.results.PL)
                    } else {
                        setWatchSrcs('undefined')
                    }
                   
                })
            }
        
           
        
           
       }, [])
      


    return (
        <>

          
            {watchSrcs !== undefined ? <>

                <div className="bg-red-600 rounded-lg font-semibold items-center justify-center flex py-1 uppercase">
                    <h2>Stream</h2>
                </div>
            
                { typeof watchSrcs === 'undefined' ? <>

                <NotFound/>

                </> : <>

                    {typeof watchSrcs.flatrate === 'undefined' ? <>

                        <NotFound/>

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

                    </> : <>
                    
                        {watchSrcs.buy.map((watchProvider) => (
                            
                            <WatchProviderWindow logo_path={watchProvider.logo_path} provider_name={watchProvider.provider_name}/>
                        ))}

                    </>}

                </> }



            
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