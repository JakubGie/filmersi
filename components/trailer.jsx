const Trailer = (props) => {
    return (
        <iframe src={`https://www.youtube.com/embed/${props.id}`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" className="rounded-2xl w-full mt-8 h-48 sm:h-[300px] lg:h-[350px]" allowfullscreen></iframe>
    )
}

export default Trailer