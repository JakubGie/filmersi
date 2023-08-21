import Image from "next/image"

const BgImage = (params) => {
    return (
        <div className={`absolute w-full darker-bg overflow-hidden ${params.type === "hideOnMobile" ? "opacity-0 sm:opacity-100" : ""}`}>

          <div className="h-[400px] relative ">
            {params.url !== "" ? <img src={params.url.replace('original', 'w1280')} alt="Tło strony" layout="fill" objectFit="cover" className="h-full md:h-auto md:w-full object-cover absolute object-center"/> : <></>}
            
            <div className="image-gradient absolute w-full h-full">
               
            </div>
            <div className="darker-bg absolute w-full h-full">
              
              </div>
          </div>

        </div>
    )
}

export default BgImage