import Link from "./Link";

export default function Footer() {
    return (
        <div id="footer" className="mt-32 text-white font-inter font-semibold uppercase text-center">
            <div id="footernav" className="mb-8 flex flex-col md:flex-row space-y-4 md:space-x-12 md:space-y-0 md:w-screen text-xl justify-center items-center">
                <Link>Press Kit</Link>
                <Link>Sponsor Deck</Link>
                <Link>More Legal</Link>
                <Link>Donate</Link>
                <Link>Contact</Link>
            </div>
            <h1 className="opacity-60 text-3xl mb-4">copyright alamo city hacks {new Date().getFullYear()} all rights reserved</h1>
        </div>
    )
}