"use client"

const YtPlayer2 = (params) => {
    return (
        <>
            {window.innerWidth >= 768 ? <>
                <div className="hidden lg:flex relative rounded-2xl overflow-hidden bg-[#000]">
                    <iframe src={`https://www.youtube.com/embed/${params.id}?showinfo=0&rel=0&controls=0&autoplay=1&start=20&loop=1&playlist=${params.id}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" className="rounded-2xl w-[600px] h-[250px] lg:h-[300px] hidden lg:flex" allowfullscreen></iframe>
                    <div className="bg-[#000] absolute top-0 left-0 w-full h-[60px]">

                    </div>
                    <div className="bg-[#000] absolute bottom-0 left-0 w-full h-[60px]">

                    </div>
                </div>
            </> : <>
                <div className="lg:hidden w-full relative rounded-2xl overflow-hidden bg-[#000]">
                    <iframe src={`https://www.youtube.com/embed/${params.id}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" className="rounded-2xl w-full h-[250px]" allowfullscreen></iframe>
                    <div className="bg-[#000] absolute top-0 left-0 w-full h-[60px]">

                    </div>
                    <div className="bg-[#000] absolute bottom-0 left-0 w-full h-[60px]">

                    </div>
                </div>
            </> }
          
          
        
        </>
    )
}

export default YtPlayer2