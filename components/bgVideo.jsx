"use client"

const BgVideo= (params) => {

    return (
      
       <>
       
       {window.innerWidth >= 768 ? <>
          
          
          <div className="absolute w-full darker-bg hidden md:block">

          <div className="h-[200px] lg:h-[400px] relative overflow-hidden ">
            {params.url !== "" ? <>
                <iframe src={`https://www.youtube.com/embed/${params.url}?showinfo=0&controls=0&autoplay=1&start=20&loop=1&playlist=${params.url}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" className="rounded-2xl w-full h-[1300px] absolute top-[-500px]  " allowfullscreen></iframe>
            </> : <></>}
            
            <div className="image-gradient absolute w-full h-full">
               
            </div>
            <div className="darker-bg absolute w-full h-full">
              
              </div>
          </div>

        </div>
          
          </> : <></> }
       
       </>
       
    )
}

export default BgVideo