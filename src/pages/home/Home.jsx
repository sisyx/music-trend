import Footer from "../../components/Footer";
import HomeAbout from "../../components/home/HomeAbout";
// import Chart from "../../components/home/Chart";
import HomeCommonQues from "../../components/home/HomeCommonQues";
import HomeDifferentBolgs from "../../components/home/HomeDifferentBolgs";
import HomeLand from "../../components/home/HomeLand";
import HomeTags from "../../components/home/HomeTags";
import MoreExplanations from "../../components/home/MoreExplanations";
import Navbar from "../../components/Navbar";
import SmallContact from "../../components/contact/SmallContact";
import SideNav from "../../components/home/SideNav";

function Home() {
    return ( 
        <div>
        <Navbar />
        <SideNav />
        {/* <Wave topcolor="#2da5dc" bottomcolor="#fff" className="mt-12" />
        <XCards />
        <Wave topcolor="white" bottomcolor="#f3f4f6" rotate={true} height="150px" /> */}
        <HomeLand />
        <HomeTags />
        <HomeDifferentBolgs />
        <HomeAbout />
        <MoreExplanations />
        <HomeCommonQues />
        <SmallContact />
        {/* <Wave topcolor="#f3f4f6" bottomcolor="#fff" rotate={true} styles={{boxShadow: "0 0 5px black"}}/> */}
        {/* <Chart /> */}
        {/* <HomeTimeline />
        <Separator topcolor="#fff" bottomcolor="#0000" reverse="true" />
        <NoBg />
        <Separator topcolor="#0000" bottomcolor="#5e298e" />
        <HomeChart />
        <Wave topcolor="#5e298e" bottomcolor="#111827" styles={{boxShadow: "0 0 5px black"}}/>
        <TsParticles options={configs4} /> */}
        <Footer />
        </div>
     );
}

export default Home;