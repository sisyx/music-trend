import ContactMain from "../../components/contact/ContactMain";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import SmallContact from "../../components/contact/SmallContact";
import AnimatedBackground2 from "../../components/AnimatedBackground2";

function Contact() {
    return ( 
        <>
            <AnimatedBackground2 bg="#f3f4f6" fixed={true} />
            <Navbar />
            <ContactMain />
            <SmallContact />
            <Footer />
        </>
     );
}

export default Contact;