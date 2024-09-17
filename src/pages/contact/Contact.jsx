import ContactMain from "../../components/contact/ContactMain";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"
import SmallContact from "../../components/contact/SmallContact";

function Contact() {
    return ( 
        <>
            <Navbar />
            <ContactMain />
            <SmallContact />
            <Footer />
        </>
     );
}

export default Contact;