import Footer from "../../components/Footer";
import Aboutus from "../../components/home/Aboutus";
import Chart from "../../components/home/Chart";
import XCards from "../../components/home/XCards";
import Navbar from "../../components/Navbar";
import Wave from "../../components/Wave";

function Home() {
    return ( 
        <div>
        <Navbar />
        {/* <div className="h-screen"></div> */}
        <XCards />
        <Wave topcolor="white" bottomcolor="#f3f4f6" rotate={true} height="150px" />
        <Aboutus />
        {/* <Chart /> */}
        <Wave topcolor="#f3f4f6" bottomcolor="#111827" styles={{boxShadow: "0 0 5px black"}}/>
        <Footer />
        </div>
     );
}

export default Home;