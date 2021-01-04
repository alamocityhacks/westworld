export default function Event({
    justify,
    heading,
    subheading,
    children
}) {
    const description = children;
    return (
        <div className={`${justify === 'right' ? 'justify-self-end text-right' : 'justify-self-start'} w-4/5 my-12`}>
            <div className="font-rubik font-bold uppercase text-4xl text-white">{heading}
                <div className="ml-2 font-rubik font-normal inline uppercase text-4xl text-white opacity-60">{subheading}</div>
            </div>
            <p className={`font-open-sans font-light text-lg w-4/5 ${justify === 'right' ? 'float-right' : 'float-left'}`}>{description}
                <a href="/register" className="ml-1 specialred inline-block font-semibold">Register.</a>
            </p>
        </div>
    )
}