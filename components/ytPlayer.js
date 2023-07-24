"use client"

const YtPlayer = (params) => {
    return (
        <>
            {window.innerWidth >= 768 ? <>
                <div className="hidden lg:flex">
                    <iframe src={`https://www.youtube.com/embed/${params.id}?showinfo=0&controls=0&autoplay=1&start=20&loop=1&playlist=${params.id}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" className="rounded-2xl w-[600px] h-[250px] lg:h-[300px] hidden lg:flex" allowfullscreen></iframe>
                </div>
            </> : <>
                <div className="lg:hidden w-full">
                    <iframe src={`https://www.youtube.com/embed/${params.id}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" className="rounded-2xl w-full h-[250px]" allowfullscreen></iframe>
                </div>
            </> }
          
          
        
        </>
    )
}

export default YtPlayer