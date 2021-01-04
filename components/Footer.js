import Link from './Link';
import ContactModal from './modals/Contact';

export default function Footer() {
    return (
        <div id="footer" className="mt-32 text-white font-inter font-semibold uppercase text-center">
            <div id="footernav" className="mb-8 flex flex-col md:flex-row space-y-4 md:space-x-12 md:space-y-0 md:w-screen text-xl justify-center items-center">
                <Link name="Press Kit">
                    SOME MODALLL
                </Link>
                <Link name="Sponsor Deck" href="/sponsordeck.pdf" />
                {/* <Link name="More Legal" href="/legal"></Link> */}
                <Link name="Donate">
                    <iframe src="https://bank.hackclub.com/donations/start/alamocityhacks" style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '0.25rem'}}>
                        Your browser doesn't support iframes
                    </iframe>
                </Link>
                <Link name="Contact">
                    <ContactModal />
                </Link>
            </div>
            <h1 className="opacity-60 text-3xl mb-4">copyright alamo city hacks {new Date().getFullYear()} all rights reserved</h1>
        </div>
    )
}