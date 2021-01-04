export default function Profile({
    src,
    name,
    position,
    shortdescription,
    children,
    username,
    extraclasses,
}) {
    const description = children;
    return (
        <a href={`mailto:${username}@alamocityhacks.com`} className={`flex flex-row space-x-4 blacklink ${extraclasses}`}>
            <div className="pointer-events-none max-w-profile-sm lg:max-w-none lg:min-w-profile">
                <img className="object-fill w-80" src={`/memoji/${src}`} alt={`${name} Memoji`} />
            </div>
            <div className="font-inter pt-2 md:pt-0 lg:pt-6 pointer-events-none">
                <div className="font-semibold text-black text-2xl">{name}</div>
                <div className="font-semibold text-black opacity-50 text-xl">{position}</div>
                <div className="md:hidden text-sm w-4/5">{shortdescription}</div>
                <div className="hidden md:block text-sm w-4/5 mt-2">{description}</div>
            </div>
        </a>
    )
}