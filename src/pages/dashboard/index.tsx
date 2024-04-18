import AboutUsCard from "@/components/home/AboutUsCard"
import BannerSection from "@/components/home/BannerSection"
import BlogSection from "@/components/home/BlogSection"
import ChurchServiceCard from "@/components/home/ChurchServiceCard"
// import EventCard from "@/components/home/EventCard"
import LivesteamCard from "@/components/home/LivesteamCard"
import { Helmet } from "react-helmet-async"


const Dashboard = () => {

  return (
    <>
      <Helmet>
        <title>GBCC || HOME</title>
        <meta name="description" content="Our mandate is to encourage and empower each person to discover, develop and deploy their uniqueness to the glory of God and benefit of mankind" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gulubcc.org/" />
        <meta property="og:title" content="Home || Gulu Bible CC" />
        <meta property="og:description"
          content="Our mandate is to encourage and empower each person to discover, develop and deploy their uniqueness to the glory of God and benefit of mankind" />
        <meta property="og:image" content="/finalbanner.jpg" />

        <link rel="icon" type="image/svg+xml" href="/logo.png" />
        <link rel="canonical" href="/" />
      </Helmet>
      <main className="mx-0">
        <BannerSection />
        <ChurchServiceCard />
        <AboutUsCard />
        {/* <EventCard /> */}
        <LivesteamCard />
        <BlogSection />
      </main>
    </>
  )
}

export default Dashboard