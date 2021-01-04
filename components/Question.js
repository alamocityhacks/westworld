export default function Question({
    question,
    answer,
}) {
    return (
        <div className="link">
            <div className="pointer-events-none text-2xl text-white font-rubik font-medium uppercase">
                {question}
                <div className="inline ml-1 opacity-60 font-normal">
                    {answer}
                </div>
            </div>
        </div>
    )
}