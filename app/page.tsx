import Hero from "./components/Hero"
import About from "./components/About"
import WearYourStory from "./components/WearYourStory"
import TokenomicsSection from "./components/TokenomicsSection"
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import CommunitySection from "./components/CommunitySection"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"
import NewsletterSubscribe from "./components/NewsletterSubscribe"

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WearYourStory />
      <TokenomicsSection />
      <FeatureCarousel />
      <PortfolioGrid />
      <CommunitySection />
      <Timeline />
      <Marquee />
      <ContactForm />
      <NewsletterSubscribe />
    </>
  )
}
