import Link from "next/link"

const FooterLink = (props) => {
    return (
        <Link className="w-full md:w-[30%] bg-white rounded-lg text-black flex items-center px-4 py-2 font-medium hover:text-white hover:bg-brand transition" href={`/caly-film/${props.movieInfo.url}`}>{props.movieInfo.tytul} Cały Film</Link>
    )
}

export default FooterLink