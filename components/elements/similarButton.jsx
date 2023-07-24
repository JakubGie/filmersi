import Link from "next/link"

const SimilarButton = (props) => {
    return (
        <Link href={`/${props.typ === "Film" ? "film" : "serial"}/${props.url}/podobne`} className="bg-white text-brand flex items-center justify-center px-6 py-3 text-xl rounded-xl font-bold hover:text-black">
            Zobacz {props.typ === "Film" ? "filmy" : "seriale"} podobne do {props.tytul} z {props.rok_produkcji} roku
        </Link>
    )
}

export default SimilarButton