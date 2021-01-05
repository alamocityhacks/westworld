import Profile from "./components/Profile";

export default function ContactModal() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 auto-rows-auto w-4/5 mx-auto md:w-full my-4 gap-4 md:px-4 md:my-5 justify-items-stretch place-content-center">
            <Profile extraclasses="transition duration-150 ease-in-out transform md:hover:translate-x-2 hover:scale-105" src="SarthakMemoji.png" name="Sarthak Mohanty" username="sarthak" position="Director of Creativity" shortdescription="Tech and Design">
                Howdy! I’m an ambitious high school senior with a passion for creating things. Contact me about anything tech or design related.
            </Profile>
            <Profile extraclasses="transition duration-150 ease-in-out transform md:hover:-translate-x-2 hover:scale-105" src="ChristinaMemoji.png" name="Seoyun Christina Kim" username="christina" position="Director of Hype" shortdescription="PR and Outreach">
                Hey! I’m an eager high school junior ready to change the world. Contact me about anything related to sponsoring us or spreading the word!
            </Profile>
            <Profile extraclasses="transition duration-150 ease-in-out transform md:hover:translate-x-2 hover:scale-105" src="EileenMemoji.png" name="Eileen Dong" username="eileen" position="Director of Swag" shortdescription="Event Management (Food, Stickers, Awards)">
                Hey! I’m an determined high school junior with a love for cooking and gaming. Contact me about anything related to food, stickers, t-shirts, venue, or prizes!
            </Profile>
            <Profile extraclasses="transition duration-150 ease-in-out transform md:hover:-translate-x-2 hover:scale-105" src="VenkataMemoji.png" name="Venkata Pullabhotla" username="venkata" position="Director of Cash" shortdescription="Sponsorships and Finance">
                Hey! I’m the 5th best chess player in San Antonio and a driven high school junior. Contact me about anything related to sponsoring us or about how we spend our sponsorship money.
            </Profile>
        </div>
    )
}