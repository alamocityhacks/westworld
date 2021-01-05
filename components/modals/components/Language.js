export default function Language({
    initial,
    language,
    featured,
}) {
    return (
        <div className={`uppercase font-rubik font-bold text-lg md:text-3xl ${featured ? 'text-yellow-400' : 'text-black'}`}>
            <div>
                {initial}
                <div className={`inline ml-4 ${featured ? 'opacity-60' : 'opacity-25'}`}>
                    {language}
                </div>
            </div>
        </div>
    )
}