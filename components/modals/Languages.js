import Language from "./components/Language"

const languages = [
    { initial: "js", language: "javascript", featured: true },
    { initial: "h", language: "haskell" },
    { initial: "c", language: "c, c#, c++" },
    { initial: "j", language: "java" },
    { initial: "s", language: "swift", featured: true },
    { initial: "p", language: "python", featured: true },
    { initial: "p", language: "perl" },
    { initial: "g", language: "go" },
    { initial: "r", language: "rust" },
]

export default function LanguagesModal() {
    return (
        <div className="p-8">
            <h1 className="font-rubik font-bold text-5xl outline-text">
                Acceptable Languages
            </h1>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row gap-2 md:gap-12">
                {languages.map(({initial, language, featured}) => (
                    <Language initial={initial} language={language} featured={featured} />
                ))}
            </div>
            <p className="mt-2 md:mt-8 text-sm font-inter">If you don't know any of these, then the <span className="text-yellow-500">gold</span> languages are languages you should learn. Choose <em>one</em> and learn it! CodeAcademy is a good place to start.</p>
        </div>
    )
}