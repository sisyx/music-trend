import AnimatedBackground2 from "../../components/AnimatedBackground2";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import AboutUsMain from "../../components/aboutus/AboutUsMain";
import SmallContact from "../../components/contact/SmallContact";

function AboutUsPage() {
    return ( 
        <>
        <AnimatedBackground2 bg="#f3f4f6" fixed={true} />
        <Navbar />
        <AboutUsMain />
        <SmallContact />
        <Footer />
        </>
     );
}

export default AboutUsPage;