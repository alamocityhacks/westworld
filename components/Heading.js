export default function Heading({
    heading,
    subheading,
}) {
    return (
        <div className="w-3/4 tracking-widest">
            <h1 className="font-rubik font-bold text-5xl text-white uppercase mb-2">{heading}</h1>
            <h2 className="font-lato italic uppercase text-3xl">{subheading}</h2>
        </div>
    )
}
