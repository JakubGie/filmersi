const HeaderWithText = (props) => {
    return (
        <div className="flex gap-3 flex-col  pt-10 lg:pt-20 mb-6 lg:mb-12">
            <h1 className={`uppercase font-semibold ${props.small ? "text-2xl lg:text-3xl " : "text-3xl lg:text-5xl"}`}>{props.header}</h1>
            <p className="text-lg font-light">{props.description}</p>
        </div>
    )
}

export default HeaderWithText