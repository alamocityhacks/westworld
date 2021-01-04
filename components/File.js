export default function File({
    name,
    href,
}) {
    return (
        <a href={href} className="mt-8 link flex flex-row sm:w-4/5 lg:w-3/4 xl:w-3/4">
            <div className="text-white ">
                <svg className="w-filesvg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            </div>
            <div className="ml-4 pt-1 font-rubik text-white opacity-60 text-3xl uppercase">
                <h1>{name}</h1>
            </div>
        </a>
    )
}