import Link from "next/link"

const DataWindow = (props) => {
    return (
        <div className="rounded-xl overflow-hidden">
            <div className="uppercase bg-brand px-4 py-2 text-2xl font-bold">
                <h2>{props.name}</h2>
            </div>
            <div className="bg-white px-4 py-2 flex gap-3 flex-wrap">
                {
                    props.data.map((element) => (
                        <Link href={`/${props.typ === "Film" ? "filmy" : ""}${props.typ === "Serial" ? "seriale" : ""}/${props.name === "Gatunek" ? "gatunek" : ""}${props.name === "Kraj produkcji" ? "kraj" : ""}/${element.url}`} className="bg-black px-4 py-1 text-lg font-bold uppercase rounded-full">
                            {element.nazwa}
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export default DataWindow