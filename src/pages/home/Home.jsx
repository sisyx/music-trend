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
import AnimatedBackground2 from "../../components/AnimatedBackground2";
import { useEffect } from "react";
import { setTitle } from "../../functions";

function Home() {

    useEffect(() => {
        setTitle("خانه");
    })

    return ( 
        <div className="relative">
        <AnimatedBackground2 bg="#fff" fixed={true} />
        <Navbar />
        <SideNav />
        <HomeLand />
        <HomeTags />
        <HomeDifferentBolgs />
        <HomeAbout />
        <MoreExplanations />
        <HomeCommonQues />
        <SmallContact />
        <Footer />
        </div>
     );
}

export default Home;