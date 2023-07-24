import Image from "next/image"

const NotFound = () => {
    return (
        <div className="rounded-lg font-normal items-center justify-center flex py-1 normal-case flex gap-2">
            Nie znaleziono 
            <div className="w-[23px] h-[23px] shrink-0  relative content-between bg-none">
                <Image
                    alt={`smutne emoji`}
                    src={'/sadEmoji.png'}
                    layout='fill'
                    objectFit='contain'
                />
            </div>
        </div>
    )
}

export default NotFound