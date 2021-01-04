import Head from '../components/Head'
import Nav from '../components/Nav'
import Arrow from '../components/Arrow'
import Event from '../components/Event'
import Heading from '../components/Heading'
import Question from '../components/Question'
import File from '../components/File'
import Footer from '../components/Footer'
import Modal from '../lib/modal'

const splashText = [
  `this isn't your typical hackathon`,
  `learn and compete in a head to head battle`,
  `the futuristic amusement park`,
]

export default function Home() {
  return (
    <>
      <div id="modal-root"></div>
      <Head />
      <Nav />
      <div id="hero" className="mt-24 text-center">
        <img src="/WestWorld.svg" className="pointer-events-none" />
        <p className="lowercase my-8 md:my-12 font-lato font-bold text-white text-xl md:text-4xl">{ splashText[Math.floor(Math.random() * splashText.length) + 1] ?? `this isn't your typical hackathon` }</p>
        <a href="/register" className="lowercase py-2 px-4 font-bold bg-white rounded-lg text-lg md:text-xl shadow-md">Sign up</a>
      </div>
      <Arrow mt={24}/>
      <div id="events" className="section grid grid-cols-1 auto-rows-auto">
        <Event heading="Dinner games." subheading="Play fun games with friends at the dinner table.">We’ll have burritos, pizza, and drinks at 8pm while playing all the same games you loved during quarantine.<br />Wanna compete?</Event>
        <Event justify="right"  heading="After dark." subheading="An informative session for each challenge.">We’ll have chips and dip while we walkthrough each and every challenge so you can walk away with knowledge in whatever language you started with.<br />Interested?</Event>
        <Event heading="Late night." subheading="A fun hangout at midnight.">We’ll have chocolate chip cookies, oreos, and milk at midnight while hanging out in the cube.<br />Sound fun?</Event>
      </div>
      <Arrow />
      <div id="faq" className="section grid grid-cols-1 auto-rows-auto gap-10">
        <Heading heading="Quick answers to quick questions." subheading="(so we don't get in trouble)" />
        <Question link={false} question="What ages?" answer="Incoming High School freshmen (that’s 13yo) to High School seniors (that’s 19yo).">
        </Question>
        <Question link={false} question="Is this like SoHacks?" answer="In every way except you won’t create your own project. you’ll be competing.">
        </Question>
        <Question link={false} question="Anything I should bring?" answer="Pack your computer, your phone, and your sleeping bag (if you plan on sleeping). We’ll provide the goods.">
        </Question>
        <Question link={true} question="Prizes?" answer="Not just any prizes... We’re keeping them secret to maintain the hype! (but AirPods Pro's for your whole team!!)">
          a prizes modal which hasn't been finished yet
        </Question>
        <Question link={true} question="Stickers?" answer="Duh. What kind of event would it be without stickers?">
          a sticker modal which hasn't been finished yet
        </Question>
        <Question link={true} question="Pre-requisites?" answer="While nothing explicit, it’d be good to know a scripting language like javascript or python as that’s what each challenge is based on. This means HTML and CSS won’t work.">
          a language modal that hasn't been finished yet
        </Question>
        <Question link={true} question="So what if I only know HTML and CSS?" answer="Not to worry, we’ll teach you the basics of Javascript to get you started on some of our challenges. It’s up to you to learn the rest!">
          a workshop modal that hasn't been finished yet
        </Question>
        <p className="font-rubik text-sm">Click on a question to view more about it!!</p>
      </div>
      <Arrow mt={20} />
      <div id="sponsors" className="section">
        <Heading heading="Powered By" subheading="(cause we love our sponsors)" />
        <div id="sponsorgrid" className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <img src="stickermule.svg" />
          <img src="replit.svg" />
        </div>
      </div>
      <Arrow mt={12} />
      <div id="legal" className="section">
        <Heading heading="Legal" />
        <File href="/emergencymedicalauthorization.pdf" name="Emergency Medical Authorization Form" />
        <File href="/photorelease.pdf" name="Photo Release Form (optional)" />
      </div>
      <Footer />
    </>
  )
}
